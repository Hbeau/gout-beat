import globals from "../globals";
import { Rules } from "../types/selection";

export function IconFromRule(rule: Rules): number {
  const icon = globals.$rules.find(
    (activeRule) => activeRule.rule === rule,
  )?.icon;
  if (icon !== undefined) {
    return icon;
  }
  return 0;
}
