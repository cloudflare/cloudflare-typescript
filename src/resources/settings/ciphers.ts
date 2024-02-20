// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CiphersAPI from 'cloudflare/resources/settings/ciphers';

export class Ciphers extends APIResource {
  /**
   * Changes ciphers setting.
   */
  edit(
    zoneId: string,
    body: CipherEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CipherEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/ciphers`, { body, ...options }) as Core.APIPromise<{
        result: CipherEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets ciphers setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CipherGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/ciphers`, options) as Core.APIPromise<{
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
   * Value of the zone setting.
   */
  value: Array<string>;
}

export namespace Ciphers {
  export import CipherEditResponse = CiphersAPI.CipherEditResponse;
  export import CipherGetResponse = CiphersAPI.CipherGetResponse;
  export import CipherEditParams = CiphersAPI.CipherEditParams;
}
