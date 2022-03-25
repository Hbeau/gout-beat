import {
  postEntityKillHush,
  postEntityKillIsaac,
  postEntityKillMegaSatan2,
  postEntityKillMother,
  postEntityKillTheBeast,
  postEntityTheLamb,
} from "../preventEnds";

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

function theBeast(entity: Entity) {
  postEntityKillTheBeast(entity);
}

function megaSatan(entity: Entity) {
  postEntityKillMegaSatan2(entity);
}
