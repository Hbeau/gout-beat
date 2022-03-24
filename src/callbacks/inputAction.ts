import globals from "../globals";

export function initInputAction(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_UPDATE, onTabPress);
}

function onTabPress() {
  if (Input.IsActionPressed(ButtonAction.ACTION_MAP, 0)) {
    globals.$showRules = true;
  } else {
    globals.$showRules = false;
  }
}
