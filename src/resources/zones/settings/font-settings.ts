// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as FontSettingsAPI from './font-settings';

export class FontSettings extends APIResource {
  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  edit(params: FontSettingEditParams, options?: Core.RequestOptions): Core.APIPromise<FontSettings> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/fonts`, { body, ...options }) as Core.APIPromise<{
        result: FontSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  get(params: FontSettingGetParams, options?: Core.RequestOptions): Core.APIPromise<FontSettings> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/fonts`, options) as Core.APIPromise<{
        result: FontSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
 * Hosted fonts from your own domain, boost performance, and enhance user privacy.
 * Refer to the Cloudflare Fonts documentation for more information.
 */
export interface FontSettings {
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

export interface FontSettingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether the feature is enabled or disabled.
   */
  value: 'on' | 'off';
}

export interface FontSettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace FontSettings {
  export import FontSettings = FontSettingsAPI.FontSettings;
  export import FontSettingEditParams = FontSettingsAPI.FontSettingEditParams;
  export import FontSettingGetParams = FontSettingsAPI.FontSettingGetParams;
}
