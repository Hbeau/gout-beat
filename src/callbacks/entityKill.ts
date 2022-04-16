import { getRoomName, spawn } from "isaacscript-common";
import globals from "../globals";
import {
  postEntityKillHush,
  postEntityKillIsaac,
  postEntityKillMegaSatan2,
  postEntityKillMother,
  postEntityKillTheBeast,
  postEntityTheLamb,
} from "../preventEnds";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { Objectives } from "../types/selection";

export function init(mod: Mod): void {
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    theLamb,
    EntityType.ENTITY_THE_LAMB,
  );
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    megaSatan,
    EntityType.ENTITY_MEGA_SATAN_2,
  );
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    theBeast,
    EntityType.ENTITY_BEAST,
  );
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    isaac,
    EntityType.ENTITY_ISAAC,
  );
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    isaac,
    EntityType.ENTITY_DELIRIUM,
  );
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    hush,
    EntityType.ENTITY_HUSH,
  );
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    mother,
    EntityType.ENTITY_MOTHER,
  );
  mod.AddCallback(
    ModCallbacks.MC_POST_ENTITY_KILL,
    delirium,
    EntityType.ENTITY_DELIRIUM,
  );

  mod.AddCallback(ModCallbacks.MC_PRE_SPAWN_CLEAN_AWARD, postRoomFinished);
}

function theLamb(entity: Entity) {
  postEntityTheLamb(entity);
}
function isaac(entity: Entity) {
  postEntityKillIsaac(entity);
}

function hush(entity: Entity) {
  postEntityKillHush(entity);
}
function mother(entity: Entity) {
  postEntityKillMother(entity);
}
function delirium(entity: Entity) {
  postEntityKillDelirium(entity);
}

function theBeast(entity: Entity) {
  postEntityKillTheBeast(entity);
}

function megaSatan(entity: Entity) {
  postEntityKillMegaSatan2(entity);
}
function postRoomFinished(rng: RNG, spawnPosition: Vector) {
  if (
    getRoomName().includes("Boss Rush") &&
    globals.$objective === Objectives.BOSS_RUSH
  ) {
    spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_COLLECTIBLE,
      GoutBeatEntities.WOODEN_PIPE,
      spawnPosition,
    );
    return true;
  }
  return false;
}
