// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSmartRouting extends APIResource {
  static override readonly _key: readonly ['argo', 'smartRouting'] = Object.freeze([
    'argo',
    'smartRouting',
  ] as const);

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
  edit(params: SmartRoutingEditParams, options?: RequestOptions): APIPromise<SmartRoutingEditResponse> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/argo/smart_routing`, { body, ...options }) as APIPromise<{
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
    params: SmartRoutingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SmartRoutingGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/argo/smart_routing`, options) as APIPromise<{
        result: SmartRoutingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class SmartRouting extends BaseSmartRouting {}

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
  zone_id?: string;

  /**
   * Body param: Specifies the enablement value of Argo Smart Routing.
   */
  value: 'on' | 'off';
}

export interface SmartRoutingGetParams {
  /**
   * Specifies the zone associated with the API call.
   */
  zone_id?: string;
}

export declare namespace SmartRouting {
  export {
    type SmartRoutingEditResponse as SmartRoutingEditResponse,
    type SmartRoutingGetResponse as SmartRoutingGetResponse,
    type SmartRoutingEditParams as SmartRoutingEditParams,
    type SmartRoutingGetParams as SmartRoutingGetParams,
  };
}
