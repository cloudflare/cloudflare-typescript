// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CatchAllsAPI from 'cloudflare/resources/emails/routings/rules/catch-alls';

export class CatchAlls extends APIResource {
  /**
   * Get information on the default catch-all routing rule.
   */
  emailRoutingRoutingRulesGetCatchAllRule(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, options) as Core.APIPromise<{
        result: CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable or disable catch-all routing rule, or change action to forward to
   * specific destination address.
   */
  emailRoutingRoutingRulesUpdateCatchAllRule(
    zoneIdentifier: string,
    body: CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse {
  /**
   * Action for the catch-all routing rule.
   */
  export interface Action {
    /**
     * Type of action for catch-all rule.
     */
    type: 'drop' | 'forward' | 'worker';

    value?: Array<string>;
  }

  /**
   * Matcher for catch-all routing rule.
   */
  export interface Matcher {
    /**
     * Type of matcher. Default is 'all'.
     */
    type: 'all';
  }
}

export interface CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse {
  /**
   * Action for the catch-all routing rule.
   */
  export interface Action {
    /**
     * Type of action for catch-all rule.
     */
    type: 'drop' | 'forward' | 'worker';

    value?: Array<string>;
  }

  /**
   * Matcher for catch-all routing rule.
   */
  export interface Matcher {
    /**
     * Type of matcher. Default is 'all'.
     */
    type: 'all';
  }
}

export interface CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams {
  /**
   * List actions for the catch-all routing rule.
   */
  actions: Array<CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams.Action>;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers: Array<CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams.Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;
}

export namespace CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams {
  /**
   * Action for the catch-all routing rule.
   */
  export interface Action {
    /**
     * Type of action for catch-all rule.
     */
    type: 'drop' | 'forward' | 'worker';

    value?: Array<string>;
  }

  /**
   * Matcher for catch-all routing rule.
   */
  export interface Matcher {
    /**
     * Type of matcher. Default is 'all'.
     */
    type: 'all';
  }
}

export namespace CatchAlls {
  export import CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse;
  export import CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse;
  export import CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams;
}
