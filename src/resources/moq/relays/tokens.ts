// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTokens extends APIResource {
  static override readonly _key: readonly ['moq', 'relays', 'tokens'] = Object.freeze([
    'moq',
    'relays',
    'tokens',
  ] as const);

  /**
   * Generates a new token for the specified type. The old token is immediately
   * invalidated. Token value is shown once in the response.
   *
   * @example
   * ```ts
   * const response = await client.moq.relays.tokens.rotate(
   *   'a1b2c3d4e5f67890a1b2c3d4e5f67890',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     type: 'publish_subscribe',
   *   },
   * );
   * ```
   */
  rotate(
    relayID: string,
    params: TokenRotateParams,
    options?: RequestOptions,
  ): APIPromise<TokenRotateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/moq/relays/${relayID}/tokens/rotate`, {
        body,
        ...options,
      }) as APIPromise<{ result: TokenRotateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Tokens extends BaseTokens {}

export interface TokenRotateResponse {
  /**
   * New token value (shown once). Treat as sensitive.
   */
  token: string;

  type: 'publish_subscribe' | 'subscribe';
}

export interface TokenRotateParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Which token type to rotate.
   */
  type: 'publish_subscribe' | 'subscribe';
}

export declare namespace Tokens {
  export { type TokenRotateResponse as TokenRotateResponse, type TokenRotateParams as TokenRotateParams };
}
