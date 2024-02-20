// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/gateways/lists/lists';
import * as ItemsAPI from 'cloudflare/resources/gateways/lists/items';

export class Lists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new Zero Trust list.
   */
  create(
    accountId: unknown,
    body: ListCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/gateway/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust lists for an account.
   */
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<ListListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/lists`, options) as Core.APIPromise<{
        result: ListListResponse | null;
      }>
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
   * Updates a configured Zero Trust list.
   */
  replace(
    accountId: unknown,
    listId: string,
    body: ListReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/gateway/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ListCreateResponse {
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
  items?: Array<ListCreateResponse.Item>;

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

export namespace ListCreateResponse {
  export interface Item {
    created_at?: string;

    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export type ListListResponse = Array<ListListResponse.ListListResponseItem>;

export namespace ListListResponse {
  export interface ListListResponseItem {
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

export interface ListReplaceResponse {
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

export interface ListCreateParams {
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
  items?: Array<ListCreateParams.Item>;
}

export namespace ListCreateParams {
  export interface Item {
    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export interface ListReplaceParams {
  /**
   * The name of the list.
   */
  name: string;

  /**
   * The description of the list.
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
  export import Items = ItemsAPI.Items;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
}
