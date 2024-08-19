// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RecommendationsAPI from './recommendations';

export class Recommendations extends APIResource {
  /**
   * Retrieve the SSL/TLS Recommender's recommendation for a zone.
   */
  get(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecommendationGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/ssl/recommendation`, options) as Core.APIPromise<{
        result: RecommendationGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RecommendationGetResponse {
  /**
   * Identifier of a recommedation result.
   */
  id?: string;

  modified_on?: string;

  value?: 'flexible' | 'full' | 'strict';
}

export namespace Recommendations {
  export import RecommendationGetResponse = RecommendationsAPI.RecommendationGetResponse;
}
