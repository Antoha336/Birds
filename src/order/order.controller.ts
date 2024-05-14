import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { AdminOnly } from 'src/auth/auth.decorator';

@Controller('order')
@UseGuards(AuthGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  @AdminOnly()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOrderDto: CreateOrderDto): Promise<void> {
    return this.orderService.create(createOrderDto);
  }

  @Delete(':id')
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number): Promise<void> {
    return this.orderService.remove(id);
  }
}
