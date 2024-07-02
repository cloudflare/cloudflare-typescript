// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error';
import * as PhasesAPI from './phases';
import * as RulesAPI from '../rules';
import * as RulesetsAPI from '../rulesets';
import * as VersionsAPI from './versions';

export class Phases extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Updates an account or zone entry point ruleset, creating a new version.
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
    | RulesAPI.ChallengeRule
    | RulesAPI.CompressResponseRule
    | RulesAPI.ExecuteRule
    | RulesAPI.JSChallengeRule
    | RulesAPI.LogRule
    | RulesAPI.ManagedChallengeRule
    | RulesAPI.RedirectRule
    | RulesAPI.RewriteRule
    | RulesAPI.RouteRule
    | RulesAPI.ScoreRule
    | RulesAPI.ServeErrorRule
    | RulesAPI.SetConfigRule
    | RulesAPI.SkipRule
    | RulesAPI.SetCacheSettingsRule
    | PhaseUpdateResponse.RulesetsLogCustomFieldRule
    | PhaseUpdateResponse.RulesetsDDoSDynamicRule
    | PhaseUpdateResponse.RulesetsForceConnectionCloseRule
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
  export interface RulesetsLogCustomFieldRule {
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
    action?: 'log_custom_field';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsLogCustomFieldRule.ActionParameters;

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
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogCustomFieldRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The cookie fields to log.
       */
      cookie_fields?: Array<ActionParameters.CookieField>;

      /**
       * The request fields to log.
       */
      request_fields?: Array<ActionParameters.RequestField>;

      /**
       * The response fields to log.
       */
      response_fields?: Array<ActionParameters.ResponseField>;
    }

    export namespace ActionParameters {
      /**
       * The cookie field to log.
       */
      export interface CookieField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The request field to log.
       */
      export interface RequestField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The response field to log.
       */
      export interface ResponseField {
        /**
         * The name of the field.
         */
        name: string;
      }
    }
  }

  export interface RulesetsDDoSDynamicRule {
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
    action?: 'ddos_dynamic';

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
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsForceConnectionCloseRule {
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
    action?: 'force_connection_close';

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
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
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
    | RulesAPI.ChallengeRule
    | RulesAPI.CompressResponseRule
    | RulesAPI.ExecuteRule
    | RulesAPI.JSChallengeRule
    | RulesAPI.LogRule
    | RulesAPI.ManagedChallengeRule
    | RulesAPI.RedirectRule
    | RulesAPI.RewriteRule
    | RulesAPI.RouteRule
    | RulesAPI.ScoreRule
    | RulesAPI.ServeErrorRule
    | RulesAPI.SetConfigRule
    | RulesAPI.SkipRule
    | RulesAPI.SetCacheSettingsRule
    | PhaseGetResponse.RulesetsLogCustomFieldRule
    | PhaseGetResponse.RulesetsDDoSDynamicRule
    | PhaseGetResponse.RulesetsForceConnectionCloseRule
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
  export interface RulesetsLogCustomFieldRule {
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
    action?: 'log_custom_field';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsLogCustomFieldRule.ActionParameters;

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
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogCustomFieldRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The cookie fields to log.
       */
      cookie_fields?: Array<ActionParameters.CookieField>;

      /**
       * The request fields to log.
       */
      request_fields?: Array<ActionParameters.RequestField>;

      /**
       * The response fields to log.
       */
      response_fields?: Array<ActionParameters.ResponseField>;
    }

    export namespace ActionParameters {
      /**
       * The cookie field to log.
       */
      export interface CookieField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The request field to log.
       */
      export interface RequestField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The response field to log.
       */
      export interface ResponseField {
        /**
         * The name of the field.
         */
        name: string;
      }
    }
  }

  export interface RulesetsDDoSDynamicRule {
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
    action?: 'ddos_dynamic';

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
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsForceConnectionCloseRule {
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
    action?: 'force_connection_close';

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
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }
}

export interface PhaseUpdateParams {
  /**
   * Body param: The list of rules in the ruleset.
   */
  rules: Array<
    | RulesAPI.BlockRuleParam
    | RulesAPI.ChallengeRuleParam
    | RulesAPI.CompressResponseRuleParam
    | RulesAPI.ExecuteRuleParam
    | RulesAPI.JSChallengeRuleParam
    | RulesAPI.LogRuleParam
    | RulesAPI.ManagedChallengeRuleParam
    | RulesAPI.RedirectRuleParam
    | RulesAPI.RewriteRuleParam
    | RulesAPI.RouteRuleParam
    | RulesAPI.ScoreRuleParam
    | RulesAPI.ServeErrorRuleParam
    | RulesAPI.SetConfigRuleParam
    | RulesAPI.SkipRuleParam
    | RulesAPI.SetCacheSettingsRuleParam
    | PhaseUpdateParams.RulesetsLogCustomFieldRule
    | PhaseUpdateParams.RulesetsDDoSDynamicRule
    | PhaseUpdateParams.RulesetsForceConnectionCloseRule
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
   * Body param: The human-readable name of the ruleset.
   */
  name?: string;
}

export namespace PhaseUpdateParams {
  export interface RulesetsLogCustomFieldRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'log_custom_field';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsLogCustomFieldRule.ActionParameters;

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
    logging?: RulesAPI.LoggingParam;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsLogCustomFieldRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The cookie fields to log.
       */
      cookie_fields?: Array<ActionParameters.CookieField>;

      /**
       * The request fields to log.
       */
      request_fields?: Array<ActionParameters.RequestField>;

      /**
       * The response fields to log.
       */
      response_fields?: Array<ActionParameters.ResponseField>;
    }

    export namespace ActionParameters {
      /**
       * The cookie field to log.
       */
      export interface CookieField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The request field to log.
       */
      export interface RequestField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The response field to log.
       */
      export interface ResponseField {
        /**
         * The name of the field.
         */
        name: string;
      }
    }
  }

  export interface RulesetsDDoSDynamicRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'ddos_dynamic';

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
    logging?: RulesAPI.LoggingParam;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsForceConnectionCloseRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'force_connection_close';

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
    logging?: RulesAPI.LoggingParam;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
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
  export import PhaseUpdateResponse = PhasesAPI.PhaseUpdateResponse;
  export import PhaseGetResponse = PhasesAPI.PhaseGetResponse;
  export import PhaseUpdateParams = PhasesAPI.PhaseUpdateParams;
  export import PhaseGetParams = PhasesAPI.PhaseGetParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListResponsesSinglePage = VersionsAPI.VersionListResponsesSinglePage;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
