import * as Randomness from '../index';

describe('Generates random', () => {
  it('Generates random bytes', async () => {
    const data = await Randomness.randomBytes();
    expect(data).not.toBe(null);
  });
  it('Generates random bytes of given length ', async () => {
    const data = await Randomness.randomBytes(100);
    expect(data.length).toBe(100);
  });
});
