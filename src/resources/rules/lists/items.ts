// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ItemsAPI from 'cloudflare/resources/rules/lists/items';

export class Items extends APIResource {
  /**
   * Removes one or more items from a list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  delete(
    accountId: string,
    listId: string,
    body: ItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${accountId}/rules/lists/${listId}/items`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ItemDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list item in the list.
   */
  get(
    accountIdentifier: string,
    listId: string,
    itemId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/rules/lists/${listId}/items/${itemId}`,
        options,
      ) as Core.APIPromise<{ result: ItemGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Appends new items to the list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  listsCreateListItems(
    accountId: string,
    listId: string,
    body: ItemListsCreateListItemsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsCreateListItemsResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/rules/lists/${listId}/items`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ItemListsCreateListItemsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all the items in the list.
   */
  listsGetListItems(
    accountId: string,
    listId: string,
    query?: ItemListsGetListItemsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsGetListItemsResponse | null>;
  listsGetListItems(
    accountId: string,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsGetListItemsResponse | null>;
  listsGetListItems(
    accountId: string,
    listId: string,
    query: ItemListsGetListItemsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsGetListItemsResponse | null> {
    if (isRequestOptions(query)) {
      return this.listsGetListItems(accountId, listId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/rules/lists/${listId}/items`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ItemListsGetListItemsResponse | null }>
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
  listsUpdateAllListItems(
    accountId: string,
    listId: string,
    body: ItemListsUpdateAllListItemsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsUpdateAllListItemsResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/rules/lists/${listId}/items`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ItemListsUpdateAllListItemsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
export type ItemGetResponse =
  | string
  | ItemGetResponse.ListsItemRedirect
  | ItemGetResponse.ListsItemHostname
  | number;

export namespace ItemGetResponse {
  /**
   * The definition of the redirect.
   */
  export interface ListsItemRedirect {
    source_url: string;

    target_url: string;

    include_subdomains?: boolean;

    preserve_path_suffix?: boolean;

    preserve_query_string?: boolean;

    status_code?: 301 | 302 | 307 | 308;

    subpath_matching?: boolean;
  }

  /**
   * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
   * 0 to 9, wildcards (\*), and the hyphen (-).
   */
  export interface ListsItemHostname {
    url_hostname: string;
  }
}

export interface ItemListsCreateListItemsResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id?: string;
}

export type ItemListsGetListItemsResponse = Array<unknown>;

export interface ItemListsUpdateAllListItemsResponse {
  /**
   * The unique operation ID of the asynchronous action.
   */
  operation_id?: string;
}

export interface ItemDeleteParams {
  items?: Array<ItemDeleteParams.Item>;
}

export namespace ItemDeleteParams {
  export interface Item {
    /**
     * The unique ID of the item in the List.
     */
    id?: string;
  }
}

export type ItemListsCreateListItemsParams = Array<ItemListsCreateListItemsParams.Body>;

export namespace ItemListsCreateListItemsParams {
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
    hostname?: Body.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: Body.Redirect;
  }

  export namespace Body {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }
}

export interface ItemListsGetListItemsParams {
  /**
   * The pagination cursor. An opaque string token indicating the position from which
   * to continue when requesting the next/previous set of records. Cursor values are
   * provided under `result_info.cursors` in the response. You should make no
   * assumptions about a cursor's content or length.
   */
  cursor?: string;

  /**
   * Amount of results to include in each paginated response. A non-negative 32 bit
   * integer.
   */
  per_page?: number;

  /**
   * A search query to filter returned items. Its meaning depends on the list type:
   * IP addresses must start with the provided string, hostnames and bulk redirects
   * must contain the string, and ASNs must match the string exactly.
   */
  search?: string;
}

export type ItemListsUpdateAllListItemsParams = Array<ItemListsUpdateAllListItemsParams.Body>;

export namespace ItemListsUpdateAllListItemsParams {
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
    hostname?: Body.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: Body.Redirect;
  }

  export namespace Body {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }
}

export namespace Items {
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
