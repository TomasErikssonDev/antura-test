import { User } from './User';

export type Result = {
  results: Array<User>;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};
