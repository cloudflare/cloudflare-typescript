// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as TrueClientIPHeaderAPI from './true-client-ip-header';

export class TrueClientIPHeaderResource extends APIResource {
  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  edit(
    params: TrueClientIPHeaderEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrueClientIPHeader> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/true_client_ip_header`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TrueClientIPHeader }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  get(
    params: TrueClientIPHeaderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrueClientIPHeader> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/true_client_ip_header`, options) as Core.APIPromise<{
        result: TrueClientIPHeader;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Allows customer to continue to use True Client IP (Akamai feature) in the
 * headers we send to the origin. This is limited to Enterprise Zones.
 */
export interface TrueClientIPHeader {
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

export interface TrueClientIPHeaderEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface TrueClientIPHeaderGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TrueClientIPHeaderResource {
  export import TrueClientIPHeader = TrueClientIPHeaderAPI.TrueClientIPHeader;
  export import TrueClientIPHeaderEditParams = TrueClientIPHeaderAPI.TrueClientIPHeaderEditParams;
  export import TrueClientIPHeaderGetParams = TrueClientIPHeaderAPI.TrueClientIPHeaderGetParams;
}
