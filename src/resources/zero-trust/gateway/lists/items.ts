// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ListsAPI from './lists';
import { SinglePage } from '../../../../pagination';

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

/**
 * The items in the list.
 */
export type ItemListResponse = Array<ListsAPI.GatewayItem>;

export interface ItemListParams {
  account_id: string;
}

Items.ItemListResponsesSinglePage = ItemListResponsesSinglePage;

export declare namespace Items {
  export {
    type ItemListResponse as ItemListResponse,
    ItemListResponsesSinglePage as ItemListResponsesSinglePage,
    type ItemListParams as ItemListParams,
  };
}
