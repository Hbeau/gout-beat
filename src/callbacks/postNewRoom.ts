import globals from "../globals";
import { reloadTheBeast } from "../preventEnds";
import { GoutBeatEntities } from "../types/goutBeatEntities";
import { Objectives, Rules, Steps } from "../types/selection";

export function initPostNewRoom(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, initSelectRoom);
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, postTheBeastRoom);
}

const RULE_PLATE_INDEX = [34, 36, 54, 52, 50];
const BOSS_PLATES_INDEX = [37, 67, 54, 84, 71, 50, 80, 63];

function initSelectRoom() {
  const roomId = Game().GetLevel().GetCurrentRoomIndex();
  if (globals.$step !== Steps.SELECTION_COMPLETE) {
    if (roomId === -3) {
      const room = Game().GetRoom();
      if (globals.$step === Steps.RULE_SELECTION) {
        clearRoom(room);
        setupRulesRoom(room);
      }
      if (globals.$step === Steps.OBJECTIVE_SELECTION) {
        clearRoom(room);
        setupBossRoom(room);
      }
    }
    if(globals.$step === Steps.RULE_SELECTION && roomId === 84){
      globals.$step = Steps.SELECTION_COMPLETE
    }

  }
}
function postTheBeastRoom() {
  if (globals.$victory && Game().GetLevel().GetStage() === 13) {
    reloadTheBeast();
  }
}

function setupBossRoom(room: Room) {
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
  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_COLLECTIBLE,
    CollectibleType.COLLECTIBLE_DEATH_CERTIFICATE,
    Vector(320, 300),
    Vector(0, 0),
    undefined,
  );
}
function clearRoom(room: Room) {
  for (let i = 0; i < 110; i++) {
    const pp = room.GetGridEntity(i)?.ToPressurePlate();
    pp?.Destroy(true);
  }
}
