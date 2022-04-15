import { sfxManager } from "isaacscript-common";
import globals from "../globals";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";
import { Steps } from "../types/selection";
import { IsNotHistory } from "../utils/utils";

export function entitySpawnInit(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_POST_PICKUP_UPDATE, OnPickUpdate);
  mod.AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN, replaceBigChest);
}

function OnPickUpdate(entity: EntityPickup) {
  if (
    entity.Variant === PickupVariant.PICKUP_PILL &&
    globals.$rules.includes(ruleDescriptors[9])
  ) {
    swallowPill(entity);
    poof(entity);
  }
  if (
    entity.Variant === PickupVariant.PICKUP_COLLECTIBLE &&
    IsNotHistory(entity.SubType) &&
    globals.$step === Steps.SELECTION_COMPLETE &&
    globals.$rules.includes(ruleDescriptors[11])
  ) {
    pickupCollectible(entity);
    poof(entity);
  }
}
function poof(entity: Entity) {
  entity.Remove();
  Isaac.Spawn(
    EntityType.ENTITY_EFFECT,
    EffectVariant.POOF01,
    0,
    entity.Position,
    Vector.Zero,
    undefined,
  );
}

function pickupCollectible(entity: EntityPickup) {
  const collectible = entity.SubType;
  Isaac.GetPlayer().AddCollectible(collectible);
  const itemConfig = Isaac.GetItemConfig().GetCollectible(collectible);
  if (itemConfig !== undefined) {
    Game().GetHUD().ShowItemText(Isaac.GetPlayer(), itemConfig);
  }
  entity.PlayPickupSound();
  Isaac.Spawn(
    EntityType.ENTITY_EFFECT,
    EffectVariant.POOF01,
    0,
    entity.Position,
    Vector.Zero,
    undefined,
  );
  Isaac.GetPlayer().AnimateCollectible(collectible);
}

function swallowPill(entity: EntityPickup) {
  const g = Game();
  const player = Isaac.GetPlayer();
  const effect = g.GetItemPool().GetPillEffect(entity.SubType, player);
  if (effect !== PillEffect.PILLEFFECT_NULL) {
    player.UsePill(effect, entity.SubType);
    player.AnimatePill(entity.SubType);
    player.EvaluateItems();
    sfxManager.Play(GoutBeatEntities.PILL);
  }
  return [EntityType.ENTITY_EFFECT, EffectVariant.POOF01, 0, 0];
}

// eslint-disable-next-line consistent-return
function replaceBigChest(
  entityType: EntityType,
  variant: int,
): void | [number, number, number, number] {
  if (
    entityType === EntityType.ENTITY_PICKUP &&
    variant === PickupVariant.PICKUP_BIGCHEST &&
    globals.$victory
  ) {
    return [
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_COLLECTIBLE,
      GoutBeatEntities.WOODEN_PIPE,
      0,
    ];
  }
}
