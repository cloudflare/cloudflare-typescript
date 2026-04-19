// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class Token extends APIResource {
  /**
   * Gets the token used to associate warp device with a specific Warp Connector
   * tunnel.
   *
   * @example
   * ```ts
   * const token =
   *   await client.zeroTrust.tunnels.warpConnector.token.get(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    tunnelId: string,
    params?: TokenGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenGetResponse>;
  get(tunnelId: string, options?: Core.RequestOptions): Core.APIPromise<TokenGetResponse>;
  get(
    tunnelId: string,
    params: TokenGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(tunnelId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/warp_connector/${tunnelId}/token`,
        options,
      ) as Core.APIPromise<{ result: TokenGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The Tunnel Token is used as a mechanism to authenticate the operation of a
 * tunnel.
 */
export type TokenGetResponse = string;

export interface TokenGetParams {
  /**
   * Cloudflare account ID
   */
  account_id?: string;
}

export declare namespace Token {
  export { type TokenGetResponse as TokenGetResponse, type TokenGetParams as TokenGetParams };
}
