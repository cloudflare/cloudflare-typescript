// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ValueAPI from './value';

export class ValueResource extends APIResource {
  /**
   * Roll the token secret.
   */
  update(tokenId: string, body: ValueUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Value> {
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
