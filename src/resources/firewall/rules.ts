// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/firewall/rules';
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
  ): Core.APIPromise<RuleUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse }>
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
  ): Core.PagePromise<RuleListResponsesV4PagePaginationArray, RuleListResponse>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleListResponsesV4PagePaginationArray, RuleListResponse>;
  list(
    zoneIdentifier: string,
    query: RuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleListResponsesV4PagePaginationArray, RuleListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/rules`,
      RuleListResponsesV4PagePaginationArray,
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
  ): Core.APIPromise<RuleDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleDeleteResponse }>
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
  ): Core.APIPromise<RuleGetResponse> {
    const { path_id, query_id, ...query } = params;
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/rules/${path_id}`, {
        query: { id: query_id, ...query },
        ...options,
      }) as Core.APIPromise<{ result: RuleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RuleListResponsesV4PagePaginationArray extends V4PagePaginationArray<RuleListResponse> {}

export type RuleCreateResponse = Array<RuleCreateResponse.RuleCreateResponseItem>;

export namespace RuleCreateResponse {
  export interface RuleCreateResponseItem {
    /**
     * The unique identifier of the firewall rule.
     */
    id: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    filter: RuleCreateResponseItem.FirewallFilter | RuleCreateResponseItem.FirewallDeletedFilter;

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

  export namespace RuleCreateResponseItem {
    export interface FirewallFilter {
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

    export interface FirewallDeletedFilter {
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

  filter: RuleUpdateResponse.FirewallFilter | RuleUpdateResponse.FirewallDeletedFilter;

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
  export interface FirewallFilter {
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

  export interface FirewallDeletedFilter {
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

export interface RuleListResponse {
  /**
   * The unique identifier of the firewall rule.
   */
  id: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

  filter: RuleListResponse.FirewallFilter | RuleListResponse.FirewallDeletedFilter;

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

export namespace RuleListResponse {
  export interface FirewallFilter {
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

  export interface FirewallDeletedFilter {
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

  filter?: RuleDeleteResponse.FirewallFilter | RuleDeleteResponse.FirewallDeletedFilter;

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
  export interface FirewallFilter {
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

  export interface FirewallDeletedFilter {
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

export type RuleEditResponse = Array<RuleEditResponse.RuleEditResponseItem>;

export namespace RuleEditResponse {
  export interface RuleEditResponseItem {
    /**
     * The unique identifier of the firewall rule.
     */
    id: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    filter: RuleEditResponseItem.FirewallFilter | RuleEditResponseItem.FirewallDeletedFilter;

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

  export namespace RuleEditResponseItem {
    export interface FirewallFilter {
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

    export interface FirewallDeletedFilter {
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

  filter: RuleGetResponse.FirewallFilter | RuleGetResponse.FirewallDeletedFilter;

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
  export interface FirewallFilter {
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

  export interface FirewallDeletedFilter {
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
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
