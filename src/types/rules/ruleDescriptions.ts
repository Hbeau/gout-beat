import { RuleDescription } from "./ruleDescription";
import { PickupModifiers } from "../../pickupModifiers";

const ruleDescriptors : RuleDescription[] = [
  {
  gameText : "Pick bombs hurts",
  pickup : PickupVariant.PICKUP_BOMB,
  modifier : PickupModifiers.HURT
},
{
  gameText : "Infinite bombs",
  pickup : PickupVariant.PICKUP_BOMB,
  modifier : PickupModifiers.INFINITE
},
{
  gameText : "No bomb rules",
  pickup: PickupVariant.PICKUP_BOMB,
  modifier: PickupModifiers.NORMAL
},
{
  gameText : "Pick keys hurts",
  pickup : PickupVariant.PICKUP_KEY,
  modifier : PickupModifiers.HURT
},
{
  gameText : "Infinite keys",
  pickup : PickupVariant.PICKUP_KEY,
  modifier : PickupModifiers.INFINITE
},
{
  gameText : "No key rules",
  pickup: PickupVariant.PICKUP_KEY,
  modifier: PickupModifiers.NORMAL
},
{
  gameText : "Pick coins hurts",
  pickup : PickupVariant.PICKUP_COIN,
  modifier : PickupModifiers.HURT
},
{
  gameText : "Infinite coins",
  pickup : PickupVariant.PICKUP_COIN,
  modifier : PickupModifiers.INFINITE
},
{
  gameText : "No coin rules",
  pickup: PickupVariant.PICKUP_COIN,
  modifier: PickupModifiers.NORMAL
}];

export {ruleDescriptors}