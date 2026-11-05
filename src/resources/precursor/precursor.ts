// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePrecursor extends APIResource {
  static override readonly _key: readonly ['precursor'] = Object.freeze(['precursor'] as const);

  /**
   * Updates the Precursor configuration for a zone.
   *
   * `mode` controls whether Precursor detection is off, monitoring, or armed.
   * `show_interstitial` controls the zone-level response when armed. `rules` is the
   * ordered list of overrides for matching requests.
   *
   * This is a partial update: only the fields present in the request body are
   * changed.
   *
   * - Sending an empty array (`[]`) clears all rules.
   * - At least one of `mode`, `show_interstitial`, or `rules` must be present; an
   *   empty body (`{}`) is rejected with `400`.
   * - Rule `id` is read-only (assigned by Cloudflare) and ignored on input.
   * - Rule `show_interstitial` is required and controls the response for requests
   *   that match that rule.
   * - Rule `expression` is limited to 4000 characters. The limit applies to each
   *   rule individually, not to the combined size of all rules.
   *
   * @example
   * ```ts
   * const precursorConfig = await client.precursor.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   mode: 'monitor',
   * });
   * ```
   */
  update(params: PrecursorUpdateParams, options?: RequestOptions): APIPromise<PrecursorConfig> {
    const { zone_id, 'Cloudflare-Version': cloudflareVersion = '1.0', ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/precursor`, {
        body,
        ...options,
        headers: buildHeaders([
          { 'Cloudflare-Version': cloudflareVersion != null ? cloudflareVersion.toString() : '1.0' },
          options?.headers,
        ]),
      }) as APIPromise<{ result: PrecursorConfig }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a zone's Precursor configuration: the detection `mode`, whether to
   * `show_interstitial`, and the ordered list of `rules`.
   *
   * @example
   * ```ts
   * const precursorConfig = await client.precursor.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: PrecursorGetParams, options?: RequestOptions): APIPromise<PrecursorConfig> {
    const { zone_id, 'Cloudflare-Version': cloudflareVersion = '1.0' } = params;
    return (
      this._client.get(path`/zones/${zone_id}/precursor`, {
        ...options,
        headers: buildHeaders([
          { 'Cloudflare-Version': cloudflareVersion != null ? cloudflareVersion.toString() : '1.0' },
          options?.headers,
        ]),
      }) as APIPromise<{ result: PrecursorConfig }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Precursor extends BasePrecursor {}

export interface PrecursorConfig {
  /**
   * Controls Precursor detection for the zone. `off` disables detection, `monitor`
   * records detections without affecting bot scores, and `arm` allows detections to
   * affect bot scores.
   */
  mode?: 'off' | 'monitor' | 'arm';

  /**
   * The ordered list of Precursor rules for the zone.
   */
  rules?: Array<PrecursorConfig.Rule>;

  /**
   * Whether Precursor shows an interstitial when it takes action on a request.
   */
  show_interstitial?: boolean;
}

export namespace PrecursorConfig {
  export interface Rule {
    /**
     * The filter expression that determines which requests the rule matches.
     */
    expression: string;

    /**
     * Whether Precursor shows an interstitial when it takes action on a request.
     */
    show_interstitial: boolean;

    /**
     * The read-only identifier that Cloudflare assigns to the rule.
     */
    id?: string;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule is active.
     */
    enabled?: boolean;
  }
}

export interface PrecursorUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Header param: Selects the split Precursor API schema.
   */
  'Cloudflare-Version'?: '1.0';

  /**
   * Body param: Controls Precursor detection for the zone. `off` disables detection,
   * `monitor` records detections without affecting bot scores, and `arm` allows
   * detections to affect bot scores.
   */
  mode?: 'off' | 'monitor' | 'arm';

  /**
   * Body param: The ordered list of Precursor rules for the zone.
   */
  rules?: Array<PrecursorUpdateParams.Rule>;

  /**
   * Body param: Whether Precursor shows an interstitial when it takes action on a
   * request.
   */
  show_interstitial?: boolean;
}

export namespace PrecursorUpdateParams {
  export interface Rule {
    /**
     * The filter expression that determines which requests the rule matches.
     */
    expression: string;

    /**
     * Whether Precursor shows an interstitial when it takes action on a request.
     */
    show_interstitial: boolean;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule is active.
     */
    enabled?: boolean;
  }
}

export interface PrecursorGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Header param: Selects the split Precursor API schema.
   */
  'Cloudflare-Version'?: '1.0';
}

export declare namespace Precursor {
  export {
    type PrecursorConfig as PrecursorConfig,
    type PrecursorUpdateParams as PrecursorUpdateParams,
    type PrecursorGetParams as PrecursorGetParams,
  };
}
