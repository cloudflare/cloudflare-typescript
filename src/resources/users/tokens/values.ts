// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValuesAPI from 'cloudflare/resources/users/tokens/values';

export class Values extends APIResource {
  /**
   * Roll the token secret.
   */
  userAPITokensRollToken(
    tokenId: unknown,
    body: ValueUserAPITokensRollTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueUserAPITokensRollTokenResponse> {
    return (
      this._client.put(`/user/tokens/${tokenId}/value`, { body, ...options }) as Core.APIPromise<{
        result: ValueUserAPITokensRollTokenResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The token value.
 */
export type ValueUserAPITokensRollTokenResponse = string;

export type ValueUserAPITokensRollTokenParams = unknown;

export namespace Values {
  export import ValueUserAPITokensRollTokenResponse = ValuesAPI.ValueUserAPITokensRollTokenResponse;
  export import ValueUserAPITokensRollTokenParams = ValuesAPI.ValueUserAPITokensRollTokenParams;
}
