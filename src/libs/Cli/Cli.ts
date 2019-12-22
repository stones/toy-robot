import { Observable } from 'rxjs';
import { filter, map, skipWhile, withLatestFrom } from 'rxjs/operators';
import { Service } from 'typedi';
import { LEFT_COMMAND_REGEX, MOVE_COMMAND_REGEX, PLACEMENT_COMMAND_REGEX, REPORT_COMMAND_REGEX, RIGHT_COMMAND_REGEX } from '../Commands';
import { FileReader } from '../FileReader';
import { Store, ToyRobotState } from '../Store';
import { Direction, DIRECTIONS, ToyRobot } from '../ToyRobot';
@Service()
export class ToyRobotCli {

	public constructor(
		public readonly fileReader: FileReader,
		public readonly store: Store,
		public readonly toyRobot: ToyRobot
	) { }

	public open(path: string): void {
		const commands$: Observable<string> = this.fileReader.createStreamFromPath(path)
			.pipe(skipWhile((command: string) => !PLACEMENT_COMMAND_REGEX.test(command)));

		this.handlePlaceCommands(commands$);
		this.handleMoveCommands(commands$);
		this.handleReportCommands(commands$);
		this.handleRightCommands(commands$);
		this.handleLeftCommands(commands$);
	}

	private handleMoveCommands(commands$: Observable<string>): void {
		const moveCommands$: Observable<ToyRobotState> = commands$.pipe(
			filter((command: string) => MOVE_COMMAND_REGEX.test(command)),
			withLatestFrom(this.store.state$),
			map(([_command, state]: [string, ToyRobotState]): ToyRobotState => state)
		);

		moveCommands$.pipe(filter((state: ToyRobotState) => state.direction === DIRECTIONS[0]))
			.subscribe((state) => this.store.setYposition(this.toyRobot.moveNorth(state.y)));

		moveCommands$.pipe(filter((state: ToyRobotState) => state.direction === DIRECTIONS[1]))
			.subscribe((state) => this.store.setXposition(this.toyRobot.moveEast(state.y)));

		moveCommands$.pipe(filter((state: ToyRobotState) => state.direction === DIRECTIONS[2]))
			.subscribe((state) => this.store.setYposition(this.toyRobot.moveSouth(state.y)));

		moveCommands$.pipe(filter((state: ToyRobotState) => state.direction === DIRECTIONS[3]))
			.subscribe((state) => this.store.setXposition(this.toyRobot.moveWest(state.y)));
	}

	private handlePlaceCommands(commands$: Observable<string>): void {
		commands$.pipe(filter((command: string) => PLACEMENT_COMMAND_REGEX.test(command)))
			.subscribe((command: string) => {

				const { groups } = PLACEMENT_COMMAND_REGEX.exec(command) as RegExpExecArray;

				if (groups) {
					const x: number = +groups['x'];
					const y: number = +groups['y'];
					const direction: Direction = groups['direction'] as Direction;

					if (this.toyRobot.checkPlacement(x, y)) {
						this.store.setPlacement(x, y, direction);
					}
				}
			});
	}

	private handleReportCommands(commands$: Observable<string>): void {
		commands$.pipe(filter((command: string) => REPORT_COMMAND_REGEX.test(command)),
			withLatestFrom(this.store.state$),
			map(([_command, state]: [string, ToyRobotState]) => state)
		).subscribe((state: ToyRobotState) => console.log(this.toyRobot.report(state)));
	}

	private handleLeftCommands(commands$: Observable<string>): void {
		commands$.pipe(
			filter((command: string) => LEFT_COMMAND_REGEX.test(command)),
			withLatestFrom(this.store.state$),
			map(([_command, state]: [string, ToyRobotState]): Direction => state.direction)
		).subscribe((currentDirection: Direction) => {
			const direction: Direction = this.toyRobot.rotateLeft(currentDirection);
			this.store.setDirection(direction);
		});
	}

	private handleRightCommands(commands$: Observable<string>): void {
		commands$.pipe(
			filter((command: string) => RIGHT_COMMAND_REGEX.test(command)),
			withLatestFrom(this.store.state$),
			map(([_command, state]: [string, ToyRobotState]): Direction => state.direction)
		).subscribe((currentDirection: Direction) => {
			const direction: Direction = this.toyRobot.rotateRight(currentDirection);
			this.store.setDirection(direction);
		});
	}
}
