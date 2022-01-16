import { addRoomClearCharges } from "isaacscript-common";

export function postEntityKillMegaSatan2(_entity: Entity): void {
  if(_entity.Type === EntityType.ENTITY_MEGA_SATAN_2){
    emulateRoomClear();
  }
}
export function postEntityKillTheBeast(entity : Entity):void {
    if(entity.Type === EntityType.ENTITY_BEAST){
        reloadRoom(entity);
    }
  }

function reloadRoom(entity:Entity){
  const variant = entity.Variant;

  if (variant !== BeastVariant.BEAST) {
    return;
  }
  Isaac.ExecuteCommand("goto x.itemdungeon.666");

}


function emulateRoomClear() {

  // Emulate the room being cleared
  // Spawn a big chest (which will get replaced with a trophy if we happen to be in a race)
  Game().GetRoom().SetClear(true);
  addRoomClearCharges()
  const position = Game().GetRoom().GetCenterPos();
  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_BIGCHEST,
    0,
    position,
    Vector.Zero,
    undefined,
  );
}
export function postNewRoom(): void {
  const stage = Game().GetLevel().GetStage();
  const centerPos = Game().GetRoom().GetCenterPos();

  //if (stage !== 13 || !v.run.beastDefeated) {
  //  return;
  //}

  // If we do nothing, The Beast fight will begin again
  // If we remove all of the Beast entities, it will trigger the credits
  // Instead, we spawn another Beast to prevent the fight from beginning
  Isaac.Spawn(
    EntityType.ENTITY_BEAST,
    0,
    0,
    Vector.Zero,
    Vector.Zero,
    undefined,
  );

  // Spawn a big chest (which will get replaced with a trophy if we happen to be in a race)
  Isaac.Spawn(
    EntityType.ENTITY_PICKUP,
    PickupVariant.PICKUP_BIGCHEST,
    0,
    centerPos,
    Vector.Zero,
    undefined,
  );
}