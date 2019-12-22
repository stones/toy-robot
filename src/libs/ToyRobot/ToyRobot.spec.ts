import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import "mocha-typescript/di/typedi";
import * as sinon from "sinon";
import { Direction, DIRECTIONS } from './DirectionService';
import { ToyRobot } from './ToyRobot';


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