// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ListsAPI from './lists';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Appends new items to the list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  create(listID: string, params: ItemCreateParams, options?: RequestOptions): APIPromise<ItemCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/rules/lists/${listID}/items`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: ItemCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes all existing items from the list and adds the provided items to the
   * list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  update(listID: string, params: ItemUpdateParams, options?: RequestOptions): APIPromise<ItemUpdateResponse> {
    const { account_id, body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/rules/lists/${listID}/items`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: ItemUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all the items in the list.
   */
  list(
    listID: string,
    params: ItemListParams,
    options?: RequestOptions,
  ): PagePromise<ItemListResponsesCursorPagination, ItemListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/rules/lists/${listID}/items`,
      CursorPagination<ItemListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes one or more items from a list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  delete(listID: string, params: ItemDeleteParams, options?: RequestOptions): APIPromise<ItemDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/rules/lists/${listID}/items`, options) as APIPromise<{
        result: ItemDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list item in the list.
   */
  get(itemID: string, params: ItemGetParams, options?: RequestOptions): APIPromise<ItemGetResponse> {
    const { account_identifier, list_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_identifier}/rules/lists/${list_id}/items/${itemID}`,
        options,
      ) as APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ItemListResponsesCursorPagination = CursorPagination<ItemListResponse>;

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

export interface ItemListResponse {
  /**
   * The unique ID of the list.
   */
  id?: string;

  /**
   * A non-negative 32 bit integer
   */
  asn?: number;

  /**
   * An informative summary of the list item.
   */
  comment?: string;

  /**
   * The RFC 3339 timestamp of when the item was created.
   */
  created_on?: string;

  /**
   * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
   * 0 to 9, wildcards (\*), and the hyphen (-).
   */
  hostname?: ListsAPI.Hostname;

  /**
   * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
   * maximum of /64.
   */
  ip?: string;

  /**
   * The RFC 3339 timestamp of when the item was last modified.
   */
  modified_on?: string;

  /**
   * The definition of the redirect.
   */
  redirect?: ListsAPI.Redirect;
}

export interface ItemDeleteResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id?: string;
}

export interface ItemGetResponse {
  /**
   * The unique ID of the list.
   */
  id?: string;

  /**
   * A non-negative 32 bit integer
   */
  asn?: number;

  /**
   * An informative summary of the list item.
   */
  comment?: string;

  /**
   * The RFC 3339 timestamp of when the item was created.
   */
  created_on?: string;

  /**
   * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
   * 0 to 9, wildcards (\*), and the hyphen (-).
   */
  hostname?: ListsAPI.Hostname;

  /**
   * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
   * maximum of /64.
   */
  ip?: string;

  /**
   * The RFC 3339 timestamp of when the item was last modified.
   */
  modified_on?: string;

  /**
   * The definition of the redirect.
   */
  redirect?: ListsAPI.Redirect;
}

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

export interface ItemGetParams {
  /**
   * Identifier
   */
  account_identifier: string;

  /**
   * The unique ID of the list.
   */
  list_id: string;
}

export declare namespace Items {
  export {
    type ListCursor as ListCursor,
    type ListItem as ListItem,
    type ItemCreateResponse as ItemCreateResponse,
    type ItemUpdateResponse as ItemUpdateResponse,
    type ItemListResponse as ItemListResponse,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemListResponsesCursorPagination as ItemListResponsesCursorPagination,
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemGetParams as ItemGetParams,
  };
}
