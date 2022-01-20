import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function postRenderInit(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_RENDER, displayChallengeText);
}
const defaultX = 40;
const defaultY = 35;
function displayChallengeText() {
  globals.$rules.forEach((rule,index)=>{
    Isaac.RenderText(ruleDescriptors[rule].gameText, defaultX , defaultY +  (10 * index), 1, 1, 1, 255);
  });

}
