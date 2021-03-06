import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import "mocha-typescript/di/typedi";
import { MovementService, X_LOWER, X_UPPER, Y_LOWER, Y_UPPER } from './MovementService';

@suite export class MovementServiceCanPlaceRobotTests {
	constructor(public service: MovementService) { }

	@test 'Should allow placement when both x and y are inside the bounds'(): void {
		const x: number = X_LOWER + 1;
		const y: number = Y_LOWER + 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(true, 'Value must be true');
	}

	@test 'Should not allow placement when  x is below the bounds, but y is ok'(): void {
		const x: number = X_LOWER - 1;
		const y: number = Y_LOWER + 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x is above the bounds, but y is ok'(): void {
		const x: number = X_UPPER + 1;
		const y: number = Y_LOWER + 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when y is below the bounds, but x is ok'(): void {
		const x: number = X_LOWER + 1;
		const y: number = Y_LOWER - 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when y is above the bounds, but x is ok'(): void {
		const x: number = X_UPPER - 1;
		const y: number = Y_UPPER + 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}


	@test 'Should not allow placement when x and y are below the bounds'(): void {
		const x: number = X_LOWER - 1;
		const y: number = Y_LOWER - 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x and y are above the bounds'(): void {
		const x: number = X_UPPER + 1;
		const y: number = Y_UPPER + 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x is below and y is above the bounds'(): void {
		const x: number = X_LOWER - 1;
		const y: number = Y_UPPER + 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x is above and y is below the bounds'(): void {
		const x: number = X_UPPER + 1;
		const y: number = Y_LOWER - 1;

		expect(this.service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

}

@suite export class MovementServiceCanMoveEastTests {
	constructor(public service: MovementService) { }

	@test 'Should allow movement east when the robot is below the upper bounds'(): void {
		const x: number = X_UPPER - 1;

		expect(this.service.canMoveEast(x)).to.be.equals(true, 'Value must be true');
	}

	@test 'Should not allow movement east when the robot is at the upper bounds'(): void {
		const x: number = X_UPPER;

		expect(this.service.canMoveEast(x)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow movement north when the robot is above the upper bounds'(): void {
		const x: number = X_UPPER + 1;

		expect(this.service.canMoveEast(x)).to.be.equals(false, 'Value must be false');
	}
}


@suite export class MovementServiceCanMoveNorthTests {
	constructor(public service: MovementService) { }

	@test 'Should allow movement north when the robot is below the upper bounds'(): void {
		const y: number = Y_UPPER - 1;

		expect(this.service.canMoveNorth(y)).to.be.equals(true, 'Value must be true');
	}

	@test 'Should not allow movement north when the robot is at the upper bounds'(): void {
		const y: number = Y_UPPER;

		expect(this.service.canMoveNorth(y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow movement north when the robot is above the upper bounds'(): void {
		const y: number = Y_UPPER + 1;

		expect(this.service.canMoveNorth(y)).to.be.equals(false, 'Value must be false');
	}
}

@suite export class MovementServiceCanMoveSouthTests {
	constructor(public service: MovementService) { }

	@test 'Should allow movement south when the robot is above the lover bounds'(): void {
		const y: number = Y_LOWER + 1;

		expect(this.service.canMoveSouth(y)).to.be.equals(true, 'Value must be true');
	}

	@test 'Should not allow movement south when the robot is at the lower bounds'(): void {
		const y: number = Y_LOWER;

		expect(this.service.canMoveSouth(y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow movement south when the robot is below the upper bounds'(): void {
		const y: number = Y_LOWER - 1;

		expect(this.service.canMoveSouth(y)).to.be.equals(false, 'Value must be false');
	}
}

@suite export class MovementServiceCanMoveWestTests {
	constructor(public service: MovementService) { }

	@test 'Should allow movement west when the robot is above the lover bounds'(): void {
		const x: number = X_LOWER + 1;

		expect(this.service.canMoveWest(x)).to.be.equals(true, 'Value must be true');
	}

	@test 'Should not allow movement west when the robot is at the lower bounds'(): void {
		const x: number = X_LOWER;

		expect(this.service.canMoveWest(x)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow movement west when the robot is below the upper bounds'(): void {
		const x: number = X_LOWER - 1;

		expect(this.service.canMoveWest(x)).to.be.equals(false, 'Value must be false');
	}
}