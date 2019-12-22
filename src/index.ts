import { ToyRobotCli } from './libs/Cli';

const path: string = process.argv[2];

if (path) {
	const cli: ToyRobotCli = new ToyRobotCli();
	cli.open(path);
} else {
	console.log('Please specify a path');
}
