// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseConfig extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'billing', 'topup', 'config'] = Object.freeze([
    'aiGateway',
    'billing',
    'topup',
    'config',
  ] as const);

  /**
   * Configure auto top-up with a balance threshold and top-up amount.
   *
   * @example
   * ```ts
   * const config =
   *   await client.aiGateway.billing.topup.config.create({
   *     account_id: 'account_id',
   *     amount: 5000,
   *     threshold: 500,
   *   });
   * ```
   */
  create(params: ConfigCreateParams, options?: RequestOptions): APIPromise<ConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-gateway/billing/topup/config`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConfigCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove the auto top-up configuration for the account.
   *
   * @example
   * ```ts
   * const config =
   *   await client.aiGateway.billing.topup.config.delete({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  delete(params: ConfigDeleteParams, options?: RequestOptions): APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/ai-gateway/billing/topup/config`,
        options,
      ) as APIPromise<{ result: ConfigDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the current auto top-up threshold, amount, and any error state.
   *
   * @example
   * ```ts
   * const config =
   *   await client.aiGateway.billing.topup.config.get({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  get(params: ConfigGetParams, options?: RequestOptions): APIPromise<ConfigGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai-gateway/billing/topup/config`, options) as APIPromise<{
        result: ConfigGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Config extends BaseConfig {}

export interface ConfigCreateResponse {
  amount: number;

  threshold: number;
}

export type ConfigDeleteResponse = unknown;

export interface ConfigGetResponse {
  amount: number | null;

  disabledReason: string | null;

  error: string | null;

  lastFailedAt: number | null;

  threshold: number | null;
}

export interface ConfigCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Auto top-up amount in cents (min 1000).
   */
  amount: number;

  /**
   * Body param: Balance threshold in cents that triggers auto top-up (min 500).
   */
  threshold: number;
}

export interface ConfigDeleteParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface ConfigGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export declare namespace Config {
  export {
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
