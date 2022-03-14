import globals from "../globals";
import { Steps } from "../types/selection";

export function postGameStarted() {
  globals.$bossPlates = [];
  globals.$rules = [];
  globals.$step = Steps.OBJECTIVE_SELECTION;
  Isaac.ExecuteCommand("goto s.default.13");
}
