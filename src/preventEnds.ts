import { addRoomClearCharges, getNPCs } from "isaacscript-common";
import globals from "./globals";
import { Objectives } from "./types/selection";

export function postEntityKillMegaSatan2(_entity: Entity): void {
  if (_entity.Type === EntityType.ENTITY_MEGA_SATAN_2) {
    if (globals.$objective === Objectives.MEGA_SATAN) {
      globals.$victory = true;
      emulateRoomClear();
    }
  }
}
export function postEntityKillTheBeast(entity: Entity): void {
  if (entity.Type === EntityType.ENTITY_BEAST) {
    const variant = entity.Variant;

    if (variant !== BeastVariant.BEAST) {
      return;
    }
    if (globals.$objective === Objectives.THE_BEAST) {
      globals.$victory = true;
      Isaac.ExecuteCommand("goto x.itemdungeon.666");
    }
  }
}

export function postEntityTheLamb(_entity: Entity): void {
  if (allLambEntitiesDead()) {
    if (globals.$objective === Objectives.THE_LAMB) {
      globals.$victory = true;
      emulateRoomClear();
    }
  }
}
export function postEntityKillIsaac(entity: Entity): void {
  if (entity.Type === EntityType.ENTITY_ISAAC) {
    if (globals.$objective === Objectives.BLUE_BABY && entity.Variant === 1) {
      globals.$victory = true;
      emulateRoomClear();
    }
  }
}
export function postEntityKillHush(entity: Entity): void {
  if (entity.Type === EntityType.ENTITY_HUSH) {
    if (globals.$objective === Objectives.HUSH) {
      globals.$victory = true;
      emulateRoomClear();
    }
  }
}
export function postEntityKillMother(entity: Entity): void {
  if (entity.Type === EntityType.ENTITY_MOTHER && entity.Variant === 10) {
    if (globals.$objective === Objectives.MOTHER) {
      globals.$victory = true;
      emulateRoomClear();
    }
  }
}

function allLambEntitiesDead() {
  const lambs = getNPCs(EntityType.ENTITY_THE_LAMB);
  for (const lamb of lambs) {
    if (lamb.IsInvincible()) {
      continue;
    }

    if (!lamb.IsDead()) {
      return false;
    }
  }

  return true;
}

function emulateRoomClear() {
  // Emulate the room being cleared
  // Spawn a big chest (which will get replaced with a trophy if we happen to be in a race)
  Game().GetRoom().SetClear(true);
  addRoomClearCharges();
  const position = Game().GetRoom().GetCenterPos();
  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_BIGCHEST,
    0,
    position,
    Vector.Zero,
    undefined,
  );
}
export function reloadTheBeast(): void {
  Isaac.Spawn(
    EntityType.ENTITY_BEAST,
    0,
    0,
    Vector.Zero,
    Vector.Zero,
    undefined,
  );

  // Spawn a big chest (which will get replaced with a trophy if we happen to be in a race)
  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_BIGCHEST,
    0,
    Game().GetRoom().GetCenterPos(),
    Vector.Zero,
    undefined,
  );
}
