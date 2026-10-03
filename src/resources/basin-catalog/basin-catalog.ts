// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CredentialsAPI from './credentials';
import {
  BaseCredentials,
  CredentialCreateParams,
  CredentialCreateResponse,
  Credentials,
} from './credentials';
import * as MaintenanceConfigsAPI from './maintenance-configs';
import {
  BaseMaintenanceConfigs,
  MaintenanceConfigGetParams,
  MaintenanceConfigGetResponse,
  MaintenanceConfigUpdateParams,
  MaintenanceConfigUpdateResponse,
  MaintenanceConfigs,
} from './maintenance-configs';
import * as NamespacesAPI from './namespaces/namespaces';
import {
  BaseNamespaces,
  NamespaceListParams,
  NamespaceListResponse,
  Namespaces,
} from './namespaces/namespaces';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBasinCatalog extends APIResource {
  static override readonly _key: readonly ['basinCatalog'] = Object.freeze(['basinCatalog'] as const);

  /**
   * Returns a list of R2 buckets that have been enabled as Apache Iceberg catalogs
   * for the specified account. Each catalog represents an R2 bucket configured to
   * store Iceberg metadata and data files.
   *
   * @example
   * ```ts
   * const basinCatalogs = await client.basinCatalog.list({
   *   account_id: '0123456789abcdef0123456789abcdef',
   * });
   * ```
   */
  list(params: BasinCatalogListParams, options?: RequestOptions): APIPromise<BasinCatalogListResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/basin-catalog`, options) as APIPromise<{
        result: BasinCatalogListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the catalog from the control plane without deleting R2 bucket objects.
   * Set force=true to remove catalog namespaces, tables, views, and maintenance
   * metadata. Force deletion is limited to a configured catalog object count.
   *
   * @example
   * ```ts
   * await client.basinCatalog.delete('my-data-bucket', {
   *   account_id: '0123456789abcdef0123456789abcdef',
   * });
   * ```
   */
  delete(bucketName: string, params: BasinCatalogDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, force } = params;
    return this._client.post(path`/accounts/${account_id}/basin-catalog/${bucketName}/delete`, {
      query: { force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Disable an R2 bucket as a catalog. This operation deactivates the catalog but
   * preserves existing metadata and data files. The catalog can be re-enabled later.
   *
   * @example
   * ```ts
   * await client.basinCatalog.disable('my-data-bucket', {
   *   account_id: '0123456789abcdef0123456789abcdef',
   * });
   * ```
   */
  disable(bucketName: string, params: BasinCatalogDisableParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.post(path`/accounts/${account_id}/basin-catalog/${bucketName}/disable`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Enable an R2 bucket as an Apache Iceberg catalog. This operation creates the
   * necessary catalog infrastructure and activates the bucket for storing Iceberg
   * metadata and data files.
   *
   * @example
   * ```ts
   * const response = await client.basinCatalog.enable(
   *   'my-data-bucket',
   *   { account_id: '0123456789abcdef0123456789abcdef' },
   * );
   * ```
   */
  enable(
    bucketName: string,
    params: BasinCatalogEnableParams,
    options?: RequestOptions,
  ): APIPromise<BasinCatalogEnableResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/basin-catalog/${bucketName}/enable`,
        options,
      ) as APIPromise<{ result: BasinCatalogEnableResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve detailed information about a specific Basin Catalog by bucket name.
   * Returns catalog status, maintenance configuration, and credential status.
   *
   * @example
   * ```ts
   * const basinCatalog = await client.basinCatalog.get(
   *   'my-data-bucket',
   *   { account_id: '0123456789abcdef0123456789abcdef' },
   * );
   * ```
   */
  get(
    bucketName: string,
    params: BasinCatalogGetParams,
    options?: RequestOptions,
  ): APIPromise<BasinCatalogGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/basin-catalog/${bucketName}`, options) as APIPromise<{
        result: BasinCatalogGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class BasinCatalog extends BaseBasinCatalog {
  maintenanceConfigs: MaintenanceConfigsAPI.MaintenanceConfigs = new MaintenanceConfigsAPI.MaintenanceConfigs(
    this._client,
  );
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

/**
 * Contains the list of catalogs.
 */
export interface BasinCatalogListResponse {
  /**
   * Lists catalogs in the account.
   */
  warehouses: Array<BasinCatalogListResponse.Warehouse>;
}

export namespace BasinCatalogListResponse {
  /**
   * Contains R2 Data Catalog information.
   */
  export interface Warehouse {
    /**
     * Use this to uniquely identify the catalog.
     */
    id: string;

    /**
     * Specifies the associated R2 bucket name.
     */
    bucket: string;

    /**
     * Specifies the catalog name (generated from account and bucket name).
     */
    name: string;

    /**
     * Indicates the status of the catalog.
     */
    status: 'active' | 'inactive';

    /**
     * Shows the credential configuration status.
     */
    credential_status?: 'present' | 'absent' | null;

    /**
     * Configures maintenance for the catalog.
     */
    maintenance_config?: Warehouse.MaintenanceConfig | null;
  }

  export namespace Warehouse {
    /**
     * Configures maintenance for the catalog.
     */
    export interface MaintenanceConfig {
      /**
       * Configures compaction for catalog maintenance.
       */
      compaction?: MaintenanceConfig.Compaction;

      /**
       * Scheduling interval between normal table maintenance runs.
       */
      interval?: string;

      /**
       * Configures snapshot expiration settings.
       */
      snapshot_expiration?: MaintenanceConfig.SnapshotExpiration;
    }

    export namespace MaintenanceConfig {
      /**
       * Configures compaction for catalog maintenance.
       */
      export interface Compaction {
        /**
         * Specifies the state of maintenance operations.
         */
        state: 'enabled' | 'disabled';

        /**
         * Sets the target file size for compaction in megabytes. Defaults to "128".
         */
        target_size_mb: '64' | '128' | '256' | '512';
      }

      /**
       * Configures snapshot expiration settings.
       */
      export interface SnapshotExpiration {
        /**
         * Specifies the maximum age for snapshots. The system deletes snapshots older than
         * this age. Format: <number><unit> where unit is d (days), h (hours), m (minutes),
         * or s (seconds). Examples: "7d" (7 days), "48h" (48 hours), "2880m" (2,880
         * minutes). Defaults to "7d".
         */
        max_snapshot_age: string;

        /**
         * Specifies the minimum number of snapshots to retain. Defaults to 100.
         */
        min_snapshots_to_keep: number;

        /**
         * Specifies the state of maintenance operations.
         */
        state: 'enabled' | 'disabled';
      }
    }
  }
}

/**
 * Contains response from activating an R2 bucket as a catalog.
 */
export interface BasinCatalogEnableResponse {
  /**
   * Use this to uniquely identify the activated catalog.
   */
  id: string;

  /**
   * Specifies the name of the activated catalog.
   */
  name: string;
}

/**
 * Contains R2 Data Catalog information.
 */
export interface BasinCatalogGetResponse {
  /**
   * Use this to uniquely identify the catalog.
   */
  id: string;

  /**
   * Specifies the associated R2 bucket name.
   */
  bucket: string;

  /**
   * Specifies the catalog name (generated from account and bucket name).
   */
  name: string;

  /**
   * Indicates the status of the catalog.
   */
  status: 'active' | 'inactive';

  /**
   * Shows the credential configuration status.
   */
  credential_status?: 'present' | 'absent' | null;

  /**
   * Configures maintenance for the catalog.
   */
  maintenance_config?: BasinCatalogGetResponse.MaintenanceConfig | null;
}

export namespace BasinCatalogGetResponse {
  /**
   * Configures maintenance for the catalog.
   */
  export interface MaintenanceConfig {
    /**
     * Configures compaction for catalog maintenance.
     */
    compaction?: MaintenanceConfig.Compaction;

    /**
     * Scheduling interval between normal table maintenance runs.
     */
    interval?: string;

    /**
     * Configures snapshot expiration settings.
     */
    snapshot_expiration?: MaintenanceConfig.SnapshotExpiration;
  }

  export namespace MaintenanceConfig {
    /**
     * Configures compaction for catalog maintenance.
     */
    export interface Compaction {
      /**
       * Specifies the state of maintenance operations.
       */
      state: 'enabled' | 'disabled';

      /**
       * Sets the target file size for compaction in megabytes. Defaults to "128".
       */
      target_size_mb: '64' | '128' | '256' | '512';
    }

    /**
     * Configures snapshot expiration settings.
     */
    export interface SnapshotExpiration {
      /**
       * Specifies the maximum age for snapshots. The system deletes snapshots older than
       * this age. Format: <number><unit> where unit is d (days), h (hours), m (minutes),
       * or s (seconds). Examples: "7d" (7 days), "48h" (48 hours), "2880m" (2,880
       * minutes). Defaults to "7d".
       */
      max_snapshot_age: string;

      /**
       * Specifies the minimum number of snapshots to retain. Defaults to 100.
       */
      min_snapshots_to_keep: number;

      /**
       * Specifies the state of maintenance operations.
       */
      state: 'enabled' | 'disabled';
    }
  }
}

export interface BasinCatalogListParams {
  /**
   * Identifies the account.
   */
  account_id: string;
}

export interface BasinCatalogDeleteParams {
  /**
   * Path param: Use this to identify the account.
   */
  account_id: string;

  /**
   * Query param: Remove child metadata before deleting the catalog.
   */
  force?: boolean;
}

export interface BasinCatalogDisableParams {
  /**
   * Identifies the account.
   */
  account_id: string;
}

export interface BasinCatalogEnableParams {
  /**
   * Identifies the account.
   */
  account_id: string;
}

export interface BasinCatalogGetParams {
  /**
   * Identifies the account.
   */
  account_id: string;
}

BasinCatalog.MaintenanceConfigs = MaintenanceConfigs;
BasinCatalog.BaseMaintenanceConfigs = BaseMaintenanceConfigs;
BasinCatalog.Credentials = Credentials;
BasinCatalog.BaseCredentials = BaseCredentials;
BasinCatalog.Namespaces = Namespaces;
BasinCatalog.BaseNamespaces = BaseNamespaces;

export declare namespace BasinCatalog {
  export {
    type BasinCatalogListResponse as BasinCatalogListResponse,
    type BasinCatalogEnableResponse as BasinCatalogEnableResponse,
    type BasinCatalogGetResponse as BasinCatalogGetResponse,
    type BasinCatalogListParams as BasinCatalogListParams,
    type BasinCatalogDeleteParams as BasinCatalogDeleteParams,
    type BasinCatalogDisableParams as BasinCatalogDisableParams,
    type BasinCatalogEnableParams as BasinCatalogEnableParams,
    type BasinCatalogGetParams as BasinCatalogGetParams,
  };

  export {
    MaintenanceConfigs as MaintenanceConfigs,
    BaseMaintenanceConfigs as BaseMaintenanceConfigs,
    type MaintenanceConfigUpdateResponse as MaintenanceConfigUpdateResponse,
    type MaintenanceConfigGetResponse as MaintenanceConfigGetResponse,
    type MaintenanceConfigUpdateParams as MaintenanceConfigUpdateParams,
    type MaintenanceConfigGetParams as MaintenanceConfigGetParams,
  };

  export {
    Credentials as Credentials,
    BaseCredentials as BaseCredentials,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialCreateParams as CredentialCreateParams,
  };

  export {
    Namespaces as Namespaces,
    BaseNamespaces as BaseNamespaces,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceListParams as NamespaceListParams,
  };
}
