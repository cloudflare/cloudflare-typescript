// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePrecursor extends APIResource {
  static override readonly _key: readonly ['precursor'] = Object.freeze(['precursor'] as const);

  /**
   * Updates the Precursor configuration for a zone.
   *
   * `default_mode` sets the zone-level enforcement mode. `enforcement_rules` is the
   * ordered list of rules that override enforcement for matching requests.
   *
   * This is a partial update: only the fields present in the request body are
   * changed.
   *
   * - Sending an empty array (`[]`) clears all enforcement rules.
   * - At least one of `default_mode` or `enforcement_rules` must be present; an
   *   empty body (`{}`) is rejected with `400`.
   * - Rule `id` is read-only (assigned by Cloudflare) and ignored on input.
   * - Rule `mode` must be `min-friction` or `max-security` (`off` is not a valid
   *   rule mode; use `default_mode` to disable enforcement).
   *
   * @example
   * ```ts
   * const precursorConfig = await client.precursor.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   default_mode: 'min-friction',
   * });
   * ```
   */
  update(params: PrecursorUpdateParams, options?: RequestOptions): APIPromise<PrecursorConfig> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/precursor`, { body, ...options }) as APIPromise<{
        result: PrecursorConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a zone's Precursor configuration: the zone-level `default_mode` and the
   * ordered list of `enforcement_rules`.
   *
   * @example
   * ```ts
   * const precursorConfig = await client.precursor.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: PrecursorGetParams, options?: RequestOptions): APIPromise<PrecursorConfig> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/precursor`, options) as APIPromise<{ result: PrecursorConfig }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Precursor extends BasePrecursor {}

export interface EnforcementRule {
  /**
   * The filter expression that determines which requests the rule matches.
   */
  expression: string;

  /**
   * The override mode Precursor applies to requests matching an enforcement rule.
   * Unlike `default_mode`, this cannot be `off`.
   */
  mode: 'min-friction' | 'max-security';

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

export interface EnforcementRuleParam {
  /**
   * The filter expression that determines which requests the rule matches.
   */
  expression: string;

  /**
   * The override mode Precursor applies to requests matching an enforcement rule.
   * Unlike `default_mode`, this cannot be `off`.
   */
  mode: 'min-friction' | 'max-security';

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule is active.
   */
  enabled?: boolean;
}

export interface PrecursorConfig {
  /**
   * The zone-level Precursor enforcement mode applied to requests that do not match
   * a more specific enforcement rule.
   */
  default_mode?: 'off' | 'min-friction' | 'max-security';

  /**
   * The ordered list of enforcement rules for the zone.
   */
  enforcement_rules?: Array<EnforcementRule>;
}

export interface PrecursorUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: The zone-level Precursor enforcement mode applied to requests that
   * do not match a more specific enforcement rule.
   */
  default_mode?: 'off' | 'min-friction' | 'max-security';

  /**
   * Body param: The ordered list of enforcement rules for the zone.
   */
  enforcement_rules?: Array<EnforcementRuleParam>;
}

export interface PrecursorGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace Precursor {
  export {
    type EnforcementRule as EnforcementRule,
    type PrecursorConfig as PrecursorConfig,
    type PrecursorUpdateParams as PrecursorUpdateParams,
    type PrecursorGetParams as PrecursorGetParams,
  };
}
