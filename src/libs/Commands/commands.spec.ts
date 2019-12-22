import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';
import "mocha-typescript/di/typedi";
import 'reflect-metadata';
import { LEFT_COMMAND_REGEX, MOVE_COMMAND_REGEX, PLACEMENT_COMMAND_REGEX, REPORT_COMMAND_REGEX, RIGHT_COMMAND_REGEX } from '.';

@suite export class PlacementCommandRegexTests {
	@test 'Should validate when correct'(): void {
		const result: boolean = PLACEMENT_COMMAND_REGEX.test('PLACE 1,2,NORTH')
		expect(result).to.equal(true, `The placement regex should have suceeded`);
	}

	@test 'Should failed when lower case'(): void {
		const result: boolean = PLACEMENT_COMMAND_REGEX.test('place 2,2,north')
		expect(result).to.equal(false, `The placement regex should have failed`);
	}
	@test 'Should failed when outside x bounds'(): void {
		const result: boolean = PLACEMENT_COMMAND_REGEX.test('PLACE 5,2,NORTH')
		expect(result).to.equal(false, `The placement regex should have failed`);
	}

	@test 'Should failed when outside y bounds'(): void {
		const result: boolean = PLACEMENT_COMMAND_REGEX.test('PLACE 2,7,NORTH')
		expect(result).to.equal(false, `The placement regex should have failed`);
	}

	@test 'Should failed when the direction is not supported'(): void {
		const result: boolean = PLACEMENT_COMMAND_REGEX.test('PLACE 2,7,NORTWEST')
		expect(result).to.equal(false, `The placement regex should have failed`);
	}
}

@suite export class ReportCommandRegexTests {

	@test 'Should validate when correct'(): void {
		const result: boolean = REPORT_COMMAND_REGEX.test('REPORT')
		expect(result).to.equal(true, `The report regex should have suceeded`);
	}

	@test 'Should failed lowercase'(): void {
		const result: boolean = PLACEMENT_COMMAND_REGEX.test('report')
		expect(result).to.equal(false, `The report regex should have failed`);
	}

	@test 'Should failed when not the command'(): void {
		const result: boolean = PLACEMENT_COMMAND_REGEX.test('REPORTED')
		expect(result).to.equal(false, `The report regex should have failed`);
	}
}

@suite export class MoveCommandRegexTests {

	@test 'Should validate when correct'(): void {
		const result: boolean = MOVE_COMMAND_REGEX.test('MOVE')
		expect(result).to.equal(true, `The move regex should have suceeded`);
	}

	@test 'Should failed when lowercased'(): void {
		const result: boolean = MOVE_COMMAND_REGEX.test('move')
		expect(result).to.equal(false, `The move regex should have failed`);
	}

	@test 'Should failed when incorrect command passed'(): void {
		const result: boolean = MOVE_COMMAND_REGEX.test('MOVED')
		expect(result).to.equal(false, `The move regex should have failed`);
	}
}

@suite export class RotateRightCommandRegexTests {

	@test 'Should validate when correct'(): void {
		const result: boolean = RIGHT_COMMAND_REGEX.test('RIGHT')
		expect(result).to.equal(true, `The right regex should have suceeded`);
	}

	@test 'Should failed when lowercase'(): void {
		const result: boolean = RIGHT_COMMAND_REGEX.test('right')
		expect(result).to.equal(false, `The rotate right regex should have failed`);
	}

	@test 'Should failed when incorrectly spelled'(): void {
		const result: boolean = RIGHT_COMMAND_REGEX.test('RIGHTO')
		expect(result).to.equal(false, `The rotate right regex should have failed`);
	}
}

@suite export class RotateLeftCommandRegexTests {

	@test 'Should validate when correct'(): void {
		const result: boolean = LEFT_COMMAND_REGEX.test('LEFT')
		expect(result).to.equal(true, `The left regex should have suceeded`);
	}

	@test 'Should failed when lower case'(): void {
		const result: boolean = LEFT_COMMAND_REGEX.test('left')
		expect(result).to.equal(false, `The left right regex should have failed`);
	}

	@test 'Should failed when incorrect command passed'(): void {
		const result: boolean = LEFT_COMMAND_REGEX.test('LEFTY')
		expect(result).to.equal(false, `The left right regex should have failed`);
	}
}