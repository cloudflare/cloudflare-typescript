// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DetailsAPI from 'cloudflare/resources/workers/deployments/by-scripts/details';

export class Details extends APIResource {
  /**
   * Get Deployment Detail
   */
  get(
    accountId: string,
    scriptId: string,
    deploymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetailGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/deployments/by-script/${scriptId}/detail/${deploymentId}`,
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

export namespace Details {
  export import DetailGetResponse = DetailsAPI.DetailGetResponse;
}
