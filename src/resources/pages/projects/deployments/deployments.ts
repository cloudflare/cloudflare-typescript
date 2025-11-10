// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ProjectsAPI from '../projects';
import { DeploymentsSinglePage } from '../projects';
import * as HistoryAPI from './history/history';
import { History } from './history/history';

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
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.Deployment> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ProjectsAPI.Deployment }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeploymentsSinglePage, ProjectsAPI.Deployment> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pages/projects/${projectName}/deployments`,
      DeploymentsSinglePage,
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
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    projectName: string,
    deploymentId: string,
    params: DeploymentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch information about a deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.get(
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    projectName: string,
    deploymentId: string,
    params: DeploymentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.Deployment> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: ProjectsAPI.Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retry a previous deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.retry(
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       body: {},
   *     },
   *   );
   * ```
   */
  retry(
    projectName: string,
    deploymentId: string,
    params: DeploymentRetryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.Deployment> {
    const { account_id, body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/retry`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: ProjectsAPI.Deployment }>
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
   *     'this-is-my-project-01',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       body: {},
   *     },
   *   );
   * ```
   */
  rollback(
    projectName: string,
    deploymentId: string,
    params: DeploymentRollbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.Deployment> {
    const { account_id, body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/rollback`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: ProjectsAPI.Deployment }>
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
  _headers?: Core.Uploadable;

  /**
   * Body param: Redirects configuration file for the deployment.
   */
  _redirects?: Core.Uploadable;

  /**
   * Body param: Routes configuration file defining routing rules.
   */
  '_routes.json'?: Core.Uploadable;

  /**
   * Body param: Worker bundle file in multipart/form-data format. Mutually exclusive
   * with `_worker.js`. Cannot specify both `_worker.js` and `_worker.bundle` in the
   * same request. Maximum size: 25 MiB.
   */
  '_worker.bundle'?: Core.Uploadable;

  /**
   * Body param: Worker JavaScript file. Mutually exclusive with `_worker.bundle`.
   * Cannot specify both `_worker.js` and `_worker.bundle` in the same request.
   */
  '_worker.js'?: Core.Uploadable;

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
  'functions-filepath-routing-config.json'?: Core.Uploadable;

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

export interface DeploymentListParams {
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
}

export interface DeploymentGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface DeploymentRetryParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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

export { DeploymentsSinglePage };
