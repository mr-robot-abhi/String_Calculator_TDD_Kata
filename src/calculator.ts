// tests/calculator.test.ts
import { add } from '../src/calculator';

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});