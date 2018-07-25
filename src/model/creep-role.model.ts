export class CreepRole {
    public static readonly HARVESTER1: CreepRole = new CreepRole(1, 'HARVESTER1', [WORK, WORK, CARRY, MOVE]);
    public static readonly UPGRADER1: CreepRole = new CreepRole(2, 'UPGRADER1', [WORK, WORK, CARRY, MOVE]);
    public static readonly BUILDER1: CreepRole = new CreepRole(3, 'BUILDER1', [WORK, WORK, CARRY, MOVE]);
    public static readonly HAULER1: CreepRole = new CreepRole(4, 'HAULER1', [WORK, CARRY,CARRY, MOVE,MOVE]);
    //public static readonly SUPPORTEDROLE: CreepRole[] = [CreepRole.HARVESTER1, CreepRole.UPGRADER1, CreepRole.BUILDER1];
    public static getRoleNameByRoleId(roleId: number): string {
        switch (roleId) {
            case CreepRole.HARVESTER1.objectClassId:
                return CreepRole.HARVESTER1.objectRoleName;
            case CreepRole.UPGRADER1.objectClassId:
                return CreepRole.UPGRADER1.objectRoleName;
            case CreepRole.BUILDER1.objectClassId:
                return CreepRole.BUILDER1.objectRoleName;
            case CreepRole.HAULER1.objectClassId:
                return CreepRole.HAULER1.objectRoleName;
            default:
                return '';
        }
    }
    public static getRoleByName(roleName: string): CreepRole {
        switch (roleName) {
            case CreepRole.HARVESTER1.objectRoleName:
                return CreepRole.HARVESTER1;
            case CreepRole.UPGRADER1.objectRoleName:
                return CreepRole.UPGRADER1;
            case CreepRole.BUILDER1.objectRoleName:
                return CreepRole.BUILDER1;
            case CreepRole.HAULER1.objectRoleName:
                return CreepRole.HAULER1;
            default:
                return null;
        }
    }
    private constructor(public readonly objectClassId: number,
        public readonly objectRoleName: string,
        public readonly objectBodyTemplate: BodyPartConstant[]) { }
}
