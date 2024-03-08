// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CatchAllsAPI from 'cloudflare/resources/email-routing/routing/rules/catch-alls';

export class CatchAlls extends APIResource {
  /**
   * Enable or disable catch-all routing rule, or change action to forward to
   * specific destination address.
   */
  update(
    zoneIdentifier: string,
    body: CatchAllUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailCatchAllRule> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EmailCatchAllRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information on the default catch-all routing rule.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<EmailCatchAllRule> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, options) as Core.APIPromise<{
        result: EmailCatchAllRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EmailCatchAllRule {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<EmailCatchAllRule.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<EmailCatchAllRule.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * @deprecated: Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace EmailCatchAllRule {
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

export interface CatchAllUpdateParams {
  /**
   * List actions for the catch-all routing rule.
   */
  actions: Array<CatchAllUpdateParams.Action>;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers: Array<CatchAllUpdateParams.Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;
}

export namespace CatchAllUpdateParams {
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
  export import EmailCatchAllRule = CatchAllsAPI.EmailCatchAllRule;
  export import CatchAllUpdateParams = CatchAllsAPI.CatchAllUpdateParams;
}
