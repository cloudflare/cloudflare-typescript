// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExcludesAPI from 'cloudflare/resources/devices/policies/excludes';

export class Excludes extends APIResource {
  /**
   * Sets the list of routes excluded from the WARP client's tunnel.
   */
  update(
    identifier: unknown,
    body: ExcludeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/exclude`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ExcludeUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel.
   */
  list(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<ExcludeListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy/exclude`, options) as Core.APIPromise<{
        result: ExcludeListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ExcludeUpdateResponse = Array<ExcludeUpdateResponse.ExcludeUpdateResponseItem>;

export namespace ExcludeUpdateResponse {
  export interface ExcludeUpdateResponseItem {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeListResponse = Array<ExcludeListResponse.ExcludeListResponseItem>;

export namespace ExcludeListResponse {
  export interface ExcludeListResponseItem {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeUpdateParams = Array<ExcludeUpdateParams.Body>;

export namespace ExcludeUpdateParams {
  export interface Body {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export namespace Excludes {
  export import ExcludeUpdateResponse = ExcludesAPI.ExcludeUpdateResponse;
  export import ExcludeListResponse = ExcludesAPI.ExcludeListResponse;
  export import ExcludeUpdateParams = ExcludesAPI.ExcludeUpdateParams;
}
