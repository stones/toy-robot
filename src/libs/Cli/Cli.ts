import { Service } from 'typedi';
import { FileReader } from '../FileReader';
@Service()
export class ToyRobotCli {

	public constructor(private readonly fileReader: FileReader) { }

	public open(path: string): void {
		this.fileReader.createStreamFromPath(path).subscribe((command: string) => console.log(command));
	}
}
