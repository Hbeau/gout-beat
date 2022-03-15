import globals from "../globals";
import { SwitchVariant } from "../switchVariant";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export class BombSwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      (player: EntityPlayer) => {
        player.AnimateSad();
        globals.$rules[0] = ruleDescriptors[0];
      },
      () => BombSwitchState.next(),
      ),
      new SwitchVariant(
        (player: EntityPlayer) => {
          player.AnimateHappy();
          globals.$rules[0] = ruleDescriptors[1];
          player.AddGoldenBomb();
        },
        () => BombSwitchState.next(),
        ),
        new SwitchVariant(
          (player: EntityPlayer,plate :GridEntityPressurePlate) => {
            globals.$rules[0] = ruleDescriptors[2];
            player.RemoveGoldenBomb();
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
