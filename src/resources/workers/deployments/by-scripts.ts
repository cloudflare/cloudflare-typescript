// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ByScriptsAPI from 'cloudflare/resources/workers/deployments/by-scripts';

export class ByScripts extends APIResource {
  /**
   * List Deployments
   */
  list(
    accountId: string,
    scriptId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByScriptListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/deployments/by-script/${scriptId}`,
        options,
      ) as Core.APIPromise<{ result: ByScriptListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Deployment Detail
   */
  get(
    accountId: string,
    scriptId: string,
    deploymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByScriptGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/deployments/by-script/${scriptId}/detail/${deploymentId}`,
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

export namespace ByScripts {
  export import ByScriptListResponse = ByScriptsAPI.ByScriptListResponse;
  export import ByScriptGetResponse = ByScriptsAPI.ByScriptGetResponse;
}
