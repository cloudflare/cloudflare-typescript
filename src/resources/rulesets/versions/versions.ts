// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { ByTag } from './by-tag';
import { CloudflareError } from '../../../error'
import * as VersionsAPI from './versions';
import * as RulesAPI from '../rules';
import * as RulesetsAPI from '../rulesets';
import * as ByTagAPI from './by-tag';
import { SinglePage } from '../../../pagination';

export class Versions extends APIResource {
  byTag: ByTagAPI.ByTag = new ByTagAPI.ByTag(this._client);

  /**
   * Fetches the versions of an account or zone ruleset.
   */
  list(rulesetId: string, params?: VersionListParams, options?: Core.RequestOptions): Core.PagePromise<VersionListResponsesSinglePage, VersionListResponse>
  list(rulesetId: string, options?: Core.RequestOptions): Core.PagePromise<VersionListResponsesSinglePage, VersionListResponse>
  list(rulesetId: string, params: VersionListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<VersionListResponsesSinglePage, VersionListResponse> {
    if (isRequestOptions(params)) {
      return this.list(rulesetId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return this._client.getAPIList(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/versions`, VersionListResponsesSinglePage, options);
  }

  /**
   * Deletes an existing version of an account or zone ruleset.
   */
  delete(rulesetId: string, rulesetVersion: string, params?: VersionDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>
  delete(rulesetId: string, rulesetVersion: string, options?: Core.RequestOptions): Core.APIPromise<void>
  delete(rulesetId: string, rulesetVersion: string, params: VersionDeleteParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(rulesetId, rulesetVersion, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return this._client.delete(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Fetches a specific version of an account or zone ruleset.
   */
  get(rulesetId: string, rulesetVersion: string, params?: VersionGetParams, options?: Core.RequestOptions): Core.APIPromise<VersionGetResponse>
  get(rulesetId: string, rulesetVersion: string, options?: Core.RequestOptions): Core.APIPromise<VersionGetResponse>
  get(rulesetId: string, rulesetVersion: string, params: VersionGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<VersionGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(rulesetId, rulesetVersion, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return (this._client.get(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`, options) as Core.APIPromise<{ result: VersionGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class VersionListResponsesSinglePage extends SinglePage<VersionListResponse> {
}

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
  rules: Array<RulesAPI.BlockRule | VersionGetResponse.RulesetsChallengeRule | RulesAPI.CompressResponseRule | RulesAPI.ExecuteRule | VersionGetResponse.RulesetsJSChallengeRule | RulesAPI.LogRule | RulesAPI.ManagedChallengeRule | RulesAPI.RedirectRule | RulesAPI.RewriteRule | RulesAPI.RouteRule | RulesAPI.ScoreRule | RulesAPI.ServeErrorRule | RulesAPI.SetConfigRule | RulesAPI.SkipRule | RulesAPI.SetCacheSettingsRule | RulesAPI.LogCustomFieldRule | RulesAPI.DDoSDynamicRule | RulesAPI.ForceConnectionCloseRule>;

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

export interface VersionDeleteParams {
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
  export import VersionDeleteParams = VersionsAPI.VersionDeleteParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
  export import ByTag = ByTagAPI.ByTag;
  export import ByTagGetResponse = ByTagAPI.ByTagGetResponse;
  export import ByTagGetParams = ByTagAPI.ByTagGetParams;
}
