// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LatenciesAPI from 'cloudflare/resources/analytics/latencies/latencies';
import * as ColosAPI from 'cloudflare/resources/analytics/latencies/colos';

export class Latencies extends APIResource {
  colos: ColosAPI.Colos = new ColosAPI.Colos(this._client);

  /**
   * Argo Analytics for a zone
   */
  argoAnalyticsForZoneArgoAnalyticsForAZone(
    zoneId: string,
    query?: LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse>;
  argoAnalyticsForZoneArgoAnalyticsForAZone(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse>;
  argoAnalyticsForZoneArgoAnalyticsForAZone(
    zoneId: string,
    query: LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse> {
    if (isRequestOptions(query)) {
      return this.argoAnalyticsForZoneArgoAnalyticsForAZone(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/analytics/latency`, { query, ...options }) as Core.APIPromise<{
        result: LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse = unknown | string | null;

export interface LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams {
  bins?: string;
}

export namespace Latencies {
  export import LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse = LatenciesAPI.LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse;
  export import LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams = LatenciesAPI.LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams;
  export import Colos = ColosAPI.Colos;
  export import ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse = ColosAPI.ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse;
}
