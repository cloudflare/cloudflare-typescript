// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProjectsAPI from '../projects';
import { DeploymentsSinglePage } from '../projects';
import * as HistoryAPI from './history/history';
import { History } from './history/history';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Deployments extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Start a new deployment from production. The repository and account must have
   * already been authorized on the Cloudflare Pages dashboard.
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
   */
  list(
    projectName: string,
    params: DeploymentListParams,
    options?: RequestOptions,
  ): PagePromise<DeploymentsSinglePage, ProjectsAPI.Deployment> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/pages/projects/${projectName}/deployments`,
      SinglePage<ProjectsAPI.Deployment>,
      { query, ...options },
    );
  }

  /**
   * Delete a deployment.
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
   * Body param: The branch to build the new deployment from. The `HEAD` of the
   * branch will be used. If omitted, the production branch will be used by default.
   */
  branch?: string;
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

export { type DeploymentsSinglePage };
