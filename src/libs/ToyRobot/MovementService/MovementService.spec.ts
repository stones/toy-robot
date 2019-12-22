import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import 'reflect-metadata';
import Container from 'typedi';
import { MovementService, X_LOWER, X_UPPER, Y_LOWER, Y_UPPER } from './MovementService';

@suite export class MovementServiceCanPlaceRobotTests {

	@test 'Should allow placement when both x and y are inside the bounds'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_LOWER + 1;
		const y: number = Y_LOWER + 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(true, 'Value must be true');
	}

	@test 'Should not allow placement when  x is below the bounds, but y is ok'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_LOWER - 1;
		const y: number = Y_LOWER + 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x is above the bounds, but y is ok'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_UPPER + 1;
		const y: number = Y_LOWER + 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when y is below the bounds, but x is ok'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_LOWER + 1;
		const y: number = Y_LOWER - 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when y is above the bounds, but x is ok'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_UPPER - 1;
		const y: number = Y_UPPER + 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}


	@test 'Should not allow placement when x and y are below the bounds'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_LOWER - 1;
		const y: number = Y_LOWER - 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x and y are above the bounds'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_UPPER + 1;
		const y: number = Y_UPPER + 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x is below and y is above the bounds'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_LOWER - 1;
		const y: number = Y_UPPER + 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

	@test 'Should not allow placement when x is above and y is below the bounds'(): void {
		const service: MovementService = Container.get(MovementService);
		const x: number = X_UPPER + 1;
		const y: number = Y_LOWER - 1;

		expect(service.canPlaceRobot(x, y)).to.be.equals(false, 'Value must be false');
	}

}
