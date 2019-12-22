import { Service } from 'typedi';

export const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const;

export type Direction = typeof DIRECTIONS[number];

@Service()
export class DirectionService {

	public rotateLeft(current: Direction): Direction {
		const currentId: number = this.getByName(current);
		const nextId: number = (currentId <= 0) ? DIRECTIONS.length - 1 : currentId - 1;

		return this.getById(nextId);
	}

	public rotateRight(current: Direction): Direction {
		const currentId: number = this.getByName(current);
		const nextId: number = (currentId >= DIRECTIONS.length - 1) ? 0 : currentId + 1;

		return this.getById(nextId);
	}

	private getById(id: number): Direction {
		return DIRECTIONS[id];
	}

	private getByName(name: Direction): number {
		return DIRECTIONS.indexOf(name);
	}
}
