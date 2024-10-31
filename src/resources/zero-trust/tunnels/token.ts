// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Token extends APIResource {
  /**
   * Gets the token used to associate cloudflared with a specific tunnel.
   */
  get(
    tunnelId: string,
    params: TokenGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/cfd_tunnel/${tunnelId}/token`, options) as Core.APIPromise<{
        result: TokenGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
