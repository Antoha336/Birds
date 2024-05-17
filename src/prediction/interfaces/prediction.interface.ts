import { ObservationInterface } from "src/observation/interfaces/observation.interface";

export class PredictionInterface {
    observation: ObservationInterface;
    probability: number;
}