// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValuesAPI from 'cloudflare/resources/users/tokens/values';

export class Values extends APIResource {
  /**
   * Roll the token secret.
   */
  update(
    tokenId: unknown,
    body: ValueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueUpdateResponse> {
    return (
      this._client.put(`/user/tokens/${tokenId}/value`, { body, ...options }) as Core.APIPromise<{
        result: ValueUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The token value.
 */
export type ValueUpdateResponse = string;

export type ValueUpdateParams = unknown;

export namespace Values {
  export import ValueUpdateResponse = ValuesAPI.ValueUpdateResponse;
  export import ValueUpdateParams = ValuesAPI.ValueUpdateParams;
}
