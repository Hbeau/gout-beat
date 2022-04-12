import { GoutBeatEntities } from "../types/goutBeatEntities";

const historyItems = [
  CollectibleType.COLLECTIBLE_POLAROID,
  CollectibleType.COLLECTIBLE_NEGATIVE,
  CollectibleType.COLLECTIBLE_BROKEN_SHOVEL_1,
  CollectibleType.COLLECTIBLE_BROKEN_SHOVEL_2,
  GoutBeatEntities.WOODEN_PIPE,
];

export function IsInHistory(collectible: CollectibleType): boolean {
  return historyItems.includes(collectible);
}
