import { ObjectiveSwitch } from "./objectiveSwitch";
import { RuleDescription } from "./rules/ruleDescription";
import { RuleSwitch } from "./ruleSwitch";
import { Objectives, Steps } from "./selection";

export class Global {
  private objective: Objectives | undefined;
  private rules: RuleDescription[];
  private bossPlates: ObjectiveSwitch[];
  private rulesPlates: RuleSwitch[];

  public get $rulesPlates(): RuleSwitch[] {
    return this.rulesPlates;
  }

  public set $rulesPlates(value: RuleSwitch[]) {
    this.rulesPlates = value;
  }

  private victory: boolean;

  private step: Steps | undefined;

  public get $step(): Steps | undefined {
    return this.step;
  }

  public set $step(value: Steps | undefined) {
    this.step = value;
  }

  constructor() {
    this.rules = [];
    this.bossPlates = [];
    this.rulesPlates = [];
    this.victory = false;
  }

  public get $objective(): Objectives | undefined {
    return this.objective;
  }

  public set $objective(objective: Objectives | undefined) {
    this.objective = objective;
  }

  public get $rules(): RuleDescription[] {
    return this.rules;
  }

  public set $rules(value: RuleDescription[]) {
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
