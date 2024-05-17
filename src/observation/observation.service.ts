import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observation } from './observation.entity';
import { ObservationInterface } from './interfaces/observation.interface';
import { User } from 'src/users/users.entity';
import { PredictionService } from 'src/prediction/prediction.service';

@Injectable()
export class ObservationService {
  constructor(
    @InjectRepository(Observation) private observationRepository: Repository<Observation>,
    @InjectRepository(User) private userRepository: Repository<User>,
    private predictionService: PredictionService,
) {}

  async get_all(): Promise<Observation[]> {
    return await this.observationRepository.find()
  }

  async get_user(user_id: number): Promise<Observation[]> {
    return await this.observationRepository.find({ where: { user: { id: user_id } } })
  }

  async create(observation_data: ObservationInterface) : Promise<void> {
    const user = await this.userRepository.findOne({ where: { id: observation_data.user_id } });
    const observation = await this.observationRepository.save({
      user: user,
      latitude: observation_data.latitude,
      longitude: observation_data.longitude,
    });
    this.predictionService.create(observation_data.predictions, observation);
  }
}
