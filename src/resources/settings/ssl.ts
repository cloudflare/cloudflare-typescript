// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SSLAPI from 'cloudflare/resources/settings/ssl';

export class SSL extends APIResource {
  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  edit(params: SSLEditParams, options?: Core.RequestOptions): Core.APIPromise<SSLEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/ssl`, { body, ...options }) as Core.APIPromise<{
        result: SSLEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  get(params: SSLGetParams, options?: Core.RequestOptions): Core.APIPromise<SSLGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/ssl`, options) as Core.APIPromise<{
        result: SSLGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * SSL encrypts your visitor's connection and safeguards credit card numbers and
 * other personal data to and from your website. SSL can take up to 5 minutes to
 * fully activate. Requires Cloudflare active on your root domain or www domain.
 * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
 * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
 * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
 * your web server. You don't need to have an SSL cert on your web server, but your
 * vistors will still see the site as being HTTPS enabled. Full: SSL between the
 * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
 * Cloudflare and your web server. You'll need to have your own SSL cert or
 * self-signed cert at the very least. Full (Strict): SSL between the visitor and
 * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
 * your web server. You'll need to have a valid SSL certificate installed on your
 * web server. This certificate must be signed by a certificate authority, have an
 * expiration date in the future, and respond for the request domain name
 * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
 */
export interface SSLEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'ssl';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'flexible' | 'full' | 'strict';

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
 * SSL encrypts your visitor's connection and safeguards credit card numbers and
 * other personal data to and from your website. SSL can take up to 5 minutes to
 * fully activate. Requires Cloudflare active on your root domain or www domain.
 * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
 * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
 * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
 * your web server. You don't need to have an SSL cert on your web server, but your
 * vistors will still see the site as being HTTPS enabled. Full: SSL between the
 * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
 * Cloudflare and your web server. You'll need to have your own SSL cert or
 * self-signed cert at the very least. Full (Strict): SSL between the visitor and
 * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
 * your web server. You'll need to have a valid SSL certificate installed on your
 * web server. This certificate must be signed by a certificate authority, have an
 * expiration date in the future, and respond for the request domain name
 * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
 */
export interface SSLGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'ssl';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'flexible' | 'full' | 'strict';

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

export interface SSLEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting. Notes: Depends on the zone's plan level
   */
  value: 'off' | 'flexible' | 'full' | 'strict';
}

export interface SSLGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SSL {
  export import SSLEditResponse = SSLAPI.SSLEditResponse;
  export import SSLGetResponse = SSLAPI.SSLGetResponse;
  export import SSLEditParams = SSLAPI.SSLEditParams;
  export import SSLGetParams = SSLAPI.SSLGetParams;
}
