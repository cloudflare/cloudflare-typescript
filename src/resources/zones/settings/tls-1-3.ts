// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TLS1_3API from './tls-1-3';

export class TLS1_3Resource extends APIResource {
  /**
   * Changes TLS 1.3 setting.
   */
  edit(params: TLS1_3EditParams, options?: Core.RequestOptions): Core.APIPromise<TLS1_3> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/tls_1_3`, { body, ...options }) as Core.APIPromise<{
        result: TLS1_3;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets TLS 1.3 setting enabled for a zone.
   */
  get(params: TLS1_3GetParams, options?: Core.RequestOptions): Core.APIPromise<TLS1_3> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/tls_1_3`, options) as Core.APIPromise<{ result: TLS1_3 }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enables Crypto TLS 1.3 feature for a zone.
 */
export interface TLS1_3 {
  /**
   * ID of the zone setting.
   */
  id: 'tls_1_3';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off' | 'zrt';

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

export interface TLS1_3EditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting. Notes: Default value depends on the
   * zone's plan level.
   */
  value: 'on' | 'off' | 'zrt';
}

export interface TLS1_3GetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TLS1_3Resource {
  export import TLS1_3 = TLS1_3API.TLS1_3;
  export import TLS1_3EditParams = TLS1_3API.TLS1_3EditParams;
  export import TLS1_3GetParams = TLS1_3API.TLS1_3GetParams;
}
