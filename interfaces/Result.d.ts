import { User } from './User';

export interface Result {
  results: Array<User>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
