// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/email-routing/rules/rules';
import * as CatchAllsAPI from 'cloudflare/resources/email-routing/rules/catch-alls';
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
  ): Core.APIPromise<EmailRule> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EmailRule }>
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
  ): Core.APIPromise<EmailRule> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EmailRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing routing rules.
   */
  list(
    zoneIdentifier: string,
    query?: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EmailRulesV4PagePaginationArray, EmailRule>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EmailRulesV4PagePaginationArray, EmailRule>;
  list(
    zoneIdentifier: string,
    query: RuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EmailRulesV4PagePaginationArray, EmailRule> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/email/routing/rules`,
      EmailRulesV4PagePaginationArray,
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
  ): Core.APIPromise<EmailRule> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: EmailRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information for a specific routing rule already created.
   */
  get(
    zoneIdentifier: string,
    ruleIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailRule> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: EmailRule }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class EmailRulesV4PagePaginationArray extends V4PagePaginationArray<EmailRule> {}

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
export interface ActionItem {
  /**
   * Type of supported action.
   */
  type: 'drop' | 'forward' | 'worker';

  value: Array<string>;
}

export interface EmailRule {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<ActionItem>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<MatcherItem>;

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
export interface MatcherItem {
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

export interface Properties {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<ActionItem>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<MatcherItem>;

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

export interface RuleCreateParams {
  /**
   * List actions patterns.
   */
  actions: Array<ActionItem>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<MatcherItem>;

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

export interface RuleUpdateParams {
  /**
   * List actions patterns.
   */
  actions: Array<ActionItem>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<MatcherItem>;

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

export interface RuleListParams extends V4PagePaginationArrayParams {
  /**
   * Filter by enabled routing rules.
   */
  enabled?: true | false;
}

export namespace Rules {
  export import Action = RulesAPI.Action;
  export import ActionItem = RulesAPI.ActionItem;
  export import EmailRule = RulesAPI.EmailRule;
  export import Matcher = RulesAPI.Matcher;
  export import MatcherItem = RulesAPI.MatcherItem;
  export import Properties = RulesAPI.Properties;
  export import EmailRulesV4PagePaginationArray = RulesAPI.EmailRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import CatchAlls = CatchAllsAPI.CatchAlls;
  export import CatchAllRule = CatchAllsAPI.CatchAllRule;
  export import CatchAllUpdateParams = CatchAllsAPI.CatchAllUpdateParams;
}
