// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ListsAPI from './lists';
import { GatewayItemsV4PagePaginationArray } from './lists';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseItems extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'lists', 'items'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'lists',
    'items',
  ] as const);

  /**
   * Fetch all items in a single Zero Trust list.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const gatewayItem of client.zeroTrust.gateway.lists.items.list(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    listID: string,
    params: ItemListParams,
    options?: RequestOptions,
  ): PagePromise<GatewayItemsV4PagePaginationArray, ListsAPI.GatewayItem> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/lists/${listID}/items`,
      V4PagePaginationArray<ListsAPI.GatewayItem>,
      { query, ...options },
    );
  }
}
export class Items extends BaseItems {}

export interface ItemListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Specify the Cloudflare account identifier.
   */
  account_id: string;
}

export declare namespace Items {
  export { type ItemListParams as ItemListParams };
}

export { type GatewayItemsV4PagePaginationArray };
