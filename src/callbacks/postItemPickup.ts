import {
  ModCallbacksCustom,
  ModUpgraded,
  PickingUpItem,
} from "isaacscript-common";
import { GoutBeatEntities } from "../types/goutBeatEntities";

export function initPostItemPickup(mod: ModUpgraded) {
  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_ITEM_PICKUP,
    onItemPickup,
    ItemType.ITEM_PASSIVE,
    GoutBeatEntities.WOODEN_PIPE,
  );
}
function onItemPickup(player: EntityPlayer, pickingUpItem: PickingUpItem) {
  Isaac.DebugString(" get GG+1");
  SFXManager().Play(GoutBeatEntities.RUN_VICTORY);
  Game().Fadeout(0.1, FadeoutTarget.RESTART_RUN_LAP);
}
