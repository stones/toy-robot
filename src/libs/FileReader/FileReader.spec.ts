import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import 'reflect-metadata';
import { take } from 'rxjs/operators';
import Container from 'typedi';
import { FileReader } from './FileReader';

@suite export class FileReaderTests {
	@test async 'Should create an observable stream from a provided path'(): Promise<void> {
		const fileLoader: FileReader = Container.get(FileReader);

		fileLoader.createStreamFromPath('./examples/example-a.txt')
			.pipe(take(1)).subscribe((line: string) => {
				expect(line).to.be.equals('PLACE 0,0,NORTH', 'response must be true!');
			});
	}
}
