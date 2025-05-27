// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Health extends APIResource {
  /**
   * Benchmark Durable Object warmup
   *
   * @example
   * ```ts
   * const health =
   *   await client.cloudforceOne.threatEvents.datasets.health.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  get(datasetID: string, params: HealthGetParams, options?: RequestOptions): APIPromise<HealthGetResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/health`,
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
