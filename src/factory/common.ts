/**
 * 通用なインターフェース
 */

export interface ICommon {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IDateSearch {
    // tslint:disable-next-line:no-reserved-keywords
    from?: Date;
    to?: Date;
}

export type DateWithDateSearch = Date | IDateSearch;

export type DateFieldCondition<T> = {
    [P in keyof T]?: T[P] extends Date ? DateWithDateSearch :
                     T[P] extends (Date | undefined) ? DateWithDateSearch :
                     T[P];
};
