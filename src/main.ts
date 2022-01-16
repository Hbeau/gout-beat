import { upgradeMod } from "isaacscript-common";
import { init as entityKillInit } from "./callbacks/entityKill";
import { initGridEntityInit } from "./callbacks/gridEntityInit";
import { init as gridEntityInit } from "./callbacks/gridEntityUpdate";
import { Objectives } from "./objectives";
import { PickUpModifiers } from "./pickUpModifiers";

const MOD_NAME = "Gout Beat";

let objective: Objectives;

export function main(): void {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events
  const mod = RegisterMod(MOD_NAME, 1);

  const modUpgraded = upgradeMod(mod);
  // Set a callback function that corresponds to when a new run is started
  mod.AddCallback(ModCallbacks.MC_POST_GAME_STARTED, postGameStarted);
  mod.AddCallback(ModCallbacks.MC_PRE_PICKUP_COLLISION, onPickUp);
  mod.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, boostIsaacForTest);
  gridEntityInit(modUpgraded);
  entityKillInit(mod);
  initGridEntityInit(modUpgraded);
}

function onPickUp(entity: EntityPickup, collider: Entity) {
  if (collider.Type === EntityType.ENTITY_PLAYER) {
    if (
      entity.Variant === PickupVariant.PICKUP_COIN &&
      Isaac.GetPlayer().GetData().coinState === PickUpModifiers.HURT
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
    if (
      entity.Variant === PickupVariant.PICKUP_BOMB &&
      Isaac.GetPlayer().GetData().bombState === PickUpModifiers.HURT
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
    if (
      entity.Variant === PickupVariant.PICKUP_KEY &&
      Isaac.GetPlayer().GetData().keyState === PickUpModifiers.HURT
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
    if (
      entity.Variant === PickupVariant.PICKUP_HEART &&
      Isaac.GetPlayer().GetData().keyState === PickUpModifiers.HURT
    ) {
      Isaac.GetPlayer().TakeDamage(2, 0, EntityRef(entity), 0);
    }
  }
}

function boostIsaacForTest() {
  Isaac.GetPlayer().Damage = 400;
}

function postGameStarted() {
  objective = Objectives.MOM_FOOT;

  Isaac.ExecuteCommand("goto s.default.11:101");

  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_COLLECTIBLE,
    CollectibleType.COLLECTIBLE_DEATH_CERTIFICATE,
    Vector(400, 300),
    Vector(0, 0),
    undefined,
  );
}
