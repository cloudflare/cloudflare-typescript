// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HTTP3API from 'cloudflare/resources/settings/http3';

export class HTTP3 extends APIResource {
  /**
   * Value of the HTTP3 setting.
   */
  edit(
    zoneId: string,
    body: HTTP3EditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTP3EditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/http3`, { body, ...options }) as Core.APIPromise<{
        result: HTTP3EditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Value of the HTTP3 setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HTTP3GetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/http3`, options) as Core.APIPromise<{
        result: HTTP3GetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * HTTP3 enabled for this zone.
 */
export interface HTTP3EditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'http3';

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
 * HTTP3 enabled for this zone.
 */
export interface HTTP3GetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'http3';

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

export interface HTTP3EditParams {
  /**
   * Value of the HTTP3 setting.
   */
  value: 'on' | 'off';
}

export namespace HTTP3 {
  export import HTTP3EditResponse = HTTP3API.HTTP3EditResponse;
  export import HTTP3GetResponse = HTTP3API.HTTP3GetResponse;
  export import HTTP3EditParams = HTTP3API.HTTP3EditParams;
}
