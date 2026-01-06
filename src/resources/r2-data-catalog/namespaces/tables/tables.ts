// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as MaintenanceConfigsAPI from './maintenance-configs';
import {
  MaintenanceConfigGetParams,
  MaintenanceConfigGetResponse,
  MaintenanceConfigUpdateParams,
  MaintenanceConfigUpdateResponse,
  MaintenanceConfigs,
} from './maintenance-configs';

export class Tables extends APIResource {
  maintenanceConfigs: MaintenanceConfigsAPI.MaintenanceConfigs = new MaintenanceConfigsAPI.MaintenanceConfigs(
    this._client,
  );

  /**
   * Returns a list of tables in the specified namespace within an R2 catalog.
   * Supports pagination for efficient traversal of large table collections.
   *
   * @example
   * ```ts
   * const tables =
   *   await client.r2DataCatalog.namespaces.tables.list(
   *     'my-data-bucket',
   *     'bronze',
   *     { account_id: '0123456789abcdef0123456789abcdef' },
   *   );
   * ```
   */
  list(
    bucketName: string,
    namespace: string,
    params: TableListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TableListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2-catalog/${bucketName}/namespaces/${namespace}/tables`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TableListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Contains the list of tables with optional pagination.
 */
export interface TableListResponse {
  /**
   * Lists tables in the namespace.
   */
  identifiers: Array<TableListResponse.Identifier>;

  /**
   * Contains detailed metadata for each table when return_details is true. Each
   * object includes identifier, UUID, timestamps, and locations.
   */
  details?: Array<TableListResponse.Detail> | null;

  /**
   * Use this opaque token to fetch the next page of results. A null or absent value
   * indicates the last page.
   */
  next_page_token?: string | null;

  /**
   * Contains UUIDs for each table when return_uuids is true. The order corresponds
   * to the identifiers array.
   */
  table_uuids?: Array<string> | null;
}

export namespace TableListResponse {
  /**
   * Specifies a unique table identifier within a catalog.
   */
  export interface Identifier {
    /**
     * Specifies the table name.
     */
    name: string;

    /**
     * Specifies the hierarchical namespace parts as an array of strings. For example,
     * ["bronze", "analytics"] represents the namespace "bronze.analytics".
     */
    namespace: Array<string>;
  }

  /**
   * Contains table with metadata.
   */
  export interface Detail {
    /**
     * Specifies a unique table identifier within a catalog.
     */
    identifier: Detail.Identifier;

    /**
     * Contains the UUID that persists across renames.
     */
    table_uuid: string;

    /**
     * Indicates the creation timestamp in ISO 8601 format.
     */
    created_at?: string | null;

    /**
     * Specifies the base S3 URI for table storage location.
     */
    location?: string | null;

    /**
     * Contains the S3 URI to table metadata file. Null for staged tables.
     */
    metadata_location?: string | null;

    /**
     * Shows the last update timestamp in ISO 8601 format. Null if never updated.
     */
    updated_at?: string | null;
  }

  export namespace Detail {
    /**
     * Specifies a unique table identifier within a catalog.
     */
    export interface Identifier {
      /**
       * Specifies the table name.
       */
      name: string;

      /**
       * Specifies the hierarchical namespace parts as an array of strings. For example,
       * ["bronze", "analytics"] represents the namespace "bronze.analytics".
       */
      namespace: Array<string>;
    }
  }
}

export interface TableListParams {
  /**
   * Path param: Use this to identify the account.
   */
  account_id: string;

  /**
   * Query param: Maximum number of tables to return per page. Defaults to 100,
   * maximum 1000.
   */
  page_size?: number;

  /**
   * Query param: Opaque pagination token from a previous response. Use this to fetch
   * the next page of results.
   */
  page_token?: string;

  /**
   * Query param: Whether to include additional metadata (timestamps, locations).
   * When true, response includes created_at, updated_at, metadata_locations, and
   * locations arrays.
   */
  return_details?: boolean;

  /**
   * Query param: Whether to include table UUIDs in the response. Set to true to
   * receive the table_uuids array.
   */
  return_uuids?: boolean;
}

Tables.MaintenanceConfigs = MaintenanceConfigs;

export declare namespace Tables {
  export { type TableListResponse as TableListResponse, type TableListParams as TableListParams };

  export {
    MaintenanceConfigs as MaintenanceConfigs,
    type MaintenanceConfigUpdateResponse as MaintenanceConfigUpdateResponse,
    type MaintenanceConfigGetResponse as MaintenanceConfigGetResponse,
    type MaintenanceConfigUpdateParams as MaintenanceConfigUpdateParams,
    type MaintenanceConfigGetParams as MaintenanceConfigGetParams,
  };
}
