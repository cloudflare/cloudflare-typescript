// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RulesAPI from './rules';
import * as FiltersAPI from '../filters';
import * as RateLimitsAPI from '../rate-limits';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Rules extends APIResource {
  /**
   * Create one or more firewall rules.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
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
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallRule> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FirewallRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches firewall rules in a zone. You can filter the results using several
   * optional parameters.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  list(
    zoneIdentifier: string,
    query?: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallRulesV4PagePaginationArray, FirewallRule>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallRulesV4PagePaginationArray, FirewallRule>;
  list(
    zoneIdentifier: string,
    query: RuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallRulesV4PagePaginationArray, FirewallRule> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/rules`,
      FirewallRulesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing firewall rule.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  delete(zoneIdentifier: string, id: string, options?: Core.RequestOptions): Core.APIPromise<FirewallRule> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/rules/${id}`, options) as Core.APIPromise<{
        result: FirewallRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the priority of an existing firewall rule.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
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
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  get(
    zoneIdentifier: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallRule> {
    const { path_id, query_id, ...query } = params;
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/rules/${path_id}`, {
        query: { id: query_id, ...query },
        ...options,
      }) as Core.APIPromise<{ result: FirewallRule }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class FirewallRulesV4PagePaginationArray extends V4PagePaginationArray<FirewallRule> {}

export interface FirewallRule {
  /**
   * The unique identifier of the firewall rule.
   */
  id?: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action?: RateLimitsAPI.Action;

  /**
   * An informative summary of the firewall rule.
   */
  description?: string;

  filter?: FiltersAPI.FirewallFilter | DeletedFilter;

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

  products?: Array<Product>;

  /**
   * A short reference tag. Allows you to select related firewall rules.
   */
  ref?: string;
}

/**
 * A list of products to bypass for a request when using the `bypass` action.
 */
export type Product = 'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf';

export interface DeletedFilter {
  /**
   * The unique identifier of the filter.
   */
  id: string;

  /**
   * When true, indicates that the firewall rule was deleted.
   */
  deleted: boolean;
}

export type RuleCreateResponse = Array<FirewallRule>;

export type RuleEditResponse = Array<FirewallRule>;

export interface RuleCreateParams {
  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  action: RuleCreateParams.Action;

  filter: FiltersAPI.FirewallFilterParam;
}

export namespace RuleCreateParams {
  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  export interface Action {
    /**
     * The action to perform.
     */
    mode?: 'simulate' | 'ban' | 'challenge' | 'js_challenge' | 'managed_challenge';

    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    response?: Action.Response;

    /**
     * The time in seconds during which Cloudflare will perform the mitigation action.
     * Must be an integer value greater than or equal to the period. Notes: If "mode"
     * is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the
     * zone's Challenge Passage time and you should not provide this value.
     */
    timeout?: number;
  }

  export namespace Action {
    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    export interface Response {
      /**
       * The response body to return. The value must conform to the configured content
       * type.
       */
      body?: string;

      /**
       * The content type of the body. Must be one of the following: `text/plain`,
       * `text/xml`, or `application/json`.
       */
      content_type?: string;
    }
  }
}

export interface RuleUpdateParams {
  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  action: RuleUpdateParams.Action;

  filter: FiltersAPI.FirewallFilterParam;
}

export namespace RuleUpdateParams {
  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  export interface Action {
    /**
     * The action to perform.
     */
    mode?: 'simulate' | 'ban' | 'challenge' | 'js_challenge' | 'managed_challenge';

    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    response?: Action.Response;

    /**
     * The time in seconds during which Cloudflare will perform the mitigation action.
     * Must be an integer value greater than or equal to the period. Notes: If "mode"
     * is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the
     * zone's Challenge Passage time and you should not provide this value.
     */
    timeout?: number;
  }

  export namespace Action {
    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    export interface Response {
      /**
       * The response body to return. The value must conform to the configured content
       * type.
       */
      body?: string;

      /**
       * The content type of the body. Must be one of the following: `text/plain`,
       * `text/xml`, or `application/json`.
       */
      content_type?: string;
    }
  }
}

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

export interface RuleEditParams {}

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
  export import FirewallRule = RulesAPI.FirewallRule;
  export import Product = RulesAPI.Product;
  export import DeletedFilter = RulesAPI.DeletedFilter;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import FirewallRulesV4PagePaginationArray = RulesAPI.FirewallRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
