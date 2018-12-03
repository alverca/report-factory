import { ICommon } from './common';

/**
 * 配給のインターフェース
 */
export interface IDistributor extends ICommon {
    /**
     * 配給ID
     */
    distributorId: string;
    /**
     * 配給名
     */
    distributorName: string;
}
