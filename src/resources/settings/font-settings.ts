// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FontSettingsAPI from 'cloudflare/resources/settings/font-settings';

export class FontSettings extends APIResource {
  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  update(
    zoneId: string,
    body: FontSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FontSettingUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/fonts`, { body, ...options }) as Core.APIPromise<{
        result: FontSettingUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<FontSettingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/fonts`, options) as Core.APIPromise<{
        result: FontSettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
 * Hosted fonts from your own domain, boost performance, and enhance user privacy.
 * Refer to the Cloudflare Fonts documentation for more information.
 */
export interface FontSettingUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'fonts';

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
 * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
 * Hosted fonts from your own domain, boost performance, and enhance user privacy.
 * Refer to the Cloudflare Fonts documentation for more information.
 */
export interface FontSettingGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'fonts';

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

export interface FontSettingUpdateParams {
  /**
   * Whether the feature is enabled or disabled.
   */
  value: 'on' | 'off';
}

export namespace FontSettings {
  export import FontSettingUpdateResponse = FontSettingsAPI.FontSettingUpdateResponse;
  export import FontSettingGetResponse = FontSettingsAPI.FontSettingGetResponse;
  export import FontSettingUpdateParams = FontSettingsAPI.FontSettingUpdateParams;
}
