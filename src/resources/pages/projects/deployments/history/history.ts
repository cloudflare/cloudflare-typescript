// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as LogsAPI from './logs';

export class History extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

export namespace History {
  export import Logs = LogsAPI.Logs;
  export type LogGetResponse = LogsAPI.LogGetResponse;
  export type LogGetParams = LogsAPI.LogGetParams;
}
