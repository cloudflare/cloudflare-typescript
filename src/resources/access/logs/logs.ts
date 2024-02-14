// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AccessRequestsAPI from 'cloudflare/resources/access/logs/access-requests';

export class Logs extends APIResource {
  accessRequests: AccessRequestsAPI.AccessRequests = new AccessRequestsAPI.AccessRequests(this._client);
}

export namespace Logs {
  export import AccessRequests = AccessRequestsAPI.AccessRequests;
  export import AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse = AccessRequestsAPI.AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse;
}
