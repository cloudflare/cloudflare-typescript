// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BulkOperationsAPI from './bulk-operations';
import { BulkOperationGetResponse, BulkOperations, OperationStatus } from './bulk-operations';
import * as ItemsAPI from './items';
import {
  ItemCreateParams,
  ItemCreateResponse,
  ItemDeleteParams,
  ItemDeleteResponse,
  ItemGetResponse,
  ItemListParams,
  ItemListResponse,
  ItemListResponsesCursorPagination,
  ItemUpdateParams,
  ItemUpdateResponse,
  Items,
  ListCursor,
  ListItem,
} from './items';
import { SinglePage } from '../../../pagination';

export class Lists extends APIResource {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new list of the specified type.
   */
  create(params: ListCreateParams, options?: Core.RequestOptions): Core.APIPromise<ListsList> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/rules/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListsList;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the description of a list.
   */
  update(
    listId: string,
    params: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListsList> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/rules/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListsList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all lists in the account.
   */
  list(
    params: ListListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ListsListsSinglePage, ListsList> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/rules/lists`, ListsListsSinglePage, options);
  }

  /**
   * Deletes a specific list and all its items.
   */
  delete(
    listId: string,
    params: ListDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/rules/lists/${listId}`, options) as Core.APIPromise<{
        result: ListDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a list.
   */
  get(listId: string, params: ListGetParams, options?: Core.RequestOptions): Core.APIPromise<ListsList> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/rules/lists/${listId}`, options) as Core.APIPromise<{
        result: ListsList;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ListsListsSinglePage extends SinglePage<ListsList> {}

/**
 * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
 * 0 to 9, wildcards (\*), and the hyphen (-).
 */
export interface Hostname {
  url_hostname: string;
}

/**
 * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
 * 0 to 9, wildcards (\*), and the hyphen (-).
 */
export interface HostnameParam {
  url_hostname: string;
}

export interface ListsList {
  /**
   * The unique ID of the list.
   */
  id?: string;

  /**
   * The RFC 3339 timestamp of when the list was created.
   */
  created_on?: string;

  /**
   * An informative summary of the list.
   */
  description?: string;

  /**
   * The type of the list. Each type supports specific list items (IP addresses,
   * ASNs, hostnames or redirects).
   */
  kind?: 'ip' | 'redirect' | 'hostname' | 'asn';

  /**
   * The RFC 3339 timestamp of when the list was last modified.
   */
  modified_on?: string;

  /**
   * An informative name for the list. Use this name in filter and rule expressions.
   */
  name?: string;

  /**
   * The number of items in the list.
   */
  num_items?: number;

  /**
   * The number of [filters](/operations/filters-list-filters) referencing the list.
   */
  num_referencing_filters?: number;
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

/**
 * The definition of the redirect.
 */
export interface RedirectParam {
  source_url: string;

  target_url: string;

  include_subdomains?: boolean;

  preserve_path_suffix?: boolean;

  preserve_query_string?: boolean;

  status_code?: 301 | 302 | 307 | 308;

  subpath_matching?: boolean;
}

export interface ListDeleteResponse {
  /**
   * The unique ID of the item in the List.
   */
  id?: string;
}

export interface ListCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The type of the list. Each type supports specific list items (IP
   * addresses, ASNs, hostnames or redirects).
   */
  kind: 'ip' | 'redirect' | 'hostname' | 'asn';

  /**
   * Body param: An informative name for the list. Use this name in filter and rule
   * expressions.
   */
  name: string;

  /**
   * Body param: An informative summary of the list.
   */
  description?: string;
}

export interface ListUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: An informative summary of the list.
   */
  description?: string;
}

export interface ListListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ListDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ListGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Lists.ListsListsSinglePage = ListsListsSinglePage;
Lists.BulkOperations = BulkOperations;
Lists.Items = Items;
Lists.ItemListResponsesCursorPagination = ItemListResponsesCursorPagination;

export declare namespace Lists {
  export {
    type Hostname as Hostname,
    type ListsList as ListsList,
    type Redirect as Redirect,
    type ListDeleteResponse as ListDeleteResponse,
    ListsListsSinglePage as ListsListsSinglePage,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
    type ListGetParams as ListGetParams,
  };

  export {
    BulkOperations as BulkOperations,
    type OperationStatus as OperationStatus,
    type BulkOperationGetResponse as BulkOperationGetResponse,
  };

  export {
    Items as Items,
    type ListCursor as ListCursor,
    type ListItem as ListItem,
    type ItemCreateResponse as ItemCreateResponse,
    type ItemUpdateResponse as ItemUpdateResponse,
    type ItemListResponse as ItemListResponse,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemGetResponse as ItemGetResponse,
    ItemListResponsesCursorPagination as ItemListResponsesCursorPagination,
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
  };
}
