import DbGlobals from '../globals/db';

class SoldierRolesGlobal {
  public static leadingCommanderForCommander = (roleId: number) => {
    if (roleId == DbGlobals.SoldierRolesDBGlobal.COMMANDER_ID) {
      return DbGlobals.SoldierRolesDBGlobal.LEADING_COMMANDER_ID;
    }
    return roleId;
  };
}

export default SoldierRolesGlobal;