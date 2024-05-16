import { Controller, Get, HttpCode, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ObservationService } from './observation.service';
import { AdminOnly } from 'src/auth/auth.decorator';
import { Observation } from './observation.entity';
import { Request } from 'express';

@Controller('observation')
@UseGuards(AuthGuard)
export class ObservationController {
  constructor(private observationService: ObservationService) {}

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
}
