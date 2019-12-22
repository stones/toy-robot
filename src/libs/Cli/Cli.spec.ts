import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import "mocha-typescript/di/typedi";
import * as sinon from "sinon";
import { ToyRobotCli } from './Cli';


@suite export class FileReaderTests {
	public constructor(private readonly cli: ToyRobotCli) { }
	@test async 'Should create an observable stream from a provided path'(): Promise<void> {

		const spy = sinon.spy(this.cli.fileReader, 'createStreamFromPath');
		const path: string = './examples/all-commands.txt'

		this.cli.open(path);

		expect(spy.calledWith(path)).to.equal(true, `The rotateLeft createStreamFromPath should be caled with ${path}`);

		spy.restore();
	}
}
