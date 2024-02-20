// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/ssl/universal/settings';

export class Settings extends APIResource {
  /**
   * Patch Universal SSL Settings for a Zone.
   */
  edit(
    zoneId: string,
    body: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/ssl/universal/settings`, { body, ...options }) as Core.APIPromise<{
        result: SettingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Universal SSL Settings for a Zone.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/ssl/universal/settings`, options) as Core.APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditResponse {
  /**
   * Disabling Universal SSL removes any currently active Universal SSL certificates
   * for your zone from the edge and prevents any future Universal SSL certificates
   * from being ordered. If there are no advanced certificates or custom certificates
   * uploaded for the domain, visitors will be unable to access the domain over
   * HTTPS.
   *
   * By disabling Universal SSL, you understand that the following Cloudflare
   * settings and preferences will result in visitors being unable to visit your
   * domain unless you have uploaded a custom certificate or purchased an advanced
   * certificate.
   *
   * - HSTS
   * - Always Use HTTPS
   * - Opportunistic Encryption
   * - Onion Routing
   * - Any Page Rules redirecting traffic to HTTPS
   *
   * Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy
   * is enabled will result in users being unable to visit your site without a valid
   * certificate at Cloudflare's edge.
   *
   * If you do not have a valid custom or advanced certificate at Cloudflare's edge
   * and are unsure if any of the above Cloudflare settings are enabled, or if any
   * HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for
   * your domain.
   */
  enabled?: boolean;
}

export interface SettingGetResponse {
  /**
   * Disabling Universal SSL removes any currently active Universal SSL certificates
   * for your zone from the edge and prevents any future Universal SSL certificates
   * from being ordered. If there are no advanced certificates or custom certificates
   * uploaded for the domain, visitors will be unable to access the domain over
   * HTTPS.
   *
   * By disabling Universal SSL, you understand that the following Cloudflare
   * settings and preferences will result in visitors being unable to visit your
   * domain unless you have uploaded a custom certificate or purchased an advanced
   * certificate.
   *
   * - HSTS
   * - Always Use HTTPS
   * - Opportunistic Encryption
   * - Onion Routing
   * - Any Page Rules redirecting traffic to HTTPS
   *
   * Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy
   * is enabled will result in users being unable to visit your site without a valid
   * certificate at Cloudflare's edge.
   *
   * If you do not have a valid custom or advanced certificate at Cloudflare's edge
   * and are unsure if any of the above Cloudflare settings are enabled, or if any
   * HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for
   * your domain.
   */
  enabled?: boolean;
}

export interface SettingEditParams {
  /**
   * Disabling Universal SSL removes any currently active Universal SSL certificates
   * for your zone from the edge and prevents any future Universal SSL certificates
   * from being ordered. If there are no advanced certificates or custom certificates
   * uploaded for the domain, visitors will be unable to access the domain over
   * HTTPS.
   *
   * By disabling Universal SSL, you understand that the following Cloudflare
   * settings and preferences will result in visitors being unable to visit your
   * domain unless you have uploaded a custom certificate or purchased an advanced
   * certificate.
   *
   * - HSTS
   * - Always Use HTTPS
   * - Opportunistic Encryption
   * - Onion Routing
   * - Any Page Rules redirecting traffic to HTTPS
   *
   * Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy
   * is enabled will result in users being unable to visit your site without a valid
   * certificate at Cloudflare's edge.
   *
   * If you do not have a valid custom or advanced certificate at Cloudflare's edge
   * and are unsure if any of the above Cloudflare settings are enabled, or if any
   * HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for
   * your domain.
   */
  enabled?: boolean;
}

export namespace Settings {
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
}
