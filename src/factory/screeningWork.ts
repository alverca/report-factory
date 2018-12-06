import { ICommon } from './common';

/**
 * 上映作品のインターフェス
 */
export interface IScreeningWork extends ICommon {
    /**
     *  上映作品ID
     */
    screeningWorkId: string;
    /**
     * 上映作品名
     */
    screeningWorkName: string;
    /**
     * 上映作品英名
     */
    screeningWorkEnName: string;
    /**
     * 上映作品カナ名
     */
    screeningWorkKanaName: string;
    /**
     * 上映作品サブタイトル
     */
    screeningWorkSubtitle: string;
    /**
     * サイネージ表示名
     */
    signageDisplayName: string;
    /**
     * サイネージサブタイトル表示名
     */
    signageSubtitleDisplayName: string;
    /**
     * 劇場ID
     */
    theaterId: string;
    /**
     * 劇場コード
     */
    theaterCd: string;
    /**
     * 劇場名
     */
    theaterName: string;
    /**
     * 上映形態
     */
    screeningFormat: string;
    /**
     * 字幕吹替
     */
    subDub: string;
    /**
     * 音響
     */
    sound: string;
    /**
     * ムビチケ利用
     */
    mvtkFlag: string;
    /**
     * 興行開始日
     */
    boxOfficeStart: Date;
    /**
     * 興行終了日
     */
    boxOfficeEnd: Date;
    /**
     * 集計開始曜日
     */
    summarizeStartDay: number;
    /**
     * 上映作品補足説明
     */
    screeningWorkSupplyDescrption: string;
    /**
     * 作品ID
     */
    workId: string;
    /**
     * 作品コード
     */
    workCd: string;
    /**
     * 作品名
     */
    workName: string;
    /**
     * 作品サブタイトル
     */
    workSubtitle: string;
    /**
     * 上映時間
     */
    screenTime: string;
    /**
     * レイティング
     */
    rating: string;
}
