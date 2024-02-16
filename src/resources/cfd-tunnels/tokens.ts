// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TokensAPI from 'cloudflare/resources/cfd-tunnels/tokens';

export class Tokens extends APIResource {
  /**
   * Gets the token used to associate cloudflared with a specific tunnel.
   */
  cloudflareTunnelGetACloudflareTunnelToken(
    accountId: string,
    tunnelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenCloudflareTunnelGetACloudflareTunnelTokenResponse> {
    return (
      this._client.get(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/token`, options) as Core.APIPromise<{
        result: TokenCloudflareTunnelGetACloudflareTunnelTokenResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TokenCloudflareTunnelGetACloudflareTunnelTokenResponse = unknown | Array<unknown> | string;

export namespace Tokens {
  export import TokenCloudflareTunnelGetACloudflareTunnelTokenResponse = TokensAPI.TokenCloudflareTunnelGetACloudflareTunnelTokenResponse;
}
