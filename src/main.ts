import { upgradeMod } from "isaacscript-common";
import { init as entityKillInit } from "./callbacks/entityKill";
import { entitySpawnInit } from "./callbacks/entitySpawn";
import { init as gridEntityInit } from "./callbacks/gridEntityUpdate";
import { initInputAction } from "./callbacks/inputAction";
import { levelStartInit } from "./callbacks/levelStart";
import { initUseItem } from "./callbacks/onItemUse";
import { registerRemoveTear } from "./callbacks/onTearFired";
import { pickupInit } from "./callbacks/pickup";
import { initStartItemCache } from "./callbacks/postEntityRemove";
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
  gridEntityInit(modUpgraded);
  entityKillInit(mod);
  postRenderInit(mod);
  pickupInit(mod);
  entitySpawnInit(mod);
  levelStartInit(mod);
  initPostNewRoom(mod);
  initPostItemPickup(modUpgraded);
  initInputAction(mod);
  initStartItemCache(mod);
  initUseItem(mod);
  registerRemoveTear(mod);
}

