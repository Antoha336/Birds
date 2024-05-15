import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AdminOnly } from 'src/auth/auth.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { SpeciesService } from './species.service';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { DeleteSpeciesDto } from './dto/delete-species.dto';

@UseGuards(AuthGuard)
@Controller('species')
export class SpeciesController {
  constructor(private speciesService: SpeciesService) {}

  @Post()
  @AdminOnly()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSpeciesDto: CreateSpeciesDto): Promise<void> {
    return this.speciesService.create(createSpeciesDto, createSpeciesDto.orderId);
  }
  
  @Delete(':id')
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') deleteOrderDto: DeleteSpeciesDto): Promise<void> {
    return this.speciesService.remove(deleteOrderDto.id);
  }
}