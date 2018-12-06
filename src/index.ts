/**
 * factory
 */

import * as AccountFactory from './factory/account';
import * as ClientUserFactory from './factory/clientUser';
import * as CommonFactory from './factory/common';
import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';
import * as IncomFactory from './factory/income';
import * as ScreeningWorkFactory from './factory/screeningWork';
import * as TheaterFactory from './factory/theater';

export import common = CommonFactory;
export import errors = errors;
export import errorCode = ErrorCode;

export namespace account {
    export import attributes = AccountFactory.IAccount;
}

export namespace income {
    export import attributes = IncomFactory.IIncome;
}

export namespace screeningWork {
    export import attributes = ScreeningWorkFactory.IScreeningWork;
    export type searchCondition = CommonFactory.DateFieldCondition<attributes>;
}

export namespace theater {
    export import attributes = TheaterFactory.ITheater;
}

export import clientUser = ClientUserFactory;
