// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HotlinkProtectionAPI from 'cloudflare/resources/settings/hotlink-protection';

export class HotlinkProtection extends APIResource {
  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  edit(
    params: HotlinkProtectionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HotlinkProtectionEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/hotlink_protection`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HotlinkProtectionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  get(
    params: HotlinkProtectionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HotlinkProtectionGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/hotlink_protection`, options) as Core.APIPromise<{
        result: HotlinkProtectionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When enabled, the Hotlink Protection option ensures that other sites cannot suck
 * up your bandwidth by building pages that use images hosted on your site. Anytime
 * a request for an image on your site hits Cloudflare, we check to ensure that
 * it's not another site requesting them. People will still be able to download and
 * view images from your page, but other sites won't be able to steal them for use
 * on their own pages.
 * (https://support.cloudflare.com/hc/en-us/articles/200170026).
 */
export interface HotlinkProtectionEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'hotlink_protection';

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
 * When enabled, the Hotlink Protection option ensures that other sites cannot suck
 * up your bandwidth by building pages that use images hosted on your site. Anytime
 * a request for an image on your site hits Cloudflare, we check to ensure that
 * it's not another site requesting them. People will still be able to download and
 * view images from your page, but other sites won't be able to steal them for use
 * on their own pages.
 * (https://support.cloudflare.com/hc/en-us/articles/200170026).
 */
export interface HotlinkProtectionGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'hotlink_protection';

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

export interface HotlinkProtectionEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface HotlinkProtectionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace HotlinkProtection {
  export import HotlinkProtectionEditResponse = HotlinkProtectionAPI.HotlinkProtectionEditResponse;
  export import HotlinkProtectionGetResponse = HotlinkProtectionAPI.HotlinkProtectionGetResponse;
  export import HotlinkProtectionEditParams = HotlinkProtectionAPI.HotlinkProtectionEditParams;
  export import HotlinkProtectionGetParams = HotlinkProtectionAPI.HotlinkProtectionGetParams;
}
