import { sfxManager } from "isaacscript-common";
import globals from "../globals";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";
import { Steps } from "../types/selection";

export function postGameStarted(): void {
  globals.$bossPlates = [];
  globals.$rulesPlates = [];
  globals.$objective = undefined;
  globals.$rules = [
    ruleDescriptors[2],
    ruleDescriptors[8],
    ruleDescriptors[5],
    ruleDescriptors[10],
    ruleDescriptors[12],
    ruleDescriptors[15],
  ];
  Isaac.ExecuteCommand("goto s.default.13");
  globals.$step = Steps.OBJECTIVE_SELECTION;
  Isaac.GetPlayer().AddNullCostume(
    Isaac.GetCostumeIdByPath("gfx/characters/8265_goutbeat.anm2"),
  );
  sfxManager.Preload(Isaac.GetSoundIdByName("Run Victory"));
  const l = Game().GetLevel();
  if (l.GetAbsoluteStage() === 1) {
    const curse = 1 << (GoutBeatEntities.CURSE_OF_TUESDAY - 1);
    l.AddCurse(curse, false);
  }
}
