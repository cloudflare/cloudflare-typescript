// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error';
import * as VersionsAPI from './versions';
import * as RulesAPI from '../rules';
import * as RulesetsAPI from '../rulesets';
import { SinglePage } from '../../../pagination';

export class Versions extends APIResource {
  /**
   * Fetches the versions of an account or zone entry point ruleset.
   */
  list(
    rulesetPhase: RulesetsAPI.PhaseParam,
    params?: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesSinglePage, VersionListResponse>;
  list(
    rulesetPhase: RulesetsAPI.PhaseParam,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesSinglePage, VersionListResponse>;
  list(
    rulesetPhase: RulesetsAPI.PhaseParam,
    params: VersionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesSinglePage, VersionListResponse> {
    if (isRequestOptions(params)) {
      return this.list(rulesetPhase, {}, params);
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
      `/${accountOrZone}/${accountOrZoneId}/rulesets/phases/${rulesetPhase}/entrypoint/versions`,
      VersionListResponsesSinglePage,
      options,
    );
  }

  /**
   * Fetches a specific version of an account or zone entry point ruleset.
   */
  get(
    rulesetPhase: RulesetsAPI.PhaseParam,
    rulesetVersion: string,
    params?: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse>;
  get(
    rulesetPhase: RulesetsAPI.PhaseParam,
    rulesetVersion: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse>;
  get(
    rulesetPhase: RulesetsAPI.PhaseParam,
    rulesetVersion: string,
    params: VersionGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(rulesetPhase, rulesetVersion, {}, params);
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
        `/${accountOrZone}/${accountOrZoneId}/rulesets/phases/${rulesetPhase}/entrypoint/versions/${rulesetVersion}`,
        options,
      ) as Core.APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class VersionListResponsesSinglePage extends SinglePage<VersionListResponse> {}

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
    | VersionGetResponse.RulesetsLogCustomFieldRule
    | VersionGetResponse.RulesetsDDoSDynamicRule
    | VersionGetResponse.RulesetsForceConnectionCloseRule
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
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Versions {
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListResponsesSinglePage = VersionsAPI.VersionListResponsesSinglePage;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
