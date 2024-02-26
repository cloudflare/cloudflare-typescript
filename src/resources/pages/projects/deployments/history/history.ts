// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/pages/projects/deployments/history/logs';

export class History extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

export namespace History {
  export import Logs = LogsAPI.Logs;
  export import LogListResponse = LogsAPI.LogListResponse;
  export import LogListParams = LogsAPI.LogListParams;
}
