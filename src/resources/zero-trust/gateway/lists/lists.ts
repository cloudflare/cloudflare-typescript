// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ItemsAPI from './items';
import { ItemListParams, ItemListResponse, ItemListResponsesSinglePage, Items } from './items';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Lists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new Zero Trust list.
   */
  create(params: ListCreateParams, options?: RequestOptions): APIPromise<ListCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/gateway/lists`, { body, ...options }) as APIPromise<{
        result: ListCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust list. Skips updating list items if not included
   * in the payload.
   */
  update(listID: string, params: ListUpdateParams, options?: RequestOptions): APIPromise<GatewayList> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/gateway/lists/${listID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: GatewayList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust lists for an account.
   */
  list(params: ListListParams, options?: RequestOptions): PagePromise<GatewayListsSinglePage, GatewayList> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/gateway/lists`, SinglePage<GatewayList>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a Zero Trust list.
   */
  delete(listID: string, params: ListDeleteParams, options?: RequestOptions): APIPromise<ListDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/gateway/lists/${listID}`, options) as APIPromise<{
        result: ListDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Appends or removes an item from a configured Zero Trust list.
   */
  edit(listID: string, params: ListEditParams, options?: RequestOptions): APIPromise<GatewayList> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/gateway/lists/${listID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: GatewayList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust list.
   */
  get(listID: string, params: ListGetParams, options?: RequestOptions): APIPromise<GatewayList> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/gateway/lists/${listID}`, options) as APIPromise<{
        result: GatewayList;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type GatewayListsSinglePage = SinglePage<GatewayList>;

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

export type ListDeleteResponse = unknown;

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

  /**
   * Body param: The items in the list.
   */
  items?: Array<GatewayItemParam>;
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

Lists.Items = Items;

export declare namespace Lists {
  export {
    type GatewayItem as GatewayItem,
    type GatewayList as GatewayList,
    type ListCreateResponse as ListCreateResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type GatewayListsSinglePage as GatewayListsSinglePage,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
    type ListEditParams as ListEditParams,
    type ListGetParams as ListGetParams,
  };

  export {
    Items as Items,
    type ItemListResponse as ItemListResponse,
    type ItemListResponsesSinglePage as ItemListResponsesSinglePage,
    type ItemListParams as ItemListParams,
  };
}
