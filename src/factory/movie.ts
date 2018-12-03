import { ICommon } from './common';
import { IDistributor } from './distributor';

/**
 * 作品のインターフェス
 */
export interface IMovie extends ICommon {
    /**
     * 作品ID
     */
    movieId: string;
    /**
     * 作品コード
     */
    movieCd: string;
    /**
     * 作品名
     */
    movieName: string;
    /**
     * 作品サブタイトル
     */
    movieSubtitle: string;
    /**
     * 上映時間
     */
    screenTime: string;
    /**
     * レイテイング
     */
    rating: string;
    /**
     * 公開日
     */
    releaseDate: Date;
    /**
     * 興行終了予定日
     */
    expectBoxOfficeEndDate: string;
    /**
     * 配給ID
     */
    distributorId: string;
}

export type movie = IMovie & {
    distributor: IDistributor;
};
