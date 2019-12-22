import { BehaviorSubject } from 'rxjs';
import { Service } from 'typedi';
import { Direction, DIRECTIONS } from '../ToyRobot';

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
