import { Service } from 'typedi';
import { Direction, DirectionService } from './DirectionService';
import { MovementService } from './MovementService';

@Service()
export class ToyRobot {

	public constructor(
		public readonly directionService: DirectionService,
		private readonly movementService: MovementService
	) { }

	public moveEast(currentPosition: number): number {
		return this.movementService.canMoveEast(currentPosition) ? currentPosition + 1 : currentPosition;
	}

	public rotateLeft(currentDirection: Direction): Direction {
		return this.directionService.rotateLeft(currentDirection);
	}

	public rotateRight(currentDirection: Direction): Direction {
		return this.directionService.rotateRight(currentDirection);
	}
}
