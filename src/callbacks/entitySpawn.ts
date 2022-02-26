import globals from "../globals";
import { GoutBeatEntities } from "../types/goutBeatEntities";

export function entitySpawnInit(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN, onPreEntitySpawn);
  mod.AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN, replaceBigChest);
}
function onPreEntitySpawn(
  entityType: EntityType,
  variant: int,
  subType: int,
): void | [number, number, number, number] {
  if (
    entityType === EntityType.ENTITY_PICKUP &&
    variant === PickupVariant.PICKUP_PILL
  ) {
    const color: PillColor = subType;
    const effect = Game().GetItemPool().GetPillEffect(color);
    Isaac.GetPlayer().UsePill(effect, color);
    Isaac.GetPlayer().AnimatePill(color);
  }
}
function replaceBigChest( entityType: EntityType,
  variant: int,
  subType: int,
): void | [number, number, number, number] {
  if(
    entityType === EntityType.ENTITY_PICKUP &&
    variant === PickupVariant.PICKUP_BIGCHEST &&
    globals.$victory
  ){
    return [EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_COLLECTIBLE,
      GoutBeatEntities.WOODEN_PIPE,0]
  }
}

