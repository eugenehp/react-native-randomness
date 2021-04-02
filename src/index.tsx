import { NativeModules } from 'react-native'
import { decodeAsBytes } from './base64';

type RandomnessType = {
  random(length: number): Promise<any>;
};

const { Randomness } = NativeModules;

const r = Randomness as RandomnessType;
export default r;

// export const random = async (length:number):Promise<Uint8Array> => {
//   const base64:string = await r.random(length);
//   const data = decodeAsBytes(base64);

//   return data
// };

// export default {random}
