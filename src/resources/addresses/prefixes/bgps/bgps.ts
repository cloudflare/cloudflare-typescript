// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as StatusesAPI from 'cloudflare/resources/addresses/prefixes/bgps/statuses';

export class BGPs extends APIResource {
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
}

export namespace BGPs {
  export import Statuses = StatusesAPI.Statuses;
  export import StatusEditResponse = StatusesAPI.StatusEditResponse;
  export import StatusGetResponse = StatusesAPI.StatusGetResponse;
  export import StatusEditParams = StatusesAPI.StatusEditParams;
  export import StatusGetParams = StatusesAPI.StatusGetParams;
}
