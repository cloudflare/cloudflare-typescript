// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CatchAllsAPI from './catch-alls';

export class CatchAlls extends APIResource {
  /**
   * Enable or disable catch-all routing rule, or change action to forward to
   * specific destination address.
   */
  update(
    zoneIdentifier: string,
    body: CatchAllUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatchAllUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CatchAllUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information on the default catch-all routing rule.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<CatchAllGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, options) as Core.APIPromise<{
        result: CatchAllGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Action for the catch-all routing rule.
 */
export interface CatchAllAction {
  /**
   * Type of action for catch-all rule.
   */
  type: 'drop' | 'forward' | 'worker';

  value?: Array<string>;
}

/**
 * Action for the catch-all routing rule.
 */
export interface CatchAllActionParam {
  /**
   * Type of action for catch-all rule.
   */
  type: 'drop' | 'forward' | 'worker';

  value?: Array<string>;
}

/**
 * Matcher for catch-all routing rule.
 */
export interface CatchAllMatcher {
  /**
   * Type of matcher. Default is 'all'.
   */
  type: 'all';
}

/**
 * Matcher for catch-all routing rule.
 */
export interface CatchAllMatcherParam {
  /**
   * Type of matcher. Default is 'all'.
   */
  type: 'all';
}

export interface CatchAllUpdateResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<CatchAllAction>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<CatchAllMatcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * @deprecated: Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export interface CatchAllGetResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<CatchAllAction>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<CatchAllMatcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * @deprecated: Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export interface CatchAllUpdateParams {
  /**
   * List actions for the catch-all routing rule.
   */
  actions: Array<CatchAllActionParam>;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers: Array<CatchAllMatcherParam>;

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
  export import CatchAllAction = CatchAllsAPI.CatchAllAction;
  export import CatchAllMatcher = CatchAllsAPI.CatchAllMatcher;
  export import CatchAllUpdateResponse = CatchAllsAPI.CatchAllUpdateResponse;
  export import CatchAllGetResponse = CatchAllsAPI.CatchAllGetResponse;
  export import CatchAllUpdateParams = CatchAllsAPI.CatchAllUpdateParams;
}
