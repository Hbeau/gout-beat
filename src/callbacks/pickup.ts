import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function pickupInit(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_PRE_PICKUP_COLLISION, onPickUp);
}
function onPickUp(entity: EntityPickup, collider: Entity) {
  if (collider.Type === EntityType.ENTITY_PLAYER) {
    if (
      entity.Variant === PickupVariant.PICKUP_COIN &&
      globals.$rules.includes(ruleDescriptors[6])
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
    if (
      entity.Variant === PickupVariant.PICKUP_BOMB &&
      globals.$rules.includes(ruleDescriptors[0])
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
    if (
      entity.Variant === PickupVariant.PICKUP_KEY &&
      globals.$rules.includes(ruleDescriptors[3])
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
  }
}
