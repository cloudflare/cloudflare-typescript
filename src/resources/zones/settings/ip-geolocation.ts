// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPGeolocationAPI from 'cloudflare/resources/zones/settings/ip-geolocation';

export class IPGeolocation extends APIResource {
  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  edit(
    params: IPGeolocationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPGeolocationEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/ip_geolocation`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IPGeolocationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  get(
    params: IPGeolocationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPGeolocationGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/ip_geolocation`, options) as Core.APIPromise<{
        result: IPGeolocationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
 * pass the country code to you.
 * (https://support.cloudflare.com/hc/en-us/articles/200168236).
 */
export interface IPGeolocationEditResponse {
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

/**
 * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
 * pass the country code to you.
 * (https://support.cloudflare.com/hc/en-us/articles/200168236).
 */
export interface IPGeolocationGetResponse {
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

export interface IPGeolocationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface IPGeolocationGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace IPGeolocation {
  export import IPGeolocationEditResponse = IPGeolocationAPI.IPGeolocationEditResponse;
  export import IPGeolocationGetResponse = IPGeolocationAPI.IPGeolocationGetResponse;
  export import IPGeolocationEditParams = IPGeolocationAPI.IPGeolocationEditParams;
  export import IPGeolocationGetParams = IPGeolocationAPI.IPGeolocationGetParams;
}
