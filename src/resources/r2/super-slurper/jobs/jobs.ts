// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as LogsAPI from './logs';
import { Logs } from './logs';

export class Jobs extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

Jobs.Logs = Logs;

export declare namespace Jobs {
  export { Logs as Logs };
}
