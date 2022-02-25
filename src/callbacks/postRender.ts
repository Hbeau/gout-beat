import globals from "../globals";
import { ObjectiveSwitch } from "../types/objectiveSwitch";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";
import { DestinationFromObjective } from "../utils/destinationFromObjective";

const HALF_FADED_COLOR = Color(1, 1, 1, 0.5, 0, 0, 0);
const defaultX = 40;
const defaultY = 35;

export function postRenderInit(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_RENDER, displayChallengeText);
}

function displayChallengeText() {
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

  if (globals.$objective !== undefined) {
    Isaac.RenderText(globals.$objective, defaultX, defaultY - 10, 1, 1, 1, 255);
  }

  const player = Isaac.GetPlayer();
  const playerRenderPos = Isaac.WorldToRenderPosition(player.Position);
  const index = Game().GetRoom().GetGridIndex(player.Position);
  Isaac.RenderText(
    `${index}`,
    playerRenderPos.X,
    playerRenderPos.Y,
    1,
    1,
    1,
    255,
  );
  globals.$bossPlates.forEach((plate) => renderBossSprite(plate));
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
