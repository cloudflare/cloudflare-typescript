// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ColosAPI from 'cloudflare/resources/analytics/latencies/colos';

export class Colos extends APIResource {
  /**
   * Argo Analytics for a zone at different PoPs
   */
  argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse> {
    return (
      this._client.get(`/zones/${zoneId}/analytics/latency/colos`, options) as Core.APIPromise<{
        result: ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse =
  | unknown
  | string
  | null;

export namespace Colos {
  export import ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse = ColosAPI.ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse;
}
