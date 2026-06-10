// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';

export class Order extends APIResource {
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
    sensitivityGroupId: string,
    params: OrderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}/level_order`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrderUpdateResponse }>
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
    sensitivityGroupId: string,
    params: OrderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}/level_order`,
        options,
      ) as Core.APIPromise<{ result: OrderGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
