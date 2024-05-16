import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observation } from './observation.entity';

@Injectable()
export class ObservationService {
  constructor(@InjectRepository(Observation) private observationRepository: Repository<Observation>) {}

  async get_all(): Promise<Observation[]> {
    return await this.observationRepository.find()
  }

  async get_user(user_id: number): Promise<Observation[]> {
    return await this.observationRepository.find({ where: { user: { id: user_id } } })
  }
}
