import { Type } from './type';

export interface Pokemon {
  number: number;
  name: string;
  types: Type[];
  image: string;
}
