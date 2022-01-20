import globals from "./globals";
import { SwitchVariant } from "./switchVariant";
import { Rules } from "./types/rules/rules";

export class CoinSwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      "gfx/grid/grid_coin_switch_default.anm2",
      (player: EntityPlayer) => {
        globals.$rules[0] = Rules.RULE_COIN_NORMAL;
        player.AddCoins(-999);
      },
      () => CoinSwitchState.next(),
    ),
    new SwitchVariant(
      "gfx/grid/grid_coin_switch_red.anm2",
      (player: EntityPlayer) => {
        player.AnimateSad();
        globals.$rules[0] = Rules.RULE_COIN_HURT;
      },
      () => CoinSwitchState.next(),
    ),
    new SwitchVariant(
      "gfx/grid/grid_coin_switch_Yellow.anm2",
      (player: EntityPlayer) => {
        player.AnimateHappy();
        globals.$rules[0] = Rules.RULE_COIN_INFINITE;
        player.AddCoins(999);
      },
      () => CoinSwitchState.next(),
    ),
  ];

  private static index = 0;

  public static default(): SwitchVariant {
    return this.variants[0];
  }

  public static next(): SwitchVariant {
    CoinSwitchState.index += 1;
    return this.variants[CoinSwitchState.index % this.variants.length];
  }
}
