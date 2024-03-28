// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SSLRecommenderAPI from 'cloudflare/resources/zones/settings/ssl-recommender';

export class SSLRecommender extends APIResource {
  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  edit(
    params: SSLRecommenderEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingSSLRecommender> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/ssl_recommender`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneSettingSSLRecommender }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  get(
    params: SSLRecommenderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingSSLRecommender> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/ssl_recommender`, options) as Core.APIPromise<{
        result: ZoneSettingSSLRecommender;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enrollment in the SSL/TLS Recommender service which tries to detect and
 * recommend (by sending periodic emails) the most secure SSL/TLS setting your
 * origin servers support.
 */
export interface ZoneSettingSSLRecommender {
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
  value: ZoneSettingSSLRecommender;
}

export interface SSLRecommenderGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SSLRecommender {
  export import ZoneSettingSSLRecommender = SSLRecommenderAPI.ZoneSettingSSLRecommender;
  export import SSLRecommenderEditParams = SSLRecommenderAPI.SSLRecommenderEditParams;
  export import SSLRecommenderGetParams = SSLRecommenderAPI.SSLRecommenderGetParams;
}
