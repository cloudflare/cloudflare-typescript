// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncludesAPI from 'cloudflare/resources/devices/policies/includes';

export class Includes extends APIResource {
  /**
   * Sets the list of routes included in the WARP client's tunnel.
   */
  update(
    accountId: unknown,
    body: IncludeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/devices/policy/include`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IncludeUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel.
   */
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<IncludeListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/devices/policy/include`, options) as Core.APIPromise<{
        result: IncludeListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IncludeUpdateResponse = Array<IncludeUpdateResponse.IncludeUpdateResponseItem>;

export namespace IncludeUpdateResponse {
  export interface IncludeUpdateResponseItem {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeListResponse = Array<IncludeListResponse.IncludeListResponseItem>;

export namespace IncludeListResponse {
  export interface IncludeListResponseItem {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeUpdateParams = Array<IncludeUpdateParams.Body>;

export namespace IncludeUpdateParams {
  export interface Body {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export namespace Includes {
  export import IncludeUpdateResponse = IncludesAPI.IncludeUpdateResponse;
  export import IncludeListResponse = IncludesAPI.IncludeListResponse;
  export import IncludeUpdateParams = IncludesAPI.IncludeUpdateParams;
}
