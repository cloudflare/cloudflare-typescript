// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ListsAPI from './lists';

export class Items extends APIResource {
  /**
   * Appends new items to the list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.create(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{}],
   *   },
   * );
   * ```
   */
  create(
    listId: string,
    params: ItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/rules/lists/${listId}/items`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ItemCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes all existing items from the list and adds the provided items to the
   * list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.update(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{}],
   *   },
   * );
   * ```
   */
  update(
    listId: string,
    params: ItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemUpdateResponse> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/rules/lists/${listId}/items`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ItemUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all the items in the list.
   *
   * @example
   * ```ts
   * const items = await client.rules.lists.items.list(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  list(
    listId: string,
    params: ItemListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/rules/lists/${listId}/items`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ItemListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes one or more items from a list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.delete(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    listId: string,
    params: ItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/rules/lists/${listId}/items`, options) as Core.APIPromise<{
        result: ItemDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list item in the list.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.get(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   '34b12448945f11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    listId: string,
    itemId: string,
    params: ItemGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/rules/lists/${listId}/items/${itemId}`,
        options,
      ) as Core.APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ListCursor {
  after?: string;

  before?: string;
}

export type ListItem = ListItem.OperationID | ListItem.OperationID;

export namespace ListItem {
  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }

  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }
}

export type ItemCreateResponse = ItemCreateResponse.OperationID | ItemCreateResponse.OperationID;

export namespace ItemCreateResponse {
  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }

  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }
}

export type ItemUpdateResponse = ItemUpdateResponse.OperationID | ItemUpdateResponse.OperationID;

export namespace ItemUpdateResponse {
  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }

  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }
}

export type ItemListResponse = unknown | Array<unknown>;

export type ItemDeleteResponse = ItemDeleteResponse.OperationID | ItemDeleteResponse.OperationID;

export namespace ItemDeleteResponse {
  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }

  export interface OperationID {
    /**
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }
}

export type ItemGetResponse = ItemGetResponse.UnionMember0 | ItemGetResponse.UnionMember1;

export namespace ItemGetResponse {
  export interface UnionMember0 {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * Defines a non-negative 32 bit integer.
     */
    asn?: number;

    /**
     * Defines an informative summary of the list item.
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

  export interface UnionMember1 {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * Defines a non-negative 32 bit integer.
     */
    asn?: number;

    /**
     * Defines an informative summary of the list item.
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
}

export interface ItemCreateParams {
  /**
   * Path param: Defines an identifier.
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
     * Defines a non-negative 32 bit integer.
     */
    asn?: number;

    /**
     * Defines an informative summary of the list item.
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
   * Path param: Defines an identifier.
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
     * Defines a non-negative 32 bit integer.
     */
    asn?: number;

    /**
     * Defines an informative summary of the list item.
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

export interface ItemListParams {
  /**
   * Path param: Defines an identifier.
   */
  account_id: string;

  /**
   * Query param: The pagination cursor. An opaque string token indicating the
   * position from which to continue when requesting the next/previous set of
   * records. Cursor values are provided under `result_info.cursors` in the response.
   * You should make no assumptions about a cursor's content or length.
   */
  cursor?: string;

  /**
   * Query param: Amount of results to include in each paginated response. A
   * non-negative 32 bit integer.
   */
  per_page?: number;

  /**
   * Query param: A search query to filter returned items. Its meaning depends on the
   * list type: IP addresses must start with the provided string, hostnames and bulk
   * redirects must contain the string, and ASNs must match the string exactly.
   */
  search?: string;
}

export interface ItemDeleteParams {
  /**
   * Defines an identifier.
   */
  account_id: string;
}

export interface ItemGetParams {
  /**
   * Defines an identifier.
   */
  account_id: string;
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
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemGetParams as ItemGetParams,
  };
}
