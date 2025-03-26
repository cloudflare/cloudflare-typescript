// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SmartRouting extends APIResource {
  /**
   * Updates enablement of Argo Smart Routing.
   */
  edit(params: SmartRoutingEditParams, options?: RequestOptions): APIPromise<SmartRoutingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/argo/smart_routing`, { body, ...options }) as APIPromise<{
        result: SmartRoutingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Argo Smart Routing setting
   */
  get(params: SmartRoutingGetParams, options?: RequestOptions): APIPromise<SmartRoutingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/argo/smart_routing`, options) as APIPromise<{
        result: SmartRoutingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SmartRoutingEditResponse = unknown | string | null;

export type SmartRoutingGetResponse = unknown | string | null;

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

export declare namespace SmartRouting {
  export {
    type SmartRoutingEditResponse as SmartRoutingEditResponse,
    type SmartRoutingGetResponse as SmartRoutingGetResponse,
    type SmartRoutingEditParams as SmartRoutingEditParams,
    type SmartRoutingGetParams as SmartRoutingGetParams,
  };
}
