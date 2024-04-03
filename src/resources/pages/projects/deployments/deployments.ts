// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DeploymentsAPI from 'cloudflare/resources/pages/projects/deployments/deployments';
import * as ProjectsAPI from 'cloudflare/resources/pages/projects/projects';
import { PagesDeploymentsSinglePage } from 'cloudflare/resources/pages/projects/projects';
import * as HistoryAPI from 'cloudflare/resources/pages/projects/deployments/history/history';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Deployments extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Start a new deployment from production. The repository and account must have
   * already been authorized on the Cloudflare Pages dashboard.
   */
  create(
    projectName: string,
    params: DeploymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.PagesDeployments> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ProjectsAPI.PagesDeployments }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of project deployments.
   */
  list(
    projectName: string,
    params: DeploymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PagesDeploymentsSinglePage, ProjectsAPI.PagesDeployments> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pages/projects/${projectName}/deployments`,
      PagesDeploymentsSinglePage,
      { query, ...options },
    );
  }

  /**
   * Delete a deployment.
   */
  delete(
    projectName: string,
    deploymentId: string,
    params: DeploymentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id, body } = params;
    return this._client.delete(
      `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}`,
      { body: body, ...options },
    );
  }

  /**
   * Fetch information about a deployment.
   */
  get(
    projectName: string,
    deploymentId: string,
    params: DeploymentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.PagesDeployments> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: ProjectsAPI.PagesDeployments }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retry a previous deployment.
   */
  retry(
    projectName: string,
    deploymentId: string,
    params: DeploymentRetryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.PagesDeployments> {
    const { account_id, body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/retry`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: ProjectsAPI.PagesDeployments }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Rollback the production deployment to a previous deployment. You can only
   * rollback to succesful builds on production.
   */
  rollback(
    projectName: string,
    deploymentId: string,
    params: DeploymentRollbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectsAPI.PagesDeployments> {
    const { account_id, body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/rollback`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: ProjectsAPI.PagesDeployments }>
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
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

export namespace Deployments {
  export import DeploymentDeleteResponse = DeploymentsAPI.DeploymentDeleteResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentListParams = DeploymentsAPI.DeploymentListParams;
  export import DeploymentDeleteParams = DeploymentsAPI.DeploymentDeleteParams;
  export import DeploymentGetParams = DeploymentsAPI.DeploymentGetParams;
  export import DeploymentRetryParams = DeploymentsAPI.DeploymentRetryParams;
  export import DeploymentRollbackParams = DeploymentsAPI.DeploymentRollbackParams;
  export import History = HistoryAPI.History;
}

export { PagesDeploymentsSinglePage };
