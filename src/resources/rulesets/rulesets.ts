// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesetsAPI from './rulesets';
import * as RulesAPI from './rules';
import {
  BaseRules,
  BlockRule as RulesAPIBlockRule,
  CompressResponseRule,
  DDoSDynamicRule as RulesAPIDDoSDynamicRule,
  ExecuteRule as RulesAPIExecuteRule,
  ForceConnectionCloseRule as RulesAPIForceConnectionCloseRule,
  LogCustomFieldRule as RulesAPILogCustomFieldRule,
  LogRule as RulesAPILogRule,
  Logging,
  ManagedChallengeRule as RulesAPIManagedChallengeRule,
  RedirectRule as RulesAPIRedirectRule,
  RewriteRule as RulesAPIRewriteRule,
  RouteRule as RulesAPIRouteRule,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleEditParams,
  RuleEditResponse,
  Rules,
  RulesetRule,
  ScoreRule as RulesAPIScoreRule,
  ServeErrorRule as RulesAPIServeErrorRule,
  SetCacheSettingsRule as RulesAPISetCacheSettingsRule,
  SetConfigRule,
  SkipRule as RulesAPISkipRule,
} from './rules';
import * as VersionsAPI from './versions';
import {
  BaseVersions,
  VersionDeleteParams,
  VersionGetParams,
  VersionGetResponse,
  VersionListParams,
  VersionListResponse,
  VersionListResponsesSinglePage,
  Versions,
} from './versions';
import * as PhasesAPI from './phases/phases';
import {
  BasePhases,
  PhaseGetParams,
  PhaseGetResponse,
  PhaseUpdateParams,
  PhaseUpdateResponse,
  Phases,
} from './phases/phases';
import { APIPromise } from '../../core/api-promise';
import { CloudflareError } from '../../core/error';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRulesets extends APIResource {
  static override readonly _key: readonly ['rulesets'] = Object.freeze(['rulesets'] as const);

  /**
   * Creates a ruleset.
   *
   * @example
   * ```ts
   * const ruleset = await client.rulesets.create({
   *   kind: 'root',
   *   name: 'My ruleset',
   *   phase: 'http_request_firewall_custom',
   *   account_id: 'account_id',
   * });
   * ```
   */
  create(params: RulesetCreateParams, options?: RequestOptions): APIPromise<RulesetCreateResponse> {
    const { account_id, zone_id, dry_run, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(path`/${accountOrZone}/${accountOrZoneId}/rulesets`, {
        query: { dry_run },
        body,
        ...options,
      }) as APIPromise<{ result: RulesetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an account or zone ruleset, creating a new version.
   *
   * @example
   * ```ts
   * const ruleset = await client.rulesets.update(
   *   '2f2feab2026849078ba485f918791bdc',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  update(
    rulesetID: string,
    params: RulesetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RulesetUpdateResponse> {
    const { account_id, zone_id, dry_run, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(path`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetID}`, {
        query: { dry_run },
        body,
        ...options,
      }) as APIPromise<{ result: RulesetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all rulesets.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const rulesetListResponse of client.rulesets.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RulesetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RulesetListResponsesCursorPagination, RulesetListResponse> {
    const { account_id, zone_id, ...query } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      path`/${accountOrZone}/${accountOrZoneId}/rulesets`,
      CursorPagination<RulesetListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes all versions of an existing account or zone ruleset.
   *
   * @example
   * ```ts
   * await client.rulesets.delete(
   *   '2f2feab2026849078ba485f918791bdc',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    rulesetID: string,
    params: RulesetDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id, zone_id, dry_run } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.delete(path`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetID}`, {
      query: { dry_run },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches the latest version of an account or zone ruleset.
   *
   * @example
   * ```ts
   * const ruleset = await client.rulesets.get(
   *   '2f2feab2026849078ba485f918791bdc',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    rulesetID: string,
    params: RulesetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RulesetGetResponse> {
    const { account_id, zone_id } = params ?? {};
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        path`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetID}`,
        options,
      ) as APIPromise<{ result: RulesetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Rulesets extends BaseRulesets {
  phases: PhasesAPI.Phases = new PhasesAPI.Phases(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

export type RulesetListResponsesCursorPagination = CursorPagination<RulesetListResponse>;

/**
 * The kind of the ruleset.
 */
export type Kind = 'managed' | 'custom' | 'root' | 'zone';

/**
 * The kind of the ruleset.
 */
export type KindParam = 'managed' | 'custom' | 'root' | 'zone';

/**
 * The phase of the ruleset.
 */
export type Phase =
  | 'ddos_l4'
  | 'ddos_l7'
  | 'http_config_settings'
  | 'http_custom_errors'
  | 'http_log_custom_fields'
  | 'http_ratelimit'
  | 'http_request_cache_settings'
  | 'http_request_dynamic_redirect'
  | 'http_request_firewall_custom'
  | 'http_request_firewall_managed'
  | 'http_request_late_transform'
  | 'http_request_origin'
  | 'http_request_redirect'
  | 'http_request_sanitize'
  | 'http_request_sbfm'
  | 'http_request_transform'
  | 'http_response_cache_settings'
  | 'http_response_compression'
  | 'http_response_firewall_managed'
  | 'http_response_headers_transform'
  | 'magic_transit'
  | 'magic_transit_ids_managed'
  | 'magic_transit_managed'
  | 'magic_transit_ratelimit';

/**
 * The phase of the ruleset.
 */
export type PhaseParam =
  | 'ddos_l4'
  | 'ddos_l7'
  | 'http_config_settings'
  | 'http_custom_errors'
  | 'http_log_custom_fields'
  | 'http_ratelimit'
  | 'http_request_cache_settings'
  | 'http_request_dynamic_redirect'
  | 'http_request_firewall_custom'
  | 'http_request_firewall_managed'
  | 'http_request_late_transform'
  | 'http_request_origin'
  | 'http_request_redirect'
  | 'http_request_sanitize'
  | 'http_request_sbfm'
  | 'http_request_transform'
  | 'http_response_cache_settings'
  | 'http_response_compression'
  | 'http_response_firewall_managed'
  | 'http_response_headers_transform'
  | 'magic_transit'
  | 'magic_transit_ids_managed'
  | 'magic_transit_managed'
  | 'magic_transit_ratelimit';

/**
 * A ruleset object.
 */
export interface Ruleset {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;

  /**
   * The human-readable name of the ruleset.
   */
  name?: string;
}

/**
 * A result.
 */
export type RulesetCreateResponse = RulesetCreateResponse.Ruleset | unknown;

export namespace RulesetCreateResponse {
  /**
   * A ruleset object.
   */
  export interface Ruleset {
    /**
     * The unique ID of the ruleset.
     */
    id: string;

    /**
     * The kind of the ruleset.
     */
    kind: RulesetsAPI.Kind;

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated: string;

    /**
     * The human-readable name of the ruleset.
     */
    name: string;

    /**
     * The phase of the ruleset.
     */
    phase: RulesetsAPI.Phase;

    /**
     * The list of rules in the ruleset.
     */
    rules: Array<
      | Ruleset.BlockRule
      | Ruleset.ChallengeRule
      | Ruleset.ResponseCompressionRule
      | Ruleset.DDoSDynamicRule
      | Ruleset.ExecuteRule
      | Ruleset.ForceConnectionCloseRule
      | Ruleset.JavaScriptChallengeRule
      | Ruleset.LogRule
      | Ruleset.LogCustomFieldRule
      | Ruleset.ManagedChallengeRule
      | Ruleset.RedirectRule
      | Ruleset.RewriteRule
      | Ruleset.RouteRule
      | Ruleset.ScoreRule
      | Ruleset.ServeErrorRule
      | Ruleset.SetCacheControlRule
      | Ruleset.SetCacheSettingsRule
      | Ruleset.SetCacheTagsRule
      | Ruleset.SetConfigurationRule
      | Ruleset.SkipRule
      | Ruleset.TransformResponseHTMLRule
    >;

    /**
     * The version of the ruleset.
     */
    version: string;

    /**
     * An informative description of the ruleset.
     */
    description?: string;
  }

  export namespace Ruleset {
    export interface BlockRule extends Omit<RulesAPI.BlockRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ChallengeRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'challenge';

      /**
       * Whether the rule should be executed.
       */
      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: unknown;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: ChallengeRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: ChallengeRule.Ratelimit;
    }

    export namespace ChallengeRule {
      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface ResponseCompressionRule extends Omit<RulesAPI.CompressResponseRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface DDoSDynamicRule extends Omit<RulesAPI.DDoSDynamicRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ExecuteRule extends Omit<RulesAPI.ExecuteRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ForceConnectionCloseRule extends Omit<RulesAPI.ForceConnectionCloseRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface JavaScriptChallengeRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'js_challenge';

      /**
       * Whether the rule should be executed.
       */
      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: unknown;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: JavaScriptChallengeRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: JavaScriptChallengeRule.Ratelimit;
    }

    export namespace JavaScriptChallengeRule {
      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface LogRule extends Omit<RulesAPI.LogRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface LogCustomFieldRule extends Omit<RulesAPI.LogCustomFieldRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ManagedChallengeRule extends Omit<RulesAPI.ManagedChallengeRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface RedirectRule extends Omit<RulesAPI.RedirectRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface RewriteRule extends Omit<RulesAPI.RewriteRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface RouteRule extends Omit<RulesAPI.RouteRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ScoreRule extends Omit<RulesAPI.ScoreRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ServeErrorRule extends Omit<RulesAPI.ServeErrorRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface SetCacheControlRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'set_cache_control';

      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: SetCacheControlRule.ActionParameters;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: SetCacheControlRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: SetCacheControlRule.Ratelimit;
    }

    export namespace SetCacheControlRule {
      /**
       * The parameters configuring the rule's action.
       */
      export interface ActionParameters {
        /**
         * A cache-control directive configuration.
         */
        immutable?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        'max-age'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'must-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'must-understand'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts optional qualifiers (header
         * names).
         */
        'no-cache'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'no-store'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'no-transform'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts optional qualifiers (header
         * names).
         */
        private?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'proxy-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        public?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        's-maxage'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        'stale-if-error'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        'stale-while-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;
      }

      export namespace ActionParameters {
        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with optional qualifiers.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;

          /**
           * Optional list of header names to qualify the directive (e.g., for "private" or
           * "no-cache" directives).
           */
          qualifiers?: Array<string>;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with optional qualifiers.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;

          /**
           * Optional list of header names to qualify the directive (e.g., for "private" or
           * "no-cache" directives).
           */
          qualifiers?: Array<string>;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }
      }

      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface SetCacheSettingsRule extends Omit<RulesAPI.SetCacheSettingsRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface SetCacheTagsRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'set_cache_tags';

      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?:
        | SetCacheTagsRule.AddCacheTagsValues
        | SetCacheTagsRule.AddCacheTagsExpression
        | SetCacheTagsRule.RemoveCacheTagsValues
        | SetCacheTagsRule.RemoveCacheTagsExpression
        | SetCacheTagsRule.SetCacheTagsValues
        | SetCacheTagsRule.SetCacheTagsExpression;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: SetCacheTagsRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: SetCacheTagsRule.Ratelimit;
    }

    export namespace SetCacheTagsRule {
      /**
       * Add cache tags using a list of values.
       */
      export interface AddCacheTagsValues {
        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';

        /**
         * A list of cache tag values.
         */
        values: Array<string>;
      }

      /**
       * Add cache tags using an expression.
       */
      export interface AddCacheTagsExpression {
        /**
         * An expression that evaluates to an array of cache tag values.
         */
        expression: string;

        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';
      }

      /**
       * Remove cache tags using a list of values.
       */
      export interface RemoveCacheTagsValues {
        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';

        /**
         * A list of cache tag values.
         */
        values: Array<string>;
      }

      /**
       * Remove cache tags using an expression.
       */
      export interface RemoveCacheTagsExpression {
        /**
         * An expression that evaluates to an array of cache tag values.
         */
        expression: string;

        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';
      }

      /**
       * Set cache tags using a list of values.
       */
      export interface SetCacheTagsValues {
        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';

        /**
         * A list of cache tag values.
         */
        values: Array<string>;
      }

      /**
       * Set cache tags using an expression.
       */
      export interface SetCacheTagsExpression {
        /**
         * An expression that evaluates to an array of cache tag values.
         */
        expression: string;

        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';
      }

      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface SetConfigurationRule extends Omit<RulesAPI.SetConfigRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface SkipRule extends Omit<RulesAPI.SkipRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface TransformResponseHTMLRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'transform_response_html';

      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: TransformResponseHTMLRule.ActionParameters;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: TransformResponseHTMLRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: TransformResponseHTMLRule.Ratelimit;
    }

    export namespace TransformResponseHTMLRule {
      /**
       * The parameters configuring the rule's action.
       */
      export interface ActionParameters {
        /**
         * Enables the link maze transformation on the response.
         */
        link_maze: unknown;
      }

      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }
  }
}

/**
 * A result.
 */
export type RulesetUpdateResponse = RulesetUpdateResponse.Ruleset | unknown;

export namespace RulesetUpdateResponse {
  /**
   * A ruleset object.
   */
  export interface Ruleset {
    /**
     * The unique ID of the ruleset.
     */
    id: string;

    /**
     * The kind of the ruleset.
     */
    kind: RulesetsAPI.Kind;

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated: string;

    /**
     * The human-readable name of the ruleset.
     */
    name: string;

    /**
     * The phase of the ruleset.
     */
    phase: RulesetsAPI.Phase;

    /**
     * The list of rules in the ruleset.
     */
    rules: Array<
      | Ruleset.BlockRule
      | Ruleset.ChallengeRule
      | Ruleset.ResponseCompressionRule
      | Ruleset.DDoSDynamicRule
      | Ruleset.ExecuteRule
      | Ruleset.ForceConnectionCloseRule
      | Ruleset.JavaScriptChallengeRule
      | Ruleset.LogRule
      | Ruleset.LogCustomFieldRule
      | Ruleset.ManagedChallengeRule
      | Ruleset.RedirectRule
      | Ruleset.RewriteRule
      | Ruleset.RouteRule
      | Ruleset.ScoreRule
      | Ruleset.ServeErrorRule
      | Ruleset.SetCacheControlRule
      | Ruleset.SetCacheSettingsRule
      | Ruleset.SetCacheTagsRule
      | Ruleset.SetConfigurationRule
      | Ruleset.SkipRule
      | Ruleset.TransformResponseHTMLRule
    >;

    /**
     * The version of the ruleset.
     */
    version: string;

    /**
     * An informative description of the ruleset.
     */
    description?: string;
  }

  export namespace Ruleset {
    export interface BlockRule extends Omit<RulesAPI.BlockRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ChallengeRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'challenge';

      /**
       * Whether the rule should be executed.
       */
      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: unknown;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: ChallengeRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: ChallengeRule.Ratelimit;
    }

    export namespace ChallengeRule {
      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface ResponseCompressionRule extends Omit<RulesAPI.CompressResponseRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface DDoSDynamicRule extends Omit<RulesAPI.DDoSDynamicRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ExecuteRule extends Omit<RulesAPI.ExecuteRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ForceConnectionCloseRule extends Omit<RulesAPI.ForceConnectionCloseRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface JavaScriptChallengeRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'js_challenge';

      /**
       * Whether the rule should be executed.
       */
      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: unknown;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: JavaScriptChallengeRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: JavaScriptChallengeRule.Ratelimit;
    }

    export namespace JavaScriptChallengeRule {
      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface LogRule extends Omit<RulesAPI.LogRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface LogCustomFieldRule extends Omit<RulesAPI.LogCustomFieldRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ManagedChallengeRule extends Omit<RulesAPI.ManagedChallengeRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface RedirectRule extends Omit<RulesAPI.RedirectRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface RewriteRule extends Omit<RulesAPI.RewriteRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface RouteRule extends Omit<RulesAPI.RouteRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ScoreRule extends Omit<RulesAPI.ScoreRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface ServeErrorRule extends Omit<RulesAPI.ServeErrorRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface SetCacheControlRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'set_cache_control';

      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: SetCacheControlRule.ActionParameters;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: SetCacheControlRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: SetCacheControlRule.Ratelimit;
    }

    export namespace SetCacheControlRule {
      /**
       * The parameters configuring the rule's action.
       */
      export interface ActionParameters {
        /**
         * A cache-control directive configuration.
         */
        immutable?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        'max-age'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'must-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'must-understand'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts optional qualifiers (header
         * names).
         */
        'no-cache'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'no-store'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'no-transform'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts optional qualifiers (header
         * names).
         */
        private?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        'proxy-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration.
         */
        public?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        's-maxage'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        'stale-if-error'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

        /**
         * A cache-control directive configuration that accepts a duration value in
         * seconds.
         */
        'stale-while-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;
      }

      export namespace ActionParameters {
        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with optional qualifiers.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;

          /**
           * Optional list of header names to qualify the directive (e.g., for "private" or
           * "no-cache" directives).
           */
          qualifiers?: Array<string>;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with optional qualifiers.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;

          /**
           * Optional list of header names to qualify the directive (e.g., for "private" or
           * "no-cache" directives).
           */
          qualifiers?: Array<string>;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Set the directive with a duration value in seconds.
         */
        export interface SetDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * The duration value in seconds for the directive.
           */
          value: number;

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }

        /**
         * Remove the directive.
         */
        export interface RemoveDirective {
          /**
           * The operation to perform on the cache-control directive.
           */
          operation: 'set' | 'remove';

          /**
           * Whether the directive should only be applied to the Cloudflare CDN cache.
           */
          cloudflare_only?: boolean;
        }
      }

      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface SetCacheSettingsRule extends Omit<RulesAPI.SetCacheSettingsRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface SetCacheTagsRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'set_cache_tags';

      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?:
        | SetCacheTagsRule.AddCacheTagsValues
        | SetCacheTagsRule.AddCacheTagsExpression
        | SetCacheTagsRule.RemoveCacheTagsValues
        | SetCacheTagsRule.RemoveCacheTagsExpression
        | SetCacheTagsRule.SetCacheTagsValues
        | SetCacheTagsRule.SetCacheTagsExpression;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: SetCacheTagsRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: SetCacheTagsRule.Ratelimit;
    }

    export namespace SetCacheTagsRule {
      /**
       * Add cache tags using a list of values.
       */
      export interface AddCacheTagsValues {
        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';

        /**
         * A list of cache tag values.
         */
        values: Array<string>;
      }

      /**
       * Add cache tags using an expression.
       */
      export interface AddCacheTagsExpression {
        /**
         * An expression that evaluates to an array of cache tag values.
         */
        expression: string;

        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';
      }

      /**
       * Remove cache tags using a list of values.
       */
      export interface RemoveCacheTagsValues {
        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';

        /**
         * A list of cache tag values.
         */
        values: Array<string>;
      }

      /**
       * Remove cache tags using an expression.
       */
      export interface RemoveCacheTagsExpression {
        /**
         * An expression that evaluates to an array of cache tag values.
         */
        expression: string;

        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';
      }

      /**
       * Set cache tags using a list of values.
       */
      export interface SetCacheTagsValues {
        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';

        /**
         * A list of cache tag values.
         */
        values: Array<string>;
      }

      /**
       * Set cache tags using an expression.
       */
      export interface SetCacheTagsExpression {
        /**
         * An expression that evaluates to an array of cache tag values.
         */
        expression: string;

        /**
         * The operation to perform on the cache tags.
         */
        operation: 'add' | 'remove' | 'set';
      }

      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }

    export interface SetConfigurationRule extends Omit<RulesAPI.SetConfigRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface SkipRule extends Omit<RulesAPI.SkipRule, 'action'> {
      id: string;

      action: string;

      enabled: boolean;

      expression: string;

      ref: string;
    }

    export interface TransformResponseHTMLRule {
      /**
       * The unique ID of the rule.
       */
      id: string;

      /**
       * The action to perform when the rule matches.
       */
      action: 'transform_response_html';

      enabled: boolean;

      /**
       * The expression defining which traffic will match the rule.
       */
      expression: string;

      /**
       * The timestamp of when the rule was last modified.
       */
      last_updated: string;

      /**
       * The reference of the rule (the rule's ID by default).
       */
      ref: string;

      /**
       * The version of the rule.
       */
      version: string;

      /**
       * The parameters configuring the rule's action.
       */
      action_parameters?: TransformResponseHTMLRule.ActionParameters;

      /**
       * The categories of the rule.
       */
      categories?: Array<string>;

      /**
       * An informative description of the rule.
       */
      description?: string;

      /**
       * Configuration for exposed credential checking.
       */
      exposed_credential_check?: TransformResponseHTMLRule.ExposedCredentialCheck;

      /**
       * An object configuring the rule's logging behavior.
       */
      logging?: RulesAPI.Logging;

      /**
       * An object configuring the rule's rate limit behavior.
       */
      ratelimit?: TransformResponseHTMLRule.Ratelimit;
    }

    export namespace TransformResponseHTMLRule {
      /**
       * The parameters configuring the rule's action.
       */
      export interface ActionParameters {
        /**
         * Enables the link maze transformation on the response.
         */
        link_maze: unknown;
      }

      /**
       * Configuration for exposed credential checking.
       */
      export interface ExposedCredentialCheck {
        /**
         * An expression that selects the password used in the credentials check.
         */
        password_expression: string;

        /**
         * An expression that selects the user ID used in the credentials check.
         */
        username_expression: string;
      }

      /**
       * An object configuring the rule's rate limit behavior.
       */
      export interface Ratelimit {
        /**
         * Characteristics of the request on which the rate limit counter will be
         * incremented.
         */
        characteristics: Array<string>;

        /**
         * Period in seconds over which the counter is being incremented.
         */
        period: number;

        /**
         * An expression that defines when the rate limit counter should be incremented. It
         * defaults to the same as the rule's expression.
         */
        counting_expression?: string;

        /**
         * Period of time in seconds after which the action will be disabled following its
         * first execution.
         */
        mitigation_timeout?: number;

        /**
         * The threshold of requests per period after which the action will be executed for
         * the first time.
         */
        requests_per_period?: number;

        /**
         * Whether counting is only performed when an origin is reached.
         */
        requests_to_origin?: boolean;

        /**
         * The score threshold per period for which the action will be executed the first
         * time.
         */
        score_per_period?: number;

        /**
         * A response header name provided by the origin, which contains the score to
         * increment rate limit counter with.
         */
        score_response_header_name?: string;
      }
    }
  }
}

/**
 * A ruleset object.
 */
export interface RulesetListResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: Kind;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase: Phase;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

/**
 * A ruleset object.
 */
export interface RulesetGetResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: Kind;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase: Phase;

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesetGetResponse.BlockRule
    | RulesetGetResponse.ChallengeRule
    | RulesetGetResponse.ResponseCompressionRule
    | RulesetGetResponse.DDoSDynamicRule
    | RulesetGetResponse.ExecuteRule
    | RulesetGetResponse.ForceConnectionCloseRule
    | RulesetGetResponse.JavaScriptChallengeRule
    | RulesetGetResponse.LogRule
    | RulesetGetResponse.LogCustomFieldRule
    | RulesetGetResponse.ManagedChallengeRule
    | RulesetGetResponse.RedirectRule
    | RulesetGetResponse.RewriteRule
    | RulesetGetResponse.RouteRule
    | RulesetGetResponse.ScoreRule
    | RulesetGetResponse.ServeErrorRule
    | RulesetGetResponse.SetCacheControlRule
    | RulesetGetResponse.SetCacheSettingsRule
    | RulesetGetResponse.SetCacheTagsRule
    | RulesetGetResponse.SetConfigurationRule
    | RulesetGetResponse.SkipRule
    | RulesetGetResponse.TransformResponseHTMLRule
  >;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RulesetGetResponse {
  export interface BlockRule extends Omit<RulesAPI.BlockRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface ChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id: string;

    /**
     * The action to perform when the rule matches.
     */
    action: 'challenge';

    /**
     * Whether the rule should be executed.
     */
    enabled: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: ChallengeRule.ExposedCredentialCheck;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: ChallengeRule.Ratelimit;
  }

  export namespace ChallengeRule {
    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface ResponseCompressionRule extends Omit<RulesAPI.CompressResponseRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface DDoSDynamicRule extends Omit<RulesAPI.DDoSDynamicRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface ExecuteRule extends Omit<RulesAPI.ExecuteRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface ForceConnectionCloseRule extends Omit<RulesAPI.ForceConnectionCloseRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface JavaScriptChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id: string;

    /**
     * The action to perform when the rule matches.
     */
    action: 'js_challenge';

    /**
     * Whether the rule should be executed.
     */
    enabled: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: JavaScriptChallengeRule.ExposedCredentialCheck;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: JavaScriptChallengeRule.Ratelimit;
  }

  export namespace JavaScriptChallengeRule {
    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface LogRule extends Omit<RulesAPI.LogRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface LogCustomFieldRule extends Omit<RulesAPI.LogCustomFieldRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface ManagedChallengeRule extends Omit<RulesAPI.ManagedChallengeRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface RedirectRule extends Omit<RulesAPI.RedirectRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface RewriteRule extends Omit<RulesAPI.RewriteRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface RouteRule extends Omit<RulesAPI.RouteRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface ScoreRule extends Omit<RulesAPI.ScoreRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface ServeErrorRule extends Omit<RulesAPI.ServeErrorRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface SetCacheControlRule {
    /**
     * The unique ID of the rule.
     */
    id: string;

    /**
     * The action to perform when the rule matches.
     */
    action: 'set_cache_control';

    enabled: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: SetCacheControlRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: SetCacheControlRule.ExposedCredentialCheck;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: SetCacheControlRule.Ratelimit;
  }

  export namespace SetCacheControlRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A cache-control directive configuration.
       */
      immutable?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'max-age'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'must-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'must-understand'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts optional qualifiers (header
       * names).
       */
      'no-cache'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'no-store'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'no-transform'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts optional qualifiers (header
       * names).
       */
      private?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'proxy-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      public?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      's-maxage'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'stale-if-error'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'stale-while-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;
    }

    export namespace ActionParameters {
      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with optional qualifiers.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;

        /**
         * Optional list of header names to qualify the directive (e.g., for "private" or
         * "no-cache" directives).
         */
        qualifiers?: Array<string>;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with optional qualifiers.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;

        /**
         * Optional list of header names to qualify the directive (e.g., for "private" or
         * "no-cache" directives).
         */
        qualifiers?: Array<string>;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface SetCacheSettingsRule extends Omit<RulesAPI.SetCacheSettingsRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface SetCacheTagsRule {
    /**
     * The unique ID of the rule.
     */
    id: string;

    /**
     * The action to perform when the rule matches.
     */
    action: 'set_cache_tags';

    enabled: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?:
      | SetCacheTagsRule.AddCacheTagsValues
      | SetCacheTagsRule.AddCacheTagsExpression
      | SetCacheTagsRule.RemoveCacheTagsValues
      | SetCacheTagsRule.RemoveCacheTagsExpression
      | SetCacheTagsRule.SetCacheTagsValues
      | SetCacheTagsRule.SetCacheTagsExpression;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: SetCacheTagsRule.ExposedCredentialCheck;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: SetCacheTagsRule.Ratelimit;
  }

  export namespace SetCacheTagsRule {
    /**
     * Add cache tags using a list of values.
     */
    export interface AddCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Add cache tags using an expression.
     */
    export interface AddCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Remove cache tags using a list of values.
     */
    export interface RemoveCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Remove cache tags using an expression.
     */
    export interface RemoveCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Set cache tags using a list of values.
     */
    export interface SetCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Set cache tags using an expression.
     */
    export interface SetCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface SetConfigurationRule extends Omit<RulesAPI.SetConfigRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface SkipRule extends Omit<RulesAPI.SkipRule, 'action'> {
    id: string;

    action: string;

    enabled: boolean;

    expression: string;

    ref: string;
  }

  export interface TransformResponseHTMLRule {
    /**
     * The unique ID of the rule.
     */
    id: string;

    /**
     * The action to perform when the rule matches.
     */
    action: 'transform_response_html';

    enabled: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: TransformResponseHTMLRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: TransformResponseHTMLRule.ExposedCredentialCheck;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: TransformResponseHTMLRule.Ratelimit;
  }

  export namespace TransformResponseHTMLRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Enables the link maze transformation on the response.
       */
      link_maze: unknown;
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }
}

export interface RulesetCreateParams {
  /**
   * Body param: The kind of the ruleset.
   */
  kind: KindParam;

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name: string;

  /**
   * Body param: The phase of the ruleset.
   */
  phase: PhaseParam;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Query param: Validates the request without persisting changes when set to
   * `true`. Responses that normally return 200 return `result: null`; endpoints that
   * normally return 204 continue to return 204.
   */
  dry_run?: boolean;

  /**
   * Body param: An informative description of the ruleset.
   */
  description?: string;

  /**
   * Body param: The list of rules in the ruleset.
   */
  rules?: Array<
    | RulesAPI.BlockRuleParam
    | RulesetCreateParams.RulesetsChallengeRule
    | RulesAPI.CompressResponseRuleParam
    | RulesAPI.DDoSDynamicRuleParam
    | RulesAPI.ExecuteRuleParam
    | RulesAPI.ForceConnectionCloseRuleParam
    | RulesetCreateParams.RulesetsJSChallengeRule
    | RulesAPI.LogRuleParam
    | RulesAPI.LogCustomFieldRuleParam
    | RulesAPI.ManagedChallengeRuleParam
    | RulesAPI.RedirectRuleParam
    | RulesAPI.RewriteRuleParam
    | RulesAPI.RouteRuleParam
    | RulesAPI.ScoreRuleParam
    | RulesAPI.ServeErrorRuleParam
    | RulesetCreateParams.RulesetsSetCacheControlRule
    | RulesAPI.SetCacheSettingsRuleParam
    | RulesetCreateParams.RulesetsSetCacheTagsRule
    | RulesAPI.SetConfigRuleParam
    | RulesAPI.SkipRuleParam
    | RulesetCreateParams.RulesetsTransformResponseHTMLRule
  >;
}

export namespace RulesetCreateParams {
  export interface RulesetsChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsChallengeRule {
    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsJSChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsJSChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsJSChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsJSChallengeRule {
    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsSetCacheControlRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_control';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetCacheControlRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsSetCacheControlRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsSetCacheControlRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheControlRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A cache-control directive configuration.
       */
      immutable?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'max-age'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'must-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'must-understand'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts optional qualifiers (header
       * names).
       */
      'no-cache'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'no-store'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'no-transform'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts optional qualifiers (header
       * names).
       */
      private?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'proxy-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      public?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      's-maxage'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'stale-if-error'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'stale-while-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;
    }

    export namespace ActionParameters {
      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with optional qualifiers.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;

        /**
         * Optional list of header names to qualify the directive (e.g., for "private" or
         * "no-cache" directives).
         */
        qualifiers?: Array<string>;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with optional qualifiers.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;

        /**
         * Optional list of header names to qualify the directive (e.g., for "private" or
         * "no-cache" directives).
         */
        qualifiers?: Array<string>;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsSetCacheTagsRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_tags';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?:
      | RulesetsSetCacheTagsRule.AddCacheTagsValues
      | RulesetsSetCacheTagsRule.AddCacheTagsExpression
      | RulesetsSetCacheTagsRule.RemoveCacheTagsValues
      | RulesetsSetCacheTagsRule.RemoveCacheTagsExpression
      | RulesetsSetCacheTagsRule.SetCacheTagsValues
      | RulesetsSetCacheTagsRule.SetCacheTagsExpression;

    /**
     * An informative description of the rule.
     */
    description?: string;

    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsSetCacheTagsRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsSetCacheTagsRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheTagsRule {
    /**
     * Add cache tags using a list of values.
     */
    export interface AddCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Add cache tags using an expression.
     */
    export interface AddCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Remove cache tags using a list of values.
     */
    export interface RemoveCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Remove cache tags using an expression.
     */
    export interface RemoveCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Set cache tags using a list of values.
     */
    export interface SetCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Set cache tags using an expression.
     */
    export interface SetCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsTransformResponseHTMLRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'transform_response_html';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsTransformResponseHTMLRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsTransformResponseHTMLRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsTransformResponseHTMLRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsTransformResponseHTMLRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Enables the link maze transformation on the response.
       */
      link_maze: unknown;
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }
}

export interface RulesetUpdateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Query param: Validates the request without persisting changes when set to
   * `true`. Responses that normally return 200 return `result: null`; endpoints that
   * normally return 204 continue to return 204.
   */
  dry_run?: boolean;

  /**
   * Body param: An informative description of the ruleset.
   */
  description?: string;

  /**
   * Body param: The kind of the ruleset.
   */
  kind?: KindParam;

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name?: string;

  /**
   * Body param: The phase of the ruleset.
   */
  phase?: PhaseParam;

  /**
   * Body param: The list of rules in the ruleset.
   */
  rules?: Array<
    | RulesAPI.BlockRuleParam
    | RulesetUpdateParams.RulesetsChallengeRule
    | RulesAPI.CompressResponseRuleParam
    | RulesAPI.DDoSDynamicRuleParam
    | RulesAPI.ExecuteRuleParam
    | RulesAPI.ForceConnectionCloseRuleParam
    | RulesetUpdateParams.RulesetsJSChallengeRule
    | RulesAPI.LogRuleParam
    | RulesAPI.LogCustomFieldRuleParam
    | RulesAPI.ManagedChallengeRuleParam
    | RulesAPI.RedirectRuleParam
    | RulesAPI.RewriteRuleParam
    | RulesAPI.RouteRuleParam
    | RulesAPI.ScoreRuleParam
    | RulesAPI.ServeErrorRuleParam
    | RulesetUpdateParams.RulesetsSetCacheControlRule
    | RulesAPI.SetCacheSettingsRuleParam
    | RulesetUpdateParams.RulesetsSetCacheTagsRule
    | RulesAPI.SetConfigRuleParam
    | RulesAPI.SkipRuleParam
    | RulesetUpdateParams.RulesetsTransformResponseHTMLRule
  >;
}

export namespace RulesetUpdateParams {
  export interface RulesetsChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsChallengeRule {
    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsJSChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsJSChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsJSChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsJSChallengeRule {
    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsSetCacheControlRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_control';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetCacheControlRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsSetCacheControlRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsSetCacheControlRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheControlRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A cache-control directive configuration.
       */
      immutable?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'max-age'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'must-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'must-understand'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts optional qualifiers (header
       * names).
       */
      'no-cache'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'no-store'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'no-transform'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts optional qualifiers (header
       * names).
       */
      private?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      'proxy-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration.
       */
      public?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      's-maxage'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'stale-if-error'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;

      /**
       * A cache-control directive configuration that accepts a duration value in
       * seconds.
       */
      'stale-while-revalidate'?: ActionParameters.SetDirective | ActionParameters.RemoveDirective;
    }

    export namespace ActionParameters {
      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with optional qualifiers.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;

        /**
         * Optional list of header names to qualify the directive (e.g., for "private" or
         * "no-cache" directives).
         */
        qualifiers?: Array<string>;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with optional qualifiers.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;

        /**
         * Optional list of header names to qualify the directive (e.g., for "private" or
         * "no-cache" directives).
         */
        qualifiers?: Array<string>;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Set the directive with a duration value in seconds.
       */
      export interface SetDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * The duration value in seconds for the directive.
         */
        value: number;

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }

      /**
       * Remove the directive.
       */
      export interface RemoveDirective {
        /**
         * The operation to perform on the cache-control directive.
         */
        operation: 'set' | 'remove';

        /**
         * Whether the directive should only be applied to the Cloudflare CDN cache.
         */
        cloudflare_only?: boolean;
      }
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsSetCacheTagsRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_tags';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?:
      | RulesetsSetCacheTagsRule.AddCacheTagsValues
      | RulesetsSetCacheTagsRule.AddCacheTagsExpression
      | RulesetsSetCacheTagsRule.RemoveCacheTagsValues
      | RulesetsSetCacheTagsRule.RemoveCacheTagsExpression
      | RulesetsSetCacheTagsRule.SetCacheTagsValues
      | RulesetsSetCacheTagsRule.SetCacheTagsExpression;

    /**
     * An informative description of the rule.
     */
    description?: string;

    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsSetCacheTagsRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsSetCacheTagsRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheTagsRule {
    /**
     * Add cache tags using a list of values.
     */
    export interface AddCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Add cache tags using an expression.
     */
    export interface AddCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Remove cache tags using a list of values.
     */
    export interface RemoveCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Remove cache tags using an expression.
     */
    export interface RemoveCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Set cache tags using a list of values.
     */
    export interface SetCacheTagsValues {
      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';

      /**
       * A list of cache tag values.
       */
      values: Array<string>;
    }

    /**
     * Set cache tags using an expression.
     */
    export interface SetCacheTagsExpression {
      /**
       * An expression that evaluates to an array of cache tag values.
       */
      expression: string;

      /**
       * The operation to perform on the cache tags.
       */
      operation: 'add' | 'remove' | 'set';
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }

  export interface RulesetsTransformResponseHTMLRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'transform_response_html';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsTransformResponseHTMLRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    enabled?: boolean;

    /**
     * Configuration for exposed credential checking.
     */
    exposed_credential_check?: RulesetsTransformResponseHTMLRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.LoggingParam;

    /**
     * An object configuring the rule's rate limit behavior.
     */
    ratelimit?: RulesetsTransformResponseHTMLRule.Ratelimit;

    /**
     * The reference of the rule (the rule's ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsTransformResponseHTMLRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Enables the link maze transformation on the response.
       */
      link_maze: unknown;
    }

    /**
     * Configuration for exposed credential checking.
     */
    export interface ExposedCredentialCheck {
      /**
       * An expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * An expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's rate limit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the rate limit counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: number;

      /**
       * An expression that defines when the rate limit counter should be incremented. It
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Whether counting is only performed when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * A response header name provided by the origin, which contains the score to
       * increment rate limit counter with.
       */
      score_response_header_name?: string;
    }
  }
}

export interface RulesetListParams extends CursorPaginationParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;
}

export interface RulesetDeleteParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Query param: Validates the request without persisting changes when set to
   * `true`. Responses that normally return 200 return `result: null`; endpoints that
   * normally return 204 continue to return 204.
   */
  dry_run?: boolean;
}

export interface RulesetGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

Rulesets.Phases = Phases;
Rulesets.BasePhases = BasePhases;
Rulesets.Rules = Rules;
Rulesets.BaseRules = BaseRules;
Rulesets.Versions = Versions;
Rulesets.BaseVersions = BaseVersions;

export declare namespace Rulesets {
  export {
    type Kind as Kind,
    type Phase as Phase,
    type Ruleset as Ruleset,
    type RulesetCreateResponse as RulesetCreateResponse,
    type RulesetUpdateResponse as RulesetUpdateResponse,
    type RulesetListResponse as RulesetListResponse,
    type RulesetGetResponse as RulesetGetResponse,
    type RulesetListResponsesCursorPagination as RulesetListResponsesCursorPagination,
    type RulesetCreateParams as RulesetCreateParams,
    type RulesetUpdateParams as RulesetUpdateParams,
    type RulesetListParams as RulesetListParams,
    type RulesetDeleteParams as RulesetDeleteParams,
    type RulesetGetParams as RulesetGetParams,
  };

  export {
    Phases as Phases,
    BasePhases as BasePhases,
    type PhaseUpdateResponse as PhaseUpdateResponse,
    type PhaseGetResponse as PhaseGetResponse,
    type PhaseUpdateParams as PhaseUpdateParams,
    type PhaseGetParams as PhaseGetParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RulesAPIBlockRule as BlockRule,
    type CompressResponseRule as CompressResponseRule,
    type RulesAPIDDoSDynamicRule as DDoSDynamicRule,
    type RulesAPIExecuteRule as ExecuteRule,
    type RulesAPIForceConnectionCloseRule as ForceConnectionCloseRule,
    type RulesAPILogCustomFieldRule as LogCustomFieldRule,
    type RulesAPILogRule as LogRule,
    type Logging as Logging,
    type RulesAPIManagedChallengeRule as ManagedChallengeRule,
    type RulesAPIRedirectRule as RedirectRule,
    type RulesAPIRewriteRule as RewriteRule,
    type RulesAPIRouteRule as RouteRule,
    type RulesetRule as RulesetRule,
    type RulesAPIScoreRule as ScoreRule,
    type RulesAPIServeErrorRule as ServeErrorRule,
    type RulesAPISetCacheSettingsRule as SetCacheSettingsRule,
    type SetConfigRule as SetConfigRule,
    type RulesAPISkipRule as SkipRule,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleEditResponse as RuleEditResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleEditParams as RuleEditParams,
  };

  export {
    Versions as Versions,
    BaseVersions as BaseVersions,
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionListResponsesSinglePage as VersionListResponsesSinglePage,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionGetParams as VersionGetParams,
  };
}
