// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as Shared from 'cloudflare/resources/shared';
import * as RulesAPI from 'cloudflare/resources/rulesets/rules';
import * as PhasesAPI from 'cloudflare/resources/rulesets/phases/phases';
import * as VersionsAPI from 'cloudflare/resources/rulesets/versions/versions';
import { SinglePage } from 'cloudflare/pagination';

export class Rulesets extends APIResource {
  phases: PhasesAPI.Phases = new PhasesAPI.Phases(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Creates a ruleset.
   */
  create(params: RulesetCreateParams, options?: Core.RequestOptions): Core.APIPromise<RulesetCreateResponse> {
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
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/rulesets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RulesetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an account or zone ruleset, creating a new version.
   */
  update(
    rulesetId: string,
    params: RulesetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetUpdateResponse> {
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
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RulesetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all rulesets.
   */
  list(
    params?: RulesetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RulesetsSinglePage, Ruleset>;
  list(options?: Core.RequestOptions): Core.PagePromise<RulesetsSinglePage, Ruleset>;
  list(
    params: RulesetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RulesetsSinglePage, Ruleset> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
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
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/rulesets`,
      RulesetsSinglePage,
      options,
    );
  }

  /**
   * Deletes all versions of an existing account or zone ruleset.
   */
  delete(
    rulesetId: string,
    params?: RulesetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(rulesetId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    rulesetId: string,
    params: RulesetDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(rulesetId, {}, params);
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
    return this._client.delete(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches the latest version of an account or zone ruleset.
   */
  get(
    rulesetId: string,
    params?: RulesetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetGetResponse>;
  get(rulesetId: string, options?: Core.RequestOptions): Core.APIPromise<RulesetGetResponse>;
  get(
    rulesetId: string,
    params: RulesetGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(rulesetId, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`,
        options,
      ) as Core.APIPromise<{ result: RulesetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RulesetsSinglePage extends SinglePage<Ruleset> {}

export interface BlockRule {
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
  action_parameters?: BlockRule.ActionParameters;

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
  logging?: Shared.UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace BlockRule {
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
}

export interface ExecuteRule {
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
  action_parameters?: ExecuteRule.ActionParameters;

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
  logging?: Shared.UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ExecuteRule {
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
}

export interface LogRule {
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
  logging?: Shared.UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export type RequestRule = BlockRule | ExecuteRule | LogRule | SkipRule;

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

export interface SkipRule {
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
  action_parameters?: SkipRule.ActionParameters;

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
  logging?: Shared.UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace SkipRule {
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
}

/**
 * A ruleset object.
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
  rules: Array<RequestRule>;

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
export interface RulesetUpdateResponse {
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
  rules: Array<RequestRule>;

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
  rules: Array<RequestRule>;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export interface RulesetCreateParams {
  /**
   * Body param: The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name: string;

  /**
   * Body param: The phase of the ruleset.
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
   * Body param: The list of rules in the ruleset.
   */
  rules: Array<RequestRule>;

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
}

export interface RulesetUpdateParams {
  /**
   * Body param: The list of rules in the ruleset.
   */
  rules: Array<RequestRule>;

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

export interface RulesetListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface RulesetDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
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

export namespace Rulesets {
  export import Phases = PhasesAPI.Phases;
  export import PhaseUpdateResponse = PhasesAPI.PhaseUpdateResponse;
  export import PhaseGetResponse = PhasesAPI.PhaseGetResponse;
  export import PhaseUpdateParams = PhasesAPI.PhaseUpdateParams;
  export import PhaseGetParams = PhasesAPI.PhaseGetParams;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionDeleteParams = VersionsAPI.VersionDeleteParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
