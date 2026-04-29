// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as LogsAPI from './logs';
import { BaseLogs, Logs } from './logs';

export class BaseHistory extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'deployments', 'history'] = Object.freeze([
    'pages',
    'projects',
    'deployments',
    'history',
  ] as const);
}
export class History extends BaseHistory {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

History.Logs = Logs;
History.BaseLogs = BaseLogs;

export declare namespace History {
  export { Logs as Logs, BaseLogs as BaseLogs };
}
