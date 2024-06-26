// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AlwaysOnlineAPI from './always-online';

export class AlwaysOnlineResource extends APIResource {}

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

export namespace AlwaysOnlineResource {
  export import AlwaysOnline = AlwaysOnlineAPI.AlwaysOnline;
}
