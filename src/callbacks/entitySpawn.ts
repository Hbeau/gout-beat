import globals from "../globals";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function entitySpawnInit(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN, onPreEntitySpawn);
  mod.AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN, replaceBigChest);
}

// eslint-disable-next-line consistent-return
function onPreEntitySpawn(
  entityType: EntityType,
  variant: int,
  subType: int,
): void | [number, number, number, number] {
  if (
    entityType === EntityType.ENTITY_PICKUP &&
    variant === PickupVariant.PICKUP_PILL &&
    globals.$rules.includes(ruleDescriptors[9])
  ) {
    swallowPill(subType);
    return [EntityType.ENTITY_EFFECT, EffectVariant.POOF01, 0, 0];
  }
  if (
    entityType === EntityType.ENTITY_PICKUP &&
    variant === PickupVariant.PICKUP_COLLECTIBLE &&
    globals.$rules.includes(ruleDescriptors[11])
  ) {
    const room = Game().GetRoom();
    const pool = Game().GetItemPool();
    const itemPoolType = pool.GetPoolForRoom(
      room.GetType(),
      Game().GetSeeds().GetNextSeed(),
    );
    const collectible = pool.GetCollectible(itemPoolType);
    Isaac.GetPlayer().AddCollectible(collectible);
    return [EntityType.ENTITY_EFFECT, EffectVariant.POOF01, 0, 0];
  }
}

function swallowPill(subType: int) {
  const g = Game();
  let color: PillColor;
  if (subType === 0) {
    color = g.GetItemPool().GetPill(g.GetSeeds().GetNextSeed());
  } else {
    color = subType;
  }
  const player = Isaac.GetPlayer();
  const effect = g.GetItemPool().GetPillEffect(color, player);
  if (effect !== PillEffect.PILLEFFECT_NULL) {
    player.UsePill(effect, color);
    player.AnimatePill(color);
    player.EvaluateItems();
  }
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
