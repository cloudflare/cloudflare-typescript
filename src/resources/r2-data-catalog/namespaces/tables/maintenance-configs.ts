// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class MaintenanceConfigs extends APIResource {
  /**
   * Update the maintenance configuration for a specific table. This allows you to
   * enable or disable compaction and adjust target file sizes for optimization.
   *
   * @example
   * ```ts
   * const maintenanceConfig =
   *   await client.r2DataCatalog.namespaces.tables.maintenanceConfigs.update(
   *     'my-data-bucket',
   *     'my_namespace%1Fsub_namespace',
   *     'my_table',
   *     {
   *       account_id: '0123456789abcdef0123456789abcdef',
   *       compaction: {
   *         state: 'enabled',
   *         target_size_mb: '256',
   *       },
   *     },
   *   );
   * ```
   */
  update(
    bucketName: string,
    namespace: string,
    tableName: string,
    params: MaintenanceConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MaintenanceConfigUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/r2-catalog/${bucketName}/namespaces/${namespace}/tables/${tableName}/maintenance-configs`,
        { body, ...options },
      ) as Core.APIPromise<{ result: MaintenanceConfigUpdateResponse }>
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
   *     'my-data-bucket',
   *     'my_namespace%1Fsub_namespace',
   *     'my_table',
   *     { account_id: '0123456789abcdef0123456789abcdef' },
   *   );
   * ```
   */
  get(
    bucketName: string,
    namespace: string,
    tableName: string,
    params: MaintenanceConfigGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MaintenanceConfigGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/r2-catalog/${bucketName}/namespaces/${namespace}/tables/${tableName}/maintenance-configs`,
        options,
      ) as Core.APIPromise<{ result: MaintenanceConfigGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Configures maintenance for the table.
 */
export interface MaintenanceConfigUpdateResponse {
  /**
   * Configures compaction settings for table optimization.
   */
  compaction?: MaintenanceConfigUpdateResponse.Compaction;
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
     * Sets the target file size for compaction in megabytes.
     */
    target_size_mb: '64' | '128' | '256' | '512';
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
       * Sets the target file size for compaction in megabytes.
       */
      target_size_mb: '64' | '128' | '256' | '512';
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
