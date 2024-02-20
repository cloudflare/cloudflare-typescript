// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AlwaysUseHTTPSAPI from 'cloudflare/resources/settings/always-use-https';

export class AlwaysUseHTTPS extends APIResource {
  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  edit(
    zoneId: string,
    body: AlwaysUseHTTPSEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AlwaysUseHTTPSEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/always_use_https`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AlwaysUseHTTPSEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<AlwaysUseHTTPSGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/always_use_https`, options) as Core.APIPromise<{
        result: AlwaysUseHTTPSGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Reply to all requests for URLs that use "http" with a 301 redirect to the
 * equivalent "https" URL. If you only want to redirect for a subset of requests,
 * consider creating an "Always use HTTPS" page rule.
 */
export interface AlwaysUseHTTPSEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'always_use_https';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

/**
 * Reply to all requests for URLs that use "http" with a 301 redirect to the
 * equivalent "https" URL. If you only want to redirect for a subset of requests,
 * consider creating an "Always use HTTPS" page rule.
 */
export interface AlwaysUseHTTPSGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'always_use_https';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface AlwaysUseHTTPSEditParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace AlwaysUseHTTPS {
  export import AlwaysUseHTTPSEditResponse = AlwaysUseHTTPSAPI.AlwaysUseHTTPSEditResponse;
  export import AlwaysUseHTTPSGetResponse = AlwaysUseHTTPSAPI.AlwaysUseHTTPSGetResponse;
  export import AlwaysUseHTTPSEditParams = AlwaysUseHTTPSAPI.AlwaysUseHTTPSEditParams;
}
