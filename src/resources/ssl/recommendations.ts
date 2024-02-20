// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RecommendationsAPI from 'cloudflare/resources/ssl/recommendations';

export class Recommendations extends APIResource {
  /**
   * Retrieve the SSL/TLS Recommender's recommendation for a zone.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecommendationListResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/ssl/recommendation`, options) as Core.APIPromise<{
        result: RecommendationListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RecommendationListResponse {
  /**
   * Identifier of a recommedation result.
   */
  id?: string;

  modified_on?: string;

  value?: 'flexible' | 'full' | 'strict';
}

export namespace Recommendations {
  export import RecommendationListResponse = RecommendationsAPI.RecommendationListResponse;
}
