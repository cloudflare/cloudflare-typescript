// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomNameserversAPI from 'cloudflare/resources/zones/custom-nameservers';
import * as Shared from 'cloudflare/resources/shared';

export class CustomNameservers extends APIResource {
  /**
   * Set metadata for account-level custom nameservers on a zone.
   *
   * If you would like new zones in the account to use account custom nameservers by
   * default, use PUT /accounts/:identifier to set the account setting
   * use_account_custom_ns_by_default to true.
   */
  update(
    params: CustomNameserverUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/custom_ns`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get metadata for account-level custom nameservers on a zone.
   */
  get(
    params: CustomNameserverGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/custom_ns`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CustomNameserverUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether zone uses account-level custom nameservers.
   */
  enabled?: boolean;

  /**
   * Body param: The number of the name server set to assign to the zone.
   */
  ns_set?: number;
}

export interface CustomNameserverGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace CustomNameservers {
  export import CustomNameserverUpdateParams = CustomNameserversAPI.CustomNameserverUpdateParams;
  export import CustomNameserverGetParams = CustomNameserversAPI.CustomNameserverGetParams;
}
