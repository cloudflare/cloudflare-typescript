// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesetsAPI from 'cloudflare/resources/rulesets/rulesets';
import * as PhasesAPI from 'cloudflare/resources/rulesets/phases';
import * as RulesAPI from 'cloudflare/resources/rulesets/rules';
import * as VersionsAPI from 'cloudflare/resources/rulesets/versions/versions';

export class Rulesets extends APIResource {
  phases: PhasesAPI.Phases = new PhasesAPI.Phases(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Creates a ruleset.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    body: RulesetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetCreateResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/rulesets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RulesetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all rulesets.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetListResponse> {
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/rulesets`, options) as Core.APIPromise<{
        result: RulesetListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all versions of an existing account or zone ruleset.
   */
  delete(
    accountOrZone: string,
    accountOrZoneId: string,
    rulesetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches the latest version of an account or zone ruleset.
   */
  get(
    accountOrZone: string,
    accountOrZoneId: string,
    rulesetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetGetResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`,
        options,
      ) as Core.APIPromise<{ result: RulesetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an account or zone ruleset, creating a new version.
   */
  replace(
    accountOrZone: string,
    accountOrZoneId: string,
    rulesetId: string,
    body: RulesetReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetReplaceResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RulesetReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A result.
 */
export interface RulesetCreateResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

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
  phase:
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
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesetCreateResponse.RulesetsBlockRule
    | RulesetCreateResponse.RulesetsExecuteRule
    | RulesetCreateResponse.RulesetsLogRule
    | RulesetCreateResponse.RulesetsSkipRule
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

export namespace RulesetCreateResponse {
  export interface RulesetsBlockRule {
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
    action?: 'block';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsBlockRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsBlockRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsBlockRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsExecuteRule {
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
    action?: 'execute';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsExecuteRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsExecuteRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsExecuteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The ID of the ruleset to execute.
       */
      id: string;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        /**
         * An action to override all rules with. This option has lower precedence than rule
         * and category overrides.
         */
        action?: string;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        /**
         * Whether to enable execution of all rules. This option has lower precedence than
         * rule and category overrides.
         */
        enabled?: boolean;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        /**
         * A sensitivity level to set for all rules. This option has lower precedence than
         * rule and category overrides and is only applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          /**
           * The name of the category to override.
           */
          category: string;

          /**
           * The action to override rules in the category with.
           */
          action?: string;

          /**
           * Whether to enable execution of rules in the category.
           */
          enabled?: boolean;

          /**
           * The sensitivity level to use for rules in the category.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          /**
           * The ID of the rule to override.
           */
          id: string;

          /**
           * The action to override the rule with.
           */
          action?: string;

          /**
           * Whether to enable execution of the rule.
           */
          enabled?: boolean;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          /**
           * The sensitivity level to use for the rule.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsLogRule {
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
    action?: 'log';

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsLogRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogRule {
    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsSkipRule {
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
    action?: 'skip';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSkipRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsSkipRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSkipRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<
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
        | 'http_request_select_configuration'
        | 'http_request_transform'
        | 'http_response_compression'
        | 'http_response_firewall_managed'
        | 'http_response_headers_transform'
        | 'magic_transit'
        | 'magic_transit_ids_managed'
        | 'magic_transit_managed'
      >;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: Record<string, Array<string>>;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<string>;
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }
}

/**
 * A result.
 */
export type RulesetListResponse = Array<RulesetListResponse.RulesetListResponseItem>;

export namespace RulesetListResponse {
  /**
   * A ruleset object.
   */
  export interface RulesetListResponseItem {
    /**
     * The kind of the ruleset.
     */
    kind: 'managed' | 'custom' | 'root' | 'zone';

    /**
     * The human-readable name of the ruleset.
     */
    name: string;

    /**
     * The phase of the ruleset.
     */
    phase:
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
      | 'http_request_select_configuration'
      | 'http_request_transform'
      | 'http_response_compression'
      | 'http_response_firewall_managed'
      | 'http_response_headers_transform'
      | 'magic_transit'
      | 'magic_transit_ids_managed'
      | 'magic_transit_managed';

    /**
     * The unique ID of the ruleset.
     */
    id?: string;

    /**
     * An informative description of the ruleset.
     */
    description?: string;

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated?: string;

    /**
     * The version of the ruleset.
     */
    version?: string;
  }
}

/**
 * A result.
 */
export interface RulesetGetResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

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
  phase:
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
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesetGetResponse.RulesetsBlockRule
    | RulesetGetResponse.RulesetsExecuteRule
    | RulesetGetResponse.RulesetsLogRule
    | RulesetGetResponse.RulesetsSkipRule
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
  export interface RulesetsBlockRule {
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
    action?: 'block';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsBlockRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsBlockRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsBlockRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsExecuteRule {
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
    action?: 'execute';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsExecuteRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsExecuteRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsExecuteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The ID of the ruleset to execute.
       */
      id: string;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        /**
         * An action to override all rules with. This option has lower precedence than rule
         * and category overrides.
         */
        action?: string;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        /**
         * Whether to enable execution of all rules. This option has lower precedence than
         * rule and category overrides.
         */
        enabled?: boolean;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        /**
         * A sensitivity level to set for all rules. This option has lower precedence than
         * rule and category overrides and is only applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          /**
           * The name of the category to override.
           */
          category: string;

          /**
           * The action to override rules in the category with.
           */
          action?: string;

          /**
           * Whether to enable execution of rules in the category.
           */
          enabled?: boolean;

          /**
           * The sensitivity level to use for rules in the category.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          /**
           * The ID of the rule to override.
           */
          id: string;

          /**
           * The action to override the rule with.
           */
          action?: string;

          /**
           * Whether to enable execution of the rule.
           */
          enabled?: boolean;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          /**
           * The sensitivity level to use for the rule.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsLogRule {
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
    action?: 'log';

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsLogRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogRule {
    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsSkipRule {
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
    action?: 'skip';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSkipRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsSkipRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSkipRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<
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
        | 'http_request_select_configuration'
        | 'http_request_transform'
        | 'http_response_compression'
        | 'http_response_firewall_managed'
        | 'http_response_headers_transform'
        | 'magic_transit'
        | 'magic_transit_ids_managed'
        | 'magic_transit_managed'
      >;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: Record<string, Array<string>>;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<string>;
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }
}

/**
 * A result.
 */
export interface RulesetReplaceResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

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
  phase:
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
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesetReplaceResponse.RulesetsBlockRule
    | RulesetReplaceResponse.RulesetsExecuteRule
    | RulesetReplaceResponse.RulesetsLogRule
    | RulesetReplaceResponse.RulesetsSkipRule
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

export namespace RulesetReplaceResponse {
  export interface RulesetsBlockRule {
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
    action?: 'block';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsBlockRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsBlockRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsBlockRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsExecuteRule {
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
    action?: 'execute';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsExecuteRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsExecuteRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsExecuteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The ID of the ruleset to execute.
       */
      id: string;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        /**
         * An action to override all rules with. This option has lower precedence than rule
         * and category overrides.
         */
        action?: string;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        /**
         * Whether to enable execution of all rules. This option has lower precedence than
         * rule and category overrides.
         */
        enabled?: boolean;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        /**
         * A sensitivity level to set for all rules. This option has lower precedence than
         * rule and category overrides and is only applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          /**
           * The name of the category to override.
           */
          category: string;

          /**
           * The action to override rules in the category with.
           */
          action?: string;

          /**
           * Whether to enable execution of rules in the category.
           */
          enabled?: boolean;

          /**
           * The sensitivity level to use for rules in the category.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          /**
           * The ID of the rule to override.
           */
          id: string;

          /**
           * The action to override the rule with.
           */
          action?: string;

          /**
           * Whether to enable execution of the rule.
           */
          enabled?: boolean;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          /**
           * The sensitivity level to use for the rule.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsLogRule {
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
    action?: 'log';

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsLogRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogRule {
    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsSkipRule {
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
    action?: 'skip';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSkipRule.ActionParameters;

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsSkipRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSkipRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<
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
        | 'http_request_select_configuration'
        | 'http_request_transform'
        | 'http_response_compression'
        | 'http_response_firewall_managed'
        | 'http_response_headers_transform'
        | 'magic_transit'
        | 'magic_transit_ids_managed'
        | 'magic_transit_managed'
      >;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: Record<string, Array<string>>;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<string>;
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }
}

export interface RulesetCreateParams {
  /**
   * The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase:
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
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesetCreateParams.RulesetsBlockRule
    | RulesetCreateParams.RulesetsExecuteRule
    | RulesetCreateParams.RulesetsLogRule
    | RulesetCreateParams.RulesetsSkipRule
  >;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RulesetCreateParams {
  export interface RulesetsBlockRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'block';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsBlockRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsBlockRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsBlockRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsExecuteRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'execute';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsExecuteRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsExecuteRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsExecuteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The ID of the ruleset to execute.
       */
      id: string;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        /**
         * An action to override all rules with. This option has lower precedence than rule
         * and category overrides.
         */
        action?: string;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        /**
         * Whether to enable execution of all rules. This option has lower precedence than
         * rule and category overrides.
         */
        enabled?: boolean;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        /**
         * A sensitivity level to set for all rules. This option has lower precedence than
         * rule and category overrides and is only applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          /**
           * The name of the category to override.
           */
          category: string;

          /**
           * The action to override rules in the category with.
           */
          action?: string;

          /**
           * Whether to enable execution of rules in the category.
           */
          enabled?: boolean;

          /**
           * The sensitivity level to use for rules in the category.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          /**
           * The ID of the rule to override.
           */
          id: string;

          /**
           * The action to override the rule with.
           */
          action?: string;

          /**
           * Whether to enable execution of the rule.
           */
          enabled?: boolean;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          /**
           * The sensitivity level to use for the rule.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsLogRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'log';

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsLogRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogRule {
    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsSkipRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'skip';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSkipRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsSkipRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSkipRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<
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
        | 'http_request_select_configuration'
        | 'http_request_transform'
        | 'http_response_compression'
        | 'http_response_firewall_managed'
        | 'http_response_headers_transform'
        | 'magic_transit'
        | 'magic_transit_ids_managed'
        | 'magic_transit_managed'
      >;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: Record<string, Array<string>>;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<string>;
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }
}

export interface RulesetReplaceParams {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesetReplaceParams.RulesetsBlockRule
    | RulesetReplaceParams.RulesetsExecuteRule
    | RulesetReplaceParams.RulesetsLogRule
    | RulesetReplaceParams.RulesetsSkipRule
  >;

  /**
   * An informative description of the ruleset.
   */
  description?: string;

  /**
   * The kind of the ruleset.
   */
  kind?: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * The human-readable name of the ruleset.
   */
  name?: string;

  /**
   * The phase of the ruleset.
   */
  phase?:
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
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';
}

export namespace RulesetReplaceParams {
  export interface RulesetsBlockRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'block';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsBlockRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsBlockRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsBlockRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsExecuteRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'execute';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsExecuteRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsExecuteRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsExecuteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The ID of the ruleset to execute.
       */
      id: string;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        /**
         * An action to override all rules with. This option has lower precedence than rule
         * and category overrides.
         */
        action?: string;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        /**
         * Whether to enable execution of all rules. This option has lower precedence than
         * rule and category overrides.
         */
        enabled?: boolean;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        /**
         * A sensitivity level to set for all rules. This option has lower precedence than
         * rule and category overrides and is only applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          /**
           * The name of the category to override.
           */
          category: string;

          /**
           * The action to override rules in the category with.
           */
          action?: string;

          /**
           * Whether to enable execution of rules in the category.
           */
          enabled?: boolean;

          /**
           * The sensitivity level to use for rules in the category.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          /**
           * The ID of the rule to override.
           */
          id: string;

          /**
           * The action to override the rule with.
           */
          action?: string;

          /**
           * Whether to enable execution of the rule.
           */
          enabled?: boolean;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          /**
           * The sensitivity level to use for the rule.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsLogRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'log';

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
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsLogRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogRule {
    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface RulesetsSkipRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'skip';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSkipRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesetsSkipRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSkipRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<
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
        | 'http_request_select_configuration'
        | 'http_request_transform'
        | 'http_response_compression'
        | 'http_response_firewall_managed'
        | 'http_response_headers_transform'
        | 'magic_transit'
        | 'magic_transit_ids_managed'
        | 'magic_transit_managed'
      >;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: Record<string, Array<string>>;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<string>;
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }
}

export namespace Rulesets {
  export import RulesetCreateResponse = RulesetsAPI.RulesetCreateResponse;
  export import RulesetListResponse = RulesetsAPI.RulesetListResponse;
  export import RulesetGetResponse = RulesetsAPI.RulesetGetResponse;
  export import RulesetReplaceResponse = RulesetsAPI.RulesetReplaceResponse;
  export import RulesetCreateParams = RulesetsAPI.RulesetCreateParams;
  export import RulesetReplaceParams = RulesetsAPI.RulesetReplaceParams;
  export import Phases = PhasesAPI.Phases;
  export import PhaseGetResponse = PhasesAPI.PhaseGetResponse;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
}
