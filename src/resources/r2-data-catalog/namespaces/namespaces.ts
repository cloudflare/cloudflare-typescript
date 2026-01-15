// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TablesAPI from './tables/tables';
import { TableListParams, TableListResponse, Tables } from './tables/tables';

export class Namespaces extends APIResource {
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);

  /**
   * Returns a list of namespaces in the specified R2 catalog. Supports hierarchical
   * filtering and pagination for efficient traversal of large namespace hierarchies.
   *
   * @example
   * ```ts
   * const namespaces =
   *   await client.r2DataCatalog.namespaces.list(
   *     'my-data-bucket',
   *     { account_id: '0123456789abcdef0123456789abcdef' },
   *   );
   * ```
   */
  list(
    bucketName: string,
    params: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2-catalog/${bucketName}/namespaces`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Contains the list of namespaces with optional pagination.
 */
export interface NamespaceListResponse {
  /**
   * Lists namespaces in the catalog.
   */
  namespaces: Array<Array<string>>;

  /**
   * Contains detailed metadata for each namespace when return_details is true. Each
   * object includes the namespace, UUID, and timestamps.
   */
  details?: Array<NamespaceListResponse.Detail> | null;

  /**
   * Contains UUIDs for each namespace when return_uuids is true. The order
   * corresponds to the namespaces array.
   */
  namespace_uuids?: Array<string> | null;

  /**
   * Use this opaque token to fetch the next page of results. A null or absent value
   * indicates the last page.
   */
  next_page_token?: string | null;
}

export namespace NamespaceListResponse {
  /**
   * Contains namespace with metadata details.
   */
  export interface Detail {
    /**
     * Specifies the hierarchical namespace parts as an array of strings. For example,
     * ["bronze", "analytics"] represents the namespace "bronze.analytics".
     */
    namespace: Array<string>;

    /**
     * Contains the UUID that persists across renames.
     */
    namespace_uuid: string;

    /**
     * Indicates the creation timestamp in ISO 8601 format.
     */
    created_at?: string | null;

    /**
     * Shows the last update timestamp in ISO 8601 format. Null if never updated.
     */
    updated_at?: string | null;
  }
}

export interface NamespaceListParams {
  /**
   * Path param: Use this to identify the account.
   */
  account_id: string;

  /**
   * Query param: Maximum number of namespaces to return per page. Defaults to 100,
   * maximum 1000.
   */
  page_size?: number;

  /**
   * Query param: Opaque pagination token from a previous response. Use this to fetch
   * the next page of results.
   */
  page_token?: string;

  /**
   * Query param: Parent namespace to filter by. Only returns direct children of this
   * namespace. For nested namespaces, use %1F as separator (e.g.,
   * "bronze%1Fanalytics"). Omit this parameter to list top-level namespaces.
   */
  parent?: string;

  /**
   * Query param: Whether to include additional metadata (timestamps). When true,
   * response includes created_at and updated_at arrays.
   */
  return_details?: boolean;

  /**
   * Query param: Whether to include namespace UUIDs in the response. Set to true to
   * receive the namespace_uuids array.
   */
  return_uuids?: boolean;
}

Namespaces.Tables = Tables;

export declare namespace Namespaces {
  export {
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceListParams as NamespaceListParams,
  };

  export {
    Tables as Tables,
    type TableListResponse as TableListResponse,
    type TableListParams as TableListParams,
  };
}
