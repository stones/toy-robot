import { Service } from 'typedi';

export const X_LOWER: number = 0;
export const X_UPPER: number = 4;

export const Y_LOWER: number = 0;
export const Y_UPPER: number = 4;

@Service()
export class MovementService {

	public canMoveEast(position: number): boolean {
		return position < X_UPPER;
	}

	public canMoveNorth(position: number): boolean {
		return position < Y_UPPER;
	}

	public canMoveSouth(position: number): boolean {
		return position > Y_LOWER;
	}

	public canMoveWest(position: number): boolean {
		return position > X_LOWER;
	}

	public canPlaceRobot(x: number, y: number): boolean {
		return this.withinXRange(x) && this.withinYRange(y);
	}

	private withinXRange(value: number): boolean {
		return (value >= X_LOWER) && (value <= X_UPPER);
	}

	private withinYRange(value: number): boolean {
		return (value >= Y_LOWER) && (value <= Y_UPPER);
	}
}
