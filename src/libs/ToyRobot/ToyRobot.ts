import { Service } from 'typedi';
import { DirectionService } from './DirectionService';
import { MovementService } from './MovementService';

@Service()
export class ToyRobot {

	public constructor(
		private readonly directionService: DirectionService,
		private readonly movementService: MovementService
	) {
		console.log(this.directionService, this.movementService);
	}
}
