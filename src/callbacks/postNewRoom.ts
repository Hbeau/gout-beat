import globals from "../globals";
import { reloadTheBeast } from "../preventEnds";
import { Objectives } from "../types/RaceGoal";
import { SelectionStep } from "../types/selectionStep";

export function initPostNewRoom(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, initSelectRoom);
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM,postTheBeastRoom)
}

const RULE_PLATE_INDEX = [37, 67, 54, 50];
const BOSS_PLATES_INDEX = [37, 67, 54, 84, 71, 50, 80, 63];

function initSelectRoom() {
  const roomId = Game().GetLevel().GetCurrentRoomIndex();
  if (globals.$step !== SelectionStep.SELECTION_COMPLETE) {
    if (roomId === -3) {
      const room = Game().GetRoom();
      if (globals.$step === SelectionStep.STATER_SELECTION) {

      }
      if (globals.$step === SelectionStep.RULE_SELECTION) {
      }
      if (globals.$step === SelectionStep.OBJECTIVE_SELECTION) {
        setupBossRoom(room);
      }


    }
  }
}
function postTheBeastRoom(){
  if(globals.$victory && Game().GetLevel().GetStage()===13){
    reloadTheBeast()
  }
}

function setupBossRoom(room: Room) {
  BOSS_PLATES_INDEX.forEach((id, index) => {
    const plate = Isaac.GridSpawn(
      GridEntityType.GRID_PRESSURE_PLATE,
      6194,
      room.GetGridPosition(id),
      true,
    );
    if (plate !== undefined) {
      const objective = Object.values(Objectives)[index];
      globals.$bossPlates.push({ plate, objective });
    }
  });
}
