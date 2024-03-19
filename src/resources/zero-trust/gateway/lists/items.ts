// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ItemsAPI from 'cloudflare/resources/zero-trust/gateway/lists/items';

export class Items extends APIResource {
  /**
   * Fetches all items in a single Zero Trust list.
   */
  list(
    listId: string,
    params: ItemListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/lists/${listId}/items`, options) as Core.APIPromise<{
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

export interface ItemListParams {
  account_id: unknown;
}

export namespace Items {
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemListParams = ItemsAPI.ItemListParams;
}
