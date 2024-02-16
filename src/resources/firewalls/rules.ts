// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/firewalls/rules';

export class Rules extends APIResource {
  /**
   * Updates an existing firewall rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing firewall rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    body: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create one or more firewall rules.
   */
  firewallRulesCreateFirewallRules(
    zoneIdentifier: string,
    body: RuleFirewallRulesCreateFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesCreateFirewallRulesResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options }) as Core.APIPromise<{
        result: RuleFirewallRulesCreateFirewallRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches firewall rules in a zone. You can filter the results using several
   * optional parameters.
   */
  firewallRulesListFirewallRules(
    zoneIdentifier: string,
    query?: RuleFirewallRulesListFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesListFirewallRulesResponse | null>;
  firewallRulesListFirewallRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesListFirewallRulesResponse | null>;
  firewallRulesListFirewallRules(
    zoneIdentifier: string,
    query: RuleFirewallRulesListFirewallRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesListFirewallRulesResponse | null> {
    if (isRequestOptions(query)) {
      return this.firewallRulesListFirewallRules(zoneIdentifier, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/rules`, { query, ...options }) as Core.APIPromise<{
        result: RuleFirewallRulesListFirewallRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates one or more existing firewall rules.
   */
  firewallRulesUpdateFirewallRules(
    zoneIdentifier: string,
    body: RuleFirewallRulesUpdateFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesUpdateFirewallRulesResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options }) as Core.APIPromise<{
        result: RuleFirewallRulesUpdateFirewallRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the priority of existing firewall rules.
   */
  firewallRulesUpdatePriorityOfFirewallRules(
    zoneIdentifier: string,
    body: RuleFirewallRulesUpdatePriorityOfFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse | null> {
    return (
      this._client.patch(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options }) as Core.APIPromise<{
        result: RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a firewall rule.
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/rules/${id}`, options) as Core.APIPromise<{
        result: RuleGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RuleUpdateResponse {
  /**
   * The unique identifier of the firewall rule.
   */
  id: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

  filter: RuleUpdateResponse.LegacyJhsFilter | RuleUpdateResponse.LegacyJhsDeletedFilter;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused: boolean;

  /**
   * An informative summary of the firewall rule.
   */
  description?: string;

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

export namespace RuleUpdateResponse {
  export interface LegacyJhsFilter {
    /**
     * The unique identifier of the filter.
     */
    id?: string;

    /**
     * An informative summary of the filter.
     */
    description?: string;

    /**
     * The filter expression. For more information, refer to
     * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
     */
    expression?: string;

    /**
     * When true, indicates that the filter is currently paused.
     */
    paused?: boolean;

    /**
     * A short reference tag. Allows you to select related filters.
     */
    ref?: string;
  }

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

export interface RuleDeleteResponse {
  /**
   * The unique identifier of the firewall rule.
   */
  id: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

  /**
   * An informative summary of the firewall rule.
   */
  description?: string;

  filter?: RuleDeleteResponse.LegacyJhsFilter | RuleDeleteResponse.LegacyJhsDeletedFilter;

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

export namespace RuleDeleteResponse {
  export interface LegacyJhsFilter {
    /**
     * The unique identifier of the filter.
     */
    id?: string;

    /**
     * An informative summary of the filter.
     */
    description?: string;

    /**
     * The filter expression. For more information, refer to
     * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
     */
    expression?: string;

    /**
     * When true, indicates that the filter is currently paused.
     */
    paused?: boolean;

    /**
     * A short reference tag. Allows you to select related filters.
     */
    ref?: string;
  }

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

export type RuleFirewallRulesCreateFirewallRulesResponse =
  Array<RuleFirewallRulesCreateFirewallRulesResponse.RuleFirewallRulesCreateFirewallRulesResponseItem>;

export namespace RuleFirewallRulesCreateFirewallRulesResponse {
  export interface RuleFirewallRulesCreateFirewallRulesResponseItem {
    /**
     * The unique identifier of the firewall rule.
     */
    id: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    filter:
      | RuleFirewallRulesCreateFirewallRulesResponseItem.LegacyJhsFilter
      | RuleFirewallRulesCreateFirewallRulesResponseItem.LegacyJhsDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused: boolean;

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

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

  export namespace RuleFirewallRulesCreateFirewallRulesResponseItem {
    export interface LegacyJhsFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

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
}

export type RuleFirewallRulesListFirewallRulesResponse =
  Array<RuleFirewallRulesListFirewallRulesResponse.RuleFirewallRulesListFirewallRulesResponseItem>;

export namespace RuleFirewallRulesListFirewallRulesResponse {
  export interface RuleFirewallRulesListFirewallRulesResponseItem {
    /**
     * The unique identifier of the firewall rule.
     */
    id: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    filter:
      | RuleFirewallRulesListFirewallRulesResponseItem.LegacyJhsFilter
      | RuleFirewallRulesListFirewallRulesResponseItem.LegacyJhsDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused: boolean;

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

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

  export namespace RuleFirewallRulesListFirewallRulesResponseItem {
    export interface LegacyJhsFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

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
}

export type RuleFirewallRulesUpdateFirewallRulesResponse =
  Array<RuleFirewallRulesUpdateFirewallRulesResponse.RuleFirewallRulesUpdateFirewallRulesResponseItem>;

export namespace RuleFirewallRulesUpdateFirewallRulesResponse {
  export interface RuleFirewallRulesUpdateFirewallRulesResponseItem {
    /**
     * The unique identifier of the firewall rule.
     */
    id: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    filter:
      | RuleFirewallRulesUpdateFirewallRulesResponseItem.LegacyJhsFilter
      | RuleFirewallRulesUpdateFirewallRulesResponseItem.LegacyJhsDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused: boolean;

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

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

  export namespace RuleFirewallRulesUpdateFirewallRulesResponseItem {
    export interface LegacyJhsFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

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
}

export type RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse =
  Array<RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse.RuleFirewallRulesUpdatePriorityOfFirewallRulesResponseItem>;

export namespace RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse {
  export interface RuleFirewallRulesUpdatePriorityOfFirewallRulesResponseItem {
    /**
     * The unique identifier of the firewall rule.
     */
    id: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    filter:
      | RuleFirewallRulesUpdatePriorityOfFirewallRulesResponseItem.LegacyJhsFilter
      | RuleFirewallRulesUpdatePriorityOfFirewallRulesResponseItem.LegacyJhsDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused: boolean;

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

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

  export namespace RuleFirewallRulesUpdatePriorityOfFirewallRulesResponseItem {
    export interface LegacyJhsFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

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
}

export interface RuleGetResponse {
  /**
   * The unique identifier of the firewall rule.
   */
  id: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

  filter: RuleGetResponse.LegacyJhsFilter | RuleGetResponse.LegacyJhsDeletedFilter;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused: boolean;

  /**
   * An informative summary of the firewall rule.
   */
  description?: string;

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

export namespace RuleGetResponse {
  export interface LegacyJhsFilter {
    /**
     * The unique identifier of the filter.
     */
    id?: string;

    /**
     * An informative summary of the filter.
     */
    description?: string;

    /**
     * The filter expression. For more information, refer to
     * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
     */
    expression?: string;

    /**
     * When true, indicates that the filter is currently paused.
     */
    paused?: boolean;

    /**
     * A short reference tag. Allows you to select related filters.
     */
    ref?: string;
  }

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

export type RuleUpdateParams = unknown;

export interface RuleDeleteParams {
  /**
   * When true, indicates that Cloudflare should also delete the associated filter if
   * there are no other firewall rules referencing the filter.
   */
  delete_filter_if_unused?: boolean;
}

export type RuleFirewallRulesCreateFirewallRulesParams = unknown;

export interface RuleFirewallRulesListFirewallRulesParams {
  /**
   * The action to search for. Must be an exact match.
   */
  action?: string;

  /**
   * A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused?: boolean;

  /**
   * Number of firewall rules per page.
   */
  per_page?: number;
}

export type RuleFirewallRulesUpdateFirewallRulesParams = unknown;

export type RuleFirewallRulesUpdatePriorityOfFirewallRulesParams = unknown;

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleFirewallRulesCreateFirewallRulesResponse = RulesAPI.RuleFirewallRulesCreateFirewallRulesResponse;
  export import RuleFirewallRulesListFirewallRulesResponse = RulesAPI.RuleFirewallRulesListFirewallRulesResponse;
  export import RuleFirewallRulesUpdateFirewallRulesResponse = RulesAPI.RuleFirewallRulesUpdateFirewallRulesResponse;
  export import RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse = RulesAPI.RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleFirewallRulesCreateFirewallRulesParams = RulesAPI.RuleFirewallRulesCreateFirewallRulesParams;
  export import RuleFirewallRulesListFirewallRulesParams = RulesAPI.RuleFirewallRulesListFirewallRulesParams;
  export import RuleFirewallRulesUpdateFirewallRulesParams = RulesAPI.RuleFirewallRulesUpdateFirewallRulesParams;
  export import RuleFirewallRulesUpdatePriorityOfFirewallRulesParams = RulesAPI.RuleFirewallRulesUpdatePriorityOfFirewallRulesParams;
}
