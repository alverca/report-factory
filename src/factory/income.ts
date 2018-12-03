import { ICommon } from './common';

/**
 * 興行外収入インターフェース
 */
export interface IIncome extends ICommon {
    /**
     * ID
     */
    id: string;
    /**
     * 劇場コード
     */
    theaterCd: string;
    /**
     * 劇場名
     */
    theaterName: string;
    /**
     * 日付
     */
    date: Date;
    /**
     * 科目分類コード
     */
    subjectGroupCd: string;
    /**
     * 科目分類名
     */
    subjectGroupName: string;
    /**
     * 科目コード
     */
    subjectCd: string;
    /**
     * 科目名
     */
    subjectName: string;
    /**
     * 科目細目コード
     */
    subjectDetailCd: string;
    /**
     * 科目細目名
     */
    subjectDetailName: string;
    /**
     * 相手科目コード
     */
    opponentSubjectCd: string;
    /**
     * 相手科目名
     */
    opponentSubjectName: string;
    /**
     * 数量
     */
    quantity: number;
    /**
     * 金額
     */
    amount: number;
    /**
     * 備考
     */
    note: string;
    /**
     * 作品コード
     */
    movieCd: string;
    /**
     * 作品名
     */
    movieName: string;
}
