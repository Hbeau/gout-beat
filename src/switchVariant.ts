import { TogglePlateCallback } from "./togglePlateCallback";

export class SwitchVariant {
   public variant: number;
   public graphics: string;
   public callback: TogglePlateCallback;
   public next : ()=>SwitchVariant;

   constructor(variant: number, graphics: string,callback: TogglePlateCallback,next : ()=>SwitchVariant){
      this.variant = variant;
      this.graphics=graphics;
      this.callback = callback;
      this.next = next;
   }

   public resetSwitch(plate : GridEntityPressurePlate | undefined):void {
      if(plate !== undefined){
      plate.SetVariant(this.variant);
      plate.GetSprite().Load(this.graphics, true);
      plate.State = PressurePlateState.UNPRESSED;
      plate.GetSprite().Play("Off", true);
      }
    }
}