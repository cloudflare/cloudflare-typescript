// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefetchPreloadAPI from 'cloudflare/resources/settings/prefetch-preload';

export class PrefetchPreload extends APIResource {
  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  edit(
    params: PrefetchPreloadEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefetchPreloadEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/prefetch_preload`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefetchPreloadEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  get(
    params: PrefetchPreloadGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefetchPreloadGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/prefetch_preload`, options) as Core.APIPromise<{
        result: PrefetchPreloadGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Cloudflare will prefetch any URLs that are included in the response headers.
 * This is limited to Enterprise Zones.
 */
export interface PrefetchPreloadEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'prefetch_preload';

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

/**
 * Cloudflare will prefetch any URLs that are included in the response headers.
 * This is limited to Enterprise Zones.
 */
export interface PrefetchPreloadGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'prefetch_preload';

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

export interface PrefetchPreloadEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface PrefetchPreloadGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace PrefetchPreload {
  export import PrefetchPreloadEditResponse = PrefetchPreloadAPI.PrefetchPreloadEditResponse;
  export import PrefetchPreloadGetResponse = PrefetchPreloadAPI.PrefetchPreloadGetResponse;
  export import PrefetchPreloadEditParams = PrefetchPreloadAPI.PrefetchPreloadEditParams;
  export import PrefetchPreloadGetParams = PrefetchPreloadAPI.PrefetchPreloadGetParams;
}
