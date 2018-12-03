import { ICommon } from './common';

/**
 * 科目マスタのインターフェース
 */
export interface IAccount extends ICommon {
    /**
     * 科目ID
     */
    subjectId: string;
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
}
