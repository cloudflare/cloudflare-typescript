// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class RatePlans extends APIResource {
  /**
   * Lists all rate plans the zone can subscribe to.
   */
  get(
    params: RatePlanGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RatePlanGetResponsesSinglePage, RatePlanGetResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/available_rate_plans`,
      RatePlanGetResponsesSinglePage,
      options,
    );
  }
}

export class RatePlanGetResponsesSinglePage extends SinglePage<RatePlanGetResponse> {}

export type RatePlanGetResponse = unknown;

export interface RatePlanGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

RatePlans.RatePlanGetResponsesSinglePage = RatePlanGetResponsesSinglePage;

export declare namespace RatePlans {
  export {
    type RatePlanGetResponse as RatePlanGetResponse,
    RatePlanGetResponsesSinglePage as RatePlanGetResponsesSinglePage,
    type RatePlanGetParams as RatePlanGetParams,
  };
}
