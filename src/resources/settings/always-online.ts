// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AlwaysOnlineAPI from 'cloudflare/resources/settings/always-online';

export class AlwaysOnline extends APIResource {
  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  update(
    zoneId: string,
    body: AlwaysOnlineUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AlwaysOnlineUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/always_online`, { body, ...options }) as Core.APIPromise<{
        result: AlwaysOnlineUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<AlwaysOnlineGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/always_online`, options) as Core.APIPromise<{
        result: AlwaysOnlineGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When enabled, Cloudflare serves limited copies of web pages available from the
 * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
 * offline. Refer to
 * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
 * more information.
 */
export interface AlwaysOnlineUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'always_online';

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
 * When enabled, Cloudflare serves limited copies of web pages available from the
 * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
 * offline. Refer to
 * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
 * more information.
 */
export interface AlwaysOnlineGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'always_online';

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

export interface AlwaysOnlineUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace AlwaysOnline {
  export import AlwaysOnlineUpdateResponse = AlwaysOnlineAPI.AlwaysOnlineUpdateResponse;
  export import AlwaysOnlineGetResponse = AlwaysOnlineAPI.AlwaysOnlineGetResponse;
  export import AlwaysOnlineUpdateParams = AlwaysOnlineAPI.AlwaysOnlineUpdateParams;
}
