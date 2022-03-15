import globals from "../globals";
import { SwitchVariant } from "../switchVariant";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export class PillSwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      (player: EntityPlayer) => {
        globals.$rules[3] = ruleDescriptors[5];

      },
      () => PillSwitchState.next(),
    ),
    new SwitchVariant(
      (player: EntityPlayer) => {
        player.AnimateSad();
        globals.$rules[3] = ruleDescriptors[3];
      },
      () => PillSwitchState.next(),
    ),
  ];

  private static index = 0;

  public static default(): SwitchVariant {
    return this.variants[0];
  }

  public static next(): SwitchVariant {
    PillSwitchState.index += 1;
    return this.variants[PillSwitchState.index % this.variants.length];
  }
}
