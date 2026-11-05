// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['monetization', 'rules'] = Object.freeze([
    'monetization',
    'rules',
  ] as const);

  /**
   * Replaces the zone's Payment Required ruleset with the submitted desired state.
   * Submit an empty rules array to clear all payment rules.
   *
   * @example
   * ```ts
   * const monetizationRuleCollection =
   *   await client.monetization.rules.update({
   *     zone_id: '9f1839b6152d298aca64c4e906b6d074',
   *     rules: [
   *       {
   *         address:
   *           '0x1234567890abcdef1234567890abcdef12345678===',
   *         expression:
   *           '(http.request.uri.path eq "/premium" and http.request.method in {"GET" "POST"})',
   *         price: '250000',
   *         scheme: 'exact',
   *       },
   *     ],
   *   });
   * ```
   */
  update(params: RuleUpdateParams, options?: RequestOptions): APIPromise<MonetizationRuleCollection> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/monetization/rules`, { body, ...options }) as APIPromise<{
        result: MonetizationRuleCollection;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes every Payment Required rule from the zone. Any rules the service does
   * not own are preserved. Deleting a zone with no payment rules is a no-op. Returns
   * the resulting (empty) rule collection.
   *
   * @example
   * ```ts
   * const monetizationRuleCollection =
   *   await client.monetization.rules.delete({
   *     zone_id: '9f1839b6152d298aca64c4e906b6d074',
   *   });
   * ```
   */
  delete(params: RuleDeleteParams, options?: RequestOptions): APIPromise<MonetizationRuleCollection> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/monetization/rules`, options) as APIPromise<{
        result: MonetizationRuleCollection;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes a single Payment Required rule identified by its ID. Every other rule is
   * preserved. Returns the resulting rule collection.
   *
   * @example
   * ```ts
   * const monetizationRuleCollection =
   *   await client.monetization.rules.deleteRule(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { zone_id: '9f1839b6152d298aca64c4e906b6d074' },
   *   );
   * ```
   */
  deleteRule(
    ruleID: string,
    params: RuleDeleteRuleParams,
    options?: RequestOptions,
  ): APIPromise<MonetizationRuleCollection> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/monetization/rules/${ruleID}`, options) as APIPromise<{
        result: MonetizationRuleCollection;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Applies a partial update to a single Payment Required rule. Only the fields
   * present in the request body are changed; omitted fields keep their current
   * values. Returns the full resulting rule collection.
   *
   * @example
   * ```ts
   * const monetizationRuleCollection =
   *   await client.monetization.rules.editRule(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { zone_id: '9f1839b6152d298aca64c4e906b6d074' },
   *   );
   * ```
   */
  editRule(
    ruleID: string,
    params: RuleEditRuleParams,
    options?: RequestOptions,
  ): APIPromise<MonetizationRuleCollection> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/monetization/rules/${ruleID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: MonetizationRuleCollection }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the currently deployed Payment Required rules for a zone. A zone with no
   * Payment Required ruleset returns 404.
   *
   * @example
   * ```ts
   * const monetizationRuleCollection =
   *   await client.monetization.rules.get({
   *     zone_id: '9f1839b6152d298aca64c4e906b6d074',
   *   });
   * ```
   */
  get(params: RuleGetParams, options?: RequestOptions): APIPromise<MonetizationRuleCollection> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/monetization/rules`, options) as APIPromise<{
        result: MonetizationRuleCollection;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a single Payment Required rule identified by its ID.
   *
   * @example
   * ```ts
   * const monetizationRule =
   *   await client.monetization.rules.getRule(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { zone_id: '9f1839b6152d298aca64c4e906b6d074' },
   *   );
   * ```
   */
  getRule(ruleID: string, params: RuleGetRuleParams, options?: RequestOptions): APIPromise<MonetizationRule> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/monetization/rules/${ruleID}`, options) as APIPromise<{
        result: MonetizationRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Rules extends BaseRules {}

/**
 * Payment rule with a fixed price set at configuration time.
 */
export type MonetizationRule =
  | MonetizationRule.MonetizationRulesMonetizationRuleInputFixedPrice
  | MonetizationRule.MonetizationRulesMonetizationRuleInputOriginControlled;

export namespace MonetizationRule {
  /**
   * Payment rule with a fixed price set at configuration time.
   */
  export interface MonetizationRulesMonetizationRuleInputFixedPrice
    extends RulesAPI.MonetizationRuleInputFixedPrice {
    /**
     * The server-assigned unique ID of the payment rule. Stable across full-ruleset
     * replacements.
     */
    id: string;
  }

  /**
   * Payment rule whose price the origin server sets dynamically. The rule carries no
   * price and the price field must be omitted — any provided value, including "0",
   * is rejected because it would not be enforced.
   */
  export interface MonetizationRulesMonetizationRuleInputOriginControlled
    extends RulesAPI.MonetizationRuleInputOriginControlled {
    /**
     * The server-assigned unique ID of the payment rule. Stable across full-ruleset
     * replacements.
     */
    id: string;
  }
}

/**
 * The zone's payment rules. Mirrors the shape of the ruleset submitted to the
 * deploy endpoint, so the response can be read back as the desired state.
 */
export interface MonetizationRuleCollection {
  /**
   * The zone's payment rules, in the order they are evaluated. Empty when the zone
   * has no payment rules.
   */
  rules: Array<MonetizationRule>;
}

/**
 * Payment rule with a fixed price set at configuration time.
 */
export type MonetizationRuleInput = MonetizationRuleInputFixedPrice | MonetizationRuleInputOriginControlled;

/**
 * Payment rule with a fixed price set at configuration time.
 */
export type MonetizationRuleInputParam =
  | MonetizationRuleInputFixedPriceParam
  | MonetizationRuleInputOriginControlledParam;

/**
 * Payment rule with a fixed price set at configuration time.
 */
export interface MonetizationRuleInputFixedPrice {
  /**
   * 0x-prefixed 20-byte hexadecimal Ethereum address. Mixed-case addresses must
   * carry a valid EIP-55 checksum; all-lowercase or all-uppercase addresses are also
   * accepted. The address must pass wallet screening whenever its rule is deployed
   * or patched.
   */
  address: string;

  /**
   * Wirefilter expression identifying the requests that require payment. Forwarded
   * verbatim to the Rulesets API, which validates its syntax.
   */
  expression: string;

  /**
   * Price in the smallest indivisible unit of the configured payment token, encoded
   * as a decimal string. Must be a canonical decimal integer in [1000, 100000000]:
   * no leading zeros, and a bare JSON number is rejected. The price is required for
   * the fixed-price schemes ("exact" and "upto") and must be at least 1000, the
   * smallest amount the payment facilitator can settle ($0.001 for a 6-decimal token
   * such as USDC), and at most 100000000 ($100 for a 6-decimal token). When the
   * scheme is "origin_controlled" the origin server sets pricing dynamically and the
   * rule carries no price: the field must be omitted — any provided value, including
   * "0", is rejected because it would not be enforced. Responses always encode this
   * as a string and omit it for "origin_controlled" rules; the pattern matches
   * exactly the set of values the server accepts.
   */
  price: string;

  /**
   * X402 payment scheme. "exact" requires the specified payment amount; "upto"
   * permits a payment up to the specified amount. Both fixed-price schemes require
   * the price field.
   */
  scheme: 'exact' | 'upto';

  /**
   * Optional on input. Include the ID of an existing payment rule to update it in
   * place, preserving its stable identity across the full-ruleset replacement; omit
   * it to create a new rule. An ID that does not match an existing payment rule in
   * the zone is rejected. Rules omitted from the request are deleted.
   */
  id?: string;

  description?: string;

  enabled?: boolean;
}

/**
 * Payment rule with a fixed price set at configuration time.
 */
export interface MonetizationRuleInputFixedPriceParam {
  /**
   * 0x-prefixed 20-byte hexadecimal Ethereum address. Mixed-case addresses must
   * carry a valid EIP-55 checksum; all-lowercase or all-uppercase addresses are also
   * accepted. The address must pass wallet screening whenever its rule is deployed
   * or patched.
   */
  address: string;

  /**
   * Wirefilter expression identifying the requests that require payment. Forwarded
   * verbatim to the Rulesets API, which validates its syntax.
   */
  expression: string;

  /**
   * Price in the smallest indivisible unit of the configured payment token, encoded
   * as a decimal string. Must be a canonical decimal integer in [1000, 100000000]:
   * no leading zeros, and a bare JSON number is rejected. The price is required for
   * the fixed-price schemes ("exact" and "upto") and must be at least 1000, the
   * smallest amount the payment facilitator can settle ($0.001 for a 6-decimal token
   * such as USDC), and at most 100000000 ($100 for a 6-decimal token). When the
   * scheme is "origin_controlled" the origin server sets pricing dynamically and the
   * rule carries no price: the field must be omitted — any provided value, including
   * "0", is rejected because it would not be enforced. Responses always encode this
   * as a string and omit it for "origin_controlled" rules; the pattern matches
   * exactly the set of values the server accepts.
   */
  price: string;

  /**
   * X402 payment scheme. "exact" requires the specified payment amount; "upto"
   * permits a payment up to the specified amount. Both fixed-price schemes require
   * the price field.
   */
  scheme: 'exact' | 'upto';

  /**
   * Optional on input. Include the ID of an existing payment rule to update it in
   * place, preserving its stable identity across the full-ruleset replacement; omit
   * it to create a new rule. An ID that does not match an existing payment rule in
   * the zone is rejected. Rules omitted from the request are deleted.
   */
  id?: string;

  description?: string;

  enabled?: boolean;
}

/**
 * Payment rule whose price the origin server sets dynamically. The rule carries no
 * price and the price field must be omitted — any provided value, including "0",
 * is rejected because it would not be enforced.
 */
export interface MonetizationRuleInputOriginControlled {
  /**
   * 0x-prefixed 20-byte hexadecimal Ethereum address. Mixed-case addresses must
   * carry a valid EIP-55 checksum; all-lowercase or all-uppercase addresses are also
   * accepted. The address must pass wallet screening whenever its rule is deployed
   * or patched.
   */
  address: string;

  /**
   * Wirefilter expression identifying the requests that require payment. Forwarded
   * verbatim to the Rulesets API, which validates its syntax.
   */
  expression: string;

  /**
   * X402 payment scheme. "origin_controlled" lets the origin server set pricing
   * dynamically; the rule carries no price and the price field must be omitted.
   */
  scheme: 'origin_controlled';

  /**
   * Optional on input. Include the ID of an existing payment rule to update it in
   * place, preserving its stable identity across the full-ruleset replacement; omit
   * it to create a new rule. An ID that does not match an existing payment rule in
   * the zone is rejected. Rules omitted from the request are deleted.
   */
  id?: string;

  description?: string;

  enabled?: boolean;
}

/**
 * Payment rule whose price the origin server sets dynamically. The rule carries no
 * price and the price field must be omitted — any provided value, including "0",
 * is rejected because it would not be enforced.
 */
export interface MonetizationRuleInputOriginControlledParam {
  /**
   * 0x-prefixed 20-byte hexadecimal Ethereum address. Mixed-case addresses must
   * carry a valid EIP-55 checksum; all-lowercase or all-uppercase addresses are also
   * accepted. The address must pass wallet screening whenever its rule is deployed
   * or patched.
   */
  address: string;

  /**
   * Wirefilter expression identifying the requests that require payment. Forwarded
   * verbatim to the Rulesets API, which validates its syntax.
   */
  expression: string;

  /**
   * X402 payment scheme. "origin_controlled" lets the origin server set pricing
   * dynamically; the rule carries no price and the price field must be omitted.
   */
  scheme: 'origin_controlled';

  /**
   * Optional on input. Include the ID of an existing payment rule to update it in
   * place, preserving its stable identity across the full-ruleset replacement; omit
   * it to create a new rule. An ID that does not match an existing payment rule in
   * the zone is rejected. Rules omitted from the request are deleted.
   */
  id?: string;

  description?: string;

  enabled?: boolean;
}

/**
 * Partial update to a single payment rule. Only the fields present are modified;
 * omitted fields keep their existing values.
 */
export interface MonetizationRulePatch {
  /**
   * 0x-prefixed 20-byte hexadecimal Ethereum address. Mixed-case addresses must
   * carry a valid EIP-55 checksum; all-lowercase or all-uppercase addresses are also
   * accepted. The effective address must pass wallet screening whenever the rule is
   * patched.
   */
  address?: string;

  description?: string;

  enabled?: boolean;

  /**
   * Wirefilter expression identifying the requests that require payment. Forwarded
   * verbatim to the Rulesets API, which validates its syntax.
   */
  expression?: string;

  /**
   * Price in the smallest indivisible unit of the configured payment token, encoded
   * as a decimal string. Must be a canonical decimal integer in [1000, 100000000]:
   * no leading zeros, and a bare JSON number is rejected. The price is required for
   * the fixed-price schemes ("exact" and "upto") and must be at least 1000, the
   * smallest amount the payment facilitator can settle ($0.001 for a 6-decimal token
   * such as USDC), and at most 100000000 ($100 for a 6-decimal token). When the
   * scheme is "origin_controlled" the origin server sets pricing dynamically and the
   * rule carries no price: the field must be omitted — any provided value, including
   * "0", is rejected because it would not be enforced. Responses always encode this
   * as a string and omit it for "origin_controlled" rules; the pattern matches
   * exactly the set of values the server accepts.
   */
  price?: string;

  /**
   * X402 payment scheme. "exact" requires the specified payment amount; "upto"
   * permits a payment up to the specified amount; "origin_controlled" lets the
   * origin server set pricing dynamically, in which case the rule carries no price
   * and the price field must be omitted.
   */
  scheme?: 'exact' | 'upto' | 'origin_controlled';
}

export interface MonetizationRulesetInput {
  /**
   * Full desired Payment Required ruleset. An empty array clears all payment rules.
   * The ruleset may contain at most 40 unique wallet addresses; address comparison
   * is case-insensitive. Every address must pass wallet screening before deployment.
   */
  rules: Array<MonetizationRuleInput>;
}

export interface RuleUpdateParams {
  /**
   * Path param: The unique ID of the zone.
   */
  zone_id: string;

  /**
   * Body param: Full desired Payment Required ruleset. An empty array clears all
   * payment rules. The ruleset may contain at most 40 unique wallet addresses;
   * address comparison is case-insensitive. Every address must pass wallet screening
   * before deployment.
   */
  rules: Array<MonetizationRuleInputParam>;
}

export interface RuleDeleteParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export interface RuleDeleteRuleParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export interface RuleEditRuleParams {
  /**
   * Path param: The unique ID of the zone.
   */
  zone_id: string;

  /**
   * Body param: 0x-prefixed 20-byte hexadecimal Ethereum address. Mixed-case
   * addresses must carry a valid EIP-55 checksum; all-lowercase or all-uppercase
   * addresses are also accepted. The effective address must pass wallet screening
   * whenever the rule is patched.
   */
  address?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param: Wirefilter expression identifying the requests that require payment.
   * Forwarded verbatim to the Rulesets API, which validates its syntax.
   */
  expression?: string;

  /**
   * Body param: Price in the smallest indivisible unit of the configured payment
   * token, encoded as a decimal string. Must be a canonical decimal integer in
   * [1000, 100000000]: no leading zeros, and a bare JSON number is rejected. The
   * price is required for the fixed-price schemes ("exact" and "upto") and must be
   * at least 1000, the smallest amount the payment facilitator can settle ($0.001
   * for a 6-decimal token such as USDC), and at most 100000000 ($100 for a 6-decimal
   * token). When the scheme is "origin_controlled" the origin server sets pricing
   * dynamically and the rule carries no price: the field must be omitted — any
   * provided value, including "0", is rejected because it would not be enforced.
   * Responses always encode this as a string and omit it for "origin_controlled"
   * rules; the pattern matches exactly the set of values the server accepts.
   */
  price?: string;

  /**
   * Body param: X402 payment scheme. "exact" requires the specified payment amount;
   * "upto" permits a payment up to the specified amount; "origin_controlled" lets
   * the origin server set pricing dynamically, in which case the rule carries no
   * price and the price field must be omitted.
   */
  scheme?: 'exact' | 'upto' | 'origin_controlled';
}

export interface RuleGetParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export interface RuleGetRuleParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export declare namespace Rules {
  export {
    type MonetizationRule as MonetizationRule,
    type MonetizationRuleCollection as MonetizationRuleCollection,
    type MonetizationRuleInput as MonetizationRuleInput,
    type MonetizationRuleInputFixedPrice as MonetizationRuleInputFixedPrice,
    type MonetizationRuleInputOriginControlled as MonetizationRuleInputOriginControlled,
    type MonetizationRulePatch as MonetizationRulePatch,
    type MonetizationRulesetInput as MonetizationRulesetInput,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleDeleteRuleParams as RuleDeleteRuleParams,
    type RuleEditRuleParams as RuleEditRuleParams,
    type RuleGetParams as RuleGetParams,
    type RuleGetRuleParams as RuleGetRuleParams,
  };
}
