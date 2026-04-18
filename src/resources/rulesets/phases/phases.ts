// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as RulesAPI from '../rules';
import * as RulesetsAPI from '../rulesets';
import * as VersionsAPI from './versions';
import {
  VersionGetParams,
  VersionGetResponse,
  VersionListParams,
  VersionListResponse,
  VersionListResponsesSinglePage,
  Versions,
} from './versions';
import { CloudflareError } from '../../../error';

export class Phases extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Updates an account or zone entry point ruleset, creating a new version.
   *
   * @example
   * ```ts
   * const phase = await client.rulesets.phases.update(
   *   'http_request_firewall_custom',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  update(
    rulesetPhase: RulesetsAPI.PhaseParam,
    params: PhaseUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhaseUpdateResponse> {
    const { account_id, zone_id, ...body } = params;
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
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/rulesets/phases/${rulesetPhase}/entrypoint`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PhaseUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the latest version of the account or zone entry point ruleset for a
   * given phase.
   *
   * @example
   * ```ts
   * const phase = await client.rulesets.phases.get(
   *   'http_request_firewall_custom',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    rulesetPhase: RulesetsAPI.PhaseParam,
    params?: PhaseGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhaseGetResponse>;
  get(rulesetPhase: RulesetsAPI.PhaseParam, options?: Core.RequestOptions): Core.APIPromise<PhaseGetResponse>;
  get(
    rulesetPhase: RulesetsAPI.PhaseParam,
    params: PhaseGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhaseGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(rulesetPhase, {}, params);
    }
    const { account_id, zone_id } = params;
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
        `/${accountOrZone}/${accountOrZoneId}/rulesets/phases/${rulesetPhase}/entrypoint`,
        options,
      ) as Core.APIPromise<{ result: PhaseGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A ruleset object.
 */
export interface PhaseUpdateResponse {
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
    | RulesAPI.BlockRule
    | PhaseUpdateResponse.RulesetsChallengeRule
    | RulesAPI.CompressResponseRule
    | RulesAPI.DDoSDynamicRule
    | RulesAPI.ExecuteRule
    | RulesAPI.ForceConnectionCloseRule
    | PhaseUpdateResponse.RulesetsJSChallengeRule
    | RulesAPI.LogRule
    | RulesAPI.LogCustomFieldRule
    | RulesAPI.ManagedChallengeRule
    | RulesAPI.RedirectRule
    | RulesAPI.RewriteRule
    | RulesAPI.RouteRule
    | RulesAPI.ScoreRule
    | RulesAPI.ServeErrorRule
    | PhaseUpdateResponse.RulesetsSetCacheControlRule
    | RulesAPI.SetCacheSettingsRule
    | PhaseUpdateResponse.RulesetsSetCacheTagsRule
    | RulesAPI.SetConfigRule
    | RulesAPI.SkipRule
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

export namespace PhaseUpdateResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    logging?: RulesAPI.Logging;

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
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    logging?: RulesAPI.Logging;

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
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    exposed_credential_check?: RulesetsSetCacheControlRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

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
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    exposed_credential_check?: RulesetsSetCacheTagsRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

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
}

/**
 * A ruleset object.
 */
export interface PhaseGetResponse {
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
    | RulesAPI.BlockRule
    | PhaseGetResponse.RulesetsChallengeRule
    | RulesAPI.CompressResponseRule
    | RulesAPI.DDoSDynamicRule
    | RulesAPI.ExecuteRule
    | RulesAPI.ForceConnectionCloseRule
    | PhaseGetResponse.RulesetsJSChallengeRule
    | RulesAPI.LogRule
    | RulesAPI.LogCustomFieldRule
    | RulesAPI.ManagedChallengeRule
    | RulesAPI.RedirectRule
    | RulesAPI.RewriteRule
    | RulesAPI.RouteRule
    | RulesAPI.ScoreRule
    | RulesAPI.ServeErrorRule
    | PhaseGetResponse.RulesetsSetCacheControlRule
    | RulesAPI.SetCacheSettingsRule
    | PhaseGetResponse.RulesetsSetCacheTagsRule
    | RulesAPI.SetConfigRule
    | RulesAPI.SkipRule
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

export namespace PhaseGetResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    logging?: RulesAPI.Logging;

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
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    logging?: RulesAPI.Logging;

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
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    exposed_credential_check?: RulesetsSetCacheControlRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

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
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

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
     * The categories of the rule.
     */
    categories?: Array<string>;

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
    exposed_credential_check?: RulesetsSetCacheTagsRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

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
}

export interface PhaseUpdateParams {
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
   * Body param: An informative description of the ruleset.
   */
  description?: string;

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name?: string;

  /**
   * Body param: The list of rules in the ruleset.
   */
  rules?: Array<
    | RulesAPI.BlockRuleParam
    | PhaseUpdateParams.RulesetsChallengeRule
    | RulesAPI.CompressResponseRuleParam
    | RulesAPI.DDoSDynamicRuleParam
    | RulesAPI.ExecuteRuleParam
    | RulesAPI.ForceConnectionCloseRuleParam
    | PhaseUpdateParams.RulesetsJSChallengeRule
    | RulesAPI.LogRuleParam
    | RulesAPI.LogCustomFieldRuleParam
    | RulesAPI.ManagedChallengeRuleParam
    | RulesAPI.RedirectRuleParam
    | RulesAPI.RewriteRuleParam
    | RulesAPI.RouteRuleParam
    | RulesAPI.ScoreRuleParam
    | RulesAPI.ServeErrorRuleParam
    | PhaseUpdateParams.RulesetsSetCacheControlRule
    | RulesAPI.SetCacheSettingsRuleParam
    | PhaseUpdateParams.RulesetsSetCacheTagsRule
    | RulesAPI.SetConfigRuleParam
    | RulesAPI.SkipRuleParam
  >;
}

export namespace PhaseUpdateParams {
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

    /**
     * Whether the rule should be executed.
     */
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

    /**
     * Whether the rule should be executed.
     */
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
}

export interface PhaseGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

Phases.Versions = Versions;
Phases.VersionListResponsesSinglePage = VersionListResponsesSinglePage;

export declare namespace Phases {
  export {
    type PhaseUpdateResponse as PhaseUpdateResponse,
    type PhaseGetResponse as PhaseGetResponse,
    type PhaseUpdateParams as PhaseUpdateParams,
    type PhaseGetParams as PhaseGetParams,
  };

  export {
    Versions as Versions,
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    VersionListResponsesSinglePage as VersionListResponsesSinglePage,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
  };
}
