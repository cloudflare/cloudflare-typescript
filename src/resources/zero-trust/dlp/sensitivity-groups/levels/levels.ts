// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as OrderAPI from './order';
import { Order, OrderGetParams, OrderGetResponse, OrderUpdateParams, OrderUpdateResponse } from './order';
import { SinglePage } from '../../../../../pagination';

export class Levels extends APIResource {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);

  /**
   * Creates a new sensitivity level.
   *
   * @example
   * ```ts
   * const level =
   *   await client.zeroTrust.dlp.sensitivityGroups.levels.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id', name: 'name' },
   *   );
   * ```
   */
  create(
    sensitivityGroupId: string,
    params: LevelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LevelCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}/levels`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LevelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the attributes of a single sensitivity level.
   *
   * @example
   * ```ts
   * const level =
   *   await client.zeroTrust.dlp.sensitivityGroups.levels.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    sensitivityGroupId: string,
    sensitivityLevelId: string,
    params: LevelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LevelUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}/levels/${sensitivityLevelId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: LevelUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve all sensitivity levels in a sensitivity group
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const levelListResponse of client.zeroTrust.dlp.sensitivityGroups.levels.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    sensitivityGroupId: string,
    params: LevelListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LevelListResponsesSinglePage, LevelListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}/levels`,
      LevelListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a single sensitivity level.
   *
   * @example
   * ```ts
   * const level =
   *   await client.zeroTrust.dlp.sensitivityGroups.levels.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    sensitivityGroupId: string,
    sensitivityLevelId: string,
    params: LevelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LevelDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}/levels/${sensitivityLevelId}`,
        options,
      ) as Core.APIPromise<{ result: LevelDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a specific sensitivity level.
   *
   * @example
   * ```ts
   * const level =
   *   await client.zeroTrust.dlp.sensitivityGroups.levels.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    sensitivityGroupId: string,
    sensitivityLevelId: string,
    params: LevelGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LevelGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}/levels/${sensitivityLevelId}`,
        options,
      ) as Core.APIPromise<{ result: LevelGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class LevelListResponsesSinglePage extends SinglePage<LevelListResponse> {}

export interface LevelCreateResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface LevelUpdateResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface LevelListResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export type LevelDeleteResponse = unknown;

export interface LevelGetResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface LevelCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string | null;
}

export interface LevelUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  name?: string | null;
}

export interface LevelListParams {
  account_id: string;
}

export interface LevelDeleteParams {
  account_id: string;
}

export interface LevelGetParams {
  account_id: string;
}

Levels.LevelListResponsesSinglePage = LevelListResponsesSinglePage;
Levels.Order = Order;

export declare namespace Levels {
  export {
    type LevelCreateResponse as LevelCreateResponse,
    type LevelUpdateResponse as LevelUpdateResponse,
    type LevelListResponse as LevelListResponse,
    type LevelDeleteResponse as LevelDeleteResponse,
    type LevelGetResponse as LevelGetResponse,
    LevelListResponsesSinglePage as LevelListResponsesSinglePage,
    type LevelCreateParams as LevelCreateParams,
    type LevelUpdateParams as LevelUpdateParams,
    type LevelListParams as LevelListParams,
    type LevelDeleteParams as LevelDeleteParams,
    type LevelGetParams as LevelGetParams,
  };

  export {
    Order as Order,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderGetResponse as OrderGetResponse,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderGetParams as OrderGetParams,
  };
}
