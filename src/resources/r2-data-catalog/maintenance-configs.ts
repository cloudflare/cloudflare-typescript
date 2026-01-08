// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class MaintenanceConfigs extends APIResource {
  /**
   * Update the maintenance configuration for a catalog. This allows you to enable or
   * disable compaction and adjust target file sizes for optimization.
   *
   * @example
   * ```ts
   * const maintenanceConfig =
   *   await client.r2DataCatalog.maintenanceConfigs.update(
   *     'my-data-bucket',
   *     {
   *       account_id: '0123456789abcdef0123456789abcdef',
   *       compaction: {
   *         state: 'enabled',
   *         target_size_mb: '256',
   *       },
   *       snapshot_expiration: {
   *         max_snapshot_age: '14d',
   *         min_snapshots_to_keep: 5,
   *         state: 'enabled',
   *       },
   *     },
   *   );
   * ```
   */
  update(
    bucketName: string,
    params: MaintenanceConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MaintenanceConfigUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/r2-catalog/${bucketName}/maintenance-configs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MaintenanceConfigUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the maintenance configuration for a specific catalog, including
   * compaction settings and credential status.
   *
   * @example
   * ```ts
   * const maintenanceConfig =
   *   await client.r2DataCatalog.maintenanceConfigs.get(
   *     'my-data-bucket',
   *     { account_id: '0123456789abcdef0123456789abcdef' },
   *   );
   * ```
   */
  get(
    bucketName: string,
    params: MaintenanceConfigGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MaintenanceConfigGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/r2-catalog/${bucketName}/maintenance-configs`,
        options,
      ) as Core.APIPromise<{ result: MaintenanceConfigGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Configures maintenance for the catalog.
 */
export interface MaintenanceConfigUpdateResponse {
  /**
   * Configures compaction for catalog maintenance.
   */
  compaction?: MaintenanceConfigUpdateResponse.Compaction;

  /**
   * Configures snapshot expiration settings.
   */
  snapshot_expiration?: MaintenanceConfigUpdateResponse.SnapshotExpiration;
}

export namespace MaintenanceConfigUpdateResponse {
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

/**
 * Contains maintenance configuration and credential status.
 */
export interface MaintenanceConfigGetResponse {
  /**
   * Shows the credential configuration status.
   */
  credential_status: 'present' | 'absent';

  /**
   * Configures maintenance for the catalog.
   */
  maintenance_config: MaintenanceConfigGetResponse.MaintenanceConfig;
}

export namespace MaintenanceConfigGetResponse {
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

export interface MaintenanceConfigUpdateParams {
  /**
   * Path param: Use this to identify the account.
   */
  account_id: string;

  /**
   * Body param: Updates compaction configuration (all fields optional).
   */
  compaction?: MaintenanceConfigUpdateParams.Compaction;

  /**
   * Body param: Updates snapshot expiration configuration (all fields optional).
   */
  snapshot_expiration?: MaintenanceConfigUpdateParams.SnapshotExpiration;
}

export namespace MaintenanceConfigUpdateParams {
  /**
   * Updates compaction configuration (all fields optional).
   */
  export interface Compaction {
    /**
     * Updates the state optionally.
     */
    state?: 'enabled' | 'disabled';

    /**
     * Updates the target file size optionally.
     */
    target_size_mb?: '64' | '128' | '256' | '512';
  }

  /**
   * Updates snapshot expiration configuration (all fields optional).
   */
  export interface SnapshotExpiration {
    /**
     * Updates the maximum age for snapshots optionally.
     */
    max_snapshot_age?: string;

    /**
     * Updates the minimum number of snapshots to retain optionally.
     */
    min_snapshots_to_keep?: number;

    /**
     * Updates the state optionally.
     */
    state?: 'enabled' | 'disabled';
  }
}

export interface MaintenanceConfigGetParams {
  /**
   * Use this to identify the account.
   */
  account_id: string;
}

export declare namespace MaintenanceConfigs {
  export {
    type MaintenanceConfigUpdateResponse as MaintenanceConfigUpdateResponse,
    type MaintenanceConfigGetResponse as MaintenanceConfigGetResponse,
    type MaintenanceConfigUpdateParams as MaintenanceConfigUpdateParams,
    type MaintenanceConfigGetParams as MaintenanceConfigGetParams,
  };
}
