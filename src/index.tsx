import { NativeModules } from 'react-native';

type RandomnessType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Randomness } = NativeModules;

export default Randomness as RandomnessType;
