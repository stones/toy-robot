import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import "mocha-typescript/di/typedi";
import * as sinon from "sinon";
import { Direction, DIRECTIONS } from './DirectionService';
import { X_LOWER, X_UPPER, Y_LOWER, Y_UPPER } from './MovementService';
import { ToyRobot } from './ToyRobot';

@suite export class ToyRobotMoveEastTests {
	constructor(public toyRobot: ToyRobot) { }

	@test 'should return a higher x value when the current position is within range'(): void {
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
@suite export class ToyRobotMoveNorthTests {
	constructor(public toyRobot: ToyRobot) { }

	@test 'should return a higher y value when the current position is within range'(): void {
		const result: number = this.toyRobot.moveNorth(Y_LOWER + 1);
		const expectation: number = Y_LOWER + 2;

		expect(result).to.equal(expectation, `The moveNorth should return ${expectation}`);
	}

	@test 'should return the current value if outside outside of range'(): void {
		const result: number = this.toyRobot.moveEast(Y_UPPER);
		const expectation: number = Y_UPPER;

		expect(result).to.equal(expectation, `The moveNorth should return ${expectation}`);
	}
}

@suite export class ToyRobotReportTests {
	constructor(public toyRobot: ToyRobot) { }

	@test 'should return a string format for the provided state'(): void {
		const x: number = 1;
		const y: number = 2;
		const direction = DIRECTIONS[2]
		const result: string = this.toyRobot.report({ x, y, direction });
		const expectation: string = `${x},${y},${direction}`;

		expect(result).to.equal(expectation, `The report should return ${expectation}`);
	}
}



@suite export class ToyRobotMoveSouthTests {
	constructor(public toyRobot: ToyRobot) { }

	@test 'should return a lower y value when the current position is within range'(): void {
		const result: number = this.toyRobot.moveSouth(Y_LOWER + 1);
		const expectation: number = Y_LOWER;

		expect(result).to.equal(expectation, `The moveWest should return ${expectation}`);
	}

	@test 'should return the current value if outside outside of range'(): void {
		const result: number = this.toyRobot.moveSouth(X_LOWER);
		const expectation: number = Y_LOWER;

		expect(result).to.equal(expectation, `The moveWest should return ${expectation}`);
	}

}

@suite export class ToyRobotMoveWestTests {
	constructor(public toyRobot: ToyRobot) { }

	@test 'should return a lower x value when the current position is within range'(): void {
		const result: number = this.toyRobot.moveWest(X_LOWER + 1);
		const expectation: number = X_LOWER;

		expect(result).to.equal(expectation, `The moveWest should return ${expectation}`);
	}

	@test 'should return the current x value if outside outside of range'(): void {
		const result: number = this.toyRobot.moveWest(X_LOWER);
		const expectation: number = X_LOWER;

		expect(result).to.equal(expectation, `The moveWest should return ${expectation}`);
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