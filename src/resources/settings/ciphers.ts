// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CiphersAPI from 'cloudflare/resources/settings/ciphers';

export class Ciphers extends APIResource {
  /**
   * Changes ciphers setting.
   */
  edit(params: CipherEditParams, options?: Core.RequestOptions): Core.APIPromise<CipherEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/ciphers`, { body, ...options }) as Core.APIPromise<{
        result: CipherEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets ciphers setting.
   */
  get(params: CipherGetParams, options?: Core.RequestOptions): Core.APIPromise<CipherGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/ciphers`, options) as Core.APIPromise<{
        result: CipherGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * An allowlist of ciphers for TLS termination. These ciphers must be in the
 * BoringSSL format.
 */
export interface CipherEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'ciphers';

  /**
   * Current value of the zone setting.
   */
  value: Array<string>;

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
 * An allowlist of ciphers for TLS termination. These ciphers must be in the
 * BoringSSL format.
 */
export interface CipherGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'ciphers';

  /**
   * Current value of the zone setting.
   */
  value: Array<string>;

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

export interface CipherEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: Array<string>;
}

export interface CipherGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Ciphers {
  export import CipherEditResponse = CiphersAPI.CipherEditResponse;
  export import CipherGetResponse = CiphersAPI.CipherGetResponse;
  export import CipherEditParams = CiphersAPI.CipherEditParams;
  export import CipherGetParams = CiphersAPI.CipherGetParams;
}
