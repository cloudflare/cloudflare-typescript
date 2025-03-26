// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Token extends APIResource {
  /**
   * Gets the token used to associate cloudflared with a specific tunnel.
   */
  get(tunnelID: string, params: TokenGetParams, options?: RequestOptions): APIPromise<TokenGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cfd_tunnel/${tunnelID}/token`, options) as APIPromise<{
        result: TokenGetResponse;
      }>
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
  account_id: string;
}

export declare namespace Token {
  export { type TokenGetResponse as TokenGetResponse, type TokenGetParams as TokenGetParams };
}
