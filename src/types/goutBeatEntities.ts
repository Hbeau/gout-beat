export class GoutBeatEntities {
  // Entities
  public static readonly COIN_SWITCH =
    Isaac.GetEntityVariantByName("CoinSwitchDefault");

  public static readonly BOMB_SWITCH =
    Isaac.GetEntityVariantByName("BombSwitchDefault");

  public static readonly KEY_SWITCH =
    Isaac.GetEntityVariantByName("KeySwitchDefault");

  public static readonly BOSS_SWITCH =
    Isaac.GetEntityVariantByName("BossSwitch");

  // Items
  public static readonly WOODEN_PIPE = Isaac.GetItemIdByName("GG +1");

  // Sounds
  public static readonly RUN_VICTORY = Isaac.GetSoundIdByName("Run Victory");

  public static readonly CURSE_OF_TUESDAY = Isaac.GetCurseIdByName("Curse of Tuesday");
}
