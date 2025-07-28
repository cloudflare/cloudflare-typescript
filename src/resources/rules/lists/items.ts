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
   * `Get bulk operation status` endpoint with the returned `operation_id`.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.create(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ ip: '10.0.0.1' }],
   *   },
   * );
   * ```
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
   * `Get bulk operation status` endpoint with the returned `operation_id`.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.update(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ ip: '10.0.0.1' }],
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const itemListResponse of client.rules.lists.items.list(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   * `Get bulk operation status` endpoint with the returned `operation_id`.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.delete(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(listID: string, params: ItemDeleteParams, options?: RequestOptions): APIPromise<ItemDeleteResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/rules/lists/${listID}/items`, {
        body,
        ...options,
      }) as APIPromise<{ result: ItemDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list item in the list.
   *
   * @example
   * ```ts
   * const item = await client.rules.lists.items.get(
   *   '34b12448945f11eaa1b71c4d701ab86e',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     list_id: '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   },
   * );
   * ```
   */
  get(itemID: string, params: ItemGetParams, options?: RequestOptions): APIPromise<ItemGetResponse> {
    const { account_id, list_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/rules/lists/${list_id}/items/${itemID}`,
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
  operation_id: string;
}

export interface ItemCreateResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id: string;
}

export interface ItemUpdateResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id: string;
}

export type ItemListResponse = unknown;

export interface ItemDeleteResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id: string;
}

export type ItemGetResponse = unknown;

export interface ItemCreateParams {
  /**
   * Path param: The Account ID for this resource.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<
    | ItemCreateParams.ListsListItemIPComment
    | ItemCreateParams.ListsListItemRedirectComment
    | ItemCreateParams.ListsListItemHostnameComment
    | ItemCreateParams.ListsListItemASNComment
  >;
}

export namespace ItemCreateParams {
  export interface ListsListItemIPComment {
    /**
     * An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.
     */
    ip: string;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }

  export interface ListsListItemRedirectComment {
    /**
     * The definition of the redirect.
     */
    redirect: ListsAPI.RedirectParam;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }

  export interface ListsListItemHostnameComment {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname: ListsAPI.HostnameParam;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }

  export interface ListsListItemASNComment {
    /**
     * Defines a non-negative 32 bit integer.
     */
    asn: number;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }
}

export interface ItemUpdateParams {
  /**
   * Path param: The Account ID for this resource.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<
    | ItemUpdateParams.ListsListItemIPComment
    | ItemUpdateParams.ListsListItemRedirectComment
    | ItemUpdateParams.ListsListItemHostnameComment
    | ItemUpdateParams.ListsListItemASNComment
  >;
}

export namespace ItemUpdateParams {
  export interface ListsListItemIPComment {
    /**
     * An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.
     */
    ip: string;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }

  export interface ListsListItemRedirectComment {
    /**
     * The definition of the redirect.
     */
    redirect: ListsAPI.RedirectParam;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }

  export interface ListsListItemHostnameComment {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname: ListsAPI.HostnameParam;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }

  export interface ListsListItemASNComment {
    /**
     * Defines a non-negative 32 bit integer.
     */
    asn: number;

    /**
     * Defines an informative summary of the list item.
     */
    comment?: string;
  }
}

export interface ItemListParams extends CursorPaginationParams {
  /**
   * Path param: The Account ID for this resource.
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
   * Path param: The Account ID for this resource.
   */
  account_id: string;

  /**
   * Body param:
   */
  items?: Array<ItemDeleteParams.Item>;
}

export namespace ItemDeleteParams {
  export interface Item {}
}

export interface ItemGetParams {
  /**
   * The Account ID for this resource.
   */
  account_id: string;

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
