import { Service } from 'typedi';
import { FileReader } from '../FileReader';
import { Store, ToyRobotState } from '../Store';
import { ToyRobot } from '../ToyRobot';
@Service()
export class ToyRobotCli {

	public constructor(
		private readonly fileReader: FileReader,
		private readonly store: Store,
		private readonly toyRobot: ToyRobot
	) { }

	public open(path: string): void {
		this.fileReader.createStreamFromPath(path).subscribe((command: string) => console.log(command));

		this.store.state$.subscribe((state: ToyRobotState) => console.log(state));

		console.log(this.toyRobot);
	}
}
