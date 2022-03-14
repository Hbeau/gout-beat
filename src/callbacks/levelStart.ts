import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function levelStartInit(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, onNewLevel);
}
function onNewLevel() {
  if (globals.$rules.includes(ruleDescriptors[2])) {
    Isaac.GetPlayer().AddGoldenBomb();
  }
  if (globals.$rules.includes(ruleDescriptors[4])) {
    Isaac.GetPlayer().AddGoldenKey();
  }
}
