import { CashedCreeps } from 'model/cashed-creeps.model';
import { CreepRole } from 'model/creep-role.model';

export class CashedCreepsTool {

    public static requiredCount: {
        [key: string]: any;
    } = {
        HARVESTER1: 6,
        UPGRADER1: 3,
        BUILDER1: 3,
        HAULER1: 0
    };

    public static readonly cashedCreeps: CashedCreeps = new CashedCreeps();

    public static getRequirements(roleName: string): number {

        return CashedCreepsTool.requiredCount[roleName] ? CashedCreepsTool.requiredCount[roleName] : 0;

    }
    public static setNewReq(roleName: string, count: number): void {
        //CashedCreepsTool.setNewReq('HARVESTER1',1);
        const newReq = CashedCreepsTool.requiredCount;
        for (const name in newReq) {
            if (name === roleName) {
                newReq[name] = count;
                console.log("Required count of " + roleName + " was changed to " + count);
                break;
            }

        }
    }
}
