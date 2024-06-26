// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IPGeolocationAPI from './ip-geolocation';

export class IPGeolocationResource extends APIResource {}

/**
 * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
 * pass the country code to you.
 * (https://support.cloudflare.com/hc/en-us/articles/200168236).
 */
export interface IPGeolocation {
  /**
   * ID of the zone setting.
   */
  id: 'ip_geolocation';

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

export namespace IPGeolocationResource {
  export import IPGeolocation = IPGeolocationAPI.IPGeolocation;
}
