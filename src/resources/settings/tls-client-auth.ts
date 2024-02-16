// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TLSClientAuthAPI from 'cloudflare/resources/settings/tls-client-auth';

export class TLSClientAuth extends APIResource {
  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  update(
    zoneId: string,
    body: TLSClientAuthUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSClientAuthUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/tls_client_auth`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TLSClientAuthUpdateResponse }>
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
export interface TLSClientAuthUpdateResponse {
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

export interface TLSClientAuthUpdateParams {
  /**
   * value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace TLSClientAuth {
  export import TLSClientAuthUpdateResponse = TLSClientAuthAPI.TLSClientAuthUpdateResponse;
  export import TLSClientAuthGetResponse = TLSClientAuthAPI.TLSClientAuthGetResponse;
  export import TLSClientAuthUpdateParams = TLSClientAuthAPI.TLSClientAuthUpdateParams;
}
