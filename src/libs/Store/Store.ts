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

	public setDirection(direction: Direction): void {
		const { state } = this;

		this.setState({ x: state.x, y: state.y, direction });
	}

	public setState(state: ToyRobotState): void {
		this.state$.next(state);
	}

	public setPlacement(x: number, y: number, direction: Direction): void {
		this.setState({ x, y, direction });
	}

	public setXposition(x: number): void {
		const { state } = this;

		this.setState({ x, y: state.y, direction: state.direction });
	}

	public setYposition(y: number): void {
		const { state } = this;

		this.setState({ x: state.x, y, direction: state.direction });
	}
}
