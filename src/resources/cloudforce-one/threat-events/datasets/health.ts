// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Health extends APIResource {
  /**
   * Benchmark Durable Object warmup
   *
   * @example
   * ```ts
   * const health =
   *   await client.cloudforceOne.threatEvents.datasets.health.get(
   *     'dataset_id',
   *     { account_id: 0 },
   *   );
   * ```
   */
  get(
    datasetId: string,
    params: HealthGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthGetResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/cloudforce-one/events/dataset/${datasetId}/health`,
      options,
    );
  }
}

export interface HealthGetResponse {
  items: HealthGetResponse.Items;

  type: string;
}

export namespace HealthGetResponse {
  export interface Items {
    type: string;
  }
}

export interface HealthGetParams {
  /**
   * Account ID.
   */
  account_id: number;
}

export declare namespace Health {
  export { type HealthGetResponse as HealthGetResponse, type HealthGetParams as HealthGetParams };
}
