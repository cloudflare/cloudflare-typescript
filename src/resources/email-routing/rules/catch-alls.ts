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
    params: CatchAllUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatchAllUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/email/routing/rules/catch_all`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CatchAllUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information on the default catch-all routing rule.
   */
  get(params: CatchAllGetParams, options?: Core.RequestOptions): Core.APIPromise<CatchAllGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/email/routing/rules/catch_all`, options) as Core.APIPromise<{
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: List actions for the catch-all routing rule.
   */
  actions: Array<CatchAllActionParam>;

  /**
   * Body param: List of matchers for the catch-all routing rule.
   */
  matchers: Array<CatchAllMatcherParam>;

  /**
   * Body param: Routing rule status.
   */
  enabled?: true | false;

  /**
   * Body param: Routing rule name.
   */
  name?: string;
}

export interface CatchAllGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace CatchAlls {
  export import CatchAllAction = CatchAllsAPI.CatchAllAction;
  export import CatchAllMatcher = CatchAllsAPI.CatchAllMatcher;
  export import CatchAllUpdateResponse = CatchAllsAPI.CatchAllUpdateResponse;
  export import CatchAllGetResponse = CatchAllsAPI.CatchAllGetResponse;
  export import CatchAllUpdateParams = CatchAllsAPI.CatchAllUpdateParams;
  export import CatchAllGetParams = CatchAllsAPI.CatchAllGetParams;
}
