// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPV6API from 'cloudflare/resources/settings/ipv6';

export class IPV6 extends APIResource {
  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  edit(
    zoneId: string,
    body: IPV6EditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPV6EditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/ipv6`, { body, ...options }) as Core.APIPromise<{
        result: IPV6EditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<IPV6GetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/ipv6`, options) as Core.APIPromise<{
        result: IPV6GetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enable IPv6 on all subdomains that are Cloudflare enabled.
 * (https://support.cloudflare.com/hc/en-us/articles/200168586).
 */
export interface IPV6EditResponse {
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

/**
 * Enable IPv6 on all subdomains that are Cloudflare enabled.
 * (https://support.cloudflare.com/hc/en-us/articles/200168586).
 */
export interface IPV6GetResponse {
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
   * Value of the zone setting.
   */
  value: 'off' | 'on';
}

export namespace IPV6 {
  export import IPV6EditResponse = IPV6API.IPV6EditResponse;
  export import IPV6GetResponse = IPV6API.IPV6GetResponse;
  export import IPV6EditParams = IPV6API.IPV6EditParams;
}
