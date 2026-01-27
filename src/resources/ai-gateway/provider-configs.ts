// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class ProviderConfigs extends APIResource {
  /**
   * Create a new Provider Configs
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
    gatewayId: string,
    params: ProviderConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProviderConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/provider_configs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProviderConfigCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Provider Configs
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
    gatewayId: string,
    params: ProviderConfigListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProviderConfigListResponsesV4PagePaginationArray, ProviderConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/provider_configs`,
      ProviderConfigListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class ProviderConfigListResponsesV4PagePaginationArray extends V4PagePaginationArray<ProviderConfigListResponse> {}

export interface ProviderConfigCreateResponse {
  id: string;

  account_id: string;

  account_tag: string;

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

  account_id: string;

  account_tag: string;

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

ProviderConfigs.ProviderConfigListResponsesV4PagePaginationArray =
  ProviderConfigListResponsesV4PagePaginationArray;

export declare namespace ProviderConfigs {
  export {
    type ProviderConfigCreateResponse as ProviderConfigCreateResponse,
    type ProviderConfigListResponse as ProviderConfigListResponse,
    ProviderConfigListResponsesV4PagePaginationArray as ProviderConfigListResponsesV4PagePaginationArray,
    type ProviderConfigCreateParams as ProviderConfigCreateParams,
    type ProviderConfigListParams as ProviderConfigListParams,
  };
}
