// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SmartRoutingAPI from 'cloudflare/resources/argo/smart-routing';

export class SmartRouting extends APIResource {
  /**
   * Updates enablement of Argo Smart Routing.
   */
  update(
    zoneId: string,
    body: SmartRoutingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartRoutingUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/argo/smart_routing`, { body, ...options }) as Core.APIPromise<{
        result: SmartRoutingUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Argo Smart Routing setting
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SmartRoutingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/argo/smart_routing`, options) as Core.APIPromise<{
        result: SmartRoutingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SmartRoutingUpdateResponse = unknown | string | null;

export type SmartRoutingGetResponse = unknown | string | null;

export interface SmartRoutingUpdateParams {
  /**
   * Enables Argo Smart Routing.
   */
  value: 'on' | 'off';
}

export namespace SmartRouting {
  export import SmartRoutingUpdateResponse = SmartRoutingAPI.SmartRoutingUpdateResponse;
  export import SmartRoutingGetResponse = SmartRoutingAPI.SmartRoutingGetResponse;
  export import SmartRoutingUpdateParams = SmartRoutingAPI.SmartRoutingUpdateParams;
}
