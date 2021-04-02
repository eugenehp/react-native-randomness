import * as Randomness from '../index';

// TODO: test base64 too

describe('Generates random', () => {
  it('Generates random bytes', async () => {
    const data = await Randomness.random();
    expect(data).not.toBe(null);
  });
  it('Generates random bytes of given length ', async () => {
    const data = await Randomness.random(100);
    expect(data.length).toBe(100);
  });
});
