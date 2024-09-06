// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RulesAPI from './rules';
import * as CatchAllsAPI from './catch-alls';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Rules extends APIResource {
  catchAlls: CatchAllsAPI.CatchAlls = new CatchAllsAPI.CatchAlls(this._client);

  /**
   * Rules consist of a set of criteria for matching emails (such as an email being
   * sent to a specific custom email address) plus a set of actions to take on the
   * email (like forwarding it to a specific destination address).
   */
  create(params: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmailRoutingRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/email/routing/rules`, { body, ...options }) as Core.APIPromise<{
        result: EmailRoutingRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update actions and matches, or enable/disable specific routing rules.
   */
  update(
    ruleIdentifier: string,
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailRoutingRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/email/routing/rules/${ruleIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EmailRoutingRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing routing rules.
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EmailRoutingRulesV4PagePaginationArray, EmailRoutingRule> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/email/routing/rules`,
      EmailRoutingRulesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a specific routing rule.
   */
  delete(
    ruleIdentifier: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailRoutingRule> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: EmailRoutingRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information for a specific routing rule already created.
   */
  get(
    ruleIdentifier: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailRoutingRule> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: EmailRoutingRule }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class EmailRoutingRulesV4PagePaginationArray extends V4PagePaginationArray<EmailRoutingRule> {}

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
 * Actions pattern.
 */
export interface ActionParam {
  /**
   * Type of supported action.
   */
  type: 'drop' | 'forward' | 'worker';

  value: Array<string>;
}

export interface EmailRoutingRule {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * @deprecated: Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
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

/**
 * Matching pattern to forward your actions.
 */
export interface MatcherParam {
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

export interface RuleCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: List actions patterns.
   */
  actions: Array<ActionParam>;

  /**
   * Body param: Matching patterns to forward to your actions.
   */
  matchers: Array<MatcherParam>;

  /**
   * Body param: Routing rule status.
   */
  enabled?: true | false;

  /**
   * Body param: Routing rule name.
   */
  name?: string;

  /**
   * Body param: Priority of the routing rule.
   */
  priority?: number;
}

export interface RuleUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: List actions patterns.
   */
  actions: Array<ActionParam>;

  /**
   * Body param: Matching patterns to forward to your actions.
   */
  matchers: Array<MatcherParam>;

  /**
   * Body param: Routing rule status.
   */
  enabled?: true | false;

  /**
   * Body param: Routing rule name.
   */
  name?: string;

  /**
   * Body param: Priority of the routing rule.
   */
  priority?: number;
}

export interface RuleListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Filter by enabled routing rules.
   */
  enabled?: true | false;
}

export interface RuleDeleteParams {
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

export namespace Rules {
  export import Action = RulesAPI.Action;
  export import EmailRoutingRule = RulesAPI.EmailRoutingRule;
  export import Matcher = RulesAPI.Matcher;
  export import EmailRoutingRulesV4PagePaginationArray = RulesAPI.EmailRoutingRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
  export import CatchAlls = CatchAllsAPI.CatchAlls;
  export import CatchAllAction = CatchAllsAPI.CatchAllAction;
  export import CatchAllMatcher = CatchAllsAPI.CatchAllMatcher;
  export import CatchAllUpdateResponse = CatchAllsAPI.CatchAllUpdateResponse;
  export import CatchAllGetResponse = CatchAllsAPI.CatchAllGetResponse;
  export import CatchAllUpdateParams = CatchAllsAPI.CatchAllUpdateParams;
  export import CatchAllGetParams = CatchAllsAPI.CatchAllGetParams;
}
