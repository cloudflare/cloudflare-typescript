// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DeploymentsAPI from './deployments';

export class Deployments extends APIResource {
  /**
   * Deployments configure how
   * [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions)
   * are deployed to traffic. A deployment can consist of one or two versions of a
   * Worker.
   */
  create(
    scriptName: string,
    params: DeploymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/workers/scripts/${scriptName}/deployments`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DeploymentCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List of Worker Deployments. The first deployment in the list is the latest
   * deployment actively serving traffic.
   */
  get(
    scriptName: string,
    params: DeploymentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/deployments`,
        options,
      ) as Core.APIPromise<{ result: DeploymentGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Deployment {
  /**
   * Human-readable message about the deployment.
   */
  'workers/message'?: string;
}

export interface DeploymentParam {
  /**
   * Human-readable message about the deployment.
   */
  'workers/message'?: string;
}

export interface DeploymentCreateResponse {
  id?: string;

  annotations?: Deployment;

  author_email?: string;

  created_on?: string;

  source?: string;

  strategy?: string;
}

export interface DeploymentGetResponse {
  deployments?: Array<DeploymentGetResponse.Deployment>;
}

export namespace DeploymentGetResponse {
  export interface Deployment {
    id?: string;

    annotations?: DeploymentsAPI.Deployment;

    author_email?: string;

    created_on?: string;

    source?: string;

    strategy?: string;
  }
}

export interface DeploymentCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  annotations?: DeploymentParam;

  /**
   * Body param:
   */
  strategy?: string;
}

export interface DeploymentGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Deployments {
  export import Deployment = DeploymentsAPI.Deployment;
  export import DeploymentCreateResponse = DeploymentsAPI.DeploymentCreateResponse;
  export import DeploymentGetResponse = DeploymentsAPI.DeploymentGetResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentGetParams = DeploymentsAPI.DeploymentGetParams;
}
