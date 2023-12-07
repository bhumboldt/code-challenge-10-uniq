import { extractUniqueLines } from './data-processing.util';

describe('data-processing', () => {
	describe('extractUniqueLines', () => {
		it('should return unique lines', () => {
			const data = ['1', '2', '3', '2', '3', '4', '5', '2', '2', '1', '3'];
			const expected = ['1', '2', '3', '4', '5'];

			const result = extractUniqueLines(data);

			expect(result).toStrictEqual(expected);
		});

		it('should return empty array if no data', () => {
			const data: string[] = [];
			const expected: string[] = [];

			const result = extractUniqueLines(data);

			expect(result).toStrictEqual(expected);
		});
	});
});
