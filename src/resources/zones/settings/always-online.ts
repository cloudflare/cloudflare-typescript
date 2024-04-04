// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AlwaysOnlineAPI from 'cloudflare/resources/zones/settings/always-online';

export class AlwaysOnlineResource extends APIResource {
  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  edit(params: AlwaysOnlineEditParams, options?: Core.RequestOptions): Core.APIPromise<AlwaysOnline> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/always_online`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AlwaysOnline }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  get(params: AlwaysOnlineGetParams, options?: Core.RequestOptions): Core.APIPromise<AlwaysOnline> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/always_online`, options) as Core.APIPromise<{
        result: AlwaysOnline;
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
export interface AlwaysOnline {
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

export interface AlwaysOnlineEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface AlwaysOnlineGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace AlwaysOnlineResource {
  export import AlwaysOnline = AlwaysOnlineAPI.AlwaysOnline;
  export import AlwaysOnlineEditParams = AlwaysOnlineAPI.AlwaysOnlineEditParams;
  export import AlwaysOnlineGetParams = AlwaysOnlineAPI.AlwaysOnlineGetParams;
}
