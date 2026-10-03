// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProjectsAPI from '../projects';
import { DeploymentsV4PagePaginationArray } from '../projects';
import * as TailsAPI from './tails';
import {
  BaseTails,
  TailCreateParams,
  TailCreateResponse,
  TailDeleteParams,
  TailDeleteResponse,
  Tails,
} from './tails';
import * as HistoryAPI from './history/history';
import { BaseHistory, History } from './history/history';
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

export class BaseDeployments extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'deployments'] = Object.freeze([
    'pages',
    'projects',
    'deployments',
  ] as const);

  /**
   * Create a Cloudflare Pages deployment from a Git branch or Direct Upload
   * manifest. Git repositories must already be authorized in Cloudflare Pages.
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
   * List the production or preview deployments for a Cloudflare Pages project.
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
   * Remove a deployment from a Cloudflare Pages project.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.delete(
   *     'f64788e9-fccd-4d4a-a28a-cb84f88f6e12',
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
    const { account_id, project_name, force } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}`,
        { query: { force }, ...options },
      ) as APIPromise<{ result: DeploymentDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the status and details of a Cloudflare Pages deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.get(
   *     'f64788e9-fccd-4d4a-a28a-cb84f88f6e12',
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
   * Retry a previous Cloudflare Pages deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.retry(
   *     'f64788e9-fccd-4d4a-a28a-cb84f88f6e12',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *     },
   *   );
   * ```
   */
  retry(
    deploymentID: string,
    params: DeploymentRetryParams,
    options?: RequestOptions,
  ): APIPromise<ProjectsAPI.Deployment> {
    const { account_id, project_name } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}/retry`,
        options,
      ) as APIPromise<{ result: ProjectsAPI.Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Roll back production to a previous successful Cloudflare Pages deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.pages.projects.deployments.rollback(
   *     'f64788e9-fccd-4d4a-a28a-cb84f88f6e12',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *     },
   *   );
   * ```
   */
  rollback(
    deploymentID: string,
    params: DeploymentRollbackParams,
    options?: RequestOptions,
  ): APIPromise<ProjectsAPI.Deployment> {
    const { account_id, project_name } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}/rollback`,
        options,
      ) as APIPromise<{ result: ProjectsAPI.Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Deployments extends BaseDeployments {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  tails: TailsAPI.Tails = new TailsAPI.Tails(this._client);
}

export type DeploymentDeleteResponse = unknown;

export interface DeploymentCreateParams {
  /**
   * Path param: Identifier.
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
   * Body param: Git branch to deploy. Uses the branch's `HEAD`; defaults to the
   * project's production branch.
   */
  branch?: string;

  /**
   * Body param: Whether the associated Git working tree has uncommitted changes.
   * Provide `true` or `false`.
   */
  commit_dirty?: 'true' | 'false';

  /**
   * Body param: Git commit SHA associated with the deployment.
   */
  commit_hash?: string;

  /**
   * Body param: Git commit message associated with the deployment.
   */
  commit_message?: string;

  /**
   * Body param: Functions routing configuration file.
   */
  'functions-filepath-routing-config.json'?: Uploadable;

  /**
   * Body param: JSON-encoded object mapping deployment file paths to their uploaded
   * content hashes. Required for Direct Upload deployments. Maximum 20,000 entries.
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
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Deployment environment to return. Valid values are `production` and
   * `preview`.
   */
  env?: 'production' | 'preview';
}

export interface DeploymentDeleteParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: Name of the Pages project. Must begin with a lowercase letter or
   * digit and contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;

  /**
   * Query param: Allow deletion when a non-production deployment has an active
   * alias.
   */
  force?: boolean;
}

export interface DeploymentGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Pages project. Must begin with a lowercase letter or digit and
   * contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;
}

export interface DeploymentRetryParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Pages project. Must begin with a lowercase letter or digit and
   * contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;
}

export interface DeploymentRollbackParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Pages project. Must begin with a lowercase letter or digit and
   * contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;
}

Deployments.History = History;
Deployments.BaseHistory = BaseHistory;
Deployments.Tails = Tails;
Deployments.BaseTails = BaseTails;

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

  export { History as History, BaseHistory as BaseHistory };

  export {
    Tails as Tails,
    BaseTails as BaseTails,
    type TailCreateResponse as TailCreateResponse,
    type TailDeleteResponse as TailDeleteResponse,
    type TailCreateParams as TailCreateParams,
    type TailDeleteParams as TailDeleteParams,
  };
}

export { type DeploymentsV4PagePaginationArray };
