// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Value extends APIResource {
  /**
   * Roll the token secret.
   */
  update(
    tokenID: string,
    params: ValueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.TokenValue> {
    const { body } = params;
    return (
      this._client.put(path`/user/tokens/${tokenID}/value`, { body: body, ...options }) as APIPromise<{
        result: Shared.TokenValue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ValueUpdateParams {
  body: unknown;
}

export declare namespace Value {
  export { type ValueUpdateParams as ValueUpdateParams };
}
