// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PseudoIPV4API from 'cloudflare/resources/settings/pseudo-ipv4';

export class PseudoIPV4 extends APIResource {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  edit(
    zoneId: string,
    body: PseudoIPV4EditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PseudoIPV4EditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/pseudo_ipv4`, { body, ...options }) as Core.APIPromise<{
        result: PseudoIPV4EditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Value of the Pseudo IPv4 setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PseudoIPV4GetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/pseudo_ipv4`, options) as Core.APIPromise<{
        result: PseudoIPV4GetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The value set for the Pseudo IPv4 setting.
 */
export interface PseudoIPV4EditResponse {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  id: 'pseudo_ipv4';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'add_header' | 'overwrite_header';

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
 * The value set for the Pseudo IPv4 setting.
 */
export interface PseudoIPV4GetResponse {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  id: 'pseudo_ipv4';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'add_header' | 'overwrite_header';

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

export interface PseudoIPV4EditParams {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  value: 'off' | 'add_header' | 'overwrite_header';
}

export namespace PseudoIPV4 {
  export import PseudoIPV4EditResponse = PseudoIPV4API.PseudoIPV4EditResponse;
  export import PseudoIPV4GetResponse = PseudoIPV4API.PseudoIPV4GetResponse;
  export import PseudoIPV4EditParams = PseudoIPV4API.PseudoIPV4EditParams;
}
