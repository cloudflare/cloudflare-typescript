// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TLSClientAuthAPI from 'cloudflare/resources/zones/settings/tls-client-auth';

export class TLSClientAuth extends APIResource {
  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  edit(
    params: TLSClientAuthEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingTLSClientAuth> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/tls_client_auth`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneSettingTLSClientAuth }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  get(
    params: TLSClientAuthGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingTLSClientAuth> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/tls_client_auth`, options) as Core.APIPromise<{
        result: ZoneSettingTLSClientAuth;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * TLS Client Auth requires Cloudflare to connect to your origin server using a
 * client certificate (Enterprise Only).
 */
export interface ZoneSettingTLSClientAuth {
  /**
   * ID of the zone setting.
   */
  id: 'tls_client_auth';

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

export interface TLSClientAuthEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface TLSClientAuthGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TLSClientAuth {
  export import ZoneSettingTLSClientAuth = TLSClientAuthAPI.ZoneSettingTLSClientAuth;
  export import TLSClientAuthEditParams = TLSClientAuthAPI.TLSClientAuthEditParams;
  export import TLSClientAuthGetParams = TLSClientAuthAPI.TLSClientAuthGetParams;
}
