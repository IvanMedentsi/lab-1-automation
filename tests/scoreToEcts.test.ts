import { describe, it, expect } from 'vitest';
import { scoreToEcts } from '../src/scoreToEcts';

describe('scoreToEcts', () => {
  it('returns A for a score of 95', () => {
    expect(scoreToEcts(95)).toBe('A');
  });

  it('returns B for a score of 85', () => {
    expect(scoreToEcts(85)).toBe('B');
  });

  it('returns A at the lower boundary of the A range', () => {
    expect(scoreToEcts(90)).toBe('A');
  });

  it('returns B immediately below the A range', () => {
    expect(scoreToEcts(89)).toBe('B');
  });

  it('returns F for a score of zero', () => {
    expect(scoreToEcts(0)).toBe('F');
  });

  it('throws RangeError for a score below zero', () => {
    expect(() => scoreToEcts(-1)).toThrow(RangeError);
  });

  it('throws RangeError for a score above 100', () => {
    expect(() => scoreToEcts(101)).toThrow(RangeError);
  });

  it('throws RangeError for NaN', () => {
    expect(() => scoreToEcts(Number.NaN)).toThrow(RangeError);
  });
  it('returns C for a score of 75', () => {
    expect(scoreToEcts(75)).toBe('C');
  });

  it('returns FX for a score of 35', () => {
    expect(scoreToEcts(35)).toBe('FX');
  });
});
