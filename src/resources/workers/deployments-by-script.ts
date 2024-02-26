// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DeploymentsByScriptAPI from 'cloudflare/resources/workers/deployments-by-script';

export class DeploymentsByScript extends APIResource {
  /**
   * List Deployments
   */
  list(
    scriptId: string,
    params: DeploymentsByScriptListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentsByScriptListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/deployments/by-script/${scriptId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentsByScriptListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Deployment Detail
   */
  detail(
    scriptId: string,
    deploymentId: string,
    params: DeploymentsByScriptDetailParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentsByScriptDetailResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/deployments/by-script/${scriptId}/detail/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentsByScriptDetailResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DeploymentsByScriptListResponse {
  items?: Array<unknown>;

  latest?: unknown;
}

export interface DeploymentsByScriptDetailResponse {
  id?: string;

  metadata?: unknown;

  number?: number;

  resources?: unknown;
}

export interface DeploymentsByScriptListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface DeploymentsByScriptDetailParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace DeploymentsByScript {
  export import DeploymentsByScriptListResponse = DeploymentsByScriptAPI.DeploymentsByScriptListResponse;
  export import DeploymentsByScriptDetailResponse = DeploymentsByScriptAPI.DeploymentsByScriptDetailResponse;
  export import DeploymentsByScriptListParams = DeploymentsByScriptAPI.DeploymentsByScriptListParams;
  export import DeploymentsByScriptDetailParams = DeploymentsByScriptAPI.DeploymentsByScriptDetailParams;
}
