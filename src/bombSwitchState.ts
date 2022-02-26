import globals from "./globals";
import { SwitchVariant } from "./switchVariant";
import { Rules } from "./types/rules/rules";

export class BombSwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      (player: EntityPlayer) => {
        globals.$rules[1] = Rules.RULE_BOMB_NORMAL;
        player.RemoveGoldenBomb();
      },
      () => BombSwitchState.next(),
    ),
    new SwitchVariant(
      (player: EntityPlayer) => {
        player.AnimateSad();
        globals.$rules[1] = Rules.RULE_BOMB_HURT;
      },
      () => BombSwitchState.next(),
    ),
    new SwitchVariant(
      (player: EntityPlayer) => {
        player.AnimateHappy();
        globals.$rules[1] = Rules.RULE_BOMB_INFINITE;
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
