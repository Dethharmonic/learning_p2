import { CreepRole } from "model/creep-role.model";
import { CashedCreepsTool } from "tools/cashed-creeps-tool";

export class CashedCreeps {
    [key: string]: any;
    supportedRoles: CreepRole[];
    constructor() {
        this.supportedRoles = CashedCreeps.getSupportedRoles();
        this.initialize();
    }
    public initialize() {
        this.clearCash();
    }
    public getByRole(role: CreepRole): Creep[] {

        return this[role.objectRoleName];
    }
    public getByRoleName(roleName: string): Creep[] {
        return this[roleName];
    }
    public getTotalCreepsCount(): string {
        let msg: string = 'Total creeps count: ';

        this.supportedRoles.forEach((role) => {
            msg += role.objectRoleName + ':' + this.getByRole(role).length + '; ';
        });
        return msg;
    }
    public clearCash() {
        this.supportedRoles.forEach((role) => {
            this[role.objectRoleName] = [];
        });
    }
    public cashCreep(creep: Creep) {
        const arrayRef: Creep[] = this.getByRole(creep.memory.role);
        if (arrayRef) {
            arrayRef.push(creep);
        }

    }
    public static readonly getSupportedRoles = () => {
        const roles = [];
        for (const key in CashedCreepsTool.requiredCount) {
            const role: CreepRole = CreepRole.getRoleByName(key);
            if (role) {
                roles.push(role);
            }
        }
        return roles;
    }
}
