// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EmailObfuscationAPI from 'cloudflare/resources/zones/settings/email-obfuscation';

export class EmailObfuscation extends APIResource {
  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  edit(
    params: EmailObfuscationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingEmailObfuscation> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/email_obfuscation`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneSettingEmailObfuscation }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  get(
    params: EmailObfuscationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingEmailObfuscation> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/email_obfuscation`, options) as Core.APIPromise<{
        result: ZoneSettingEmailObfuscation;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Encrypt email adresses on your web page from bots, while keeping them visible to
 * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
 */
export interface ZoneSettingEmailObfuscation {
  /**
   * ID of the zone setting.
   */
  id: 'email_obfuscation';

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

export interface EmailObfuscationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface EmailObfuscationGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace EmailObfuscation {
  export import ZoneSettingEmailObfuscation = EmailObfuscationAPI.ZoneSettingEmailObfuscation;
  export import EmailObfuscationEditParams = EmailObfuscationAPI.EmailObfuscationEditParams;
  export import EmailObfuscationGetParams = EmailObfuscationAPI.EmailObfuscationGetParams;
}
