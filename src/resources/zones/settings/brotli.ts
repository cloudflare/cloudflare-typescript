// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as BrotliAPI from './brotli';

export class BrotliResource extends APIResource {
  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  edit(params: BrotliEditParams, options?: Core.RequestOptions): Core.APIPromise<Brotli> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/brotli`, { body, ...options }) as Core.APIPromise<{
        result: Brotli;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  get(params: BrotliGetParams, options?: Core.RequestOptions): Core.APIPromise<Brotli> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/brotli`, options) as Core.APIPromise<{ result: Brotli }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When the client requesting an asset supports the Brotli compression algorithm,
 * Cloudflare will serve a Brotli compressed version of the asset.
 */
export interface Brotli {
  /**
   * ID of the zone setting.
   */
  id: 'brotli';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';

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

export interface BrotliEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'off' | 'on';
}

export interface BrotliGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace BrotliResource {
  export import Brotli = BrotliAPI.Brotli;
  export import BrotliEditParams = BrotliAPI.BrotliEditParams;
  export import BrotliGetParams = BrotliAPI.BrotliGetParams;
}
