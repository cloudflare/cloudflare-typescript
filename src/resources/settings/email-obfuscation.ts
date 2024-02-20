// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EmailObfuscationAPI from 'cloudflare/resources/settings/email-obfuscation';

export class EmailObfuscation extends APIResource {
  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  edit(
    zoneId: string,
    body: EmailObfuscationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailObfuscationEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/email_obfuscation`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EmailObfuscationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<EmailObfuscationGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/email_obfuscation`, options) as Core.APIPromise<{
        result: EmailObfuscationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Encrypt email adresses on your web page from bots, while keeping them visible to
 * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
 */
export interface EmailObfuscationEditResponse {
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

/**
 * Encrypt email adresses on your web page from bots, while keeping them visible to
 * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
 */
export interface EmailObfuscationGetResponse {
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
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace EmailObfuscation {
  export import EmailObfuscationEditResponse = EmailObfuscationAPI.EmailObfuscationEditResponse;
  export import EmailObfuscationGetResponse = EmailObfuscationAPI.EmailObfuscationGetResponse;
  export import EmailObfuscationEditParams = EmailObfuscationAPI.EmailObfuscationEditParams;
}
