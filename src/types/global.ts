import { RuleDescription } from "./rules/ruleDescription";
import { Rules } from "./rules/rules";

export class Global{

  private objective: number | undefined;
  private rules: Rules[];


	constructor() {
		this.rules = [];
	}

	public get $objective(): number | undefined {
		return this.objective;
	}

	public get $rules(): Rules[] {
		return this.rules;
	}

	public set $rules(value: Rules[]) {
		this.rules = value;
	}

}