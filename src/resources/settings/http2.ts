// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HTTP2API from 'cloudflare/resources/settings/http2';

export class HTTP2 extends APIResource {
  /**
   * Value of the HTTP2 setting.
   */
  update(
    zoneId: string,
    body: HTTP2UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTP2UpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/http2`, { body, ...options }) as Core.APIPromise<{
        result: HTTP2UpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Value of the HTTP2 setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HTTP2GetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/http2`, options) as Core.APIPromise<{
        result: HTTP2GetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * HTTP2 enabled for this zone.
 */
export interface HTTP2UpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'http2';

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
 * HTTP2 enabled for this zone.
 */
export interface HTTP2GetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'http2';

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

export interface HTTP2UpdateParams {
  /**
   * Value of the HTTP2 setting.
   */
  value: 'on' | 'off';
}

export namespace HTTP2 {
  export import HTTP2UpdateResponse = HTTP2API.HTTP2UpdateResponse;
  export import HTTP2GetResponse = HTTP2API.HTTP2GetResponse;
  export import HTTP2UpdateParams = HTTP2API.HTTP2UpdateParams;
}
