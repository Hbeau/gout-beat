import { Objectives } from "../types/RaceGoal";

export function DestinationFromObjective(obj: Objectives) {
  switch (obj) {
    case Objectives.BLUE_BABY:
      return 5;
    case Objectives.HUSH:
      return 8;
    case Objectives.DELIRIUM:
      return 9;
    case Objectives.MEGA_SATAN:
      return 6;
    case Objectives.MOTHER:
      return 11;
    case Objectives.THE_LAMB:
      return 4;
    default:
      return 0;
  }
}
