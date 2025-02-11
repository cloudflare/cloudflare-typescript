// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RatePlans extends APIResource {
  /**
   * Lists all rate plans the zone can subscribe to.
   */
  get(
    params: RatePlanGetParams,
    options?: RequestOptions,
  ): PagePromise<RatePlanGetResponsesSinglePage, RatePlanGetResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/available_rate_plans`,
      SinglePage<RatePlanGetResponse>,
      options,
    );
  }
}

export type RatePlanGetResponsesSinglePage = SinglePage<RatePlanGetResponse>;

export type RatePlanGetResponse = unknown;

export interface RatePlanGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace RatePlans {
  export {
    type RatePlanGetResponse as RatePlanGetResponse,
    type RatePlanGetResponsesSinglePage as RatePlanGetResponsesSinglePage,
    type RatePlanGetParams as RatePlanGetParams,
  };
}
