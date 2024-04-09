// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ByScriptsAPI from 'cloudflare/resources/workers/deployments/by-scripts/by-scripts';
import * as DetailsAPI from 'cloudflare/resources/workers/deployments/by-scripts/details';

export class ByScripts extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);

  /**
   * List Deployments
   */
  get(
    scriptId: string,
    params: ByScriptGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByScriptGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/deployments/by-script/${scriptId}`,
        options,
      ) as Core.APIPromise<{ result: ByScriptGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ByScriptGetResponse {
  items?: Array<unknown>;

  latest?: unknown;
}

export interface ByScriptGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ByScripts {
  export import ByScriptGetResponse = ByScriptsAPI.ByScriptGetResponse;
  export import ByScriptGetParams = ByScriptsAPI.ByScriptGetParams;
  export import Details = DetailsAPI.Details;
  export import DetailGetResponse = DetailsAPI.DetailGetResponse;
  export import DetailGetParams = DetailsAPI.DetailGetParams;
}
