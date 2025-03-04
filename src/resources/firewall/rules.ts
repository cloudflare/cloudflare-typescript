// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FiltersAPI from '../filters';
import * as RateLimitsAPI from '../rate-limits';
import { APIPromise } from '../../api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
 */
export class Rules extends APIResource {
  /**
   * Create one or more firewall rules.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  create(
    params: RuleCreateParams,
    options?: RequestOptions,
  ): PagePromise<FirewallRulesSinglePage, FirewallRule> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/firewall/rules`, SinglePage<FirewallRule>, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Updates an existing firewall rule.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  update(ruleID: string, params: RuleUpdateParams, options?: RequestOptions): APIPromise<FirewallRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/firewall/rules/${ruleID}`, { body, ...options }) as APIPromise<{
        result: FirewallRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches firewall rules in a zone. You can filter the results using several
   * optional parameters.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  list(
    params: RuleListParams,
    options?: RequestOptions,
  ): PagePromise<FirewallRulesV4PagePaginationArray, FirewallRule> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/firewall/rules`,
      V4PagePaginationArray<FirewallRule>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing firewall rule.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  delete(ruleID: string, params: RuleDeleteParams, options?: RequestOptions): APIPromise<FirewallRule> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/firewall/rules/${ruleID}`, options) as APIPromise<{
        result: FirewallRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes existing firewall rules.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  bulkDelete(
    params: RuleBulkDeleteParams,
    options?: RequestOptions,
  ): PagePromise<FirewallRulesSinglePage, FirewallRule> {
    const { zone_id } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/firewall/rules`, SinglePage<FirewallRule>, {
      method: 'delete',
      ...options,
    });
  }

  /**
   * Updates the priority of existing firewall rules.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  bulkEdit(
    params: RuleBulkEditParams,
    options?: RequestOptions,
  ): PagePromise<FirewallRulesSinglePage, FirewallRule> {
    const { zone_id, body } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/firewall/rules`, SinglePage<FirewallRule>, {
      body: body,
      method: 'patch',
      ...options,
    });
  }

  /**
   * Updates one or more existing firewall rules.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  bulkUpdate(
    params: RuleBulkUpdateParams,
    options?: RequestOptions,
  ): PagePromise<FirewallRulesSinglePage, FirewallRule> {
    const { zone_id, body } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/firewall/rules`, SinglePage<FirewallRule>, {
      body: body,
      method: 'put',
      ...options,
    });
  }

  /**
   * Updates the priority of an existing firewall rule.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  edit(
    ruleID: string,
    params: RuleEditParams,
    options?: RequestOptions,
  ): PagePromise<FirewallRulesSinglePage, FirewallRule> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/firewall/rules/${ruleID}`,
      SinglePage<FirewallRule>,
      { body, method: 'patch', ...options },
    );
  }

  /**
   * Fetches the details of a firewall rule.
   *
   * @deprecated The Firewall Rules API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  get(ruleID: string, params: RuleGetParams, options?: RequestOptions): APIPromise<FirewallRule> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/firewall/rules/${ruleID}`, options) as APIPromise<{
        result: FirewallRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FirewallRulesSinglePage = SinglePage<FirewallRule>;

export type FirewallRulesV4PagePaginationArray = V4PagePaginationArray<FirewallRule>;

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

export interface RuleCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to perform when the threshold of matched traffic within
   * the configured period is exceeded.
   */
  action: RuleCreateParams.Action;

  /**
   * Body param:
   */
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to perform when the threshold of matched traffic within
   * the configured period is exceeded.
   */
  action: RuleUpdateParams.Action;

  /**
   * Body param:
   */
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The unique identifier of the firewall rule.
   */
  id?: string;

  /**
   * Query param: The action to search for. Must be an exact match.
   */
  action?: string;

  /**
   * Query param: A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * Query param: When true, indicates that the firewall rule is currently paused.
   */
  paused?: boolean;
}

export interface RuleDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RuleBulkDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RuleBulkEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface RuleBulkUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface RuleEditParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RuleGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Rules {
  export {
    type DeletedFilter as DeletedFilter,
    type FirewallRule as FirewallRule,
    type Product as Product,
    type FirewallRulesSinglePage as FirewallRulesSinglePage,
    type FirewallRulesV4PagePaginationArray as FirewallRulesV4PagePaginationArray,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleBulkDeleteParams as RuleBulkDeleteParams,
    type RuleBulkEditParams as RuleBulkEditParams,
    type RuleBulkUpdateParams as RuleBulkUpdateParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
