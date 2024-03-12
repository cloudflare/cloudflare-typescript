// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ItemsAPI from 'cloudflare/resources/rules/lists/items';
import { CursorPagination, type CursorPaginationParams } from 'cloudflare/pagination';

export class Items extends APIResource {
  /**
   * Appends new items to the list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](/operations/lists-get-bulk-operation-status)
   * endpoint with the returned `operation_id`.
   */
  create(
    listId: string,
    params: ItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/rules/lists/${listId}/items`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ItemCreateResponse | null }>
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
  update(
    listId: string,
    params: ItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/rules/lists/${listId}/items`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ItemUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all the items in the list.
   */
  list(
    listId: string,
    params: ItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemListResponsesCursorPagination, ItemListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/rules/lists/${listId}/items`,
      ItemListResponsesCursorPagination,
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
  delete(
    listId: string,
    params: ItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemDeleteResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/rules/lists/${listId}/items`, {
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
}

export class ItemListResponsesCursorPagination extends CursorPagination<ItemListResponse> {}

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

export type ItemListResponse = unknown;

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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
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

export namespace Items {
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
