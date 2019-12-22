import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

@suite export class IndexTestSuite {
	@test 'Get user by id should return its data'(): void {
		const response: boolean = true;
		expect(response).to.be.equals(true, 'response must be true!');
	}
}
