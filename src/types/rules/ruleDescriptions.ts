import { RulesModifiers } from "../rulesModifiers";
import { Rules } from "../selection";
import { RuleDescription } from "./ruleDescription";

const ruleDescriptors: RuleDescription[] = [
  {
    rule : Rules.BOMB,
    gameText: "Pick bombs hurts",
    pickup: PickupVariant.PICKUP_BOMB,
    modifier: RulesModifiers.HURT,
  },
  {
    rule : Rules.BOMB,
    gameText: "Infinite bombs",
    pickup: PickupVariant.PICKUP_BOMB,
    modifier: RulesModifiers.INFINITE,
  },
  {
    rule : Rules.BOMB,
    gameText: "No bomb rules",
    pickup: PickupVariant.PICKUP_BOMB,
    modifier: RulesModifiers.NORMAL,
  },
  {
    rule : Rules.KEY,
    gameText: "Pick keys hurts",
    pickup: PickupVariant.PICKUP_KEY,
    modifier: RulesModifiers.HURT,
  },
  {
    rule : Rules.KEY,
    gameText: "Infinite keys",
    pickup: PickupVariant.PICKUP_KEY,
    modifier: RulesModifiers.INFINITE,
  },
  {
    rule : Rules.KEY,
    gameText: "No key rules",
    pickup: PickupVariant.PICKUP_KEY,
    modifier: RulesModifiers.NORMAL,
  },
  {
    rule : Rules.COIN,
    gameText: "Pick coins hurts",
    pickup: PickupVariant.PICKUP_COIN,
    modifier: RulesModifiers.HURT,
  },
  {
    rule : Rules.COIN,
    gameText: "Infinite coins",
    pickup: PickupVariant.PICKUP_COIN,
    modifier: RulesModifiers.INFINITE,
  },
  {
    rule : Rules.COIN,
    gameText: "No coin rules",
    pickup: PickupVariant.PICKUP_COIN,
    modifier: RulesModifiers.NORMAL,
  },
  {
    rule : Rules.PILL,
    gameText: "Blindly eat all pills",
    pickup: PickupVariant.PICKUP_PILL,
    modifier: RulesModifiers.BLIND,
  },
  {
    rule : Rules.PILL,
    gameText: "No Pill rules",
    pickup: PickupVariant.PICKUP_PILL,
    modifier: RulesModifiers.NORMAL,
  },
  {
    rule : Rules.ITEM,
    gameText: "Blindly pick all pills",
    pickup: PickupVariant.PICKUP_COLLECTIBLE,
    modifier: RulesModifiers.BLIND,
  },
  {
    rule : Rules.ITEM,
    gameText: "No Items rules",
    pickup: PickupVariant.PICKUP_COLLECTIBLE,
    modifier: RulesModifiers.NORMAL,
  },
];

export { ruleDescriptors };
