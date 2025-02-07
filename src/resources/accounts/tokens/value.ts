// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Value extends APIResource {
  /**
   * Roll the Account Owned API token secret.
   */
  update(
    tokenID: string,
    params: ValueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.TokenValue> {
    const { account_id, body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/tokens/${tokenID}/value`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: Shared.TokenValue }>
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
