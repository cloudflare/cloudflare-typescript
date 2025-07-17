// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Recommendations extends APIResource {
  /**
   * Retrieve the SSL/TLS Recommender's recommendation for a zone.
   *
   * @deprecated SSL/TLS Recommender has been decommissioned in favor of Automatic SSL/TLS
   */
  get(
    params: RecommendationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecommendationGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/ssl/recommendation`, options) as Core.APIPromise<{
        result: RecommendationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RecommendationGetResponse {
  id: string;

  /**
   * Whether this setting can be updated or not.
   */
  editable: boolean;

  /**
   * Last time this setting was modified.
   */
  modified_on: string;

  /**
   * Current setting of the automatic SSL/TLS.
   */
  value: 'auto' | 'custom';

  /**
   * Next time this zone will be scanned by the Automatic SSL/TLS.
   */
  next_scheduled_scan?: string | null;
}

export interface RecommendationGetParams {
  zone_id: string;
}

export declare namespace Recommendations {
  export {
    type RecommendationGetResponse as RecommendationGetResponse,
    type RecommendationGetParams as RecommendationGetParams,
  };
}
