// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ArcsAPI from 'cloudflare/resources/radar/email/security/timeseries-groups/arcs';
import * as DKIMsAPI from 'cloudflare/resources/radar/email/security/timeseries-groups/dkims';

export class TimeseriesGroups extends APIResource {
  arcs: ArcsAPI.Arcs = new ArcsAPI.Arcs(this._client);
  dkims: DKIMsAPI.DKIMs = new DKIMsAPI.DKIMs(this._client);
}

export namespace TimeseriesGroups {
  export import Arcs = ArcsAPI.Arcs;
  export import ArcListResponse = ArcsAPI.ArcListResponse;
  export import ArcListParams = ArcsAPI.ArcListParams;
  export import DKIMs = DKIMsAPI.DKIMs;
  export import DKIMListResponse = DKIMsAPI.DKIMListResponse;
  export import DKIMListParams = DKIMsAPI.DKIMListParams;
}
