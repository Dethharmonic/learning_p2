import { CreepRole } from "model/creep-role.model";
import { CashedCreepsTool } from "tools/cashed-creeps-tool";

export class CashedCreeps {
    [key: string]: any;
   /* private harvesters: Creep[] = [];
    private upgraders: Creep[] = [];
    private builders: Creep[] = [];
    private haulers: Creep[] = [];*/
    public initialize() {
        this.clearCash();
    }
    public getByRole(role: CreepRole): Creep[] {
        /*switch (role.objectClassId) {
            case CreepRole.HARVESTER1.objectClassId: {
                return this.harvesters;
            }
            case CreepRole.UPGRADER1.objectClassId: {
                return this.upgraders;
            }
            case CreepRole.BUILDER1.objectClassId: {
                return this.builders;
            }
            case CreepRole.BUILDER1.objectClassId: {
                return this.haulers;
            }
            default: {
                return null;
            }
        }*/
        return this[role.objectRoleName];
    }
    public getByRoleName(roleName: string): Creep[] {
        return this[roleName];
    }
    public getTotalCreepsCount(): string {
        let msg: string = 'Total creeps count: ';
        /*CreepRole.SUPPORTEDROLE.forEach((role) => {
            msg += role.objectRoleName + ':' + this.getByRole(role).length + '; ';
        });*/
        CashedCreepsTool.supportedRoles().forEach((role) => {
            msg += role.objectRoleName + ':' + this.getByRole(role).length + '; ';
        });
        return msg;
    }
    public clearCash() {
        CashedCreepsTool.supportedRoles().forEach((role) => {
            this[role.objectRoleName] = [];
        });
    }
    public cashCreep(creep: Creep) {
        const arrayRef: Creep[] = this.getByRole(creep.memory.role);
        if (arrayRef) {
            arrayRef.push(creep);
        }

    }
}
