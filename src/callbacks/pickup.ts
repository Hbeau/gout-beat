import globals from "../globals";
import { Rules } from "../types/rules/rules";

export function pickupInit(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_PRE_PICKUP_COLLISION, onPickUp);
}
function onPickUp(entity: EntityPickup, collider: Entity) {
  if (collider.Type === EntityType.ENTITY_PLAYER) {
    if (
      entity.Variant === PickupVariant.PICKUP_COIN &&
      globals.$rules.includes(Rules.RULE_COIN_HURT)
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
    if (
      entity.Variant === PickupVariant.PICKUP_BOMB &&
      globals.$rules.includes(Rules.RULE_BOMB_HURT)
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
    if (
      entity.Variant === PickupVariant.PICKUP_KEY &&
      globals.$rules.includes(Rules.RULE_KEY_HURT)
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
  }
}
