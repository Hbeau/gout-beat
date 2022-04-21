import { GoutBeatEntities } from "../types/goutBeatEntities";

const historyItems = [
  CollectibleType.COLLECTIBLE_POLAROID,
  CollectibleType.COLLECTIBLE_NEGATIVE,
  CollectibleType.COLLECTIBLE_BROKEN_SHOVEL_1,
  CollectibleType.COLLECTIBLE_BROKEN_SHOVEL_2,
  CollectibleType.COLLECTIBLE_KEY_PIECE_1,
  CollectibleType.COLLECTIBLE_KEY_PIECE_2,
  GoutBeatEntities.WOODEN_PIPE,
  CollectibleType.COLLECTIBLE_NULL,
];

export function IsNotHistory(collectible: CollectibleType): boolean {
  return !historyItems.includes(collectible);
}
