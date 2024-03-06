// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PseudoIPV4API from 'cloudflare/resources/zones/settings/pseudo-ipv4';

export class PseudoIPV4 extends APIResource {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  edit(params: PseudoIPV4EditParams, options?: Core.RequestOptions): Core.APIPromise<PseudoIPV4EditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/pseudo_ipv4`, { body, ...options }) as Core.APIPromise<{
        result: PseudoIPV4EditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Value of the Pseudo IPv4 setting.
   */
  get(params: PseudoIPV4GetParams, options?: Core.RequestOptions): Core.APIPromise<PseudoIPV4GetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/pseudo_ipv4`, options) as Core.APIPromise<{
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the Pseudo IPv4 setting.
   */
  value: 'off' | 'add_header' | 'overwrite_header';
}

export interface PseudoIPV4GetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace PseudoIPV4 {
  export import PseudoIPV4EditResponse = PseudoIPV4API.PseudoIPV4EditResponse;
  export import PseudoIPV4GetResponse = PseudoIPV4API.PseudoIPV4GetResponse;
  export import PseudoIPV4EditParams = PseudoIPV4API.PseudoIPV4EditParams;
  export import PseudoIPV4GetParams = PseudoIPV4API.PseudoIPV4GetParams;
}
