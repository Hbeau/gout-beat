import { game } from "isaacscript-common";

class Cache {
  public static itemCache: CollectibleType = CollectibleType.COLLECTIBLE_NULL;
}
export function initStartItemCache(mod: Mod): void {
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_REMOVE,
    onPostEntityRemove,
    EntityType.ENTITY_PICKUP,
  );
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, onNewRoom);
}
function onPostEntityRemove(entity: Entity) {
  if (
    game.GetLevel().GetCurrentRoomIndex() === 80 &&
    entity.Type === EntityType.ENTITY_PICKUP &&
    entity.Variant === PickupVariant.PICKUP_COLLECTIBLE
  ) {
    Cache.itemCache = entity.SubType;
    Isaac.DebugString(`just removed : ${Cache.itemCache}`);
  }
}
function onNewRoom() {
  Isaac.DebugString(`just respawned : ${Cache.itemCache}`);
  if (
    game.GetLevel().GetCurrentRoomIndex() === -3 &&
    Cache.itemCache !== CollectibleType.COLLECTIBLE_NULL
  ) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_COLLECTIBLE,
      Cache.itemCache,
      Vector(100, 300),
      Vector.Zero,
      undefined,
    );
    Cache.itemCache = CollectibleType.COLLECTIBLE_NULL;
  }
}
