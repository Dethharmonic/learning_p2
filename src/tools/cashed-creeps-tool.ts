import { CashedCreeps } from 'model/cashed-creeps.model';
import { CreepRole } from 'model/creep-role.model';

export class CashedCreepsTool {
    public static spawningRequired: boolean = false;
    public static homeRome:string = 'W59S48';
    public static requiredCount: {
        [key: string]: any;
    } = {
        HARVESTER1: 8,
        UPGRADER1: 2,
        BUILDER1: 2,
        HAULER1: 0
    };
    public static requiredWallHits:number = 100000;
    public static sources: {
        [key: string]: any;
        sourceId: string;
        harvesterSlotCount: number;
        alreadyBusy: number
    }[] = [
        { sourceId: '59f19f5182100e1594f34c23', harvesterSlotCount: 6, alreadyBusy: 0 },
        { sourceId: '59f19f5182100e1594f34c21', harvesterSlotCount: 2, alreadyBusy: 0 }

    ]
    public static waitingForRepairingStructures: {
        [key: string]: any;
        roomId: string;
        structureId: string;
        isAlreadyRepairing: boolean;
    }[] = [];
    public static waitingForFortifyWalls: {
        [key: string]: any;
        roomId: string;
        structureId: string;
        isAlreadyRepairing: boolean;
    }[] = [];
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
