// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefetchPreloadAPI from 'cloudflare/resources/settings/prefetch-preload';

export class PrefetchPreload extends APIResource {
  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  update(
    zoneId: string,
    body: PrefetchPreloadUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefetchPreloadUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/prefetch_preload`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefetchPreloadUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PrefetchPreloadGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/prefetch_preload`, options) as Core.APIPromise<{
        result: PrefetchPreloadGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Cloudflare will prefetch any URLs that are included in the response headers.
 * This is limited to Enterprise Zones.
 */
export interface PrefetchPreloadUpdateResponse {
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

export interface PrefetchPreloadUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace PrefetchPreload {
  export import PrefetchPreloadUpdateResponse = PrefetchPreloadAPI.PrefetchPreloadUpdateResponse;
  export import PrefetchPreloadGetResponse = PrefetchPreloadAPI.PrefetchPreloadGetResponse;
  export import PrefetchPreloadUpdateParams = PrefetchPreloadAPI.PrefetchPreloadUpdateParams;
}
