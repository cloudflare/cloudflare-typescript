// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class MonitorGroups extends APIResource {
  /**
   * Create a new monitor group.
   *
   * @example
   * ```ts
   * const monitorGroup =
   *   await client.loadBalancers.monitorGroups.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     id: 'id',
   *     description: 'Primary datacenter monitors',
   *     members: [
   *       {
   *         enabled: true,
   *         monitor_id: 'monitor_id',
   *         monitoring_only: false,
   *         must_be_healthy: true,
   *       },
   *     ],
   *   });
   * ```
   */
  create(params: MonitorGroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<MonitorGroup> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/load_balancers/monitor_groups`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MonitorGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify a configured monitor group.
   *
   * @example
   * ```ts
   * const monitorGroup =
   *   await client.loadBalancers.monitorGroups.update(
   *     '17b5962d775c646f3f9725cbc7a53df4',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       id: 'id',
   *       description: 'Primary datacenter monitors',
   *       members: [
   *         {
   *           enabled: true,
   *           monitor_id: 'monitor_id',
   *           monitoring_only: false,
   *           must_be_healthy: true,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    monitorGroupId: string,
    params: MonitorGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorGroup> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/load_balancers/monitor_groups/${monitorGroupId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MonitorGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List configured monitor groups.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const monitorGroup of client.loadBalancers.monitorGroups.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: MonitorGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MonitorGroupsSinglePage, MonitorGroup> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/load_balancers/monitor_groups`,
      MonitorGroupsSinglePage,
      options,
    );
  }

  /**
   * Delete a configured monitor group.
   *
   * @example
   * ```ts
   * const monitorGroup =
   *   await client.loadBalancers.monitorGroups.delete(
   *     '17b5962d775c646f3f9725cbc7a53df4',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    monitorGroupId: string,
    params: MonitorGroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorGroup> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/load_balancers/monitor_groups/${monitorGroupId}`,
        options,
      ) as Core.APIPromise<{ result: MonitorGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Apply changes to an existing monitor group, overwriting the supplied properties.
   *
   * @example
   * ```ts
   * const monitorGroup =
   *   await client.loadBalancers.monitorGroups.edit(
   *     '17b5962d775c646f3f9725cbc7a53df4',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       id: 'id',
   *       description: 'Primary datacenter monitors',
   *       members: [
   *         {
   *           enabled: true,
   *           monitor_id: 'monitor_id',
   *           monitoring_only: false,
   *           must_be_healthy: true,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  edit(
    monitorGroupId: string,
    params: MonitorGroupEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorGroup> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/load_balancers/monitor_groups/${monitorGroupId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MonitorGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single configured monitor group.
   *
   * @example
   * ```ts
   * const monitorGroup =
   *   await client.loadBalancers.monitorGroups.get(
   *     '17b5962d775c646f3f9725cbc7a53df4',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    monitorGroupId: string,
    params: MonitorGroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorGroup> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/monitor_groups/${monitorGroupId}`,
        options,
      ) as Core.APIPromise<{ result: MonitorGroup }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class MonitorGroupsSinglePage extends SinglePage<MonitorGroup> {}

export interface MonitorGroup {
  /**
   * The ID of the Monitor Group to use for checking the health of origins within
   * this pool.
   */
  id: string;

  /**
   * A short description of the monitor group
   */
  description: string;

  /**
   * List of monitors in this group
   */
  members: Array<MonitorGroup.Member>;

  /**
   * The timestamp of when the monitor group was created
   */
  created_at?: string;

  /**
   * The timestamp of when the monitor group was last updated
   */
  updated_at?: string;
}

export namespace MonitorGroup {
  export interface Member {
    /**
     * Whether this monitor is enabled in the group
     */
    enabled: boolean;

    /**
     * The ID of the Monitor to use for checking the health of origins within this
     * pool.
     */
    monitor_id: string;

    /**
     * Whether this monitor is used for monitoring only (does not affect pool health)
     */
    monitoring_only: boolean;

    /**
     * Whether this monitor must be healthy for the pool to be considered healthy
     */
    must_be_healthy: boolean;

    /**
     * The timestamp of when the monitor was added to the group
     */
    created_at?: string;

    /**
     * The timestamp of when the monitor group member was last updated
     */
    updated_at?: string;
  }
}

export interface MonitorGroupCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The ID of the Monitor Group to use for checking the health of
   * origins within this pool.
   */
  id: string;

  /**
   * Body param: A short description of the monitor group
   */
  description: string;

  /**
   * Body param: List of monitors in this group
   */
  members: Array<MonitorGroupCreateParams.Member>;
}

export namespace MonitorGroupCreateParams {
  export interface Member {
    /**
     * Whether this monitor is enabled in the group
     */
    enabled: boolean;

    /**
     * The ID of the Monitor to use for checking the health of origins within this
     * pool.
     */
    monitor_id: string;

    /**
     * Whether this monitor is used for monitoring only (does not affect pool health)
     */
    monitoring_only: boolean;

    /**
     * Whether this monitor must be healthy for the pool to be considered healthy
     */
    must_be_healthy: boolean;
  }
}

export interface MonitorGroupUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The ID of the Monitor Group to use for checking the health of
   * origins within this pool.
   */
  id: string;

  /**
   * Body param: A short description of the monitor group
   */
  description: string;

  /**
   * Body param: List of monitors in this group
   */
  members: Array<MonitorGroupUpdateParams.Member>;
}

export namespace MonitorGroupUpdateParams {
  export interface Member {
    /**
     * Whether this monitor is enabled in the group
     */
    enabled: boolean;

    /**
     * The ID of the Monitor to use for checking the health of origins within this
     * pool.
     */
    monitor_id: string;

    /**
     * Whether this monitor is used for monitoring only (does not affect pool health)
     */
    monitoring_only: boolean;

    /**
     * Whether this monitor must be healthy for the pool to be considered healthy
     */
    must_be_healthy: boolean;
  }
}

export interface MonitorGroupListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface MonitorGroupDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface MonitorGroupEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The ID of the Monitor Group to use for checking the health of
   * origins within this pool.
   */
  id: string;

  /**
   * Body param: A short description of the monitor group
   */
  description: string;

  /**
   * Body param: List of monitors in this group
   */
  members: Array<MonitorGroupEditParams.Member>;
}

export namespace MonitorGroupEditParams {
  export interface Member {
    /**
     * Whether this monitor is enabled in the group
     */
    enabled: boolean;

    /**
     * The ID of the Monitor to use for checking the health of origins within this
     * pool.
     */
    monitor_id: string;

    /**
     * Whether this monitor is used for monitoring only (does not affect pool health)
     */
    monitoring_only: boolean;

    /**
     * Whether this monitor must be healthy for the pool to be considered healthy
     */
    must_be_healthy: boolean;
  }
}

export interface MonitorGroupGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

MonitorGroups.MonitorGroupsSinglePage = MonitorGroupsSinglePage;

export declare namespace MonitorGroups {
  export {
    type MonitorGroup as MonitorGroup,
    MonitorGroupsSinglePage as MonitorGroupsSinglePage,
    type MonitorGroupCreateParams as MonitorGroupCreateParams,
    type MonitorGroupUpdateParams as MonitorGroupUpdateParams,
    type MonitorGroupListParams as MonitorGroupListParams,
    type MonitorGroupDeleteParams as MonitorGroupDeleteParams,
    type MonitorGroupEditParams as MonitorGroupEditParams,
    type MonitorGroupGetParams as MonitorGroupGetParams,
  };
}
