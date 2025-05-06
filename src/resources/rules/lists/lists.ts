// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BulkOperationsAPI from './bulk-operations';
import { BulkOperationGetParams, BulkOperationGetResponse, BulkOperations } from './bulk-operations';
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
  ItemUpdateParams,
  ItemUpdateResponse,
  Items,
  ListCursor,
  ListItem,
} from './items';

export class Lists extends APIResource {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new list of the specified type.
   *
   * @example
   * ```ts
   * const list = await client.rules.lists.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   kind: 'ip',
   *   name: 'list1',
   * });
   * ```
   */
  create(params: ListCreateParams, options?: Core.RequestOptions): Core.APIPromise<ListCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/rules/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the description of a list.
   *
   * @example
   * ```ts
   * const list = await client.rules.lists.update(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    listId: string,
    params: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/rules/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all lists in the account.
   *
   * @example
   * ```ts
   * const lists = await client.rules.lists.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  list(params: ListListParams, options?: Core.RequestOptions): Core.APIPromise<ListListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/rules/lists`, options) as Core.APIPromise<{
        result: ListListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a specific list and all its items.
   *
   * @example
   * ```ts
   * const list = await client.rules.lists.delete(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const list = await client.rules.lists.get(
   *   '2c0fc9fa937b11eaa1b71c4d701ab86e',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    listId: string,
    params: ListGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/rules/lists/${listId}`, options) as Core.APIPromise<{
        result: ListGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export type ListCreateResponse = ListCreateResponse.UnionMember0 | ListCreateResponse.UnionMember1;

export namespace ListCreateResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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
}

export type ListUpdateResponse = ListUpdateResponse.UnionMember0 | ListUpdateResponse.UnionMember1;

export namespace ListUpdateResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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
}

export type ListListResponse = unknown | Array<unknown>;

export type ListDeleteResponse = ListDeleteResponse.ID | ListDeleteResponse.ID;

export namespace ListDeleteResponse {
  export interface ID {
    /**
     * Defines the unique ID of the item in the List.
     */
    id?: string;
  }

  export interface ID {
    /**
     * Defines the unique ID of the item in the List.
     */
    id?: string;
  }
}

export type ListGetResponse = ListGetResponse.UnionMember0 | ListGetResponse.UnionMember1;

export namespace ListGetResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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
}

export interface ListCreateParams {
  /**
   * Path param: Defines an identifier.
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
   * Path param: Defines an identifier.
   */
  account_id: string;

  /**
   * Body param: An informative summary of the list.
   */
  description?: string;
}

export interface ListListParams {
  /**
   * Defines an identifier.
   */
  account_id: string;
}

export interface ListDeleteParams {
  /**
   * Defines an identifier.
   */
  account_id: string;
}

export interface ListGetParams {
  /**
   * Defines an identifier.
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
    type ListCreateResponse as ListCreateResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type ListListResponse as ListListResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListGetResponse as ListGetResponse,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
    type ListGetParams as ListGetParams,
  };

  export {
    BulkOperations as BulkOperations,
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
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemGetParams as ItemGetParams,
  };
}
