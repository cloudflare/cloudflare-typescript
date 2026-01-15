// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CredentialsAPI from './credentials';
import { CredentialCreateParams, CredentialCreateResponse, Credentials } from './credentials';
import * as MaintenanceConfigsAPI from './maintenance-configs';
import {
  MaintenanceConfigGetParams,
  MaintenanceConfigGetResponse,
  MaintenanceConfigUpdateParams,
  MaintenanceConfigUpdateResponse,
  MaintenanceConfigs,
} from './maintenance-configs';
import * as NamespacesAPI from './namespaces/namespaces';
import { NamespaceListParams, NamespaceListResponse, Namespaces } from './namespaces/namespaces';

export class R2DataCatalog extends APIResource {
  maintenanceConfigs: MaintenanceConfigsAPI.MaintenanceConfigs = new MaintenanceConfigsAPI.MaintenanceConfigs(
    this._client,
  );
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);

  /**
   * Returns a list of R2 buckets that have been enabled as Apache Iceberg catalogs
   * for the specified account. Each catalog represents an R2 bucket configured to
   * store Iceberg metadata and data files.
   *
   * @example
   * ```ts
   * const r2DataCatalogs = await client.r2DataCatalog.list({
   *   account_id: '0123456789abcdef0123456789abcdef',
   * });
   * ```
   */
  list(
    params: R2DataCatalogListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<R2DataCatalogListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2-catalog`, options) as Core.APIPromise<{
        result: R2DataCatalogListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable an R2 bucket as a catalog. This operation deactivates the catalog but
   * preserves existing metadata and data files. The catalog can be re-enabled later.
   *
   * @example
   * ```ts
   * await client.r2DataCatalog.disable('my-data-bucket', {
   *   account_id: '0123456789abcdef0123456789abcdef',
   * });
   * ```
   */
  disable(
    bucketName: string,
    params: R2DataCatalogDisableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.post(`/accounts/${account_id}/r2-catalog/${bucketName}/disable`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Enable an R2 bucket as an Apache Iceberg catalog. This operation creates the
   * necessary catalog infrastructure and activates the bucket for storing Iceberg
   * metadata and data files.
   *
   * @example
   * ```ts
   * const response = await client.r2DataCatalog.enable(
   *   'my-data-bucket',
   *   { account_id: '0123456789abcdef0123456789abcdef' },
   * );
   * ```
   */
  enable(
    bucketName: string,
    params: R2DataCatalogEnableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<R2DataCatalogEnableResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/r2-catalog/${bucketName}/enable`,
        options,
      ) as Core.APIPromise<{ result: R2DataCatalogEnableResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve detailed information about a specific R2 catalog by bucket name.
   * Returns catalog status, maintenance configuration, and credential status.
   *
   * @example
   * ```ts
   * const r2DataCatalog = await client.r2DataCatalog.get(
   *   'my-data-bucket',
   *   { account_id: '0123456789abcdef0123456789abcdef' },
   * );
   * ```
   */
  get(
    bucketName: string,
    params: R2DataCatalogGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<R2DataCatalogGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/r2-catalog/${bucketName}`, options) as Core.APIPromise<{
        result: R2DataCatalogGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Contains the list of catalogs.
 */
export interface R2DataCatalogListResponse {
  /**
   * Lists catalogs in the account.
   */
  warehouses: Array<R2DataCatalogListResponse.Warehouse>;
}

export namespace R2DataCatalogListResponse {
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
         * Sets the target file size for compaction in megabytes.
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
         * minutes).
         */
        max_snapshot_age: string;

        /**
         * Specifies the minimum number of snapshots to retain.
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
export interface R2DataCatalogEnableResponse {
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
export interface R2DataCatalogGetResponse {
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
  maintenance_config?: R2DataCatalogGetResponse.MaintenanceConfig | null;
}

export namespace R2DataCatalogGetResponse {
  /**
   * Configures maintenance for the catalog.
   */
  export interface MaintenanceConfig {
    /**
     * Configures compaction for catalog maintenance.
     */
    compaction?: MaintenanceConfig.Compaction;

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
       * Sets the target file size for compaction in megabytes.
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
       * minutes).
       */
      max_snapshot_age: string;

      /**
       * Specifies the minimum number of snapshots to retain.
       */
      min_snapshots_to_keep: number;

      /**
       * Specifies the state of maintenance operations.
       */
      state: 'enabled' | 'disabled';
    }
  }
}

export interface R2DataCatalogListParams {
  /**
   * Use this to identify the account.
   */
  account_id: string;
}

export interface R2DataCatalogDisableParams {
  /**
   * Use this to identify the account.
   */
  account_id: string;
}

export interface R2DataCatalogEnableParams {
  /**
   * Use this to identify the account.
   */
  account_id: string;
}

export interface R2DataCatalogGetParams {
  /**
   * Use this to identify the account.
   */
  account_id: string;
}

R2DataCatalog.MaintenanceConfigs = MaintenanceConfigs;
R2DataCatalog.Credentials = Credentials;
R2DataCatalog.Namespaces = Namespaces;

export declare namespace R2DataCatalog {
  export {
    type R2DataCatalogListResponse as R2DataCatalogListResponse,
    type R2DataCatalogEnableResponse as R2DataCatalogEnableResponse,
    type R2DataCatalogGetResponse as R2DataCatalogGetResponse,
    type R2DataCatalogListParams as R2DataCatalogListParams,
    type R2DataCatalogDisableParams as R2DataCatalogDisableParams,
    type R2DataCatalogEnableParams as R2DataCatalogEnableParams,
    type R2DataCatalogGetParams as R2DataCatalogGetParams,
  };

  export {
    MaintenanceConfigs as MaintenanceConfigs,
    type MaintenanceConfigUpdateResponse as MaintenanceConfigUpdateResponse,
    type MaintenanceConfigGetResponse as MaintenanceConfigGetResponse,
    type MaintenanceConfigUpdateParams as MaintenanceConfigUpdateParams,
    type MaintenanceConfigGetParams as MaintenanceConfigGetParams,
  };

  export {
    Credentials as Credentials,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialCreateParams as CredentialCreateParams,
  };

  export {
    Namespaces as Namespaces,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceListParams as NamespaceListParams,
  };
}
