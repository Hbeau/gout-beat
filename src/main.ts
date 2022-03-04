import { initArray, upgradeMod } from "isaacscript-common";
import { init as entityKillInit } from "./callbacks/entityKill";
import { entitySpawnInit } from "./callbacks/entitySpawn";
import { initGridEntityCollision } from "./callbacks/gridEntitycollision";
import { init as gridEntityInit } from "./callbacks/gridEntityUpdate";
import { pickupInit } from "./callbacks/pickup";
import { postGameStarted } from "./callbacks/postGameStarted";
import { initPostItemPickup } from "./callbacks/postItemPickup";
import { initPostNewRoom } from "./callbacks/postNewRoom";
import { postRenderInit } from "./callbacks/postRender";

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
  entitySpawnInit(mod);
  initPostNewRoom(mod);
  initPostItemPickup(modUpgraded);
  initGridEntityCollision(modUpgraded);
}

function boostIsaacForTest() {
  Isaac.GetPlayer().Damage = 400;
}
