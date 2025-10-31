// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProjectsAPI from '../projects';
import { DeploymentsV4PagePaginationArray } from '../projects';
import * as HistoryAPI from './history/history';
import { History } from './history/history';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Deployments extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Start a new deployment from production. The repository and account must have
   * already been authorized on the Cloudflare Pages dashboard.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.create(
   *     'this-is-my-project-01',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    projectName: string,
    params: DeploymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProjectsAPI.Deployment> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/pages/projects/${projectName}/deployments`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: ProjectsAPI.Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of project deployments.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deployment of client.pages.projects.deployments.list(
   *   'this-is-my-project-01',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    projectName: string,
    params: DeploymentListParams,
    options?: RequestOptions,
  ): PagePromise<DeploymentsV4PagePaginationArray, ProjectsAPI.Deployment> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/pages/projects/${projectName}/deployments`,
      V4PagePaginationArray<ProjectsAPI.Deployment>,
      { query, ...options },
    );
  }

  /**
   * Delete a deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *     },
   *   );
   * ```
   */
  delete(
    deploymentID: string,
    params: DeploymentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeleteResponse | null> {
    const { account_id, project_name } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}`,
        options,
      ) as APIPromise<{ result: DeploymentDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch information about a deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *     },
   *   );
   * ```
   */
  get(
    deploymentID: string,
    params: DeploymentGetParams,
    options?: RequestOptions,
  ): APIPromise<ProjectsAPI.Deployment> {
    const { account_id, project_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}`,
        options,
      ) as APIPromise<{ result: ProjectsAPI.Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retry a previous deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.retry(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *       body: {},
   *     },
   *   );
   * ```
   */
  retry(
    deploymentID: string,
    params: DeploymentRetryParams,
    options?: RequestOptions,
  ): APIPromise<ProjectsAPI.Deployment> {
    const { account_id, project_name, body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}/retry`,
        { body: body, ...options },
      ) as APIPromise<{ result: ProjectsAPI.Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Rollback the production deployment to a previous deployment. You can only
   * rollback to succesful builds on production.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.rollback(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *       body: {},
   *     },
   *   );
   * ```
   */
  rollback(
    deploymentID: string,
    params: DeploymentRollbackParams,
    options?: RequestOptions,
  ): APIPromise<ProjectsAPI.Deployment> {
    const { account_id, project_name, body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}/rollback`,
        { body: body, ...options },
      ) as APIPromise<{ result: ProjectsAPI.Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DeploymentDeleteResponse = unknown;

export interface DeploymentCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Headers configuration file for the deployment.
   */
  _headers?: Uploadable;

  /**
   * Body param: Redirects configuration file for the deployment.
   */
  _redirects?: Uploadable;

  /**
   * Body param: Routes configuration file defining routing rules.
   */
  '_routes.json'?: Uploadable;

  /**
   * Body param: Worker bundle file in multipart/form-data format. Mutually exclusive
   * with `_worker.js`. Cannot specify both `_worker.js` and `_worker.bundle` in the
   * same request. Maximum size: 25 MiB.
   */
  '_worker.bundle'?: Uploadable;

  /**
   * Body param: Worker JavaScript file. Mutually exclusive with `_worker.bundle`.
   * Cannot specify both `_worker.js` and `_worker.bundle` in the same request.
   */
  '_worker.js'?: Uploadable;

  /**
   * Body param: The branch to build the new deployment from. The `HEAD` of the
   * branch will be used. If omitted, the production branch will be used by default.
   */
  branch?: string;

  /**
   * Body param: Boolean string indicating if the working directory has uncommitted
   * changes.
   */
  commit_dirty?: 'true' | 'false';

  /**
   * Body param: Git commit SHA associated with this deployment.
   */
  commit_hash?: string;

  /**
   * Body param: Git commit message associated with this deployment.
   */
  commit_message?: string;

  /**
   * Body param: Functions routing configuration file.
   */
  'functions-filepath-routing-config.json'?: Uploadable;

  /**
   * Body param: JSON string containing a manifest of files to deploy. Maps file
   * paths to their content hashes. Required for direct upload deployments. Maximum
   * 20,000 entries.
   */
  manifest?: string;

  /**
   * Body param: The build output directory path.
   */
  pages_build_output_dir?: string;

  /**
   * Body param: Hash of the Wrangler configuration file used for this deployment.
   */
  wrangler_config_hash?: string;
}

export interface DeploymentListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: What type of deployments to fetch.
   */
  env?: 'production' | 'preview';
}

export interface DeploymentDeleteParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Name of the project.
   */
  project_name: string;
}

export interface DeploymentGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Name of the project.
   */
  project_name: string;
}

export interface DeploymentRetryParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Name of the project.
   */
  project_name: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface DeploymentRollbackParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Name of the project.
   */
  project_name: string;

  /**
   * Body param:
   */
  body: unknown;
}

Deployments.History = History;

export declare namespace Deployments {
  export {
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
    type DeploymentGetParams as DeploymentGetParams,
    type DeploymentRetryParams as DeploymentRetryParams,
    type DeploymentRollbackParams as DeploymentRollbackParams,
  };

  export { History as History };
}

export { type DeploymentsV4PagePaginationArray };
