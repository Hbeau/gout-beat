import { Rules } from "../types/raceGoal";

export function IconFromRule(rule: Rules) {
  switch (rule) {
    case Rules.BOMB:
      return 2;
    case Rules.COIN:
      return 0;
    case Rules.KEY:
      return 1;
    default:
      return 3;
  }
}
