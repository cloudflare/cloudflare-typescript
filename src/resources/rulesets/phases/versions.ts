// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RulesAPI from '../rules';
import * as RulesetsAPI from '../rulesets';
import { APIPromise } from '../../../core/api-promise';
import { CloudflareError } from '../../../core/error';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['rulesets', 'phases', 'versions'] = Object.freeze([
    'rulesets',
    'phases',
    'versions',
  ] as const);

  /**
   * Fetches the versions of an account or zone entry point ruleset.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const versionListResponse of client.rulesets.phases.versions.list(
   *   'http_request_firewall_custom',
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    rulesetPhase: RulesetsAPI.PhaseParam,
    params: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VersionListResponsesSinglePage, VersionListResponse> {
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
    return this._client.getAPIList(
      path`/${accountOrZone}/${accountOrZoneId}/rulesets/phases/${rulesetPhase}/entrypoint/versions`,
      SinglePage<VersionListResponse>,
      options,
    );
  }

  /**
   * Fetches a specific version of an account or zone entry point ruleset.
   *
   * @example
   * ```ts
   * const version = await client.rulesets.phases.versions.get(
   *   '1',
   *   {
   *     ruleset_phase: 'http_request_firewall_custom',
   *     account_id: 'account_id',
   *   },
   * );
   * ```
   */
  get(
    rulesetVersion: string,
    params: VersionGetParams,
    options?: RequestOptions,
  ): APIPromise<VersionGetResponse> {
    const { ruleset_phase, account_id, zone_id } = params;
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
        path`/${accountOrZone}/${accountOrZoneId}/rulesets/phases/${ruleset_phase}/entrypoint/versions/${rulesetVersion}`,
        options,
      ) as APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Versions extends BaseVersions {}

export type VersionListResponsesSinglePage = SinglePage<VersionListResponse>;

/**
 * A ruleset object.
 */
export interface VersionListResponse {
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
export interface VersionGetResponse {
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
    | VersionGetResponse.BlockRule
    | VersionGetResponse.ChallengeRule
    | VersionGetResponse.ResponseCompressionRule
    | VersionGetResponse.DDoSDynamicRule
    | VersionGetResponse.ExecuteRule
    | VersionGetResponse.ForceConnectionCloseRule
    | VersionGetResponse.JavaScriptChallengeRule
    | VersionGetResponse.LogRule
    | VersionGetResponse.LogCustomFieldRule
    | VersionGetResponse.ManagedChallengeRule
    | VersionGetResponse.RedirectRule
    | VersionGetResponse.RewriteRule
    | VersionGetResponse.RouteRule
    | VersionGetResponse.ScoreRule
    | VersionGetResponse.ServeErrorRule
    | VersionGetResponse.SetCacheControlRule
    | VersionGetResponse.SetCacheSettingsRule
    | VersionGetResponse.SetCacheTagsRule
    | VersionGetResponse.SetConfigurationRule
    | VersionGetResponse.SkipRule
    | VersionGetResponse.TransformResponseHTMLRule
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

export namespace VersionGetResponse {
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

export interface VersionListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface VersionGetParams {
  /**
   * The phase of the ruleset.
   */
  ruleset_phase: RulesetsAPI.PhaseParam;

  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionListResponsesSinglePage as VersionListResponsesSinglePage,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
