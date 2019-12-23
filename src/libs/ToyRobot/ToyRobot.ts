import { ToyRobotState } from 'libs/Store';
import { Service } from 'typedi';
import { Direction, DirectionService } from './DirectionService';
import { MovementService } from './MovementService';

@Service()
export class ToyRobot {

	public constructor(
		public readonly directionService: DirectionService,
		public readonly movementService: MovementService
	) { }

	public checkPlacement(x: number, y: number): boolean {
		return this.movementService.canPlaceRobot(x, y);
	}

	public moveEast(currentPosition: number): number {
		return this.movementService.canMoveEast(currentPosition) ? currentPosition + 1 : currentPosition;
	}

	public moveNorth(currentPosition: number): number {
		return this.movementService.canMoveNorth(currentPosition) ? currentPosition + 1 : currentPosition;
	}

	public moveSouth(currentPosition: number): number {
		return this.movementService.canMoveSouth(currentPosition) ? currentPosition - 1 : currentPosition;
	}

	public moveWest(currentPosition: number): number {
		return this.movementService.canMoveWest(currentPosition) ? currentPosition - 1 : currentPosition;
	}

	public report(state: ToyRobotState): string {
		const { x, y, direction } = state;
		return `${x},${y},${direction}`;
	}

	public rotateLeft(currentDirection: Direction): Direction {
		return this.directionService.rotateLeft(currentDirection);
	}

	public rotateRight(currentDirection: Direction): Direction {
		return this.directionService.rotateRight(currentDirection);
	}
}
