import {
  ModCallbacksCustom,
  ModUpgraded,
  PickingUpItem,
  sfxManager,
  smeltTrinket,
} from "isaacscript-common";
import globals from "../globals";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { Steps } from "../types/selection";

export function initPostItemPickup(mod: ModUpgraded): void {
  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_ITEM_PICKUP,
    onItemPickup,
    ItemType.ITEM_PASSIVE,
    GoutBeatEntities.WOODEN_PIPE,
  );
  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_ITEM_PICKUP,
    onTrinketPickup,
    ItemType.ITEM_TRINKET,
  );
}
function onItemPickup() {
  sfxManager.Play(GoutBeatEntities.RUN_VICTORY);
  Game().Fadeout(2, FadeoutTarget.RESTART_RUN_LAP);
}

function onTrinketPickup(player: EntityPlayer, pickup: PickingUpItem) {
  if (globals.$step === Steps.STATER_SELECTION) {
    sfxManager.Play(SoundEffect.SOUND_GULP);
    smeltTrinket(player, pickup.subType);
    player.TryRemoveTrinket(pickup.subType);
  }
}
