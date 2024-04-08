// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValueAPI from 'cloudflare/resources/user/tokens/value';

export class ValueResource extends APIResource {
  /**
   * Roll the token secret.
   */
  update(tokenId: unknown, body: ValueUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Value> {
    return (
      this._client.put(`/user/tokens/${tokenId}/value`, { body, ...options }) as Core.APIPromise<{
        result: Value;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The token value.
 */
export type Value = string;

export type ValueUpdateParams = unknown;

export namespace ValueResource {
  export import Value = ValueAPI.Value;
  export import ValueUpdateParams = ValueAPI.ValueUpdateParams;
}
