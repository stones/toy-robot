import { BehaviorSubject } from 'rxjs';
import { Service } from 'typedi';

export const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const;

export type Direction = typeof DIRECTIONS[number];

export interface ToyRobotState {
	x: number;
	y: number;
	direction: Direction;
}

@Service()
export class Store {

	public state$: BehaviorSubject<ToyRobotState> = new BehaviorSubject({ x: 0, y: 0, direction: DIRECTIONS[0] });

	public state!: ToyRobotState;

	public constructor() {
		this.state$.subscribe((state: ToyRobotState) => this.state = state);
	}
}
