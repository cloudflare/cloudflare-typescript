// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValuesAPI from 'cloudflare/resources/users/tokens/values';

export class Values extends APIResource {
  /**
   * Roll the token secret.
   */
  replace(
    tokenId: unknown,
    body: ValueReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueReplaceResponse> {
    return (
      this._client.put(`/user/tokens/${tokenId}/value`, { body, ...options }) as Core.APIPromise<{
        result: ValueReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The token value.
 */
export type ValueReplaceResponse = string;

export type ValueReplaceParams = unknown;

export namespace Values {
  export import ValueReplaceResponse = ValuesAPI.ValueReplaceResponse;
  export import ValueReplaceParams = ValuesAPI.ValueReplaceParams;
}
