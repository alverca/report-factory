// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { ReportError } from './report';

/**
 * UnauthorizedError
 */
export default class UnauthorizedError extends ReportError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Unauthorized.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.Unauthorized, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
