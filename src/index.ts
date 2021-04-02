import { NativeModules } from 'react-native';
import { decodeAsBytes } from './base64';

const { Randomness } = NativeModules;

export const random = async (length: number = 16): Promise<Uint8Array> => {
  const base64: string = await Randomness.random(length);
  const data = decodeAsBytes(base64);

  return data;
};
