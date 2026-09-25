// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseMaintenanceConfigs extends APIResource {
  static override readonly _key: readonly ['r2DataCatalog', 'namespaces', 'tables', 'maintenanceConfigs'] =
    Object.freeze(['r2DataCatalog', 'namespaces', 'tables', 'maintenanceConfigs'] as const);

  /**
   * Update the maintenance configuration for a specific table. This allows you to
   * enable or disable compaction and adjust target file sizes for optimization.
   *
   * @example
   * ```ts
   * const maintenanceConfig =
   *   await client.r2DataCatalog.namespaces.tables.maintenanceConfigs.update(
   *     'my_table',
   *     {
   *       account_id: '0123456789abcdef0123456789abcdef',
   *       bucket_name: 'my-data-bucket',
   *       namespace: 'my_namespace%1Fsub_namespace',
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
    tableName: string,
    params: MaintenanceConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MaintenanceConfigUpdateResponse> {
    const { account_id, bucket_name, namespace, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/r2-catalog/${bucket_name}/namespaces/${namespace}/tables/${tableName}/maintenance-configs`,
        { body, ...options },
      ) as APIPromise<{ result: MaintenanceConfigUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the maintenance configuration for a specific table, including
   * compaction settings.
   *
   * @example
   * ```ts
   * const maintenanceConfig =
   *   await client.r2DataCatalog.namespaces.tables.maintenanceConfigs.get(
   *     'my_table',
   *     {
   *       account_id: '0123456789abcdef0123456789abcdef',
   *       bucket_name: 'my-data-bucket',
   *       namespace: 'my_namespace%1Fsub_namespace',
   *     },
   *   );
   * ```
   */
  get(
    tableName: string,
    params: MaintenanceConfigGetParams,
    options?: RequestOptions,
  ): APIPromise<MaintenanceConfigGetResponse> {
    const { account_id, bucket_name, namespace } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/r2-catalog/${bucket_name}/namespaces/${namespace}/tables/${tableName}/maintenance-configs`,
        options,
      ) as APIPromise<{ result: MaintenanceConfigGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class MaintenanceConfigs extends BaseMaintenanceConfigs {}

/**
 * Configures maintenance for the table.
 */
export interface MaintenanceConfigUpdateResponse {
  /**
   * Configures compaction settings for table optimization.
   */
  compaction?: MaintenanceConfigUpdateResponse.Compaction;

  /**
   * Scheduling interval between normal table maintenance runs.
   */
  interval?: string;

  snapshot_expiration?: MaintenanceConfigUpdateResponse.SnapshotExpiration;
}

export namespace MaintenanceConfigUpdateResponse {
  /**
   * Configures compaction settings for table optimization.
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

    /**
     * Earliest time when the scheduler can claim this operation. Null when disabled.
     */
    next_eligible_at?: string | null;
  }

  export interface SnapshotExpiration {
    /**
     * Specifies the maximum age for snapshots.
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

    /**
     * Earliest time when the scheduler can claim this operation. Null when disabled.
     */
    next_eligible_at?: string | null;
  }
}

/**
 * Contains table maintenance configuration.
 */
export interface MaintenanceConfigGetResponse {
  /**
   * Configures maintenance for the table.
   */
  maintenance_config: MaintenanceConfigGetResponse.MaintenanceConfig;
}

export namespace MaintenanceConfigGetResponse {
  /**
   * Configures maintenance for the table.
   */
  export interface MaintenanceConfig {
    /**
     * Configures compaction settings for table optimization.
     */
    compaction?: MaintenanceConfig.Compaction;

    /**
     * Scheduling interval between normal table maintenance runs.
     */
    interval?: string;

    snapshot_expiration?: MaintenanceConfig.SnapshotExpiration;
  }

  export namespace MaintenanceConfig {
    /**
     * Configures compaction settings for table optimization.
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

      /**
       * Earliest time when the scheduler can claim this operation. Null when disabled.
       */
      next_eligible_at?: string | null;
    }

    export interface SnapshotExpiration {
      /**
       * Specifies the maximum age for snapshots.
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

      /**
       * Earliest time when the scheduler can claim this operation. Null when disabled.
       */
      next_eligible_at?: string | null;
    }
  }
}

export interface MaintenanceConfigUpdateParams {
  /**
   * Path param: Identifies the account.
   */
  account_id: string;

  /**
   * Path param: Specifies the R2 bucket name.
   */
  bucket_name: string;

  /**
   * Path param: The namespace identifier (use %1F as separator for nested
   * namespaces).
   */
  namespace: string;

  /**
   * Body param: Updates table compaction configuration; all fields are optional.
   */
  compaction?: MaintenanceConfigUpdateParams.Compaction;

  /**
   * Body param: Updates snapshot expiration configuration (all fields optional).
   */
  snapshot_expiration?: MaintenanceConfigUpdateParams.SnapshotExpiration;
}

export namespace MaintenanceConfigUpdateParams {
  /**
   * Updates table compaction configuration; all fields are optional.
   */
  export interface Compaction {
    /**
     * Specifies the state of maintenance operations.
     */
    state?: 'enabled' | 'disabled';

    /**
     * Sets the target file size for compaction in megabytes. Defaults to "128".
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
   * Identifies the account.
   */
  account_id: string;

  /**
   * Specifies the R2 bucket name.
   */
  bucket_name: string;

  /**
   * The namespace identifier (use %1F as separator for nested namespaces).
   */
  namespace: string;
}

export declare namespace MaintenanceConfigs {
  export {
    type MaintenanceConfigUpdateResponse as MaintenanceConfigUpdateResponse,
    type MaintenanceConfigGetResponse as MaintenanceConfigGetResponse,
    type MaintenanceConfigUpdateParams as MaintenanceConfigUpdateParams,
    type MaintenanceConfigGetParams as MaintenanceConfigGetParams,
  };
}
