// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recommendations extends APIResource {
  /**
   * Retrieve the SSL/TLS Recommender's recommendation for a zone.
   */
  get(params: RecommendationGetParams, options?: RequestOptions): APIPromise<RecommendationGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/ssl/recommendation`, options) as APIPromise<{
        result: RecommendationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RecommendationGetResponse {
  /**
   * Identifier of a recommendation result.
   */
  id?: string;

  modified_on?: string;

  value?: 'flexible' | 'full' | 'strict';
}

export interface RecommendationGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Recommendations {
  export {
    type RecommendationGetResponse as RecommendationGetResponse,
    type RecommendationGetParams as RecommendationGetParams,
  };
}
