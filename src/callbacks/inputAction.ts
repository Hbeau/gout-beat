import globals from "../globals";
import { ruleDescriptors } from "../types/rules/ruleDescriptions";

export function initInputAction(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_POST_UPDATE, onTabPress);
  mod.AddCallback(
    ModCallbacks.MC_INPUT_ACTION,
    onFirePress,
    InputHook.GET_ACTION_VALUE,
  );
}

function onTabPress() {
  if (Input.IsActionPressed(ButtonAction.ACTION_MAP, 0)) {
    globals.$showRules = true;
  } else {
    globals.$showRules = false;
  }
}
// eslint-disable-next-line consistent-return
function onFirePress(
  _entity: Entity | undefined,
  hook: InputHook,
  action: ButtonAction,
): number | void {
  if (
    hook === InputHook.GET_ACTION_VALUE &&
    globals.$rules.includes(ruleDescriptors[14])
  ) {
    if (action === ButtonAction.ACTION_SHOOTLEFT) {
      return Input.GetActionValue(
        ButtonAction.ACTION_SHOOTRIGHT,
        Isaac.GetPlayer().ControllerIndex,
      );
    }
    if (action === ButtonAction.ACTION_SHOOTRIGHT) {
      return Input.GetActionValue(
        ButtonAction.ACTION_SHOOTLEFT,
        Isaac.GetPlayer().ControllerIndex,
      );
    }
    if (action === ButtonAction.ACTION_SHOOTDOWN) {
      return Input.GetActionValue(
        ButtonAction.ACTION_SHOOTUP,
        Isaac.GetPlayer().ControllerIndex,
      );
    }
    if (action === ButtonAction.ACTION_SHOOTUP) {
      return Input.GetActionValue(
        ButtonAction.ACTION_SHOOTDOWN,
        Isaac.GetPlayer().ControllerIndex,
      );
    }
  }
}
