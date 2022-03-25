import { TogglePlateCallback } from "./togglePlateCallback";

export class SwitchVariant {
  public callback: TogglePlateCallback;
  public next: () => SwitchVariant;

  constructor(callback: TogglePlateCallback, next: () => SwitchVariant) {
    this.callback = callback;
    this.next = next;
  }
}
