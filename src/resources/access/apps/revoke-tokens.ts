// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RevokeTokensAPI from 'cloudflare/resources/access/apps/revoke-tokens';

export class RevokeTokens extends APIResource {
  /**
   * Revokes all tokens issued for an application.
   */
  accessApplicationsRevokeServiceTokens(
    accountOrZone: string,
    accountOrZoneId: string,
    appId: string | string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeTokenAccessApplicationsRevokeServiceTokensResponse | null> {
    return (
      this._client.post(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/revoke_tokens`,
        options,
      ) as Core.APIPromise<{ result: RevokeTokenAccessApplicationsRevokeServiceTokensResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RevokeTokenAccessApplicationsRevokeServiceTokensResponse = unknown;

export namespace RevokeTokens {
  export import RevokeTokenAccessApplicationsRevokeServiceTokensResponse = RevokeTokensAPI.RevokeTokenAccessApplicationsRevokeServiceTokensResponse;
}
