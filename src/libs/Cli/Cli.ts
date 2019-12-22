import { Observable } from 'rxjs';
import { filter, map, skipWhile, withLatestFrom } from 'rxjs/operators';
import { Service } from 'typedi';
import { PLACEMENT_COMMAND_REGEX, REPORT_COMMAND_REGEX } from '../Commands';
import { FileReader } from '../FileReader';
import { Store, ToyRobotState } from '../Store';
import { Direction, ToyRobot } from '../ToyRobot';
@Service()
export class ToyRobotCli {

	public constructor(
		private readonly fileReader: FileReader,
		private readonly store: Store,
		private readonly toyRobot: ToyRobot
	) { }

	public open(path: string): void {
		const commands$: Observable<string> = this.fileReader.createStreamFromPath(path)
			.pipe(skipWhile((command: string) => !PLACEMENT_COMMAND_REGEX.test(command)));

		this.handlePlaceCommands(commands$);
		this.handleReportCommands(commands$);
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
}
