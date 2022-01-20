import { TogglePlateCallback } from "./togglePlateCallback";
import { RuleDescription } from "./types/rules/ruleDescription";

export class SwitchVariant {
   public graphics: string;
   public callback: TogglePlateCallback;
   public next : ()=>SwitchVariant;

   constructor(graphics: string,callback: TogglePlateCallback,next : ()=>SwitchVariant){
      this.graphics=graphics;
      this.callback = callback;
      this.next = next;
   }

   public resetSwitch(plate : GridEntityPressurePlate | undefined):void {
      if(plate !== undefined){
      plate.GetSprite().Load(this.graphics, true);
      plate.State = PressurePlateState.UNPRESSED;
      plate.GetSprite().Play("Off", true);
      }
    }
}