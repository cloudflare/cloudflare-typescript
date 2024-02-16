// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DeploymentsByScriptAPI from 'cloudflare/resources/workers/deployments-by-script';

export class DeploymentsByScript extends APIResource {
  /**
   * List Deployments
   */
  list(
    accountId: string,
    scriptId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentsByScriptListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/deployments/by-script/${scriptId}`,
        options,
      ) as Core.APIPromise<{ result: DeploymentsByScriptListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Deployment Detail
   */
  detail(
    accountId: string,
    scriptId: string,
    deploymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentsByScriptDetailResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/deployments/by-script/${scriptId}/detail/${deploymentId}`,
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

export namespace DeploymentsByScript {
  export import DeploymentsByScriptListResponse = DeploymentsByScriptAPI.DeploymentsByScriptListResponse;
  export import DeploymentsByScriptDetailResponse = DeploymentsByScriptAPI.DeploymentsByScriptDetailResponse;
}
