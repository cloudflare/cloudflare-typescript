// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTokens extends APIResource {
  static override readonly _key: readonly ['magicNetworkMonitoring', 'vpcFlows', 'tokens'] = Object.freeze([
    'magicNetworkMonitoring',
    'vpcFlows',
    'tokens',
  ] as const);

  /**
   * Generate authentication token for VPC flow logs export.
   *
   * @example
   * ```ts
   * const token =
   *   await client.magicNetworkMonitoring.vpcFlows.tokens.create(
   *     { account_id: '6f91088a406011ed95aed352566e8d4c' },
   *   );
   * ```
   */
  create(
    params: TokenCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenCreateResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.post(path`/accounts/${account_id}/mnm/vpc-flows/token`, options) as APIPromise<{
        result: TokenCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Tokens extends BaseTokens {}

/**
 * Authentication token to be used for VPC Flows export authentication.
 */
export type TokenCreateResponse = string;

export interface TokenCreateParams {
  account_id?: string;
}

export declare namespace Tokens {
  export { type TokenCreateResponse as TokenCreateResponse, type TokenCreateParams as TokenCreateParams };
}
