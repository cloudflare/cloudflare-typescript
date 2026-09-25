// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseOverrides extends APIResource {
  static override readonly _key: readonly ['firewall', 'waf', 'overrides'] = Object.freeze([
    'firewall',
    'waf',
    'overrides',
  ] as const);

  /**
   * **This endpoint has been deprecated and returns 410 Gone. Please use the
   * [Rulesets API](https://developers.cloudflare.com/ruleset-engine/) instead.**
   *
   * Previously created a URI-based WAF override for a zone.
   *
   * @deprecated
   */
  create(params: OverrideCreateParams, options?: RequestOptions): APIPromise<void> {
    const { zone_id, ...body } = params;
    return this._client.post(path`/zones/${zone_id}/firewall/waf/overrides`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * **This endpoint has been deprecated and returns 410 Gone. Please use the
   * [Rulesets API](https://developers.cloudflare.com/ruleset-engine/) instead.**
   *
   * Previously updated an existing URI-based WAF override.
   *
   * @deprecated
   */
  update(overridesID: string, params: OverrideUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { zone_id, ...body } = params;
    return this._client.put(path`/zones/${zone_id}/firewall/waf/overrides/${overridesID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * **This endpoint has been deprecated and returns 410 Gone. Please use the
   * [Rulesets API](https://developers.cloudflare.com/ruleset-engine/) instead.**
   *
   * Previously fetched the URI-based WAF overrides in a zone.
   *
   * @deprecated
   */
  list(params: OverrideListParams, options?: RequestOptions): APIPromise<void> {
    const { zone_id, ...query } = params;
    return this._client.get(path`/zones/${zone_id}/firewall/waf/overrides`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * **This endpoint has been deprecated and returns 410 Gone. Please use the
   * [Rulesets API](https://developers.cloudflare.com/ruleset-engine/) instead.**
   *
   * Previously deleted an existing URI-based WAF override.
   *
   * @deprecated
   */
  delete(overridesID: string, params: OverrideDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/firewall/waf/overrides/${overridesID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * **This endpoint has been deprecated and returns 410 Gone. Please use the
   * [Rulesets API](https://developers.cloudflare.com/ruleset-engine/) instead.**
   *
   * Previously fetched the details of a URI-based WAF override.
   *
   * @deprecated
   */
  get(overridesID: string, params: OverrideGetParams, options?: RequestOptions): APIPromise<void> {
    const { zone_id } = params;
    return this._client.get(path`/zones/${zone_id}/firewall/waf/overrides/${overridesID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Overrides extends BaseOverrides {}

export type OverrideURL = string;

export type OverrideURLParam = string;

/**
 * Specifies that, when a WAF rule matches, its configured action will be replaced
 * by the action configured in this object.
 */
export interface RewriteAction {
  /**
   * The WAF rule action to apply.
   */
  block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  challenge?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  default?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  simulate?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';
}

/**
 * Specifies that, when a WAF rule matches, its configured action will be replaced
 * by the action configured in this object.
 */
export interface RewriteActionParam {
  /**
   * The WAF rule action to apply.
   */
  block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  challenge?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  default?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  simulate?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';
}

/**
 * An object that allows you to override the action of specific WAF rules. Each key
 * of this object must be the ID of a WAF rule, and each value must be a valid WAF
 * action. Unless you are disabling a rule, ensure that you also enable the rule
 * group that this WAF rule belongs to. When creating a new URI-based WAF override,
 * you must provide a `groups` object or a `rules` object.
 */
export type WAFRule = { [key: string]: 'challenge' | 'block' | 'simulate' | 'disable' | 'default' };

/**
 * An object that allows you to override the action of specific WAF rules. Each key
 * of this object must be the ID of a WAF rule, and each value must be a valid WAF
 * action. Unless you are disabling a rule, ensure that you also enable the rule
 * group that this WAF rule belongs to. When creating a new URI-based WAF override,
 * you must provide a `groups` object or a `rules` object.
 */
export type WAFRuleParam = { [key: string]: 'challenge' | 'block' | 'simulate' | 'disable' | 'default' };

export interface OverrideCreateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Body param: The URLs to include in the current WAF override. You can use
   * wildcards. Each entered URL will be escaped before use, which means you can only
   * use simple wildcard patterns.
   */
  urls: Array<OverrideURLParam>;
}

export interface OverrideUpdateParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Body param: Defines an identifier.
   */
  id: string;

  /**
   * Body param: Specifies that, when a WAF rule matches, its configured action will
   * be replaced by the action configured in this object.
   */
  rewrite_action: RewriteActionParam;

  /**
   * Body param: An object that allows you to override the action of specific WAF
   * rules. Each key of this object must be the ID of a WAF rule, and each value must
   * be a valid WAF action. Unless you are disabling a rule, ensure that you also
   * enable the rule group that this WAF rule belongs to. When creating a new
   * URI-based WAF override, you must provide a `groups` object or a `rules` object.
   */
  rules: WAFRuleParam;

  /**
   * Body param: The URLs to include in the current WAF override. You can use
   * wildcards. Each entered URL will be escaped before use, which means you can only
   * use simple wildcard patterns.
   */
  urls: Array<OverrideURLParam>;
}

export interface OverrideListParams {
  /**
   * Path param: Defines an identifier.
   */
  zone_id: string;

  /**
   * Query param: The page number of paginated results.
   */
  page?: number;

  /**
   * Query param: The number of WAF overrides per page.
   */
  per_page?: number;
}

export interface OverrideDeleteParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

export interface OverrideGetParams {
  /**
   * Defines an identifier.
   */
  zone_id: string;
}

export declare namespace Overrides {
  export {
    type OverrideURL as OverrideURL,
    type RewriteAction as RewriteAction,
    type WAFRule as WAFRule,
    type OverrideCreateParams as OverrideCreateParams,
    type OverrideUpdateParams as OverrideUpdateParams,
    type OverrideListParams as OverrideListParams,
    type OverrideDeleteParams as OverrideDeleteParams,
    type OverrideGetParams as OverrideGetParams,
  };
}
