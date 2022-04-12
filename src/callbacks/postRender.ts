import globals from "../globals";
import { ObjectiveSwitch } from "../types/objectiveSwitch";
import { RuleSwitch } from "../types/ruleSwitch";
import { Steps } from "../types/selection";
import { DestinationFromObjective } from "../utils/destinationFromObjective";
import { IconFromRule } from "../utils/iconFromRule";

const HALF_FADED_COLOR = Color(1, 1, 1, 0.5, 0, 0, 0);
const defaultX = 40;
const defaultY = 20;

export function postRenderInit(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_POST_RENDER, displayChallengeText);
}

function displayChallengeText() {
  if (globals.$step === Steps.OBJECTIVE_SELECTION) {
    globals.$bossPlates.forEach((plate) => renderBossSprite(plate));
  }
  if (globals.$step === Steps.RULE_SELECTION) {
    globals.$rulesPlates.forEach((plate) => renderRuleSprite(plate));
  }
  if (globals.$showRules || globals.$step === Steps.RULE_SELECTION) {
    if (globals.$objective !== undefined) {
      renderText(globals.$objective, defaultX, defaultY - 10);
      globals.$rules.forEach((rule, index) => {
        renderText(rule.gameText, defaultX, defaultY + 10 * index);
      });
    }
  }
  // const entities = Isaac.GetRoomEntities();
  // for (const entity of entities) {
  //   const playerRenderPos = Isaac.WorldToRenderPosition(entity.Position);
  //   Isaac.RenderText(
  //     `${entity.Position.X}.${entity.Position.Y}`,
  //     playerRenderPos.X,
  //     playerRenderPos.Y,
  //     1,
  //     1,
  //     1,
  //     255,
  //   );
  // }
}

function renderText(text: string, x: int, y: int) {
  Isaac.RenderText(text, defaultX + x, defaultY + y, 1, 1, 1, 255);
}

function renderBossSprite(obj: ObjectiveSwitch) {
  const bossSprites = Sprite();
  bossSprites.Load("gfx/ui/hudpickups.anm2", true);
  bossSprites.SetFrame("Destination", DestinationFromObjective(obj.objective));
  bossSprites.Offset = Vector(-8, -16);
  bossSprites.Color = HALF_FADED_COLOR;
  const renderPos = Isaac.WorldToRenderPosition(obj.plate.Position);
  bossSprites.Render(renderPos, Vector.Zero, Vector.Zero);
}
function renderRuleSprite(obj: RuleSwitch) {
  const bossSprites = Sprite();
  bossSprites.Load("gfx/ui/hudpickups.anm2", true);
  bossSprites.SetFrame("Idle", IconFromRule(obj.rules));
  bossSprites.Offset = Vector(-8, -16);
  bossSprites.Color = HALF_FADED_COLOR;
  const renderPos = Isaac.WorldToRenderPosition(obj.plate.Position);
  bossSprites.Render(renderPos, Vector.Zero, Vector.Zero);
}
