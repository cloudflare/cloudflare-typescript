// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as OriginMaxHTTPVersionAPI from './origin-max-http-version';

export class OriginMaxHTTPVersionResource extends APIResource {
  /**
   * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will
   * attempt to use with your origin. This setting allows Cloudflare to make HTTP/2
   * requests to your origin. (Refer to
   * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
   * for more information.). The default value is "2" for all plan types except ENT
   * where it is "1"
   */
  edit(
    params: OriginMaxHTTPVersionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginMaxHTTPVersionEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/origin_max_http_version`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginMaxHTTPVersionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will
   * attempt to use with your origin. This setting allows Cloudflare to make HTTP/2
   * requests to your origin. (Refer to
   * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
   * for more information.). The default value is "2" for all plan types except ENT
   * where it is "1"
   */
  get(
    params: OriginMaxHTTPVersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginMaxHTTPVersionGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/origin_max_http_version`, options) as Core.APIPromise<{
        result: OriginMaxHTTPVersionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Value of the zone setting.
 */
export type OriginMaxHTTPVersion = 'origin_max_http_version';

/**
 * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will
 * attempt to use with your origin. This setting allows Cloudflare to make HTTP/2
 * requests to your origin. (Refer to
 * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
 * for more information.). The default value is "2" for all plan types except ENT
 * where it is "1"
 */
export interface OriginMaxHTTPVersionEditResponse {
  /**
   * Value of the zone setting.
   */
  id: OriginMaxHTTPVersion;

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the Origin Max HTTP Version Setting.
   */
  value: '2' | '1';
}

/**
 * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will
 * attempt to use with your origin. This setting allows Cloudflare to make HTTP/2
 * requests to your origin. (Refer to
 * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
 * for more information.). The default value is "2" for all plan types except ENT
 * where it is "1"
 */
export interface OriginMaxHTTPVersionGetResponse {
  /**
   * Value of the zone setting.
   */
  id: OriginMaxHTTPVersion;

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the Origin Max HTTP Version Setting.
   */
  value: '2' | '1';
}

export interface OriginMaxHTTPVersionEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the Origin Max HTTP Version Setting.
   */
  value: '2' | '1';
}

export interface OriginMaxHTTPVersionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace OriginMaxHTTPVersionResource {
  export import OriginMaxHTTPVersion = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersion;
  export import OriginMaxHTTPVersionEditResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditResponse;
  export import OriginMaxHTTPVersionGetResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetResponse;
  export import OriginMaxHTTPVersionEditParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionEditParams;
  export import OriginMaxHTTPVersionGetParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetParams;
}
