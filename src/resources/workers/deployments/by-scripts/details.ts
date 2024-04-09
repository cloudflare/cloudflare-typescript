// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DetailsAPI from 'cloudflare/resources/workers/deployments/by-scripts/details';

export class Details extends APIResource {
  /**
   * Get Deployment Detail
   */
  get(
    scriptId: string,
    deploymentId: string,
    params: DetailGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetailGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/deployments/by-script/${scriptId}/detail/${deploymentId}`,
        options,
      ) as Core.APIPromise<{ result: DetailGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DetailGetResponse {
  id?: string;

  metadata?: unknown;

  number?: number;

  resources?: unknown;
}

export interface DetailGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Details {
  export import DetailGetResponse = DetailsAPI.DetailGetResponse;
  export import DetailGetParams = DetailsAPI.DetailGetParams;
}
