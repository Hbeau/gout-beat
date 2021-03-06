import {
  game,
  getRoomName,
  inDoubleTrouble,
  inStartingRoom,
  sfxManager,
} from "isaacscript-common";
import globals from "../globals";
import { reloadTheBeast } from "../preventEnds";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { Objectives, Rules, Steps } from "../types/selection";
import { STARTER_ITEMS, STARTER_TRINKETS } from "../types/StarterItems";

export function initPostNewRoom(mod: Mod): void {
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, initSelectRoom);
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, postTheBeastRoom);
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, playSoundOnEnter);
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, setupShishEngineRoom);
}

const RULE_PLATE_INDEX = [37, 54, 84, 71, 80, 63];
const BOSS_PLATES_INDEX = [37, 67, 54, 84, 71, 50, 80, 63];

function playSoundOnEnter() {
  if (inDoubleTrouble()) {
    sfxManager.Play(GoutBeatEntities.COMBIEN_DE_MONSTRO);
  }
}

function initSelectRoom() {
  if (globals.$step !== Steps.SELECTION_COMPLETE) {
    if (getRoomName().includes("select")) {
      const room = Game().GetRoom();
      if (globals.$step === Steps.STATER_SELECTION) {
        clearRoom(room);
        setupStarterRoom();
      }
      if (globals.$step === Steps.RULE_SELECTION) {
        globals.$showRules = true;
        clearRoom(room);
        setupRulesRoom(room);
      }
      if (globals.$step === Steps.OBJECTIVE_SELECTION) {
        globals.$showRules = true;
        clearRoom(room);
        setupBossRoom(room);
      }
    } else if (inStartingRoom()) {
      if (globals.$step === Steps.STATER_SELECTION) {
        globals.$step = Steps.SELECTION_COMPLETE;
        globals.$showRules = false;
        return;
      }
      if (globals.$step === Steps.RULE_SELECTION) {
        globals.$step = Steps.STATER_SELECTION;
        Isaac.ExecuteCommand("goto s.default.11:101");
        return;
      }
      if (globals.$step === Steps.OBJECTIVE_SELECTION) {
        globals.$step = Steps.RULE_SELECTION;
        Isaac.ExecuteCommand("goto s.default.11:101");
      }
    }
  }
  if (getRoomName().includes("shishengine")) {
    game.ShowHallucination(0, 100);
    Isaac.GetPlayer().Position = Vector(540, 230);
  }
}
function postTheBeastRoom() {
  if (globals.$victory && Game().GetLevel().GetStage() === 13) {
    reloadTheBeast();
  }
}

function setupBossRoom(room: Room) {
  Game().GetHUD().ShowFortuneText("Choose a destination");
  BOSS_PLATES_INDEX.forEach((gridIndex, index) => {
    const plate = Isaac.GridSpawn(
      GridEntityType.GRID_PRESSURE_PLATE,
      6194,
      room.GetGridPosition(gridIndex),
      true,
    );
    if (plate !== undefined) {
      const objective = Object.values(Objectives)[index];
      globals.$bossPlates.push({ plate, objective });
    }
  });
}
function setupRulesRoom(room: Room) {
  Game().GetHUD().ShowFortuneText("Select rules for the run");
  RULE_PLATE_INDEX.forEach((gridIndex, index) => {
    const plate = Isaac.GridSpawn(
      GridEntityType.GRID_PRESSURE_PLATE,
      GoutBeatEntities.BOMB_SWITCH,
      room.GetGridPosition(gridIndex),
      true,
    );
    if (plate !== undefined) {
      const rules = Object.values(Rules)[index];
      globals.$rulesPlates.push({ plate, rules });
    }
  });
}

function setupStarterRoom() {
  Game()
    .GetHUD()
    .ShowFortuneText("Get starter items", "And start you adventure");

  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_COLLECTIBLE,
    GoutBeatEntities.SHISH_ENGINE,
    Vector(320, 320),
    Vector(0, 0),
    undefined,
  );
}
function setupShishEngineRoom() {
  if (getRoomName().includes("shishengine")) {
    STARTER_ITEMS.forEach((pos, item) => {
      Isaac.Spawn(
        EntityType.ENTITY_PICKUP,
        PickupVariant.PICKUP_COLLECTIBLE,
        item,
        pos,
        Vector.Zero,
        undefined,
      );
    });
    STARTER_TRINKETS.forEach((pos, trinket) => {
      Isaac.Spawn(
        EntityType.ENTITY_PICKUP,
        PickupVariant.PICKUP_TRINKET,
        trinket,
        pos,
        Vector.Zero,
        undefined,
      );
    });
  }
}

function clearRoom(room: Room) {
  for (let i = 0; i < 110; i++) {
    const pp = room.GetGridEntity(i)?.ToPressurePlate();
    pp?.Destroy(true);
  }
}
