import { GoutBeatEntities } from "../types/goutBeatEntities";

export function initUseItem(mod: Mod): void {
  mod.AddCallback(
    ModCallbacks.MC_PRE_USE_ITEM,
    onUseShishEngine,
    GoutBeatEntities.SHISH_ENGINE,
  );
}
function onUseShishEngine() {
  Isaac.GetPlayer().AnimateTeleport(true);
  Isaac.ExecuteCommand("goto s.default.110");
  Isaac.GetPlayer().RemoveCollectible(GoutBeatEntities.SHISH_ENGINE);
}
