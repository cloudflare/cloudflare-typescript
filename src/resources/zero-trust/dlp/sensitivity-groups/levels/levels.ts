// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as OrderAPI from './order';
import {
  BaseOrder,
  Order,
  OrderGetParams,
  OrderGetResponse,
  OrderUpdateParams,
  OrderUpdateResponse,
} from './order';
import { APIPromise } from '../../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseLevels extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'sensitivityGroups', 'levels'] = Object.freeze(
    ['zeroTrust', 'dlp', 'sensitivityGroups', 'levels'] as const,
  );

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
    sensitivityGroupID: string,
    params: LevelCreateParams,
    options?: RequestOptions,
  ): APIPromise<LevelCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupID}/levels`, {
        body,
        ...options,
      }) as APIPromise<{ result: LevelCreateResponse }>
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
   *     {
   *       account_id: 'account_id',
   *       sensitivity_group_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  update(
    sensitivityLevelID: string,
    params: LevelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LevelUpdateResponse> {
    const { account_id, sensitivity_group_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivity_group_id}/levels/${sensitivityLevelID}`,
        { body, ...options },
      ) as APIPromise<{ result: LevelUpdateResponse }>
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
    sensitivityGroupID: string,
    params: LevelListParams,
    options?: RequestOptions,
  ): PagePromise<LevelListResponsesSinglePage, LevelListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupID}/levels`,
      SinglePage<LevelListResponse>,
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
   *     {
   *       account_id: 'account_id',
   *       sensitivity_group_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  delete(
    sensitivityLevelID: string,
    params: LevelDeleteParams,
    options?: RequestOptions,
  ): APIPromise<LevelDeleteResponse | null> {
    const { account_id, sensitivity_group_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivity_group_id}/levels/${sensitivityLevelID}`,
        options,
      ) as APIPromise<{ result: LevelDeleteResponse | null }>
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
   *     {
   *       account_id: 'account_id',
   *       sensitivity_group_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  get(
    sensitivityLevelID: string,
    params: LevelGetParams,
    options?: RequestOptions,
  ): APIPromise<LevelGetResponse> {
    const { account_id, sensitivity_group_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivity_group_id}/levels/${sensitivityLevelID}`,
        options,
      ) as APIPromise<{ result: LevelGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Levels extends BaseLevels {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
}

export type LevelListResponsesSinglePage = SinglePage<LevelListResponse>;

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
   * Path param
   */
  sensitivity_group_id: string;

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

  sensitivity_group_id: string;
}

export interface LevelGetParams {
  account_id: string;

  sensitivity_group_id: string;
}

Levels.Order = Order;
Levels.BaseOrder = BaseOrder;

export declare namespace Levels {
  export {
    type LevelCreateResponse as LevelCreateResponse,
    type LevelUpdateResponse as LevelUpdateResponse,
    type LevelListResponse as LevelListResponse,
    type LevelDeleteResponse as LevelDeleteResponse,
    type LevelGetResponse as LevelGetResponse,
    type LevelListResponsesSinglePage as LevelListResponsesSinglePage,
    type LevelCreateParams as LevelCreateParams,
    type LevelUpdateParams as LevelUpdateParams,
    type LevelListParams as LevelListParams,
    type LevelDeleteParams as LevelDeleteParams,
    type LevelGetParams as LevelGetParams,
  };

  export {
    Order as Order,
    BaseOrder as BaseOrder,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderGetResponse as OrderGetResponse,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderGetParams as OrderGetParams,
  };
}
