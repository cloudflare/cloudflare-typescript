// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ByScriptsAPI from 'cloudflare/resources/workers/deployments/by-scripts/by-scripts';
import * as DetailsAPI from 'cloudflare/resources/workers/deployments/by-scripts/details';

export class ByScripts extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);

  /**
   * List Deployments
   */
  workerDeploymentsListDeployments(
    accountId: string,
    scriptId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByScriptWorkerDeploymentsListDeploymentsResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/deployments/by-script/${scriptId}`,
        options,
      ) as Core.APIPromise<{ result: ByScriptWorkerDeploymentsListDeploymentsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ByScriptWorkerDeploymentsListDeploymentsResponse {
  items?: Array<unknown>;

  latest?: unknown;
}

export namespace ByScripts {
  export import ByScriptWorkerDeploymentsListDeploymentsResponse = ByScriptsAPI.ByScriptWorkerDeploymentsListDeploymentsResponse;
  export import Details = DetailsAPI.Details;
  export import DetailGetResponse = DetailsAPI.DetailGetResponse;
}
