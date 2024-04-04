// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SmartRoutingAPI from 'cloudflare/resources/argo/smart-routing';
import * as Shared from 'cloudflare/resources/shared';

export class SmartRouting extends APIResource {
  /**
   * Updates enablement of Argo Smart Routing.
   */
  edit(
    params: SmartRoutingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/argo/smart_routing`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Argo Smart Routing setting
   */
  get(
    params: SmartRoutingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/argo/smart_routing`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
  export import SmartRoutingEditParams = SmartRoutingAPI.SmartRoutingEditParams;
  export import SmartRoutingGetParams = SmartRoutingAPI.SmartRoutingGetParams;
}
