import { ICommon } from './common';

/**
 * 劇場のインターフェス
 */
export interface ITheater extends ICommon {
    /**
     * 劇場ID
     */
    theaterId: string;
    /**
     * 劇場コード
     */
    theaterCd: string;
    /**
     * 劇場名名
     */
    theaterName: string;
    /**
     * 劇場英名
     */
    theaterEnName: string;
    /**
     * 劇場カナ名
     */
    theaterKanaName: string;
    /**
     * 販売開始期間
     */
    saleStartPeriod: number;
    /**
     * 座席購入上限数
     */
    maxSeatPerOrder: number;
    /**
     * 上映後販売終了時間
     */
    endSaleTimeAfterScreening: number;
}
