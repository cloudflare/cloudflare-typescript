// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ProviderConfigs extends APIResource {
  /**
   * Creates a new AI Gateway.
   *
   * @example
   * ```ts
   * const providerConfig =
   *   await client.aiGateway.providerConfigs.create(
   *     'my-gateway',
   *     {
   *       account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *       alias: 'alias',
   *       default_config: true,
   *       provider_slug: 'provider_slug',
   *       secret: 'secret',
   *       secret_id: 'secret_id',
   *     },
   *   );
   * ```
   */
  create(
    gatewayID: string,
    params: ProviderConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProviderConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/provider_configs`, {
        body,
        ...options,
      }) as APIPromise<{ result: ProviderConfigCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const providerConfigListResponse of client.aiGateway.providerConfigs.list(
   *   'my-gateway',
   *   { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    gatewayID: string,
    params: ProviderConfigListParams,
    options?: RequestOptions,
  ): PagePromise<ProviderConfigListResponsesV4PagePaginationArray, ProviderConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/provider_configs`,
      V4PagePaginationArray<ProviderConfigListResponse>,
      { query, ...options },
    );
  }
}

export type ProviderConfigListResponsesV4PagePaginationArray =
  V4PagePaginationArray<ProviderConfigListResponse>;

export interface ProviderConfigCreateResponse {
  id: string;

  alias: string;

  default_config: boolean;

  /**
   * gateway id
   */
  gateway_id: string;

  modified_at: string;

  provider_slug: string;

  secret_id: string;

  secret_preview: string;

  rate_limit?: number;

  rate_limit_period?: number;
}

export interface ProviderConfigListResponse {
  id: string;

  alias: string;

  default_config: boolean;

  /**
   * gateway id
   */
  gateway_id: string;

  modified_at: string;

  provider_slug: string;

  secret_id: string;

  secret_preview: string;

  rate_limit?: number;

  rate_limit_period?: number;
}

export interface ProviderConfigCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  alias: string;

  /**
   * Body param
   */
  default_config: boolean;

  /**
   * Body param
   */
  provider_slug: string;

  /**
   * Body param
   */
  secret: string;

  /**
   * Body param
   */
  secret_id: string;

  /**
   * Body param
   */
  rate_limit?: number;

  /**
   * Body param
   */
  rate_limit_period?: number;
}

export interface ProviderConfigListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;
}

export declare namespace ProviderConfigs {
  export {
    type ProviderConfigCreateResponse as ProviderConfigCreateResponse,
    type ProviderConfigListResponse as ProviderConfigListResponse,
    type ProviderConfigListResponsesV4PagePaginationArray as ProviderConfigListResponsesV4PagePaginationArray,
    type ProviderConfigCreateParams as ProviderConfigCreateParams,
    type ProviderConfigListParams as ProviderConfigListParams,
  };
}
