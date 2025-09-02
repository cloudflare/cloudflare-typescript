// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Deployments extends APIResource {
  /**
   * Deployments configure how
   * [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions)
   * are deployed to traffic. A deployment can consist of one or two versions of a
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
   *             '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    scriptName: string,
    params: DeploymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Deployment> {
    const { account_id, force, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/scripts/${scriptName}/deployments`, {
        query: { force },
        body,
        ...options,
      }) as Core.APIPromise<{ result: Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List of Worker Deployments. The first deployment in the list is the latest
   * deployment actively serving traffic.
   *
   * @example
   * ```ts
   * const deployments =
   *   await client.workers.scripts.deployments.list(
   *     'this-is_my_script-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  list(
    scriptName: string,
    params: DeploymentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/deployments`,
        options,
      ) as Core.APIPromise<{ result: DeploymentListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Worker Deployment. The latest deployment, which is actively serving
   * traffic, cannot be deleted. All other deployments can be deleted.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.workers.scripts.deployments.delete(
   *     'this-is_my_script-01',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    scriptName: string,
    deploymentId: string,
    params: DeploymentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/workers/scripts/${scriptName}/deployments/${deploymentId}`,
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
   *     'this-is_my_script-01',
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    scriptName: string,
    deploymentId: string,
    params: DeploymentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Deployment> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/deployments/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Deployment {
  id: string;

  created_on: string;

  source: string;

  strategy: 'percentage';

  versions: Array<Deployment.Version>;

  annotations?: Deployment.Annotations;

  author_email?: string;
}

export namespace Deployment {
  export interface Version {
    percentage: number;

    version_id: string;
  }

  export interface Annotations {
    /**
     * Human-readable message about the deployment. Truncated to 100 bytes.
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
   * Body param:
   */
  strategy: 'percentage';

  /**
   * Body param:
   */
  versions: Array<DeploymentCreateParams.Version>;

  /**
   * Query param: If set to true, the deployment will be created even if normally
   * blocked by something such rolling back to an older version when a secret has
   * changed.
   */
  force?: boolean;

  /**
   * Body param:
   */
  annotations?: DeploymentCreateParams.Annotations;
}

export namespace DeploymentCreateParams {
  export interface Version {
    percentage: number;

    version_id: string;
  }

  export interface Annotations {
    /**
     * Human-readable message about the deployment. Truncated to 100 bytes.
     */
    'workers/message'?: string;
  }
}

export interface DeploymentListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DeploymentDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DeploymentGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Deployments {
  export {
    type Deployment as Deployment,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
    type DeploymentGetParams as DeploymentGetParams,
  };
}
