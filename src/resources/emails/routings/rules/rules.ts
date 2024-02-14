// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/emails/routings/rules/rules';
import * as CatchAllsAPI from 'cloudflare/resources/emails/routings/rules/catch-alls';

export class Rules extends APIResource {
  catchAlls: CatchAllsAPI.CatchAlls = new CatchAllsAPI.CatchAlls(this._client);

  /**
   * Get information for a specific routing rule already created.
   */
  retrieve(
    zoneIdentifier: string,
    ruleIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleRetrieveResponse> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RuleRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update actions and matches, or enable/disable specific routing rules.
   */
  update(
    zoneIdentifier: string,
    ruleIdentifier: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
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
   * Rules consist of a set of criteria for matching emails (such as an email being
   * sent to a specific custom email address) plus a set of actions to take on the
   * email (like forwarding it to a specific destination address).
   */
  emailRoutingRoutingRulesCreateRoutingRule(
    zoneIdentifier: string,
    body: RuleEmailRoutingRoutingRulesCreateRoutingRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing routing rules.
   */
  emailRoutingRoutingRulesListRoutingRules(
    zoneIdentifier: string,
    query?: RuleEmailRoutingRoutingRulesListRoutingRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEmailRoutingRoutingRulesListRoutingRulesResponse | null>;
  emailRoutingRoutingRulesListRoutingRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEmailRoutingRoutingRulesListRoutingRulesResponse | null>;
  emailRoutingRoutingRulesListRoutingRules(
    zoneIdentifier: string,
    query: RuleEmailRoutingRoutingRulesListRoutingRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEmailRoutingRoutingRulesListRoutingRulesResponse | null> {
    if (isRequestOptions(query)) {
      return this.emailRoutingRoutingRulesListRoutingRules(zoneIdentifier, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing/rules`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RuleEmailRoutingRoutingRulesListRoutingRulesResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RuleRetrieveResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleRetrieveResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleRetrieveResponse.Matcher>;

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

export namespace RuleRetrieveResponse {
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

export interface RuleUpdateResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleUpdateResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleUpdateResponse.Matcher>;

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

export namespace RuleUpdateResponse {
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

export interface RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse.Matcher>;

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

export namespace RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse {
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

export type RuleEmailRoutingRoutingRulesListRoutingRulesResponse =
  Array<RuleEmailRoutingRoutingRulesListRoutingRulesResponse.RuleEmailRoutingRoutingRulesListRoutingRulesResponseItem>;

export namespace RuleEmailRoutingRoutingRulesListRoutingRulesResponse {
  export interface RuleEmailRoutingRoutingRulesListRoutingRulesResponseItem {
    /**
     * Routing rule identifier.
     */
    id?: string;

    /**
     * List actions patterns.
     */
    actions?: Array<RuleEmailRoutingRoutingRulesListRoutingRulesResponseItem.Action>;

    /**
     * Routing rule status.
     */
    enabled?: true | false;

    /**
     * Matching patterns to forward to your actions.
     */
    matchers?: Array<RuleEmailRoutingRoutingRulesListRoutingRulesResponseItem.Matcher>;

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

  export namespace RuleEmailRoutingRoutingRulesListRoutingRulesResponseItem {
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
}

export interface RuleUpdateParams {
  /**
   * List actions patterns.
   */
  actions: Array<RuleUpdateParams.Action>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<RuleUpdateParams.Matcher>;

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

export namespace RuleUpdateParams {
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

export interface RuleEmailRoutingRoutingRulesCreateRoutingRuleParams {
  /**
   * List actions patterns.
   */
  actions: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleParams.Action>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleParams.Matcher>;

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

export namespace RuleEmailRoutingRoutingRulesCreateRoutingRuleParams {
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

export interface RuleEmailRoutingRoutingRulesListRoutingRulesParams {
  /**
   * Filter by enabled routing rules.
   */
  enabled?: true | false;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;
}

export namespace Rules {
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse = RulesAPI.RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse;
  export import RuleEmailRoutingRoutingRulesListRoutingRulesResponse = RulesAPI.RuleEmailRoutingRoutingRulesListRoutingRulesResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleEmailRoutingRoutingRulesCreateRoutingRuleParams = RulesAPI.RuleEmailRoutingRoutingRulesCreateRoutingRuleParams;
  export import RuleEmailRoutingRoutingRulesListRoutingRulesParams = RulesAPI.RuleEmailRoutingRoutingRulesListRoutingRulesParams;
  export import CatchAlls = CatchAllsAPI.CatchAlls;
  export import CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse;
  export import CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse;
  export import CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams;
}
