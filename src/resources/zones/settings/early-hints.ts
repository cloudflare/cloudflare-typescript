// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EarlyHintsAPI from 'cloudflare/resources/zones/settings/early-hints';

export class EarlyHints extends APIResource {
  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  edit(params: EarlyHintEditParams, options?: Core.RequestOptions): Core.APIPromise<ZonesEarlyHints> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/early_hints`, { body, ...options }) as Core.APIPromise<{
        result: ZonesEarlyHints;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  get(params: EarlyHintGetParams, options?: Core.RequestOptions): Core.APIPromise<ZonesEarlyHints> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/early_hints`, options) as Core.APIPromise<{
        result: ZonesEarlyHints;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When enabled, Cloudflare will attempt to speed up overall page loads by serving
 * `103` responses with `Link` headers from the final response. Refer to
 * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
 * more information.
 */
export interface ZonesEarlyHints {
  /**
   * ID of the zone setting.
   */
  id: 'early_hints';

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

export interface EarlyHintEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface EarlyHintGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace EarlyHints {
  export import ZonesEarlyHints = EarlyHintsAPI.ZonesEarlyHints;
  export import EarlyHintEditParams = EarlyHintsAPI.EarlyHintEditParams;
  export import EarlyHintGetParams = EarlyHintsAPI.EarlyHintGetParams;
}
