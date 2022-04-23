import { getRoomName, inStartingRoom } from "isaacscript-common";

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
    getRoomName().includes("shishengine") &&
    entity.Type === EntityType.ENTITY_PICKUP &&
    entity.Variant === PickupVariant.PICKUP_COLLECTIBLE
  ) {
    Cache.itemCache = entity.SubType;
  }
  Isaac.DebugString(`just removed : ${getRoomName()}`);
}
function onNewRoom() {
  if (
    inStartingRoom() &&
    Cache.itemCache !== CollectibleType.COLLECTIBLE_NULL
  ) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_COLLECTIBLE,
      Cache.itemCache,
      Vector(320, 200),
      Vector.Zero,
      undefined,
    );
    Cache.itemCache = CollectibleType.COLLECTIBLE_NULL;
  }
}
