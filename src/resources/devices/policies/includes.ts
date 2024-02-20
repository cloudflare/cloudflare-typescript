// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncludesAPI from 'cloudflare/resources/devices/policies/includes';

export class Includes extends APIResource {
  /**
   * Fetches the list of routes included in the WARP client's tunnel.
   */
  list(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<IncludeListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy/include`, options) as Core.APIPromise<{
        result: IncludeListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets the list of routes included in the WARP client's tunnel.
   */
  replace(
    identifier: unknown,
    body: IncludeReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/include`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IncludeReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
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

export type IncludeReplaceResponse = Array<IncludeReplaceResponse.IncludeReplaceResponseItem>;

export namespace IncludeReplaceResponse {
  export interface IncludeReplaceResponseItem {
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

export type IncludeReplaceParams = Array<IncludeReplaceParams.Body>;

export namespace IncludeReplaceParams {
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
  export import IncludeListResponse = IncludesAPI.IncludeListResponse;
  export import IncludeReplaceResponse = IncludesAPI.IncludeReplaceResponse;
  export import IncludeReplaceParams = IncludesAPI.IncludeReplaceParams;
}
