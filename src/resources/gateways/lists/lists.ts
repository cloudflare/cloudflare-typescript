// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/gateways/lists/lists';
import * as ItemsAPI from 'cloudflare/resources/gateways/lists/items';

export class Lists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Updates a configured Zero Trust list.
   */
  update(
    accountId: unknown,
    listId: string,
    body: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a Zero Trust list.
   */
  delete(
    accountId: unknown,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/gateway/lists/${listId}`, options) as Core.APIPromise<{
        result: ListDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust list.
   */
  get(accountId: unknown, listId: string, options?: Core.RequestOptions): Core.APIPromise<ListGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/lists/${listId}`, options) as Core.APIPromise<{
        result: ListGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new Zero Trust list.
   */
  zeroTrustListsCreateZeroTrustList(
    accountId: unknown,
    body: ListZeroTrustListsCreateZeroTrustListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListZeroTrustListsCreateZeroTrustListResponse> {
    return (
      this._client.post(`/accounts/${accountId}/gateway/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListZeroTrustListsCreateZeroTrustListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust lists for an account.
   */
  zeroTrustListsListZeroTrustLists(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListZeroTrustListsListZeroTrustListsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/lists`, options) as Core.APIPromise<{
        result: ListZeroTrustListsListZeroTrustListsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ListUpdateResponse {
  /**
   * API Resource UUID tag.
   */
  id?: string;

  /**
   * The number of items in the list.
   */
  count?: number;

  created_at?: string;

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The name of the list.
   */
  name?: string;

  /**
   * The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export type ListDeleteResponse = unknown | string;

export interface ListGetResponse {
  /**
   * API Resource UUID tag.
   */
  id?: string;

  /**
   * The number of items in the list.
   */
  count?: number;

  created_at?: string;

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The name of the list.
   */
  name?: string;

  /**
   * The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export interface ListZeroTrustListsCreateZeroTrustListResponse {
  /**
   * API Resource UUID tag.
   */
  id?: string;

  created_at?: string;

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The items in the list.
   */
  items?: Array<ListZeroTrustListsCreateZeroTrustListResponse.Item>;

  /**
   * The name of the list.
   */
  name?: string;

  /**
   * The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export namespace ListZeroTrustListsCreateZeroTrustListResponse {
  export interface Item {
    created_at?: string;

    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export type ListZeroTrustListsListZeroTrustListsResponse =
  Array<ListZeroTrustListsListZeroTrustListsResponse.ListZeroTrustListsListZeroTrustListsResponseItem>;

export namespace ListZeroTrustListsListZeroTrustListsResponse {
  export interface ListZeroTrustListsListZeroTrustListsResponseItem {
    /**
     * API Resource UUID tag.
     */
    id?: string;

    /**
     * The number of items in the list.
     */
    count?: number;

    created_at?: string;

    /**
     * The description of the list.
     */
    description?: string;

    /**
     * The name of the list.
     */
    name?: string;

    /**
     * The type of list.
     */
    type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

    updated_at?: string;
  }
}

export interface ListUpdateParams {
  /**
   * The name of the list.
   */
  name: string;

  /**
   * The description of the list.
   */
  description?: string;
}

export interface ListZeroTrustListsCreateZeroTrustListParams {
  /**
   * The name of the list.
   */
  name: string;

  /**
   * The type of list.
   */
  type: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The items in the list.
   */
  items?: Array<ListZeroTrustListsCreateZeroTrustListParams.Item>;
}

export namespace ListZeroTrustListsCreateZeroTrustListParams {
  export interface Item {
    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export namespace Lists {
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListZeroTrustListsCreateZeroTrustListResponse = ListsAPI.ListZeroTrustListsCreateZeroTrustListResponse;
  export import ListZeroTrustListsListZeroTrustListsResponse = ListsAPI.ListZeroTrustListsListZeroTrustListsResponse;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListZeroTrustListsCreateZeroTrustListParams = ListsAPI.ListZeroTrustListsCreateZeroTrustListParams;
  export import Items = ItemsAPI.Items;
  export import ItemZeroTrustListsZeroTrustListItemsResponse = ItemsAPI.ItemZeroTrustListsZeroTrustListItemsResponse;
}
