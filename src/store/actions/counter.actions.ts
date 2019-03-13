import { Action } from "../models/index";

export const INCREMENT = 'Increment';

export class Increment implements Action {
  type = INCREMENT;
}

