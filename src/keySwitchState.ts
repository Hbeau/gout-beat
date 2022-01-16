import { PickUpModifiers } from "./pickUpModifiers";
import { SwitchVariant } from "./switchVariant";

export class KeySwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      Isaac.GetEntityVariantByName("BombSwitchDefault"),
      "gfx/grid/grid_key_switch_default.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.GetData().keyState = PickUpModifiers.NORMAL;
        player.RemoveGoldenBomb();
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
      },
      () => KeySwitchState.next()
    ),
    new SwitchVariant(Isaac.GetEntityVariantByName("BombSwitchRed"),
      "gfx/grid/grid_key_switch_red.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.AnimateSad();
        player.GetData().keyState = PickUpModifiers.HURT;
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
      },
      () => KeySwitchState.next()
    ),
    new SwitchVariant(Isaac.GetEntityVariantByName("BombSwitchYellow"),
      "gfx/grid/grid_key_switch_Yellow.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.AnimateHappy();
        player.GetData().keyState = PickUpModifiers.INFINITE;
        player.AddGoldenKey();
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
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
