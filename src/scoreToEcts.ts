export function scoreToEcts(score: number): string {
  if (!Number.isFinite(score) || score < 0 || score > 100) {
    throw new RangeError('Score must be a number between 0 and 100');
  }

  if (score >= 90) return 'A';
  if (score >= 82) return 'B';
  if (score >= 75) return 'C';
  if (score >= 67) return 'D';
  if (score >= 60) return 'E';
  if (score >= 35) return 'FX';

  return 'F';
}
