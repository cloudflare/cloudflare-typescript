// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValueAPI from 'cloudflare/resources/user/tokens/value';

export class Value extends APIResource {
  /**
   * Roll the token secret.
   */
  update(
    tokenId: unknown,
    body: ValueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenValue> {
    return (
      this._client.put(`/user/tokens/${tokenId}/value`, { body, ...options }) as Core.APIPromise<{
        result: TokenValue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The token value.
 */
export type TokenValue = string;

export type ValueUpdateParams = unknown;

export namespace Value {
  export import TokenValue = ValueAPI.TokenValue;
  export import ValueUpdateParams = ValueAPI.ValueUpdateParams;
}
