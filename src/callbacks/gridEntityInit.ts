import { ModCallbacksCustom, ModUpgraded } from "isaacscript-common";
import { GoutBeatEntities } from "../types/goutBeatEntities";

export function initGridEntityInit(mod : ModUpgraded){
 // mod.AddCallbackCustom(ModCallbacksCustom.MC_POST_GRID_ENTITY_INIT, button, GridEntityType.GRID_PRESSURE_PLATE);
}
function button(gridEntity : GridEntity){
    if(gridEntity.GetVariant() === GoutBeatEntities.COIN_SWITCH){
      gridEntity.GetSprite().Load("gfx/grid/grid_coin_switch_default.anm2", true)
    }
    if(gridEntity.GetVariant() === GoutBeatEntities.BOMB_SWITCH){
      gridEntity.GetSprite().Load("gfx/grid/grid_bomb_switch_default.anm2", true)
    }
    if(gridEntity.GetVariant() === GoutBeatEntities.KEY_SWITCH){
      gridEntity.GetSprite().Load("gfx/grid/grid_key_switch_default.anm2", true)
    }
}