import { PickUpModifiers } from "./pickUpModifiers";
import { SwitchVariant } from "./switchVariant";

export class CoinSwitchState {
  public static variants: SwitchVariant[] = [
    new SwitchVariant(Isaac.GetEntityVariantByName("CoinSwitchDefault"),
      "gfx/grid/grid_coin_switch_default.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.GetData().coinState = PickUpModifiers.NORMAL;
        player.AddCoins(-999);
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
      },
      () => CoinSwitchState.next()
    ),
    new SwitchVariant( Isaac.GetEntityVariantByName("CoinSwitchRed"),
      "gfx/grid/grid_coin_switch_red.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.AnimateSad();
        player.GetData().coinState = PickUpModifiers.HURT;
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
      },
       () => CoinSwitchState.next()
      ),
      new SwitchVariant( Isaac.GetEntityVariantByName("CoinSwitchYellow"),
      "gfx/grid/grid_coin_switch_Yellow.anm2",
      (player: EntityPlayer, plate: GridEntityPressurePlate) => {
        player.AnimateHappy();
        player.GetData().coinState = PickUpModifiers.INFINITE;
        player.AddCoins(999);
        Isaac.DebugString(`variant : ${plate.GetVariant()}`);
      },
      () => CoinSwitchState.next()
      )
  ];

  private static index = 0;

  public static default(): SwitchVariant {
    return this.variants[0];
  }

  public static next(): SwitchVariant {
    CoinSwitchState.index +=1;
    return this.variants[CoinSwitchState.index % (this.variants.length)];
  }
}
