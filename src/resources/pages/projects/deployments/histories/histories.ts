// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/pages/projects/deployments/histories/logs';

export class Histories extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

export namespace Histories {
  export import Logs = LogsAPI.Logs;
  export import LogPagesDeploymentGetDeploymentLogsResponse = LogsAPI.LogPagesDeploymentGetDeploymentLogsResponse;
}
