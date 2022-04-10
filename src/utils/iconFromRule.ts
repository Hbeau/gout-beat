import { Rules } from "../types/selection";

export function IconFromRule(rule: Rules): number {
  switch (rule) {
    case Rules.BOMB:
      return 2;
    case Rules.COIN:
      return 0;
    case Rules.KEY:
      return 1;
    case Rules.PILL:
      return 17;
    case Rules.ITEM:
      return 18;
    case Rules.TEAR:
      return 1;
    default:
      return 3;
  }
}
