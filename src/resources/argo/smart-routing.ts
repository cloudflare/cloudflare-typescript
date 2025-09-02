// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class SmartRouting extends APIResource {
  /**
   * Configures the value of the Argo Smart Routing enablement setting.
   *
   * @example
   * ```ts
   * const response = await client.argo.smartRouting.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   value: 'on',
   * });
   * ```
   */
  edit(
    params: SmartRoutingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartRoutingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/argo/smart_routing`, { body, ...options }) as Core.APIPromise<{
        result: SmartRoutingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the value of Argo Smart Routing enablement setting.
   *
   * @example
   * ```ts
   * const smartRouting = await client.argo.smartRouting.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: SmartRoutingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartRoutingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/argo/smart_routing`, options) as Core.APIPromise<{
        result: SmartRoutingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SmartRoutingEditResponse {
  /**
   * Specifies the identifier of the Argo Smart Routing setting.
   */
  id: string;

  /**
   * Specifies if the setting is editable.
   */
  editable: boolean;

  /**
   * Specifies the enablement value of Argo Smart Routing.
   */
  value: 'on' | 'off';

  /**
   * Specifies the time when the setting was last modified.
   */
  modified_on?: string;
}

export interface SmartRoutingGetResponse {
  /**
   * Specifies the identifier of the Argo Smart Routing setting.
   */
  id: string;

  /**
   * Specifies if the setting is editable.
   */
  editable: boolean;

  /**
   * Specifies the enablement value of Argo Smart Routing.
   */
  value: 'on' | 'off';

  /**
   * Specifies the time when the setting was last modified.
   */
  modified_on?: string;
}

export interface SmartRoutingEditParams {
  /**
   * Path param: Specifies the zone associated with the API call.
   */
  zone_id: string;

  /**
   * Body param: Specifies the enablement value of Argo Smart Routing.
   */
  value: 'on' | 'off';
}

export interface SmartRoutingGetParams {
  /**
   * Specifies the zone associated with the API call.
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
