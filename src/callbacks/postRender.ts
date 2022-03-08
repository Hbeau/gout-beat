import globals from "../globals";
import { ObjectiveSwitch } from "../types/objectiveSwitch";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";
import { SelectionStep } from "../types/selectionStep";
import { DestinationFromObjective } from "../utils/destinationFromObjective";

const HALF_FADED_COLOR = Color(1, 1, 1, 0.5, 0, 0, 0);
const defaultX = 40;
const defaultY = 35;

export function postRenderInit(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_RENDER, displayChallengeText);
}

function displayChallengeText() {
  if (globals.$step === SelectionStep.RULE_SELECTION) {
    globals.$rules.forEach((rule, index) => {
      Isaac.RenderText(
        ruleDescriptors[rule].gameText,
        defaultX,
        defaultY + 10 * index,
        1,
        1,
        1,
        255,
      );
    });
  }
  Isaac.RenderText(
    `${globals.$step?.toString()}`,
    defaultX + 250,
    defaultY - 10,
    1,
    1,
    1,
    255,
  );
  if (globals.$objective !== undefined) {
    Isaac.RenderText(globals.$objective, defaultX, defaultY - 10, 1, 1, 1, 255);
  }

  const entities = Isaac.GetRoomEntities();
  for (const entity of entities) {
    const playerRenderPos = Isaac.WorldToRenderPosition(entity.Position);
    Isaac.RenderText(
      `${entity.Type}.${entity.Variant}`,
      playerRenderPos.X,
      playerRenderPos.Y,
      1,
      1,
      1,
      255,
    );
  }
  if (globals.$step === SelectionStep.OBJECTIVE_SELECTION) {
    globals.$bossPlates.forEach((plate) => renderBossSprite(plate));
  }
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
