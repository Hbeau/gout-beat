import { RulesModifiers } from "../rulesModifiers";
import { Rules } from "../selection";
import { RuleDescription } from "./ruleDescription";

const ruleDescriptors: RuleDescription[] = [
  {
    rule: Rules.BOMB,
    gameText: "Pick bombs hurts",
    pickup: PickupVariant.PICKUP_BOMB,
    modifier: RulesModifiers.HURT,
    icon: 6,
  },
  {
    rule: Rules.BOMB,
    gameText: "Infinite bombs",
    pickup: PickupVariant.PICKUP_BOMB,
    modifier: RulesModifiers.INFINITE,
    icon: 2,
  },
  {
    rule: Rules.BOMB,
    gameText: "No bomb rules",
    pickup: PickupVariant.PICKUP_BOMB,
    modifier: RulesModifiers.NORMAL,
    icon: 19,
  },
  {
    rule: Rules.KEY,
    gameText: "Pick keys hurts",
    pickup: PickupVariant.PICKUP_KEY,
    modifier: RulesModifiers.HURT,
    icon: 3,
  },
  {
    rule: Rules.KEY,
    gameText: "Infinite keys",
    pickup: PickupVariant.PICKUP_KEY,
    modifier: RulesModifiers.INFINITE,
    icon: 1,
  },
  {
    rule: Rules.KEY,
    gameText: "No key rules",
    pickup: PickupVariant.PICKUP_KEY,
    modifier: RulesModifiers.NORMAL,
    icon: 21,
  },
  {
    rule: Rules.COIN,
    gameText: "Pick coins hurts",
    pickup: PickupVariant.PICKUP_COIN,
    modifier: RulesModifiers.HURT,
    icon: 0,
  },
  {
    rule: Rules.COIN,
    gameText: "Infinite coins",
    pickup: PickupVariant.PICKUP_COIN,
    modifier: RulesModifiers.INFINITE,
    icon: 0,
  },
  {
    rule: Rules.COIN,
    gameText: "No coin rules",
    pickup: PickupVariant.PICKUP_COIN,
    modifier: RulesModifiers.NORMAL,
    icon: 20,
  },
  {
    rule: Rules.PILL,
    gameText: "Blindly eat all pills",
    pickup: PickupVariant.PICKUP_PILL,
    modifier: RulesModifiers.BLIND,
    icon: 17,
  },
  {
    rule: Rules.PILL,
    gameText: "No Pill rules",
    pickup: PickupVariant.PICKUP_PILL,
    modifier: RulesModifiers.NORMAL,
    icon: 17,
  },
  {
    rule: Rules.ITEM,
    gameText: "Blindly pick all Items",
    pickup: PickupVariant.PICKUP_COLLECTIBLE,
    modifier: RulesModifiers.BLIND,
    icon: 18,
  },
  {
    rule: Rules.ITEM,
    gameText: "No Items rules",
    pickup: PickupVariant.PICKUP_COLLECTIBLE,
    modifier: RulesModifiers.NORMAL,
    icon: 18,
  },
  {
    rule: Rules.TEAR,
    gameText: "No tear",
    pickup: PickupVariant.PICKUP_NULL,
    modifier: RulesModifiers.BLIND,
    icon: 22,
  },
  {
    rule: Rules.TEAR,
    gameText: "Inverted tear",
    pickup: PickupVariant.PICKUP_NULL,
    modifier: RulesModifiers.HURT,
    icon: 22,
  },
  {
    rule: Rules.TEAR,
    gameText: "No tear rules",
    pickup: PickupVariant.PICKUP_NULL,
    modifier: RulesModifiers.NORMAL,
    icon: 22,
  },
];

export { ruleDescriptors };
