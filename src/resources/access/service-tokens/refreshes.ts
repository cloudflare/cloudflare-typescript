// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RefreshesAPI from 'cloudflare/resources/access/service-tokens/refreshes';

export class Refreshes extends APIResource {
  /**
   * Refreshes the expiration of a service token.
   */
  accessServiceTokensRefreshAServiceToken(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RefreshAccessServiceTokensRefreshAServiceTokenResponse> {
    return (
      this._client.post(
        `/accounts/${identifier}/access/service_tokens/${uuid}/refresh`,
        options,
      ) as Core.APIPromise<{ result: RefreshAccessServiceTokensRefreshAServiceTokenResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RefreshAccessServiceTokensRefreshAServiceTokenResponse {
  /**
   * The ID of the service token.
   */
  id?: unknown;

  /**
   * The Client ID for the service token. Access will check for this value in the
   * `CF-Access-Client-ID` request header.
   */
  client_id?: string;

  created_at?: string;

  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;

  /**
   * The name of the service token.
   */
  name?: string;

  updated_at?: string;
}

export namespace Refreshes {
  export import RefreshAccessServiceTokensRefreshAServiceTokenResponse = RefreshesAPI.RefreshAccessServiceTokensRefreshAServiceTokenResponse;
}
