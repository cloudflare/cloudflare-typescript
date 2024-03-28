// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as PhasesAPI from 'cloudflare/resources/rulesets/phases/phases';
import * as RulesetsAPI from 'cloudflare/resources/rulesets/rulesets';
import * as VersionsAPI from 'cloudflare/resources/rulesets/phases/versions';

export class Phases extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Updates an account or zone entry point ruleset, creating a new version.
   */
  update(
    rulesetPhase:
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
      | 'magic_transit_managed',
    params: PhaseUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.Ruleset> {
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
      }) as Core.APIPromise<{ result: RulesetsAPI.Ruleset }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the latest version of the account or zone entry point ruleset for a
   * given phase.
   */
  get(
    rulesetPhase:
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
      | 'magic_transit_managed',
    params?: PhaseGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.Ruleset>;
  get(
    rulesetPhase:
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
      | 'magic_transit_managed',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.Ruleset>;
  get(
    rulesetPhase:
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
      | 'magic_transit_managed',
    params: PhaseGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.Ruleset> {
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
      ) as Core.APIPromise<{ result: RulesetsAPI.Ruleset }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PhaseUpdateParams {
  /**
   * Body param: The unique ID of the ruleset.
   */
  id: string;

  /**
   * Body param: The list of rules in the ruleset.
   */
  rules: Array<
    | PhaseUpdateParams.RulesetsBlockRule
    | PhaseUpdateParams.RulesetsExecuteRule
    | PhaseUpdateParams.RulesetsLogRule
    | PhaseUpdateParams.RulesetsSkipRule
  >;

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
   * Body param: The kind of the ruleset.
   */
  kind?: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name?: string;

  /**
   * Body param: The phase of the ruleset.
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

export namespace PhaseUpdateParams {
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

export namespace Phases {
  export import PhaseUpdateParams = PhasesAPI.PhaseUpdateParams;
  export import PhaseGetParams = PhasesAPI.PhaseGetParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionListResponsesSinglePage = VersionsAPI.VersionListResponsesSinglePage;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
