import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prediction } from './prediction.entity';
import { Species } from 'src/species/species.entity';

@Injectable()
export class PredictionService {
  constructor(
    @InjectRepository(Prediction) private predictionRepository: Repository<Prediction>,
    @InjectRepository(Species) private speciesRepository: Repository<Species>,
  ) {}

  async create(predictions, observation) : Promise<void> {
    console.log(predictions);
    for (let index = 0; index < 5; index++) {
      const element = predictions[index];
      const species = await this.speciesRepository.find({ where: { latin_name: element[0] } })
      this.predictionRepository.save({
        species: species[0],
        observation: observation,
        probability: element[1],
      })
    }
  }
}
