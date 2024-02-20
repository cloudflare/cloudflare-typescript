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
   * Creates a new list of the specified type.
   */
  create(
    accountId: string,
    body: ListCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/rules/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all lists in the account.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ListListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/rules/lists`, options) as Core.APIPromise<{
        result: ListListResponse | null;
      }>
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
   * Updates the description of a list.
   */
  replace(
    accountId: string,
    listId: string,
    body: ListReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/rules/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ListCreateResponse = Array<unknown>;

export type ListListResponse = Array<ListListResponse.ListListResponseItem>;

export namespace ListListResponse {
  export interface ListListResponseItem {
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

export interface ListDeleteResponse {
  /**
   * The unique ID of the item in the List.
   */
  id?: string;
}

export type ListGetResponse = Array<unknown>;

export type ListReplaceResponse = Array<unknown>;

export interface ListCreateParams {
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

export interface ListReplaceParams {
  /**
   * An informative summary of the list.
   */
  description?: string;
}

export namespace Lists {
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListListResponse = ListsAPI.ListListResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListReplaceResponse = ListsAPI.ListReplaceResponse;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListReplaceParams = ListsAPI.ListReplaceParams;
  export import BulkOperations = BulkOperationsAPI.BulkOperations;
  export import BulkOperationGetResponse = BulkOperationsAPI.BulkOperationGetResponse;
  export import Items = ItemsAPI.Items;
  export import ItemCreateResponse = ItemsAPI.ItemCreateResponse;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemDeleteResponse = ItemsAPI.ItemDeleteResponse;
  export import ItemGetResponse = ItemsAPI.ItemGetResponse;
  export import ItemReplaceResponse = ItemsAPI.ItemReplaceResponse;
  export import ItemCreateParams = ItemsAPI.ItemCreateParams;
  export import ItemListParams = ItemsAPI.ItemListParams;
  export import ItemDeleteParams = ItemsAPI.ItemDeleteParams;
  export import ItemReplaceParams = ItemsAPI.ItemReplaceParams;
}
