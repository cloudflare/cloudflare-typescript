// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDeployments extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'deployments'] = Object.freeze([
    'workers',
    'scripts',
    'deployments',
  ] as const);

  /**
   * Deployments configure how
   * [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions)
   * are deployed to traffic. A deployment can consist of multiple versions of a
   * Worker.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.workers.scripts.deployments.create(
   *     'this-is_my_script-01',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       strategy: 'percentage',
   *       versions: [
   *         {
   *           percentage: 100,
   *           version_id:
   *             '023e105f-2a42-4f8b-a1c1-73f6a2a30c0f',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    scriptName: string,
    params: DeploymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<Deployment> {
    const { account_id, force, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/workers/scripts/${scriptName}/deployments`, {
        query: { force },
        body,
        ...options,
      }) as APIPromise<{ result: Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Worker deployments. The first deployment in the list is the latest
   * deployment actively serving traffic.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deploymentListResponse of client.workers.scripts.deployments.list(
   *   'this-is_my_script-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    scriptName: string,
    params: DeploymentListParams,
    options?: RequestOptions,
  ): PagePromise<DeploymentListResponsesV4PagePagination, DeploymentListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/scripts/${scriptName}/deployments`,
      V4PagePagination<DeploymentListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Worker Deployment. The latest deployment, which is actively serving
   * traffic, cannot be deleted. All other deployments can be deleted.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.workers.scripts.deployments.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       script_name: 'this-is_my_script-01',
   *     },
   *   );
   * ```
   */
  delete(
    deploymentID: string,
    params: DeploymentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeleteResponse> {
    const { account_id, script_name } = params;
    return this._client.delete(
      path`/accounts/${account_id}/workers/scripts/${script_name}/deployments/${deploymentID}`,
      options,
    );
  }

  /**
   * Get information about a Worker Deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.workers.scripts.deployments.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       script_name: 'this-is_my_script-01',
   *     },
   *   );
   * ```
   */
  get(deploymentID: string, params: DeploymentGetParams, options?: RequestOptions): APIPromise<Deployment> {
    const { account_id, script_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workers/scripts/${script_name}/deployments/${deploymentID}`,
        options,
      ) as APIPromise<{ result: Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Deployments extends BaseDeployments {}

export type DeploymentListResponsesV4PagePagination = V4PagePagination<DeploymentListResponse>;

export interface Deployment {
  id: string;

  created_on: string;

  source: string;

  strategy: 'percentage';

  /**
   * Worker versions included in this deployment. Each object must contain a
   * `version_id` UUID and a `percentage`; percentages across all objects must
   * total 100. In the `cf` CLI, pass the entire array as one JSON value to
   * `--versions`, either inline, for example
   * `--versions '[{"version_id":"023e105f-2a42-4f8b-a1c1-73f6a2a30c0f","percentage":100}]'`,
   * or from a JSON file with `--versions @versions.json`.
   */
  versions: Array<Deployment.Version>;

  annotations?: Deployment.Annotations;

  author_email?: string;
}

export namespace Deployment {
  export interface Version {
    /**
     * Percentage of traffic served by this version.
     */
    percentage: number;

    /**
     * Identifier of the Worker Version.
     */
    version_id: string;
  }

  export interface Annotations {
    /**
     * Human-readable message about the deployment. Truncated to 1000 bytes if longer.
     */
    'workers/message'?: string;

    /**
     * Operation that triggered the creation of the deployment.
     */
    'workers/triggered_by'?: string;
  }
}

export interface DeploymentListResponse {
  deployments: Array<Deployment>;
}

export interface DeploymentDeleteResponse {
  errors: Array<DeploymentDeleteResponse.Error>;

  messages: Array<DeploymentDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace DeploymentDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface DeploymentCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  strategy: 'percentage';

  /**
   * Body param: Worker versions included in this deployment. Each object must
   * contain a `version_id` UUID and a `percentage`; percentages across all objects
   * must total 100. In the `cf` CLI, pass the entire array as one JSON value to
   * `--versions`, either inline, for example
   * `--versions '[{"version_id":"023e105f-2a42-4f8b-a1c1-73f6a2a30c0f","percentage":100}]'`,
   * or from a JSON file with `--versions @versions.json`.
   */
  versions: Array<DeploymentCreateParams.Version>;

  /**
   * Query param: If set to true, the deployment will be created even if normally
   * blocked by something such rolling back to an older version when a secret has
   * changed.
   */
  force?: boolean;

  /**
   * Body param
   */
  annotations?: DeploymentCreateParams.Annotations;
}

export namespace DeploymentCreateParams {
  export interface Version {
    /**
     * Percentage of traffic served by this version.
     */
    percentage: number;

    /**
     * Identifier of the Worker Version.
     */
    version_id: string;
  }

  export interface Annotations {
    /**
     * Human-readable message about the deployment. Truncated to 1000 bytes if longer.
     */
    'workers/message'?: string;
  }
}

export interface DeploymentListParams extends V4PagePaginationParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Start of the deployment creation time range, inclusive.
   */
  since?: string;

  /**
   * Query param: End of the deployment creation time range, inclusive.
   */
  until?: string;
}

export interface DeploymentDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script_name: string;
}

export interface DeploymentGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script_name: string;
}

export declare namespace Deployments {
  export {
    type Deployment as Deployment,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentListResponsesV4PagePagination as DeploymentListResponsesV4PagePagination,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
    type DeploymentGetParams as DeploymentGetParams,
  };
}
