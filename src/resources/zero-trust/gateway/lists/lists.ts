// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ListsAPI from './lists';
import * as ItemsAPI from './items';
import { SinglePage } from '../../../../pagination';

export class Lists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new Zero Trust list.
   */
  create(params: ListCreateParams, options?: Core.RequestOptions): Core.APIPromise<ListCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust list.
   */
  update(
    listId: string,
    params: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayList> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GatewayList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust lists for an account.
   */
  list(
    params: ListListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<GatewayListsSinglePage, GatewayList> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/gateway/lists`, GatewayListsSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a Zero Trust list.
   */
  delete(
    listId: string,
    params: ListDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/gateway/lists/${listId}`, options) as Core.APIPromise<{
        result: ListDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Appends or removes an item from a configured Zero Trust list.
   */
  edit(listId: string, params: ListEditParams, options?: Core.RequestOptions): Core.APIPromise<GatewayList> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/gateway/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GatewayList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust list.
   */
  get(listId: string, params: ListGetParams, options?: Core.RequestOptions): Core.APIPromise<GatewayList> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/lists/${listId}`, options) as Core.APIPromise<{
        result: GatewayList;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class GatewayListsSinglePage extends SinglePage<GatewayList> {}

export interface GatewayItem {
  created_at?: string;

  /**
   * The description of the list item, if present
   */
  description?: string;

  /**
   * The value of the item in a list.
   */
  value?: string;
}

export interface GatewayItemParam {
  /**
   * The description of the list item, if present
   */
  description?: string;

  /**
   * The value of the item in a list.
   */
  value?: string;
}

export interface GatewayList {
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
  items?: Array<GatewayItem>;

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

export type ListDeleteResponse = unknown | string | null;

export interface ListCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The name of the list.
   */
  name: string;

  /**
   * Body param: The type of list.
   */
  type: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  /**
   * Body param: The description of the list.
   */
  description?: string;

  /**
   * Body param: The items in the list.
   */
  items?: Array<GatewayItemParam>;
}

export interface ListUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The name of the list.
   */
  name: string;

  /**
   * Body param: The description of the list.
   */
  description?: string;
}

export interface ListListParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';
}

export interface ListDeleteParams {
  account_id: string;
}

export interface ListEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The items in the list.
   */
  append?: Array<GatewayItemParam>;

  /**
   * Body param: A list of the item values you want to remove.
   */
  remove?: Array<string>;
}

export interface ListGetParams {
  account_id: string;
}

export namespace Lists {
  export import GatewayItem = ListsAPI.GatewayItem;
  export import GatewayList = ListsAPI.GatewayList;
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import GatewayListsSinglePage = ListsAPI.GatewayListsSinglePage;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListEditParams = ListsAPI.ListEditParams;
  export import ListGetParams = ListsAPI.ListGetParams;
  export import Items = ItemsAPI.Items;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemListResponsesSinglePage = ItemsAPI.ItemListResponsesSinglePage;
  export import ItemListParams = ItemsAPI.ItemListParams;
}
