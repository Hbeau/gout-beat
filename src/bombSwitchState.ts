import globals from "./globals";
import { Rules } from "./types/rules/rules";
import { SwitchVariant } from "./switchVariant";

export class BombSwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      "gfx/grid/grid_bomb_switch_default.anm2",
      (player: EntityPlayer) => {
        globals.$rules[1] = Rules.RULE_BOMB_NORMAL;
        player.RemoveGoldenBomb();
      },
      () => BombSwitchState.next(),
    ),
    new SwitchVariant(
      "gfx/grid/grid_bomb_switch_red.anm2",
      (player: EntityPlayer) => {
        player.AnimateSad();
        globals.$rules[1]=Rules.RULE_BOMB_HURT;
      },
      () => BombSwitchState.next(),
    ),
    new SwitchVariant(
      "gfx/grid/grid_bomb_switch_Yellow.anm2",
      (player: EntityPlayer) => {
        player.AnimateHappy();
        globals.$rules[1]=Rules.RULE_BOMB_INFINITE;
        player.AddGoldenBomb();
      },
      () => BombSwitchState.next(),
    ),
  ];

  private static index = 0;

  public static default(): SwitchVariant {
    return this.variants[0];
  }

  public static next(): SwitchVariant {
    BombSwitchState.index += 1;
    return this.variants[BombSwitchState.index % this.variants.length];
  }
}
