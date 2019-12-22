import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import 'reflect-metadata';
import { take } from 'rxjs/operators';
import Container from 'typedi';
import { MovementService } from './MovementService';

@suite export class MovementServiceTests {
	@test async 'Should create an observable stream from a provided path'(): Promise<void> {
		const service: MovementService = Container.get(MovementService);

		fileLoader.createStreamFromPath('./examples/example-a.txt')
			.pipe(take(1)).subscribe((line: string) => {
				expect(line).to.be.equals('PLACE 0,0,NORTH', 'response must be true!');
			});
	}
}
