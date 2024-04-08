// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ItemsAPI from 'cloudflare/resources/zero-trust/gateway/lists/items';
import { SinglePage } from 'cloudflare/pagination';

export class Items extends APIResource {
  /**
   * Fetches all items in a single Zero Trust list.
   */
  list(
    listId: string,
    params: ItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemListResponsesSinglePage, ItemListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/gateway/lists/${listId}/items`,
      ItemListResponsesSinglePage,
      options,
    );
  }
}

export class ItemListResponsesSinglePage extends SinglePage<ItemListResponse> {}

export interface ListsItem {
  created_at?: string;

  /**
   * The value of the item in a list.
   */
  value?: string;
}

/**
 * The items in the list.
 */
export type ItemListResponse = Array<ListsItem>;

export interface ItemListParams {
  account_id: string;
}

export namespace Items {
  export import ListsItem = ItemsAPI.ListsItem;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemListResponsesSinglePage = ItemsAPI.ItemListResponsesSinglePage;
  export import ItemListParams = ItemsAPI.ItemListParams;
}
