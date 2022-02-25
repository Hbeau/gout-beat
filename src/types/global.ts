import { ObjectiveSwitch } from "./objectiveSwitch";
import { Objectives } from "./RaceGoal";
import { Rules } from "./rules/rules";
import { SelectionStep } from "./selectionStep";

export class Global {
  private objective: Objectives | undefined;
  private rules: Rules[];
  private bossPlates: ObjectiveSwitch[];
  private step: SelectionStep | undefined;

  /**
   * Getter $step
   *
   * @returns {SelectionStep }
   */
  public get $step(): SelectionStep | undefined {
    return this.step;
  }

  /**
   * Setter $step
   *
   * @param {SelectionStep } value
   */
  public set $step(value: SelectionStep | undefined) {
    this.step = value;
  }

  constructor() {
    this.rules = [];
    this.bossPlates = [];
  }

  public get $objective(): Objectives | undefined {
    return this.objective;
  }

  public set $objective(objective: Objectives | undefined) {
    this.objective = objective;
  }

  public get $rules(): Rules[] {
    return this.rules;
  }

  public set $rules(value: Rules[]) {
    this.rules = value;
  }

  public get $bossPlates(): ObjectiveSwitch[] {
    return this.bossPlates;
  }

  public set $bossPlates(value: ObjectiveSwitch[]) {
    this.bossPlates = value;
  }
}
