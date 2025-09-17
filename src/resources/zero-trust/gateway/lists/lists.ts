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
   *
   * @example
   * ```ts
   * const list = await client.zeroTrust.gateway.lists.create({
   *   account_id: '699d98642c564d2e855e9661899b7252',
   *   name: 'Admin Serial Numbers',
   *   type: 'SERIAL',
   * });
   * ```
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
   * in the payload. A non empty list items will overwrite the existing list.
   *
   * @example
   * ```ts
   * const gatewayList =
   *   await client.zeroTrust.gateway.lists.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       name: 'Admin Serial Numbers',
   *     },
   *   );
   * ```
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
   * Fetch all Zero Trust lists for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const gatewayList of client.zeroTrust.gateway.lists.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const list = await client.zeroTrust.gateway.lists.delete(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const gatewayList =
   *   await client.zeroTrust.gateway.lists.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
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
   * Fetch a single Zero Trust list.
   *
   * @example
   * ```ts
   * const gatewayList =
   *   await client.zeroTrust.gateway.lists.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
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
   * Provide the list item description (optional).
   */
  description?: string;

  /**
   * Specify the item value.
   */
  value?: string;
}

export interface GatewayList {
  /**
   * Identify the API resource with a UUID.
   */
  id?: string;

  /**
   * Indicate the number of items in the list.
   */
  count?: number;

  created_at?: string;

  /**
   * Provide the list description.
   */
  description?: string;

  /**
   * Provide the list items.
   */
  items?: Array<GatewayItem>;

  /**
   * Specify the list name.
   */
  name?: string;

  /**
   * Specify the list type.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export interface ListCreateResponse {
  /**
   * Identify the API resource with a UUID.
   */
  id?: string;

  created_at?: string;

  /**
   * Provide the list description.
   */
  description?: string;

  /**
   * Provide the list items.
   */
  items?: Array<GatewayItem>;

  /**
   * Specify the list name.
   */
  name?: string;

  /**
   * Specify the list type.
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
   * Body param: Specify the list name.
   */
  name: string;

  /**
   * Body param: Specify the list type.
   */
  type: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  /**
   * Body param: Provide the list description.
   */
  description?: string;

  /**
   * Body param: Add items to the list.
   */
  items?: Array<ListCreateParams.Item>;
}

export namespace ListCreateParams {
  export interface Item {
    /**
     * Provide the list item description (optional).
     */
    description?: string;

    /**
     * Specify the item value.
     */
    value?: string;
  }
}

export interface ListUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Specify the list name.
   */
  name: string;

  /**
   * Body param: Provide the list description.
   */
  description?: string;

  /**
   * Body param: Add items to the list.
   */
  items?: Array<ListUpdateParams.Item>;
}

export namespace ListUpdateParams {
  export interface Item {
    /**
     * Provide the list item description (optional).
     */
    description?: string;

    /**
     * Specify the item value.
     */
    value?: string;
  }
}

export interface ListListParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: Specify the list type.
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
   * Body param: Add items to the list.
   */
  append?: Array<ListEditParams.Append>;

  /**
   * Body param: Lists of item values you want to remove.
   */
  remove?: Array<string>;
}

export namespace ListEditParams {
  export interface Append {
    /**
     * Provide the list item description (optional).
     */
    description?: string;

    /**
     * Specify the item value.
     */
    value?: string;
  }
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
