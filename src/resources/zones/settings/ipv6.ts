// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as IPV6API from './ipv6';

export class IPV6Resource extends APIResource {
  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  edit(params: IPV6EditParams, options?: Core.RequestOptions): Core.APIPromise<IPV6> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/ipv6`, { body, ...options }) as Core.APIPromise<{
        result: IPV6;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  get(params: IPV6GetParams, options?: Core.RequestOptions): Core.APIPromise<IPV6> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/ipv6`, options) as Core.APIPromise<{ result: IPV6 }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enable IPv6 on all subdomains that are Cloudflare enabled.
 * (https://support.cloudflare.com/hc/en-us/articles/200168586).
 */
export interface IPV6 {
  /**
   * ID of the zone setting.
   */
  id: 'ipv6';

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

export interface IPV6EditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'off' | 'on';
}

export interface IPV6GetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace IPV6Resource {
  export import IPV6 = IPV6API.IPV6;
  export import IPV6EditParams = IPV6API.IPV6EditParams;
  export import IPV6GetParams = IPV6API.IPV6GetParams;
}
