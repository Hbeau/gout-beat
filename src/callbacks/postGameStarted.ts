import globals from "../globals";
import { SelectionStep } from "../types/selectionStep";

export function postGameStarted() {
  globals.$bossPlates = [];
  globals.$rules = [];
  if (globals.$step !== SelectionStep.SELECTION_COMPLETE) {
    globals.$step = SelectionStep.OBJECTIVE_SELECTION;
  }
}
