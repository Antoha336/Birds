import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Species } from './species.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SpeciesInterface } from './interfaces/species.interface';
import { Order } from 'src/order/order.entity';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species) private speciesRepository: Repository<Species>,
    @InjectRepository(Order) private orderRepository: Repository<Order>
  ) {}

  async create(species: SpeciesInterface, orderId: number): Promise<void> {
    try {
      const order = await this.orderRepository.findOne({ where: { id: orderId } });
      if (order === null) {
        throw new NotFoundException()
      }
      species.order = order;
      await this.speciesRepository.save(species)
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new BadRequestException('Отряда с таким id не существует');
      }
      else {
        throw new BadRequestException('Вид с таким именем уже существует');
      }
    }
  }

  // TODO: create_from_csv() {}

  async remove(id: number) {
    await this.speciesRepository.delete(id);
  }
}
