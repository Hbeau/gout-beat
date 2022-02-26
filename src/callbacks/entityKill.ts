import globals from "../globals";
import { postEntityKillMegaSatan2, postEntityTheLamb } from "../preventEnds";
import { Objectives } from "../types/RaceGoal";

export function init(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_ENTITY_KILL, theLamb, EntityType.ENTITY_THE_LAMB);
  mod.AddCallback(ModCallbacks.MC_POST_ENTITY_KILL,megaSatan,EntityType.ENTITY_MEGA_SATAN_2,
  );
}

function theLamb(entity: Entity) {
  postEntityTheLamb(entity);
}


function megaSatan(entity: Entity) {
  postEntityKillMegaSatan2(entity);
}
