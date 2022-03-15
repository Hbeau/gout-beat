import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";
import { Steps } from "../types/selection";

export function postGameStarted() {
  globals.$bossPlates = [];
  globals.$rules = [
    ruleDescriptors[2],
    ruleDescriptors[5],
    ruleDescriptors[8],
    ruleDescriptors[10],
    ruleDescriptors[12],
  ];
  globals.$step = Steps.OBJECTIVE_SELECTION;
  Isaac.ExecuteCommand("goto s.default.13");
}
