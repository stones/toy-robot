import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import "mocha-typescript/di/typedi";
import { Direction, DIRECTIONS, DirectionService } from './DirectionService';

@suite export class DirectionServiceRotateRightTests {
	constructor(public directionService: DirectionService) { }

	@test 'Should return the next clockwise direction when not the last direction'(): void {
		const current: Direction = DIRECTIONS[0];
		const expectation: Direction = DIRECTIONS[1];

		expect(this.directionService.rotateRight(current)).to.equal(expectation, `The direction should be ${expectation}`);
	}

	@test 'Should return the first direction when the current direction is the last direction'(): void {
		const current: Direction = DIRECTIONS[DIRECTIONS.length - 1];
		const expectation: Direction = DIRECTIONS[0];

		expect(this.directionService.rotateRight(current)).to.equal(expectation, `The direction should be ${expectation}`);
	}
}

@suite export class DirectionServiceRotateLeftTests {
	constructor(public directionService: DirectionService) { }

	@test 'Should return the next counter clockwise direction when not the first direction'(): void {
		const current: Direction = DIRECTIONS[1];
		const expectation: Direction = DIRECTIONS[0];

		expect(this.directionService.rotateLeft(current)).to.equal(expectation, `The direction should be ${expectation}`);
	}

	@test 'Should return the last direction when the current direction is the first direction'(): void {
		const current: Direction = DIRECTIONS[0];
		const expectation: Direction = DIRECTIONS[DIRECTIONS.length - 1];

		expect(this.directionService.rotateLeft(current)).to.equal(expectation, `The direction should be ${expectation}`);
	}
}