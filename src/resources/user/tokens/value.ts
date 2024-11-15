// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Value extends APIResource {
  /**
   * Roll the token secret.
   */
  update(
    tokenId: string,
    body: ValueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.TokenValue> {
    return (
      this._client.put(`/user/tokens/${tokenId}/value`, { body, ...options }) as Core.APIPromise<{
        result: Shared.TokenValue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ValueUpdateParams = unknown;

export declare namespace Value {
  export { type ValueUpdateParams as ValueUpdateParams };
}
