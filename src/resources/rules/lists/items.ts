// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as ItemsAPI from './items';
import * as ListsAPI from './lists';
import { CursorPagination, type CursorPaginationParams } from '../../../pagination';

export class Items extends APIResource {
  /**
   * Appends new items to the list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  create(listId: string, params: ItemCreateParams, options?: Core.RequestOptions): Core.APIPromise<ItemCreateResponse | null> {
    const { account_id, body } = params;
    return (this._client.post(`/accounts/${account_id}/rules/lists/${listId}/items`, { body: body, ...options }) as Core.APIPromise<{ result: ItemCreateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes all existing items from the list and adds the provided items to the
   * list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  update(listId: string, params: ItemUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ItemUpdateResponse | null> {
    const { account_id, body } = params;
    return (this._client.put(`/accounts/${account_id}/rules/lists/${listId}/items`, { body: body, ...options }) as Core.APIPromise<{ result: ItemUpdateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all the items in the list.
   */
  list(listId: string, params: ItemListParams, options?: Core.RequestOptions): Core.PagePromise<ItemListResponsesCursorPagination, ItemListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/rules/lists/${listId}/items`, ItemListResponsesCursorPagination, { query, ...options });
  }

  /**
   * Removes one or more items from a list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  delete(listId: string, params: ItemDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ItemDeleteResponse | null> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/rules/lists/${listId}/items`, options) as Core.APIPromise<{ result: ItemDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list item in the list.
   */
  get(accountIdentifier: string, listId: string, itemId: string, options?: Core.RequestOptions): Core.APIPromise<ItemGetResponse | null> {
    return (this._client.get(`/accounts/${accountIdentifier}/rules/lists/${listId}/items/${itemId}`, options) as Core.APIPromise<{ result: ItemGetResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export class ItemListResponsesCursorPagination extends CursorPagination<ItemListResponse> {
}

export interface ListCursor {
  after?: string;

  before?: string;
}

export interface ListItem {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id?: string;
}

export interface ItemCreateResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id?: string;
}

export interface ItemUpdateResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id?: string;
}

export type ItemListResponse = unknown

export interface ItemDeleteResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id?: string;
}

/**
 * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
 * maximum of /64.
 */
export type ItemGetResponse = string | ListsAPI.Redirect | ListsAPI.Hostname | number

export interface ItemCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<ItemCreateParams.Body>;
}

export namespace ItemCreateParams {
  export interface Body {
    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: ListsAPI.HostnameParam;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: ListsAPI.RedirectParam;
  }
}

export interface ItemUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<ItemUpdateParams.Body>;
}

export namespace ItemUpdateParams {
  export interface Body {
    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: ListsAPI.HostnameParam;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: ListsAPI.RedirectParam;
  }
}

export interface ItemListParams extends CursorPaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: A search query to filter returned items. Its meaning depends on the
   * list type: IP addresses must start with the provided string, hostnames and bulk
   * redirects must contain the string, and ASNs must match the string exactly.
   */
  search?: string;
}

export interface ItemDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Items {
  export import ListCursor = ItemsAPI.ListCursor;
  export import ListItem = ItemsAPI.ListItem;
  export import ItemCreateResponse = ItemsAPI.ItemCreateResponse;
  export import ItemUpdateResponse = ItemsAPI.ItemUpdateResponse;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemDeleteResponse = ItemsAPI.ItemDeleteResponse;
  export import ItemGetResponse = ItemsAPI.ItemGetResponse;
  export import ItemListResponsesCursorPagination = ItemsAPI.ItemListResponsesCursorPagination;
  export import ItemCreateParams = ItemsAPI.ItemCreateParams;
  export import ItemUpdateParams = ItemsAPI.ItemUpdateParams;
  export import ItemListParams = ItemsAPI.ItemListParams;
  export import ItemDeleteParams = ItemsAPI.ItemDeleteParams;
}
