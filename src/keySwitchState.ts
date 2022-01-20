import globals from "./globals";
import { SwitchVariant } from "./switchVariant";
import { Rules } from "./types/rules/rules";

export class KeySwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      "gfx/grid/grid_key_switch_default.anm2",
      (player: EntityPlayer) => {
        globals.$rules[2]=Rules.RULE_KEY_NORMAL;
        player.RemoveGoldenBomb();
      },
      () => KeySwitchState.next()

    ),
    new SwitchVariant(
      "gfx/grid/grid_key_switch_red.anm2",
      (player: EntityPlayer) => {
        player.AnimateSad();
        globals.$rules[2] =Rules.RULE_KEY_HURT;
      },
      () => KeySwitchState.next()
    ),
    new SwitchVariant(
      "gfx/grid/grid_key_switch_Yellow.anm2",
      (player: EntityPlayer) => {
        player.AnimateHappy();
        globals.$rules[2]=Rules.RULE_KEY_INFINITE;
        player.AddGoldenKey();
      },
      () => KeySwitchState.next()
    )
  ];

  private static index = 0;

  public static default(): SwitchVariant {
    return this.variants[0];
  }

  public static next(): SwitchVariant {
    KeySwitchState.index += 1;
    return this.variants[KeySwitchState.index % this.variants.length];
  }
}
