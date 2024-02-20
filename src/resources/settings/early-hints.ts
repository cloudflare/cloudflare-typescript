// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EarlyHintsAPI from 'cloudflare/resources/settings/early-hints';

export class EarlyHints extends APIResource {
  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  update(
    zoneId: string,
    body: EarlyHintUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EarlyHintUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/early_hints`, { body, ...options }) as Core.APIPromise<{
        result: EarlyHintUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<EarlyHintGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/early_hints`, options) as Core.APIPromise<{
        result: EarlyHintGetResponse;
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
export interface EarlyHintUpdateResponse {
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

/**
 * When enabled, Cloudflare will attempt to speed up overall page loads by serving
 * `103` responses with `Link` headers from the final response. Refer to
 * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
 * more information.
 */
export interface EarlyHintGetResponse {
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

export interface EarlyHintUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace EarlyHints {
  export import EarlyHintUpdateResponse = EarlyHintsAPI.EarlyHintUpdateResponse;
  export import EarlyHintGetResponse = EarlyHintsAPI.EarlyHintGetResponse;
  export import EarlyHintUpdateParams = EarlyHintsAPI.EarlyHintUpdateParams;
}
