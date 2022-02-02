import { upgradeMod } from "isaacscript-common";
import { init as entityKillInit } from "./callbacks/entityKill";
import { entitySpawnInit } from "./callbacks/entitySpawn";
import { initGridEntityInit } from "./callbacks/gridEntityInit";
import { init as gridEntityInit } from "./callbacks/gridEntityUpdate";
import { pickupInit } from "./callbacks/pickup";
import { initPostItemPickup } from "./callbacks/postItemPickup";
import { initPostNewRoom } from "./callbacks/postNewRoom";
import { postRenderInit } from "./callbacks/postRender";
import globals from "./globals";
import { GoutBeatEntities } from "./types/goutBeatEntities";

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
  initGridEntityInit(modUpgraded);
  initPostItemPickup(modUpgraded);
}

function boostIsaacForTest() {
  Isaac.GetPlayer().Damage = 400;
}

function postGameStarted() {
  globals.$bossPlates = [];
  globals.$rules = []

  Isaac.ExecuteCommand("goto s.default.11:101");

  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_COLLECTIBLE,
    GoutBeatEntities.WOODEN_PIPE,
    Vector(400, 300),
    Vector(0, 0),
    undefined,
  );
}
