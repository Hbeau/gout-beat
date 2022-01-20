import { upgradeMod } from "isaacscript-common";
import { init as entityKillInit } from "./callbacks/entityKill";
import { initGridEntityInit } from "./callbacks/gridEntityInit";
import { init as gridEntityInit } from "./callbacks/gridEntityUpdate";
import { pickupInit } from "./callbacks/pickup";
import { postRenderInit } from "./callbacks/postRender";
import { PickupModifiers } from "./pickupModifiers";

const MOD_NAME = "Gout Beat";

export function main(): void {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events
  const mod = RegisterMod(MOD_NAME, 1);

  const modUpgraded = upgradeMod(mod);
  // Set a callback function that corresponds to when a new run is started
  mod.AddCallback(ModCallbacks.MC_POST_GAME_STARTED, postGameStarted);
  mod.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, boostIsaacForTest);
  gridEntityInit(modUpgraded);
  entityKillInit(mod);
  postRenderInit(mod);
  pickupInit(mod);
  initGridEntityInit(modUpgraded);
}

function boostIsaacForTest() {
  Isaac.GetPlayer().Damage = 400;
}

function postGameStarted() {

  Isaac.ExecuteCommand("goto s.default.11:101");

  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_COLLECTIBLE,
    CollectibleType.COLLECTIBLE_DEATH_CERTIFICATE,
    Vector(400, 300),
    Vector(0, 0),
    undefined,
  );
}
