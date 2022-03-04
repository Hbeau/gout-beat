import { Global } from "./types/global";
import { Rules } from "./types/rules/rules";

const globals = new Global();
export default globals;

globals.$rules.push(
  Rules.RULE_COIN_NORMAL,
  Rules.RULE_BOMB_NORMAL,
  Rules.RULE_KEY_NORMAL,
);
