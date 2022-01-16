import { postEntityKillMegaSatan2 } from "../preventEnds";

export function init(mod: Mod){
  mod.AddCallback(ModCallbacks.MC_POST_ENTITY_KILL,
    mom,
    EntityType.ENTITY_MOM);
    mod.AddCallback(ModCallbacks.MC_POST_ENTITY_KILL,
      megaSatan,
      EntityType.ENTITY_MEGA_SATAN_2)
}
function mom(entity: Entity) {
}
function megaSatan(entity:Entity) {
  postEntityKillMegaSatan2(entity)
}