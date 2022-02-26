import { ObjectiveSwitch } from "./objectiveSwitch";
import { Objectives } from "./RaceGoal";
import { Rules } from "./rules/rules";
import { SelectionStep } from "./selectionStep";

export class Global {
  private objective: Objectives | undefined;
  private rules: Rules[];
  private bossPlates: ObjectiveSwitch[];

  private victory:boolean;

  private step: SelectionStep | undefined;

  public get $step(): SelectionStep | undefined {
    return this.step;
  }

  public set $step(value: SelectionStep | undefined) {
    this.step = value;
  }

  constructor() {
    this.rules = [];
    this.bossPlates = [];
    this.victory = false;
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

	public get $victory(): boolean {
		return this.victory;
	}

	public set $victory(value: boolean) {
		this.victory = value;
	}

  public set $bossPlates(value: ObjectiveSwitch[]) {
    this.bossPlates = value;
  }

  public get $bossPlates(): ObjectiveSwitch[] {
    return this.bossPlates;
  }


}
