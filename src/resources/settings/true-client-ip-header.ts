// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TrueClientIPHeaderAPI from 'cloudflare/resources/settings/true-client-ip-header';

export class TrueClientIPHeader extends APIResource {
  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  update(
    zoneId: string,
    body: TrueClientIPHeaderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrueClientIPHeaderUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/true_client_ip_header`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TrueClientIPHeaderUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<TrueClientIPHeaderGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/true_client_ip_header`, options) as Core.APIPromise<{
        result: TrueClientIPHeaderGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Allows customer to continue to use True Client IP (Akamai feature) in the
 * headers we send to the origin. This is limited to Enterprise Zones.
 */
export interface TrueClientIPHeaderUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'true_client_ip_header';

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
 * Allows customer to continue to use True Client IP (Akamai feature) in the
 * headers we send to the origin. This is limited to Enterprise Zones.
 */
export interface TrueClientIPHeaderGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'true_client_ip_header';

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

export interface TrueClientIPHeaderUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace TrueClientIPHeader {
  export import TrueClientIPHeaderUpdateResponse = TrueClientIPHeaderAPI.TrueClientIPHeaderUpdateResponse;
  export import TrueClientIPHeaderGetResponse = TrueClientIPHeaderAPI.TrueClientIPHeaderGetResponse;
  export import TrueClientIPHeaderUpdateParams = TrueClientIPHeaderAPI.TrueClientIPHeaderUpdateParams;
}
