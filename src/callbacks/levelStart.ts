import globals from "../globals";
import { Rules } from "../types/rules/rules";

export function levelStartInit(mod: Mod){
  mod.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL,onNewLevel);
}
function onNewLevel(){
  if(globals.$rules.includes(Rules.RULE_BOMB_INFINITE)){
    Isaac.GetPlayer().AddGoldenBomb();
  }
  if(globals.$rules.includes(Rules.RULE_KEY_INFINITE)){
    Isaac.GetPlayer().AddGoldenKey();
  }
}