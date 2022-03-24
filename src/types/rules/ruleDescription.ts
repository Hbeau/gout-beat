import { RulesModifiers } from "../rulesModifiers";
import { Rules } from "../selection";

export interface RuleDescription {
  rule: Rules;
  gameText: string;
  pickup: PickupVariant;
  modifier: RulesModifiers;
}
