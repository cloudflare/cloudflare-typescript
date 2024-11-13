// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TokensValueAPI from '../../user/tokens/value';

export class Value extends APIResource {
  /**
   * Roll the Account Owned API token secret.
   */
  update(
    tokenId: string,
    params: ValueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokensValueAPI.Value> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/tokens/${tokenId}/value`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: TokensValueAPI.Value }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ValueUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export declare namespace Value {
  export { type ValueUpdateParams as ValueUpdateParams };
}
