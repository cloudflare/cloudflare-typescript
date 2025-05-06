// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ListsAPI from './lists';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Fetches all items in a single Zero Trust list.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const itemListResponse of client.zeroTrust.gateway.lists.items.list(
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
  ): PagePromise<ItemListResponsesSinglePage, ItemListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/lists/${listID}/items`,
      SinglePage<ItemListResponse>,
      options,
    );
  }
}

export type ItemListResponsesSinglePage = SinglePage<ItemListResponse>;

/**
 * The items in the list.
 */
export type ItemListResponse = Array<ListsAPI.GatewayItem>;

export interface ItemListParams {
  account_id: string;
}

export declare namespace Items {
  export {
    type ItemListResponse as ItemListResponse,
    type ItemListResponsesSinglePage as ItemListResponsesSinglePage,
    type ItemListParams as ItemListParams,
  };
}
