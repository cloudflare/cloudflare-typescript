// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SmartRoutingAPI from './smart-routing';

export class SmartRouting extends APIResource {
  /**
   * Updates enablement of Argo Smart Routing.
   */
  edit(params: SmartRoutingEditParams, options?: Core.RequestOptions): Core.APIPromise<SmartRoutingEditResponse> {
    const { zone_id, ...body } = params;
    return (this._client.patch(`/zones/${zone_id}/argo/smart_routing`, { body, ...options }) as Core.APIPromise<{ result: SmartRoutingEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Argo Smart Routing setting
   */
  get(params: SmartRoutingGetParams, options?: Core.RequestOptions): Core.APIPromise<SmartRoutingGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/argo/smart_routing`, options) as Core.APIPromise<{ result: SmartRoutingGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type SmartRoutingEditResponse = unknown | string | null

export type SmartRoutingGetResponse = unknown | string | null

export interface SmartRoutingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enables Argo Smart Routing.
   */
  value: 'on' | 'off';
}

export interface SmartRoutingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SmartRouting {
  export import SmartRoutingEditResponse = SmartRoutingAPI.SmartRoutingEditResponse;
  export import SmartRoutingGetResponse = SmartRoutingAPI.SmartRoutingGetResponse;
  export import SmartRoutingEditParams = SmartRoutingAPI.SmartRoutingEditParams;
  export import SmartRoutingGetParams = SmartRoutingAPI.SmartRoutingGetParams;
}
