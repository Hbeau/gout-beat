export function entitySpawnInit(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_PRE_ENTITY_SPAWN, onPreEntitySpawn);
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
