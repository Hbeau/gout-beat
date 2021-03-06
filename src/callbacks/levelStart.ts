import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function levelStartInit(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, onNewLevel);
}
function onNewLevel() {
  if (globals.$rules.includes(ruleDescriptors[1])) {
    Isaac.GetPlayer().AddGoldenBomb();
  }
  if (globals.$rules.includes(ruleDescriptors[4])) {
    Isaac.GetPlayer().AddGoldenKey();
  }
}
