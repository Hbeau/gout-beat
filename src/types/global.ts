import { ObjectiveSwitch } from "./objectiveSwitch";
import { Objectives } from "./RaceGoal";
import { Rules } from "./rules/rules";

export class Global {
  private objective: Objectives | undefined;
  private rules: Rules[];
  private bossPlates: ObjectiveSwitch[];

  constructor() {
    this.rules = [];
    this.bossPlates = [];
  }

  public get $objective(): Objectives | undefined {
    return this.objective;
  }

  public set $objective(objective : Objectives | undefined) {
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
