import { Controller, Get, HttpCode, HttpStatus, UseGuards, Req, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ObservationService } from './observation.service';
import { AdminOnly } from 'src/auth/auth.decorator';
import { Observation } from './observation.entity';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { HttpService } from '@nestjs/axios';
import { CreateObservationDto } from './dto/create-observation.dto';
import { Blob } from "buffer";

@Controller('observation')
@UseGuards(AuthGuard)
export class ObservationController {
  constructor(
    private observationService: ObservationService,
    private httpService: HttpService,
  ) {}

  @Get('all')
  @AdminOnly()
  @HttpCode(HttpStatus.OK)
  get_all(): Promise<Observation[]> {
    return this.observationService.get_all();
  }

  @Get()
  @AdminOnly()
  @HttpCode(HttpStatus.OK)
  get_user(@Req() request: Request): Promise<Observation[]> {
    return this.observationService.get_user(request['user'].sub);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('picture'))
  async create_observation(@Req() request: Request, @UploadedFile() file: Express.Multer.File, @Body() createObservationDto: CreateObservationDto) {
    const formData = new FormData();
    formData.append('file', new Blob([file.buffer]), file.originalname);
    const response = await (await fetch('http://127.0.0.1:5000/predict', { 
      method: 'POST', 
      body: formData
    })).json();
    const predictions = new Object;
    for (let index = 0; index < 5; index++) {
      const element = response[index];
      predictions[element[0]] = element[1];
    }
    const payload = {
      user_id: request['user'].sub,
      latitude: createObservationDto.latitude,
      longitude: createObservationDto.longitude,
      predictions: response,
    };
    this.observationService.create(payload);
    return predictions;
  }
}
