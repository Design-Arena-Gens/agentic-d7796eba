export function seedStringToNumber(seed: string): number {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i += 1) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return Math.imul(h ^ (h >>> 16), 2246822507) >>> 0;
}

export function createSeededGenerator(seed: string) {
  let state = seedStringToNumber(seed) + 0x6d2b79f5;
  return () => {
    state = Math.imul(state ^ (state >>> 15), 1 | state);
    state ^= state + Math.imul(state ^ (state >>> 7), 61 | state);
    return ((state ^ (state >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffleWithSeed<T>(items: T[], seed: string): T[] {
  const generator = createSeededGenerator(seed);
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(generator() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
