import { BadRequestException, Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderInterface } from './interfaces/order.interface';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {}

  async create(order: OrderInterface): Promise<void> {
    try {
      await this.orderRepository.save(order)
    } catch (error) {
      throw new BadRequestException('Отряд с таким именем уже существует');
    }
  }

  // TODO: create_from_csv() {}

  async remove(id: number) {
    await this.orderRepository.delete(id);
  }
}
