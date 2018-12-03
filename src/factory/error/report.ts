import ErrorCode from '../errorCode';

/**
 * ReportError
 */
export class ReportError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        // tslint:disable-next-line:no-single-line-block-comment
        super(message)/* istanbul ignore next */;

        this.name = 'ReportError';
        this.reason = code;
    }
}
