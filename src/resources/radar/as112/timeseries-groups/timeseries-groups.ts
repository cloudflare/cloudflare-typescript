// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DNSSECAPI from 'cloudflare/resources/radar/as112/timeseries-groups/dnssec';
import * as EdnsAPI from 'cloudflare/resources/radar/as112/timeseries-groups/edns';
import * as IPVersionAPI from 'cloudflare/resources/radar/as112/timeseries-groups/ip-version';

export class TimeseriesGroups extends APIResource {
  dnssec: DNSSECAPI.DNSSEC = new DNSSECAPI.DNSSEC(this._client);
  edns: EdnsAPI.Edns = new EdnsAPI.Edns(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
}

export namespace TimeseriesGroups {
  export import DNSSEC = DNSSECAPI.DNSSEC;
  export import DNSSECListResponse = DNSSECAPI.DNSSECListResponse;
  export import DNSSECListParams = DNSSECAPI.DNSSECListParams;
  export import Edns = EdnsAPI.Edns;
  export import EdnListResponse = EdnsAPI.EdnListResponse;
  export import EdnListParams = EdnsAPI.EdnListParams;
  export import IPVersion = IPVersionAPI.IPVersion;
  export import IPVersionListResponse = IPVersionAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionAPI.IPVersionListParams;
}
