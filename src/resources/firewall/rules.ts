// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/firewall/rules';
import * as FiltersAPI from 'cloudflare/resources/filters';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Rules extends APIResource {
  /**
   * Create one or more firewall rules.
   */
  create(
    zoneIdentifier: string,
    body: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCreateResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options }) as Core.APIPromise<{
        result: RuleCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing firewall rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegacyJhsFilterRule | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LegacyJhsFilterRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches firewall rules in a zone. You can filter the results using several
   * optional parameters.
   */
  list(
    zoneIdentifier: string,
    query?: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegacyJhsFilterRulesV4PagePaginationArray, LegacyJhsFilterRule>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegacyJhsFilterRulesV4PagePaginationArray, LegacyJhsFilterRule>;
  list(
    zoneIdentifier: string,
    query: RuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegacyJhsFilterRulesV4PagePaginationArray, LegacyJhsFilterRule> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/rules`,
      LegacyJhsFilterRulesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing firewall rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    body: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegacyJhsFilterRule | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LegacyJhsFilterRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the priority of an existing firewall rule.
   */
  edit(
    zoneIdentifier: string,
    id: string,
    body: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEditResponse | null> {
    return (
      this._client.patch(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a firewall rule.
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegacyJhsFilterRule | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/rules/${id}`, options) as Core.APIPromise<{
        result: LegacyJhsFilterRule | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class LegacyJhsFilterRulesV4PagePaginationArray extends V4PagePaginationArray<LegacyJhsFilterRule> {}

export interface LegacyJhsFilterRule {
  /**
   * The unique identifier of the firewall rule.
   */
  id?: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

  /**
   * An informative summary of the firewall rule.
   */
  description?: string;

  filter?: FiltersAPI.LegacyJhsFilter | LegacyJhsFilterRule.LegacyJhsDeletedFilter;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused?: boolean;

  /**
   * The priority of the rule. Optional value used to define the processing order. A
   * lower number indicates a higher priority. If not provided, rules with a defined
   * priority will be processed before rules without a priority.
   */
  priority?: number;

  products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

  /**
   * A short reference tag. Allows you to select related firewall rules.
   */
  ref?: string;
}

export namespace LegacyJhsFilterRule {
  export interface LegacyJhsDeletedFilter {
    /**
     * The unique identifier of the filter.
     */
    id: string;

    /**
     * When true, indicates that the firewall rule was deleted.
     */
    deleted: boolean;
  }
}

export type RuleCreateResponse = Array<LegacyJhsFilterRule>;

export type RuleEditResponse = Array<LegacyJhsFilterRule>;

export type RuleCreateParams = unknown;

export type RuleUpdateParams = unknown;

export interface RuleListParams extends V4PagePaginationArrayParams {
  /**
   * The action to search for. Must be an exact match.
   */
  action?: string;

  /**
   * A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused?: boolean;
}

export interface RuleDeleteParams {
  /**
   * When true, indicates that Cloudflare should also delete the associated filter if
   * there are no other firewall rules referencing the filter.
   */
  delete_filter_if_unused?: boolean;
}

export type RuleEditParams = unknown;

export namespace Rules {
  export import LegacyJhsFilterRule = RulesAPI.LegacyJhsFilterRule;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import LegacyJhsFilterRulesV4PagePaginationArray = RulesAPI.LegacyJhsFilterRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
}
