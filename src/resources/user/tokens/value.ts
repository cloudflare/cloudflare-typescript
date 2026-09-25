// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseValue extends APIResource {
  static override readonly _key: readonly ['user', 'tokens', 'value'] = Object.freeze([
    'user',
    'tokens',
    'value',
  ] as const);

  /**
   * Roll the token secret.
   *
   * @example
   * ```ts
   * const tokenValue = await client.user.tokens.value.update(
   *   'ed17574386854bf78a67040be0a770b0',
   * );
   * ```
   */
  update(tokenID: string, options?: RequestOptions): APIPromise<Shared.TokenValue> {
    return (
      this._client.put(path`/user/tokens/${tokenID}/value`, options) as APIPromise<{
        result: Shared.TokenValue;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Value extends BaseValue {}
