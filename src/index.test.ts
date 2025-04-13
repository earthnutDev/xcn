import { xcn } from './index'; // 假设 xcn 在 xcn.ts 文件中

describe('xcn', () => {
  it('should handle empty inputs correctly', () => {
    expect(xcn(undefined)).toBeUndefined();
    expect(xcn(null)).toBeUndefined();
    expect(xcn(false)).toBeUndefined();
    expect(xcn(true)).toBeUndefined();
    expect(xcn('')).toBeUndefined();
    expect(xcn([])).toBeUndefined();
    expect(xcn({})).toBeUndefined();
  });

  it('should handle array inputs correctly', () => {
    expect(xcn(['a', 'b', 'c'])).toBe('a b c');
    expect(xcn(['a', ['b', 'c']])).toBe('a b c');
    expect(xcn(['a', ['b', ['c']]])).toBe('a b c');
  });

  it('should handle string and number inputs correctly', () => {
    expect(xcn('a')).toBe('a');
    expect(xcn(1)).toBe('1');
  });

  it('should handle function inputs correctly', () => {
    expect(xcn(() => 'a')).toBe('a');
    expect(xcn(() => ['a', 'b'])).toBe('a b');
  });

  it('should handle object inputs correctly', () => {
    expect(xcn({ a: true, b: false })).toBe('a');
    expect(xcn({ a: true, b: true })).toBe('a b');
  });

  it('should handle mixed inputs correctly', () => {
    expect(xcn('a', ['b', { c: true }], () => 'd')).toBe('a b c d');
  });
});
