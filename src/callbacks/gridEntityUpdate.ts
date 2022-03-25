import { ModCallbacksCustom, ModUpgraded } from "isaacscript-common";
import { togglePlate } from "../buttons";

export function init(modUpgraded: ModUpgraded): void {
  modUpgraded.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_GRID_ENTITY_UPDATE,
    pressurePlateListener,
    GridEntityType.GRID_PRESSURE_PLATE,
  );
}
function pressurePlateListener(gridEntity: GridEntity) {
  if (gridEntity.GetType() === GridEntityType.GRID_PRESSURE_PLATE) {
    togglePlateCallback(gridEntity.ToPressurePlate());
  }
}

function togglePlateCallback(gridEntity: GridEntityPressurePlate | undefined) {
  togglePlate(gridEntity);
}
