// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProxyReadTimeoutAPI from 'cloudflare/resources/zones/settings/proxy-read-timeout';

export class ProxyReadTimeout extends APIResource {
  /**
   * Maximum time between two read operations from origin.
   */
  edit(
    params: ProxyReadTimeoutEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZonesProxyReadTimeout> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/proxy_read_timeout`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZonesProxyReadTimeout }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Maximum time between two read operations from origin.
   */
  get(
    params: ProxyReadTimeoutGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZonesProxyReadTimeout> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/proxy_read_timeout`, options) as Core.APIPromise<{
        result: ZonesProxyReadTimeout;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Maximum time between two read operations from origin.
 */
export interface ZonesProxyReadTimeout {
  /**
   * ID of the zone setting.
   */
  id: 'proxy_read_timeout';

  /**
   * Current value of the zone setting.
   */
  value: number;

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

export interface ProxyReadTimeoutEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Maximum time between two read operations from origin.
   */
  value: ZonesProxyReadTimeout;
}

export interface ProxyReadTimeoutGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ProxyReadTimeout {
  export import ZonesProxyReadTimeout = ProxyReadTimeoutAPI.ZonesProxyReadTimeout;
  export import ProxyReadTimeoutEditParams = ProxyReadTimeoutAPI.ProxyReadTimeoutEditParams;
  export import ProxyReadTimeoutGetParams = ProxyReadTimeoutAPI.ProxyReadTimeoutGetParams;
}
