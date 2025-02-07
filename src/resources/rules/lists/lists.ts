// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BulkOperationsAPI from './bulk-operations';
import {
  BulkOperationGetParams,
  BulkOperationGetResponse,
  BulkOperations,
  OperationStatus,
} from './bulk-operations';
import * as ItemsAPI from './items';
import {
  ItemCreateParams,
  ItemCreateResponse,
  ItemDeleteParams,
  ItemDeleteResponse,
  ItemGetParams,
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
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Lists extends APIResource {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new list of the specified type.
   */
  create(params: ListCreateParams, options?: RequestOptions): APIPromise<ListsList> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/rules/lists`, { body, ...options }) as APIPromise<{
        result: ListsList;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the description of a list.
   */
  update(listID: string, params: ListUpdateParams, options?: RequestOptions): APIPromise<ListsList> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/rules/lists/${listID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ListsList }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all lists in the account.
   */
  list(params: ListListParams, options?: RequestOptions): PagePromise<ListsListsSinglePage, ListsList> {
    const { account_id } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/rules/lists`, SinglePage<ListsList>, options);
  }

  /**
   * Deletes a specific list and all its items.
   */
  delete(listID: string, params: ListDeleteParams, options?: RequestOptions): APIPromise<ListDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/rules/lists/${listID}`, options) as APIPromise<{
        result: ListDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a list.
   */
  get(listID: string, params: ListGetParams, options?: RequestOptions): APIPromise<ListsList> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/rules/lists/${listID}`, options) as APIPromise<{
        result: ListsList;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ListsListsSinglePage = SinglePage<ListsList>;

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

Lists.BulkOperations = BulkOperations;
Lists.Items = Items;

export declare namespace Lists {
  export {
    type Hostname as Hostname,
    type ListsList as ListsList,
    type Redirect as Redirect,
    type ListDeleteResponse as ListDeleteResponse,
    type ListsListsSinglePage as ListsListsSinglePage,
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
    type BulkOperationGetParams as BulkOperationGetParams,
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
    type ItemListResponsesCursorPagination as ItemListResponsesCursorPagination,
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemGetParams as ItemGetParams,
  };
}
