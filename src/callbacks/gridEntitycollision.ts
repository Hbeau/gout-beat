import { ModCallbacksCustom, ModUpgraded } from "isaacscript-common";

export function initGridEntityCollision(mod: ModUpgraded) {
  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_GRID_ENTITY_COLLISION,
    onDoor,
    GridEntityType.GRID_DOOR,
  );
}

function onDoor(gridEntity: GridEntity, entity: Entity) {
  Isaac.ConsoleOutput("door entered");
}
