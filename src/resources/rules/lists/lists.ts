// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/rules/lists/lists';
import * as BulkOperationsAPI from 'cloudflare/resources/rules/lists/bulk-operations';
import * as ItemsAPI from 'cloudflare/resources/rules/lists/items';
import { SinglePage } from 'cloudflare/pagination';

export class Lists extends APIResource {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new list of the specified type.
   */
  create(params: ListCreateParams, options?: Core.RequestOptions): Core.APIPromise<RuleList | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/rules/lists`, { body, ...options }) as Core.APIPromise<{
        result: RuleList | null;
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
  ): Core.APIPromise<RuleList | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/rules/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleList | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all lists in the account.
   */
  list(
    params: ListListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleListsSinglePage, RuleList> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/rules/lists`, RuleListsSinglePage, options);
  }

  /**
   * Deletes a specific list and all its items.
   */
  delete(
    listId: string,
    params: ListDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/rules/lists/${listId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ListDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a list.
   */
  get(
    listId: string,
    params: ListGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleList | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/rules/lists/${listId}`, options) as Core.APIPromise<{
        result: RuleList | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RuleListsSinglePage extends SinglePage<RuleList> {}

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

export interface RuleList {
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ListGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Lists {
  export import Hostname = ListsAPI.Hostname;
  export import Redirect = ListsAPI.Redirect;
  export import RuleList = ListsAPI.RuleList;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import RuleListsSinglePage = ListsAPI.RuleListsSinglePage;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListGetParams = ListsAPI.ListGetParams;
  export import BulkOperations = BulkOperationsAPI.BulkOperations;
  export import OperationStatus = BulkOperationsAPI.OperationStatus;
  export import BulkOperationGetResponse = BulkOperationsAPI.BulkOperationGetResponse;
  export import Items = ItemsAPI.Items;
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
