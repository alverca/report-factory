/**
 * factory
 */

import * as AccountFactory from './factory/account';
import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';
import * as IncomFactory from './factory/income';
import * as MovieFactory from './factory/movie';

export import errors = errors;
export import errorCode = ErrorCode;

export namespace account {
    export import attributes = AccountFactory.IAccount;
}

export namespace income {
    export import attributes = IncomFactory.IIncome;
}

export namespace movie {
    export import attributes = MovieFactory.IMovie;
}
