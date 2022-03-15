import globals from "../globals";
import { SwitchVariant } from "../switchVariant";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export class KeySwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      (player: EntityPlayer) => {
        globals.$rules[2] = ruleDescriptors[5];
        player.RemoveGoldenBomb();
      },
      () => KeySwitchState.next(),
    ),
    new SwitchVariant(
      (player: EntityPlayer) => {
        player.AnimateSad();
        globals.$rules[2] = ruleDescriptors[3];
      },
      () => KeySwitchState.next(),
    ),
    new SwitchVariant(
      (player: EntityPlayer) => {
        player.AnimateHappy();
        globals.$rules[2] = ruleDescriptors[4];
        player.AddGoldenKey();
      },
      () => KeySwitchState.next(),
    ),
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
