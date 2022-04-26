import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function registerRemoveTear(mod:Mod){
  mod.AddCallback(ModCallbacks.MC_POST_FIRE_TEAR, removeTear);
}
function removeTear(tear: EntityTear){
  if(globals.$rules.includes(ruleDescriptors[13])){
    tear.Remove();
  }
}