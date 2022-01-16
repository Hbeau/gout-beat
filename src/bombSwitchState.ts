import { PickUpModifiers } from "./pickUpModifiers";
import { SwitchVariant } from "./switchVariant";

export class BombSwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(
      Isaac.GetEntityVariantByName("BombSwitchDefault"),
      "gfx/grid/grid_bomb_switch_default.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.GetData().bombState = PickUpModifiers.NORMAL;
        player.RemoveGoldenBomb();
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
      },
      () => BombSwitchState.next(),
    ),
    new SwitchVariant(
      Isaac.GetEntityVariantByName("BombSwitchRed"),
      "gfx/grid/grid_bomb_switch_red.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.AnimateSad();
        player.GetData().bombState = PickUpModifiers.HURT;
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
      },
      () => BombSwitchState.next(),
    ),
    new SwitchVariant(
      Isaac.GetEntityVariantByName("BombSwitchYellow"),
      "gfx/grid/grid_bomb_switch_Yellow.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.AnimateHappy();
        player.GetData().bombState = PickUpModifiers.INFINITE;
        player.AddGoldenBomb();
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
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
