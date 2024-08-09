// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CloudflareError } from '../../error';
import * as RulesAPI from './rules';
import * as PhasesAPI from './phases/phases';
import * as VersionsAPI from './versions/versions';
import { SinglePage } from '../../pagination';

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
  ): Core.PagePromise<RulesetListResponsesSinglePage, RulesetListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<RulesetListResponsesSinglePage, RulesetListResponse>;
  list(
    params: RulesetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RulesetListResponsesSinglePage, RulesetListResponse> {
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
      RulesetListResponsesSinglePage,
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

export class RulesetListResponsesSinglePage extends SinglePage<RulesetListResponse> {}

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
  | 'http_request_select_configuration'
  | 'http_request_transform'
  | 'http_response_compression'
  | 'http_response_firewall_managed'
  | 'http_response_headers_transform'
  | 'magic_transit'
  | 'magic_transit_ids_managed'
  | 'magic_transit_managed';

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
  | 'http_request_select_configuration'
  | 'http_request_transform'
  | 'http_response_compression'
  | 'http_response_firewall_managed'
  | 'http_response_headers_transform'
  | 'magic_transit'
  | 'magic_transit_ids_managed'
  | 'magic_transit_managed';

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
    | RulesAPI.LogCustomFieldRule
    | RulesAPI.DDoSDynamicRule
    | RulesAPI.ForceConnectionCloseRule
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
    | RulesAPI.LogCustomFieldRule
    | RulesAPI.DDoSDynamicRule
    | RulesAPI.ForceConnectionCloseRule
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
    | RulesAPI.LogCustomFieldRule
    | RulesAPI.DDoSDynamicRule
    | RulesAPI.ForceConnectionCloseRule
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
    | RulesAPI.LogCustomFieldRuleParam
    | RulesAPI.DDoSDynamicRuleParam
    | RulesAPI.ForceConnectionCloseRuleParam
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
}

export interface RulesetUpdateParams {
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
    | RulesAPI.LogCustomFieldRuleParam
    | RulesAPI.DDoSDynamicRuleParam
    | RulesAPI.ForceConnectionCloseRuleParam
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
  kind?: KindParam;

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name?: string;

  /**
   * Body param: The phase of the ruleset.
   */
  phase?: PhaseParam;
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
  export import BlockRule = RulesAPI.BlockRule;
  export import ChallengeRule = RulesAPI.ChallengeRule;
  export import CompressResponseRule = RulesAPI.CompressResponseRule;
  export import DDoSDynamicRule = RulesAPI.DDoSDynamicRule;
  export import ExecuteRule = RulesAPI.ExecuteRule;
  export import ForceConnectionCloseRule = RulesAPI.ForceConnectionCloseRule;
  export import JSChallengeRule = RulesAPI.JSChallengeRule;
  export import LogCustomFieldRule = RulesAPI.LogCustomFieldRule;
  export import LogRule = RulesAPI.LogRule;
  export import Logging = RulesAPI.Logging;
  export import ManagedChallengeRule = RulesAPI.ManagedChallengeRule;
  export import RedirectRule = RulesAPI.RedirectRule;
  export import RewriteRule = RulesAPI.RewriteRule;
  export import RewriteURIPart = RulesAPI.RewriteURIPart;
  export import RouteRule = RulesAPI.RouteRule;
  export import RulesetRule = RulesAPI.RulesetRule;
  export import ScoreRule = RulesAPI.ScoreRule;
  export import ServeErrorRule = RulesAPI.ServeErrorRule;
  export import SetCacheSettingsRule = RulesAPI.SetCacheSettingsRule;
  export import SetConfigRule = RulesAPI.SetConfigRule;
  export import SkipRule = RulesAPI.SkipRule;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListResponsesSinglePage = VersionsAPI.VersionListResponsesSinglePage;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionDeleteParams = VersionsAPI.VersionDeleteParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
