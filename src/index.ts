import { NativeModules } from 'react-native';
import { toByteArray } from 'base64-js';

const { Randomness } = NativeModules;

export const randomBytes = async (length: number = 16): Promise<Uint8Array> => {
  const base64: string = await Randomness.randomBytes(length);
  const data = toByteArray(base64);

  return data;
};
