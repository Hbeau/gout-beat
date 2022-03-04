import globals from "../globals";
import { SelectionStep } from "../types/selectionStep";

export function postGameStarted() {
  globals.$bossPlates = [];
  globals.$rules = [];
  globals.$step = SelectionStep.OBJECTIVE_SELECTION;
  Isaac.ExecuteCommand("goto s.default.13");
}
