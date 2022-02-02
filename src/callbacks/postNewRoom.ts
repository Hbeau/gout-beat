import globals from "../globals";
import { Objectives } from "../types/RaceGoal";

export function initPostNewRoom(mod: Mod) {
  mod.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, initSelectRoom);
}

const BOSS_PLATES_INDEX = [106, 108, 110, 112, 114, 116, 118];

function initSelectRoom() {
  const room = Game().GetRoom();

  BOSS_PLATES_INDEX.forEach((id,index) => {
    const plate = room.GetGridEntity(id);
    if (plate !== undefined) {
      const objective =Object.values(Objectives)[index]
      globals.$bossPlates.push({plate,objective});
    }
  });
}
