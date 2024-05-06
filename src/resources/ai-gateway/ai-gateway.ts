// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/ai-gateway/logs';

export class AIGateway extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

export namespace AIGateway {
  export import Logs = LogsAPI.Logs;
}
