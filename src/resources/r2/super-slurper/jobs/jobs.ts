// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LogsAPI from './logs';
import { BaseLogs, Logs } from './logs';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['r2', 'superSlurper', 'jobs'] = Object.freeze([
    'r2',
    'superSlurper',
    'jobs',
  ] as const);
}
export class Jobs extends BaseJobs {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

Jobs.Logs = Logs;
Jobs.BaseLogs = BaseLogs;

export declare namespace Jobs {
  export { Logs as Logs, BaseLogs as BaseLogs };
}
