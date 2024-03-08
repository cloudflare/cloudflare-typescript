// File generated from our OpenAPI spec by Stainless.

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
  ): Core.APIPromise<IamValue> {
    return (
      this._client.put(`/user/tokens/${tokenId}/value`, { body, ...options }) as Core.APIPromise<{
        result: IamValue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The token value.
 */
export type IamValue = string;

export type ValueUpdateParams = unknown;

export namespace Value {
  export import IamValue = ValueAPI.IamValue;
  export import ValueUpdateParams = ValueAPI.ValueUpdateParams;
}
