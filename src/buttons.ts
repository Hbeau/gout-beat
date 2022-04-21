import globals from "./globals";
import { BombSwitchState } from "./switches/bombSwitchState";
import { CoinSwitchState } from "./switches/coinSwitchState";
import { ItemSwitchState } from "./switches/ItemSwitchState";
import { KeySwitchState } from "./switches/keySwitchState";
import { PillSwitchState } from "./switches/PillSwitchState";
import { TearSwitchState } from "./switches/TearSwitchState";
import { SwitchVariant } from "./switchVariant";
import { TogglePlateCallback } from "./togglePlateCallback";
import { GoutBeatEntities } from "./types/goutBeatEntities";
import { Rules } from "./types/selection";

const buttons = new Map<Rules, SwitchVariant>([
  [Rules.BOMB, BombSwitchState.default()],
  [Rules.KEY, KeySwitchState.default()],
  [Rules.COIN, CoinSwitchState.default()],
  [Rules.PILL, PillSwitchState.default()],
  [Rules.ITEM, ItemSwitchState.default()],
  [Rules.TEAR, TearSwitchState.default()],
]);

export function togglePlate(plate: GridEntityPressurePlate | undefined): void {
  if (plate?.GetVariant() === GoutBeatEntities.BOMB_SWITCH) {
    plateOnCallback(
      plate,
      (player: EntityPlayer, rulesPlate: GridEntityPressurePlate) => {
        const rule = globals.$rulesPlates.find(
          (p) => p.plate.GetGridIndex() === rulesPlate.GetGridIndex(),
        )?.rules;

        if (rule !== undefined) {
          buttons.get(rule)?.callback(player, plate);
        }
      },
    );
    plateOffCallback(plate, () => {
      const rule = globals.$rulesPlates.find(
        (p) => p.plate.GetGridIndex() === plate.GetGridIndex(),
      )?.rules;
      if (rule !== undefined) {
        const button = buttons.get(rule)?.next();
        if (button !== undefined) {
          buttons.set(rule, button);
          resetSwitch(plate);
        }
      }
    });
  }
  if (plate?.GetVariant() === GoutBeatEntities.BOSS_SWITCH) {
    plateOnCallback(plate, (_player, bossPlate) => {
      globals.$objective = globals.$bossPlates.find(
        (bossSwitch) =>
          bossSwitch.plate.GetGridIndex() === bossPlate.GetGridIndex(),
      )?.objective;
    });
    plateOffCallback(plate, (_player, pp) => {
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
    plate.GetSaveState().VarData = 0;
    callback(Isaac.GetPlayer(), plate);
  }
}
function resetSwitch(plate: GridEntityPressurePlate | undefined) {
  if (plate !== undefined) {
    plate.State = PressurePlateState.UNPRESSED;
    plate.GetSprite().Play("Off", true);
  }
}
