// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/rules/lists/lists';
import * as BulkOperationsAPI from 'cloudflare/resources/rules/lists/bulk-operations';
import * as ItemsAPI from 'cloudflare/resources/rules/lists/items';

export class Lists extends APIResource {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Updates the description of a list.
   */
  update(
    accountId: string,
    listId: string,
    body: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/rules/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a specific list and all its items.
   */
  delete(
    accountId: string,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${accountId}/rules/lists/${listId}`, options) as Core.APIPromise<{
        result: ListDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a list.
   */
  get(
    accountId: string,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListGetResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/rules/lists/${listId}`, options) as Core.APIPromise<{
        result: ListGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new list of the specified type.
   */
  listsCreateAList(
    accountId: string,
    body: ListListsCreateAListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListListsCreateAListResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/rules/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListListsCreateAListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all lists in the account.
   */
  listsGetLists(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListListsGetListsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/rules/lists`, options) as Core.APIPromise<{
        result: ListListsGetListsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ListUpdateResponse = Array<unknown>;

export interface ListDeleteResponse {
  /**
   * The unique ID of the item in the List.
   */
  id?: string;
}

export type ListGetResponse = Array<unknown>;

export type ListListsCreateAListResponse = Array<unknown>;

export type ListListsGetListsResponse = Array<ListListsGetListsResponse.ListListsGetListsResponseItem>;

export namespace ListListsGetListsResponse {
  export interface ListListsGetListsResponseItem {
    /**
     * The unique ID of the list.
     */
    id: string;

    /**
     * The RFC 3339 timestamp of when the list was created.
     */
    created_on: string;

    /**
     * The type of the list. Each type supports specific list items (IP addresses,
     * ASNs, hostnames or redirects).
     */
    kind: 'ip' | 'redirect' | 'hostname' | 'asn';

    /**
     * The RFC 3339 timestamp of when the list was last modified.
     */
    modified_on: string;

    /**
     * An informative name for the list. Use this name in filter and rule expressions.
     */
    name: string;

    /**
     * The number of items in the list.
     */
    num_items: number;

    /**
     * An informative summary of the list.
     */
    description?: string;

    /**
     * The number of [filters](/operations/filters-list-filters) referencing the list.
     */
    num_referencing_filters?: number;
  }
}

export interface ListUpdateParams {
  /**
   * An informative summary of the list.
   */
  description?: string;
}

export interface ListListsCreateAListParams {
  /**
   * The type of the list. Each type supports specific list items (IP addresses,
   * ASNs, hostnames or redirects).
   */
  kind: 'ip' | 'redirect' | 'hostname' | 'asn';

  /**
   * An informative name for the list. Use this name in filter and rule expressions.
   */
  name: string;

  /**
   * An informative summary of the list.
   */
  description?: string;
}

export namespace Lists {
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListListsCreateAListResponse = ListsAPI.ListListsCreateAListResponse;
  export import ListListsGetListsResponse = ListsAPI.ListListsGetListsResponse;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListsCreateAListParams = ListsAPI.ListListsCreateAListParams;
  export import BulkOperations = BulkOperationsAPI.BulkOperations;
  export import BulkOperationGetResponse = BulkOperationsAPI.BulkOperationGetResponse;
  export import Items = ItemsAPI.Items;
  export import ItemDeleteResponse = ItemsAPI.ItemDeleteResponse;
  export import ItemGetResponse = ItemsAPI.ItemGetResponse;
  export import ItemListsCreateListItemsResponse = ItemsAPI.ItemListsCreateListItemsResponse;
  export import ItemListsGetListItemsResponse = ItemsAPI.ItemListsGetListItemsResponse;
  export import ItemListsUpdateAllListItemsResponse = ItemsAPI.ItemListsUpdateAllListItemsResponse;
  export import ItemDeleteParams = ItemsAPI.ItemDeleteParams;
  export import ItemListsCreateListItemsParams = ItemsAPI.ItemListsCreateListItemsParams;
  export import ItemListsGetListItemsParams = ItemsAPI.ItemListsGetListItemsParams;
  export import ItemListsUpdateAllListItemsParams = ItemsAPI.ItemListsUpdateAllListItemsParams;
}
