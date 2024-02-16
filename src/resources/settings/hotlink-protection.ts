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
  update(
    zoneId: string,
    body: HotlinkProtectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HotlinkProtectionUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/hotlink_protection`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HotlinkProtectionUpdateResponse }>
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
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HotlinkProtectionGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/hotlink_protection`, options) as Core.APIPromise<{
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
export interface HotlinkProtectionUpdateResponse {
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

export interface HotlinkProtectionUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace HotlinkProtection {
  export import HotlinkProtectionUpdateResponse = HotlinkProtectionAPI.HotlinkProtectionUpdateResponse;
  export import HotlinkProtectionGetResponse = HotlinkProtectionAPI.HotlinkProtectionGetResponse;
  export import HotlinkProtectionUpdateParams = HotlinkProtectionAPI.HotlinkProtectionUpdateParams;
}
