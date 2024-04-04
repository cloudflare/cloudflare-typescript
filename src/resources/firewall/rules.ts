// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  ): Core.APIPromise<FirewallFilterRule | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FirewallFilterRule | null }>
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
  ): Core.PagePromise<FirewallFilterRulesV4PagePaginationArray, FirewallFilterRule>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallFilterRulesV4PagePaginationArray, FirewallFilterRule>;
  list(
    zoneIdentifier: string,
    query: RuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallFilterRulesV4PagePaginationArray, FirewallFilterRule> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/rules`,
      FirewallFilterRulesV4PagePaginationArray,
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
  ): Core.APIPromise<FirewallFilterRule | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FirewallFilterRule | null }>
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
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallFilterRule | null> {
    const { path_id, query_id, ...query } = params;
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/rules/${path_id}`, {
        query: { id: query_id, ...query },
        ...options,
      }) as Core.APIPromise<{ result: FirewallFilterRule | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class FirewallFilterRulesV4PagePaginationArray extends V4PagePaginationArray<FirewallFilterRule> {}

export interface FirewallFilterRule {
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

  filter?: UnnamedSchemaRefAb48d2d33259c9107401d174735701c7;

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

export type UnnamedSchemaRef6fe6c1eba94d9c3f475fb22f0118bf57 = Array<FirewallFilterRule>;

export type UnnamedSchemaRefAb48d2d33259c9107401d174735701c7 =
  | FiltersAPI.FirewallFilter
  | UnnamedSchemaRefAb48d2d33259c9107401d174735701c7.LegacyJhsDeletedFilter;

export namespace UnnamedSchemaRefAb48d2d33259c9107401d174735701c7 {
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

export type RuleCreateResponse = Array<FirewallFilterRule>;

export type RuleEditResponse = Array<FirewallFilterRule>;

export type RuleCreateParams = unknown;

export type RuleUpdateParams = unknown;

export interface RuleListParams extends V4PagePaginationArrayParams {
  /**
   * The unique identifier of the firewall rule.
   */
  id?: string;

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

export interface RuleGetParams {
  /**
   * Path param: The unique identifier of the firewall rule.
   */
  path_id: string;

  /**
   * Query param: The unique identifier of the firewall rule.
   */
  query_id?: string;
}

export namespace Rules {
  export import FirewallFilterRule = RulesAPI.FirewallFilterRule;
  export import UnnamedSchemaRef6fe6c1eba94d9c3f475fb22f0118bf57 = RulesAPI.UnnamedSchemaRef6fe6c1eba94d9c3f475fb22f0118bf57;
  export import UnnamedSchemaRefAb48d2d33259c9107401d174735701c7 = RulesAPI.UnnamedSchemaRefAb48d2d33259c9107401d174735701c7;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import FirewallFilterRulesV4PagePaginationArray = RulesAPI.FirewallFilterRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
