// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ItemsAPI from 'cloudflare/resources/gateways/lists/items';

export class Items extends APIResource {
  /**
   * Fetches all items in a single Zero Trust list.
   */
  list(
    accountId: unknown,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/lists/${listId}/items`, options) as Core.APIPromise<{
        result: ItemListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ItemListResponse = Array<Array<ItemListResponse.ItemListResponseItem>>;

export namespace ItemListResponse {
  export interface ItemListResponseItem {
    created_at?: string;

    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export namespace Items {
  export import ItemListResponse = ItemsAPI.ItemListResponse;
}
