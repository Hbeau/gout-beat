import { log } from "isaacscript-common";
import { BombSwitchState } from "./bombSwitchState";
import { CoinSwitchState } from "./coinSwitchState";
import { KeySwitchState } from "./keySwitchState";
import { TogglePlateCallback } from "./togglePlateCallback";

const buttons = {
  bombButton : BombSwitchState.default(),
  keyButton : KeySwitchState.default(),
  coinButton : CoinSwitchState.default()

}

export function togglePlate( plate: GridEntityPressurePlate | undefined){
  if (plate?.GetVariant() === buttons.bombButton.variant ){
    plateOnCallback(plate, buttons.bombButton.callback)
    plateOffCallback(plate, () => {
      buttons.bombButton = buttons.bombButton.next();
      buttons.bombButton.resetSwitch(plate);
    });
  }
  if (plate?.GetVariant() === buttons.keyButton.variant ){
    plateOnCallback(plate, buttons.keyButton.callback)
    plateOffCallback(plate, () => {
      buttons.keyButton = buttons.keyButton.next();
      buttons.keyButton.resetSwitch(plate);
    });
  }
  if (plate?.GetVariant() === buttons.coinButton.variant ){
    plateOnCallback(plate, buttons.coinButton.callback)
    plateOffCallback(plate, () => {
      buttons.coinButton = buttons.coinButton.next();
      buttons.coinButton.resetSwitch(plate);
    });
  }

}

function plateOnCallback(
  plate: GridEntityPressurePlate | undefined,
  callback: TogglePlateCallback,
) {
  if (
    plate?.State === PressurePlateState.PRESSURE_PLATE_PRESSED &&
    plate?.GetSaveState().VarData !== 1
  ) {
    plate.GetSaveState().VarData = 1;
    callback(Isaac.GetPlayer(), plate);
  }
}
function plateOffCallback(
  plate: GridEntityPressurePlate | undefined,
  callback: { (player:EntityPlayer, plate: GridEntity): void},
) {
  if (
    plate?.State === PressurePlateState.PRESSURE_PLATE_PRESSED &&
    Isaac.GetPlayer().Position.Distance(plate.Position) > 50
  ) {
    plate.GetSaveState().VarData = 0;
    callback(Isaac.GetPlayer(), plate);
  }
}