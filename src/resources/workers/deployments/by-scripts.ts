// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ByScriptsAPI from 'cloudflare/resources/workers/deployments/by-scripts';

export class ByScripts extends APIResource {
  /**
   * List Deployments
   */
  list(
    scriptId: string,
    params: ByScriptListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByScriptListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/deployments/by-script/${scriptId}`,
        options,
      ) as Core.APIPromise<{ result: ByScriptListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Deployment Detail
   */
  get(
    scriptId: string,
    deploymentId: string,
    params: ByScriptGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByScriptGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/deployments/by-script/${scriptId}/detail/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: ByScriptGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ByScriptListResponse {
  items?: Array<unknown>;

  latest?: unknown;
}

export interface ByScriptGetResponse {
  id?: string;

  metadata?: unknown;

  number?: number;

  resources?: unknown;
}

export interface ByScriptListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ByScriptGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ByScripts {
  export import ByScriptListResponse = ByScriptsAPI.ByScriptListResponse;
  export import ByScriptGetResponse = ByScriptsAPI.ByScriptGetResponse;
  export import ByScriptListParams = ByScriptsAPI.ByScriptListParams;
  export import ByScriptGetParams = ByScriptsAPI.ByScriptGetParams;
}
