import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import "mocha-typescript/di/typedi";
import * as sinon from "sinon";
import { Direction, DIRECTIONS } from './DirectionService';
import { X_LOWER, X_UPPER } from './MovementService';
import { ToyRobot } from './ToyRobot';

@suite export class ToyRobotMoveEast {
	constructor(public toyRobot: ToyRobot) { }

	@test 'should increase the x value when provided a value within range'(): void {
		const result: number = this.toyRobot.moveEast(X_LOWER + 1);
		const expectation: number = X_LOWER + 2;

		expect(result).to.equal(expectation, `The moveEast should return ${expectation}`);
	}

	@test 'should return the current value if outside outside of range'(): void {
		const result: number = this.toyRobot.moveEast(X_UPPER);
		const expectation: number = X_UPPER;

		expect(result).to.equal(expectation, `The moveEast should return ${expectation}`);
	}

}

@suite export class ToyRobotRotateLeftTests {
	constructor(public toyRobot: ToyRobot) { }

	@test 'should call the rotateLeft command on the direction service'(): void {
		const current: Direction = DIRECTIONS[2];
		const spy = sinon.spy(this.toyRobot.directionService, 'rotateLeft');

		this.toyRobot.rotateLeft(current);

		expect(spy.calledWith(current)).to.equal(true, `The rotateLeft function should be caled with ${current}`);
	}

	@test 'should call the rotateRight command on the direction service'(): void {
		const current: Direction = DIRECTIONS[2];
		const spy = sinon.spy(this.toyRobot.directionService, 'rotateRight');

		this.toyRobot.rotateRight(current);

		expect(spy.calledWith(current)).to.equal(true, `The rotateRight function should be caled with ${current}`);
	}
}