// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CatchAllsAPI from 'cloudflare/resources/email-routing/rules/catch-alls';

export class CatchAlls extends APIResource {
  /**
   * Enable or disable catch-all routing rule, or change action to forward to
   * specific destination address.
   */
  update(
    zoneIdentifier: string,
    body: CatchAllUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatchAllRule> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CatchAllRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information on the default catch-all routing rule.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<CatchAllRule> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, options) as Core.APIPromise<{
        result: CatchAllRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export interface CatchAllRule {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * @deprecated: Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
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

export interface CatchAllUpdateParams {
  /**
   * List actions for the catch-all routing rule.
   */
  actions: Array<Action>;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers: Array<Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;
}

export namespace CatchAlls {
  export import Action = CatchAllsAPI.Action;
  export import CatchAllRule = CatchAllsAPI.CatchAllRule;
  export import Matcher = CatchAllsAPI.Matcher;
  export import CatchAllUpdateParams = CatchAllsAPI.CatchAllUpdateParams;
}
