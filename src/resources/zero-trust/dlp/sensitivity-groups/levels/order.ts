// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseOrder extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'sensitivityGroups', 'levels', 'order'] =
    Object.freeze(['zeroTrust', 'dlp', 'sensitivityGroups', 'levels', 'order'] as const);

  /**
   * Set the ordering of levels within a sensitivity group.
   *
   * @example
   * ```ts
   * const order =
   *   await client.zeroTrust.dlp.sensitivityGroups.levels.order.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       level_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
   *     },
   *   );
   * ```
   */
  update(
    sensitivityGroupID: string,
    params: OrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrderUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupID}/level_order`,
        { body, ...options },
      ) as APIPromise<{ result: OrderUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the ordered list of level IDs for a sensitivity group.
   *
   * @example
   * ```ts
   * const order =
   *   await client.zeroTrust.dlp.sensitivityGroups.levels.order.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    sensitivityGroupID: string,
    params: OrderGetParams,
    options?: RequestOptions,
  ): APIPromise<OrderGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupID}/level_order`,
        options,
      ) as APIPromise<{ result: OrderGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Order extends BaseOrder {}

/**
 * The ordered list of level IDs for a sensitivity group. Used to get and set the
 * ordering of levels independently of level attributes.
 */
export interface OrderUpdateResponse {
  level_ids: Array<string>;
}

/**
 * The ordered list of level IDs for a sensitivity group. Used to get and set the
 * ordering of levels independently of level attributes.
 */
export interface OrderGetResponse {
  level_ids: Array<string>;
}

export interface OrderUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  level_ids: Array<string>;
}

export interface OrderGetParams {
  account_id: string;
}

export declare namespace Order {
  export {
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderGetResponse as OrderGetResponse,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderGetParams as OrderGetParams,
  };
}
