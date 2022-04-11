import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";
import { Steps } from "../types/selection";

export function postGameStarted(): void {
  globals.$bossPlates = [];
  globals.$rules = [
    ruleDescriptors[2],
    ruleDescriptors[5],
    ruleDescriptors[8],
    ruleDescriptors[10],
    ruleDescriptors[12],
    ruleDescriptors[14],
  ];
  globals.$step = Steps.OBJECTIVE_SELECTION;
  Isaac.ExecuteCommand("goto s.default.13");
  Isaac.GetPlayer().AddNullCostume(
    Isaac.GetCostumeIdByPath("gfx/characters/8265_goutbeat.anm2"),
  );
  Isaac.ConsoleOutput(`sound :${Isaac.GetSoundIdByName("Run Victory")}`);
  SFXManager().Preload(Isaac.GetSoundIdByName("Run Victory"));
  SFXManager().Play(Isaac.GetSoundIdByName("Run Victory"));
}
