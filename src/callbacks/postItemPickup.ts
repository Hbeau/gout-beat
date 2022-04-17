import {
  ModCallbacksCustom,
  ModUpgraded,
  sfxManager,
} from "isaacscript-common";
import { GoutBeatEntities } from "../types/goutBeatEntities";

export function initPostItemPickup(mod: ModUpgraded): void {
  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_ITEM_PICKUP,
    onItemPickup,
    ItemType.ITEM_PASSIVE,
    GoutBeatEntities.WOODEN_PIPE,
  );
}
function onItemPickup() {
  sfxManager.Play(GoutBeatEntities.RUN_VICTORY);
  Game().Fadeout(2, FadeoutTarget.RESTART_RUN_LAP);
}
