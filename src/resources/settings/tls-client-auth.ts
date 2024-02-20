// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TLSClientAuthAPI from 'cloudflare/resources/settings/tls-client-auth';

export class TLSClientAuth extends APIResource {
  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  edit(
    zoneId: string,
    body: TLSClientAuthEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSClientAuthEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/tls_client_auth`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TLSClientAuthEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<TLSClientAuthGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/tls_client_auth`, options) as Core.APIPromise<{
        result: TLSClientAuthGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * TLS Client Auth requires Cloudflare to connect to your origin server using a
 * client certificate (Enterprise Only).
 */
export interface TLSClientAuthEditResponse {
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

/**
 * TLS Client Auth requires Cloudflare to connect to your origin server using a
 * client certificate (Enterprise Only).
 */
export interface TLSClientAuthGetResponse {
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
   * value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace TLSClientAuth {
  export import TLSClientAuthEditResponse = TLSClientAuthAPI.TLSClientAuthEditResponse;
  export import TLSClientAuthGetResponse = TLSClientAuthAPI.TLSClientAuthGetResponse;
  export import TLSClientAuthEditParams = TLSClientAuthAPI.TLSClientAuthEditParams;
}
