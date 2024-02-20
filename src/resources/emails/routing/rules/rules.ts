// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/emails/routing/rules/rules';
import * as CatchAllsAPI from 'cloudflare/resources/emails/routing/rules/catch-alls';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Rules extends APIResource {
  catchAlls: CatchAllsAPI.CatchAlls = new CatchAllsAPI.CatchAlls(this._client);

  /**
   * Rules consist of a set of criteria for matching emails (such as an email being
   * sent to a specific custom email address) plus a set of actions to take on the
   * email (like forwarding it to a specific destination address).
   */
  create(
    zoneIdentifier: string,
    body: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing routing rules.
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
      `/zones/${zoneIdentifier}/email/routing/rules`,
      RuleListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a specific routing rule.
   */
  delete(
    zoneIdentifier: string,
    ruleIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RuleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information for a specific routing rule already created.
   */
  get(
    zoneIdentifier: string,
    ruleIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RuleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update actions and matches, or enable/disable specific routing rules.
   */
  replace(
    zoneIdentifier: string,
    ruleIdentifier: string,
    body: RuleReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RuleListResponsesV4PagePaginationArray extends V4PagePaginationArray<RuleListResponse> {}

export interface RuleCreateResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleCreateResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleCreateResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace RuleCreateResponse {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleListResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleListResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleListResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace RuleListResponse {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleDeleteResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleDeleteResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleDeleteResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace RuleDeleteResponse {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleGetResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleGetResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleGetResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace RuleGetResponse {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleReplaceResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleReplaceResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleReplaceResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace RuleReplaceResponse {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleCreateParams {
  /**
   * List actions patterns.
   */
  actions: Array<RuleCreateParams.Action>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<RuleCreateParams.Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;
}

export namespace RuleCreateParams {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleListParams extends V4PagePaginationArrayParams {
  /**
   * Filter by enabled routing rules.
   */
  enabled?: true | false;
}

export interface RuleReplaceParams {
  /**
   * List actions patterns.
   */
  actions: Array<RuleReplaceParams.Action>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<RuleReplaceParams.Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;
}

export namespace RuleReplaceParams {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export namespace Rules {
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleReplaceResponse = RulesAPI.RuleReplaceResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleReplaceParams = RulesAPI.RuleReplaceParams;
  export import CatchAlls = CatchAllsAPI.CatchAlls;
  export import CatchAllGetResponse = CatchAllsAPI.CatchAllGetResponse;
  export import CatchAllReplaceResponse = CatchAllsAPI.CatchAllReplaceResponse;
  export import CatchAllReplaceParams = CatchAllsAPI.CatchAllReplaceParams;
}
