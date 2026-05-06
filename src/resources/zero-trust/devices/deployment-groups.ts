// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class DeploymentGroups extends APIResource {
  /**
   * Creates a new deployment group. Policy IDs must be unique across all deployment
   * groups. This endpoint is in Beta.
   *
   * @example
   * ```ts
   * const deploymentGroup =
   *   await client.zeroTrust.devices.deploymentGroups.create({
   *     account_id: 'account_id',
   *     name: 'Engineering Ring 0',
   *     version_config: [
   *       {
   *         target_environment: 'windows',
   *         version: '2026.5.234.0',
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    params: DeploymentGroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentGroup> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/deployment-groups`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DeploymentGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all deployment groups for an account. Use deployment groups to assign
   * target WARP client versions to specific devices. This endpoint is in Beta.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deploymentGroup of client.zeroTrust.devices.deploymentGroups.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DeploymentGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeploymentGroupsV4PagePaginationArray, DeploymentGroup> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/deployment-groups`,
      DeploymentGroupsV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a deployment group. Associated policies no longer apply and devices stop
   * receiving version targets. This endpoint is in Beta.
   *
   * @example
   * ```ts
   * const deploymentGroup =
   *   await client.zeroTrust.devices.deploymentGroups.delete(
   *     'group_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    groupId: string,
    params: DeploymentGroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentGroupDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/devices/deployment-groups/${groupId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentGroupDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a deployment group. Returns 409 if any newly added policy IDs already
   * belong to another deployment group. This endpoint is in Beta.
   *
   * @example
   * ```ts
   * const deploymentGroup =
   *   await client.zeroTrust.devices.deploymentGroups.edit(
   *     'group_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(
    groupId: string,
    params: DeploymentGroupEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentGroup> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/devices/deployment-groups/${groupId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DeploymentGroup }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single deployment group by its ID. This endpoint is in Beta.
   *
   * @example
   * ```ts
   * const deploymentGroup =
   *   await client.zeroTrust.devices.deploymentGroups.get(
   *     'group_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    groupId: string,
    params: DeploymentGroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentGroup> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/deployment-groups/${groupId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentGroup }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DeploymentGroupsV4PagePaginationArray extends V4PagePaginationArray<DeploymentGroup> {}

export interface DeploymentGroup {
  /**
   * The ID of the deployment group.
   */
  id: string;

  /**
   * The RFC3339Nano timestamp when the deployment group was created.
   */
  created_at: string;

  /**
   * A user-friendly name for the deployment group.
   */
  name: string;

  /**
   * The RFC3339Nano timestamp when the deployment group was last updated.
   */
  updated_at: string;

  /**
   * Contains version configurations for different target environments.
   */
  version_config: Array<DeploymentGroup.VersionConfig>;

  /**
   * Contains a list of policy IDs assigned to this deployment group.
   */
  policy_ids?: Array<string> | null;
}

export namespace DeploymentGroup {
  export interface VersionConfig {
    /**
     * The target environment for the client version (e.g., windows, macos).
     */
    target_environment: string | null;

    /**
     * The specific client version to deploy.
     */
    version: string;
  }
}

export interface DeploymentGroupDeleteResponse {
  /**
   * The ID of a deleted deployment group.
   */
  id?: string;
}

export interface DeploymentGroupCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the deployment group.
   */
  name: string;

  /**
   * Body param: Contains at least one version configuration.
   */
  version_config: Array<DeploymentGroupCreateParams.VersionConfig>;

  /**
   * Body param: Contains an optional list of policy IDs assigned to a group.
   */
  policy_ids?: Array<string>;
}

export namespace DeploymentGroupCreateParams {
  export interface VersionConfig {
    /**
     * The target environment for the client version (e.g., windows, macos).
     */
    target_environment: string | null;

    /**
     * The specific client version to deploy.
     */
    version: string;
  }
}

export interface DeploymentGroupListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;
}

export interface DeploymentGroupDeleteParams {
  account_id: string;
}

export interface DeploymentGroupEditParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the deployment group.
   */
  name?: string;

  /**
   * Body param: Replaces the entire list of policy IDs.
   */
  policy_ids?: Array<string>;

  /**
   * Body param: Replaces the entire version_config array.
   */
  version_config?: Array<DeploymentGroupEditParams.VersionConfig>;
}

export namespace DeploymentGroupEditParams {
  export interface VersionConfig {
    /**
     * The target environment for the client version (e.g., windows, macos).
     */
    target_environment: string | null;

    /**
     * The specific client version to deploy.
     */
    version: string;
  }
}

export interface DeploymentGroupGetParams {
  account_id: string;
}

DeploymentGroups.DeploymentGroupsV4PagePaginationArray = DeploymentGroupsV4PagePaginationArray;

export declare namespace DeploymentGroups {
  export {
    type DeploymentGroup as DeploymentGroup,
    type DeploymentGroupDeleteResponse as DeploymentGroupDeleteResponse,
    DeploymentGroupsV4PagePaginationArray as DeploymentGroupsV4PagePaginationArray,
    type DeploymentGroupCreateParams as DeploymentGroupCreateParams,
    type DeploymentGroupListParams as DeploymentGroupListParams,
    type DeploymentGroupDeleteParams as DeploymentGroupDeleteParams,
    type DeploymentGroupEditParams as DeploymentGroupEditParams,
    type DeploymentGroupGetParams as DeploymentGroupGetParams,
  };
}
