import globals from "../globals";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function levelStartInit(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, onNewLevel);
}
function onNewLevel() {
  if (Game().GetLevel().GetAbsoluteStage() === 1) {
    Game().GetLevel().AddCurse(GoutBeatEntities.CURSE_OF_TUESDAY, true);
  }
  if (globals.$rules.includes(ruleDescriptors[2])) {
    Isaac.GetPlayer().AddGoldenBomb();
  }
  if (globals.$rules.includes(ruleDescriptors[4])) {
    Isaac.GetPlayer().AddGoldenKey();
  }
}
