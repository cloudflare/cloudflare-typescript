// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SSLRecommenderAPI from 'cloudflare/resources/settings/ssl-recommender';

export class SSLRecommender extends APIResource {
  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  update(
    zoneId: string,
    body: SSLRecommenderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SSLRecommenderUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/ssl_recommender`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SSLRecommenderUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SSLRecommenderGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/ssl_recommender`, options) as Core.APIPromise<{
        result: SSLRecommenderGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enrollment in the SSL/TLS Recommender service which tries to detect and
 * recommend (by sending periodic emails) the most secure SSL/TLS setting your
 * origin servers support.
 */
export interface SSLRecommenderUpdateResponse {
  /**
   * Enrollment value for SSL/TLS Recommender.
   */
  id?: 'ssl_recommender';

  /**
   * ssl-recommender enrollment setting.
   */
  enabled?: boolean;
}

/**
 * Enrollment in the SSL/TLS Recommender service which tries to detect and
 * recommend (by sending periodic emails) the most secure SSL/TLS setting your
 * origin servers support.
 */
export interface SSLRecommenderGetResponse {
  /**
   * Enrollment value for SSL/TLS Recommender.
   */
  id?: 'ssl_recommender';

  /**
   * ssl-recommender enrollment setting.
   */
  enabled?: boolean;
}

export interface SSLRecommenderUpdateParams {
  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  value: SSLRecommenderUpdateParams.Value;
}

export namespace SSLRecommenderUpdateParams {
  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  export interface Value {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }
}

export namespace SSLRecommender {
  export import SSLRecommenderUpdateResponse = SSLRecommenderAPI.SSLRecommenderUpdateResponse;
  export import SSLRecommenderGetResponse = SSLRecommenderAPI.SSLRecommenderGetResponse;
  export import SSLRecommenderUpdateParams = SSLRecommenderAPI.SSLRecommenderUpdateParams;
}
