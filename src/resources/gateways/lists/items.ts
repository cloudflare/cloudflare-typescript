// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ItemsAPI from 'cloudflare/resources/gateways/lists/items';

export class Items extends APIResource {
  /**
   * Fetches all items in a single Zero Trust list.
   */
  zeroTrustListsZeroTrustListItems(
    accountId: unknown,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemZeroTrustListsZeroTrustListItemsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/lists/${listId}/items`, options) as Core.APIPromise<{
        result: ItemZeroTrustListsZeroTrustListItemsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ItemZeroTrustListsZeroTrustListItemsResponse = Array<
  Array<ItemZeroTrustListsZeroTrustListItemsResponse.ItemZeroTrustListsZeroTrustListItemsResponseItem>
>;

export namespace ItemZeroTrustListsZeroTrustListItemsResponse {
  export interface ItemZeroTrustListsZeroTrustListItemsResponseItem {
    created_at?: string;

    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export namespace Items {
  export import ItemZeroTrustListsZeroTrustListItemsResponse = ItemsAPI.ItemZeroTrustListsZeroTrustListItemsResponse;
}
