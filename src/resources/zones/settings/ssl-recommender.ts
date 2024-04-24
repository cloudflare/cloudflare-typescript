// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SSLRecommenderAPI from 'cloudflare/resources/zones/settings/ssl-recommender';

export class SSLRecommenderResource extends APIResource {
  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  edit(params: SSLRecommenderEditParams, options?: Core.RequestOptions): Core.APIPromise<SSLRecommender> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/ssl_recommender`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SSLRecommender }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  get(params: SSLRecommenderGetParams, options?: Core.RequestOptions): Core.APIPromise<SSLRecommender> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/ssl_recommender`, options) as Core.APIPromise<{
        result: SSLRecommender;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enrollment in the SSL/TLS Recommender service which tries to detect and
 * recommend (by sending periodic emails) the most secure SSL/TLS setting your
 * origin servers support.
 */
export interface SSLRecommender {
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
export interface SSLRecommenderParam {
  /**
   * Enrollment value for SSL/TLS Recommender.
   */
  id?: 'ssl_recommender';

  /**
   * ssl-recommender enrollment setting.
   */
  enabled?: boolean;
}

export interface SSLRecommenderEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Enrollment in the SSL/TLS Recommender service which tries to detect
   * and recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  value: SSLRecommenderParam;
}

export interface SSLRecommenderGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SSLRecommenderResource {
  export import SSLRecommender = SSLRecommenderAPI.SSLRecommender;
  export import SSLRecommenderEditParams = SSLRecommenderAPI.SSLRecommenderEditParams;
  export import SSLRecommenderGetParams = SSLRecommenderAPI.SSLRecommenderGetParams;
}
