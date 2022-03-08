import { BombSwitchState } from "./bombSwitchState";
import { CoinSwitchState } from "./coinSwitchState";
import globals from "./globals";
import { KeySwitchState } from "./keySwitchState";
import { TogglePlateCallback } from "./togglePlateCallback";
import { GoutBeatEntities } from "./types/goutBeatEntities";
import { SelectionStep } from "./types/selectionStep";

const buttons = {
  bombButton: BombSwitchState.default(),
  keyButton: KeySwitchState.default(),
  coinButton: CoinSwitchState.default(),
};

export function togglePlate(plate: GridEntityPressurePlate | undefined) {
  if (plate?.GetVariant() === GoutBeatEntities.BOMB_SWITCH) {
    plateOnCallback(plate, buttons.bombButton.callback);
    plateOffCallback(plate, () => {
      buttons.bombButton = buttons.bombButton.next();
      buttons.bombButton.resetSwitch(plate);
    });
  }
  if (plate?.GetVariant() === GoutBeatEntities.KEY_SWITCH) {
    plateOnCallback(plate, buttons.keyButton.callback);
    plateOffCallback(plate, () => {
      buttons.keyButton = buttons.keyButton.next();
      buttons.keyButton.resetSwitch(plate);
    });
  }
  if (plate?.GetVariant() === GoutBeatEntities.COIN_SWITCH) {
    plateOnCallback(plate, buttons.coinButton.callback);
    plateOffCallback(plate, () => {
      buttons.coinButton = buttons.coinButton.next();
      buttons.coinButton.resetSwitch(plate);
    });
  }
  if (plate?.GetVariant() === GoutBeatEntities.BOSS_SWITCH) {
    plateOnCallback(plate, (player, bossPlate) => {
      globals.$objective = globals.$bossPlates.find(
        (bossSwitch) =>
          bossSwitch.plate.GetGridIndex() === bossPlate.GetGridIndex(),
      )?.objective;
      globals.$step = SelectionStep.RULE_SELECTION;
      Isaac.ExecuteCommand("goto s.default.13");
    });
    plateOffCallback(plate, (player, pp) => {
      pp.State = PressurePlateState.UNPRESSED;
      globals.$bossPlates
        .filter((p) => p.objective !== globals.$objective)
        .forEach((entity) => {
          entity.plate.GetSprite().Play("Off", true);
        });
    });
  }
}

function plateOnCallback(
  plate: GridEntityPressurePlate | undefined,
  callback: TogglePlateCallback,
) {
  if (
    plate?.State === PressurePlateState.PRESSURE_PLATE_PRESSED &&
    plate?.GetSaveState().VarData !== 1 &&
    Isaac.GetPlayer().Position.Distance(plate.Position) < 50
  ) {
    plate.GetSaveState().VarData = 1;
    callback(Isaac.GetPlayer(), plate);
  }
}
function plateOffCallback(
  plate: GridEntityPressurePlate | undefined,
  callback: TogglePlateCallback,
) {
  if (
    plate?.State === PressurePlateState.PRESSURE_PLATE_PRESSED &&
    plate?.GetSaveState().VarData === 1 &&
    Isaac.GetPlayer().Position.Distance(plate.Position) > 50
  ) {
    Isaac.ConsoleOutput(`${plate.GetType()} is pressed`);

    plate.GetSaveState().VarData = 0;
    callback(Isaac.GetPlayer(), plate);
  }
}
