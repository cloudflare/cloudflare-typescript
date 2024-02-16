// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginMaxHTTPVersionAPI from 'cloudflare/resources/settings/origin-max-http-version';

export class OriginMaxHTTPVersion extends APIResource {
  /**
   * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will
   * attempt to use with your origin. This setting allows Cloudflare to make HTTP/2
   * requests to your origin. (Refer to
   * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
   * for more information.). The default value is "2" for all plan types except ENT
   * where it is "1"
   */
  update(
    zoneId: string,
    body: OriginMaxHTTPVersionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginMaxHTTPVersionUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/origin_max_http_version`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginMaxHTTPVersionUpdateResponse }>
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
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<OriginMaxHTTPVersionGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/origin_max_http_version`, options) as Core.APIPromise<{
        result: OriginMaxHTTPVersionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Origin Max HTTP Setting Version sets the highest HTTP version Cloudflare will
 * attempt to use with your origin. This setting allows Cloudflare to make HTTP/2
 * requests to your origin. (Refer to
 * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
 * for more information.). The default value is "2" for all plan types except ENT
 * where it is "1"
 */
export interface OriginMaxHTTPVersionUpdateResponse {
  /**
   * Value of the zone setting.
   */
  id: 'origin_max_http_version';

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
  id: 'origin_max_http_version';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the Origin Max HTTP Version Setting.
   */
  value: '2' | '1';
}

export interface OriginMaxHTTPVersionUpdateParams {
  /**
   * Value of the Origin Max HTTP Version Setting.
   */
  value: '2' | '1';
}

export namespace OriginMaxHTTPVersion {
  export import OriginMaxHTTPVersionUpdateResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionUpdateResponse;
  export import OriginMaxHTTPVersionGetResponse = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionGetResponse;
  export import OriginMaxHTTPVersionUpdateParams = OriginMaxHTTPVersionAPI.OriginMaxHTTPVersionUpdateParams;
}
