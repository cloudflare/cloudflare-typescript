// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CatchAllsAPI from 'cloudflare/resources/emails/routing/rules/catch-alls';

export class CatchAlls extends APIResource {
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

  /**
   * Enable or disable catch-all routing rule, or change action to forward to
   * specific destination address.
   */
  replace(
    zoneIdentifier: string,
    body: CatchAllReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatchAllReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/catch_all`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CatchAllReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CatchAllGetResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<CatchAllGetResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<CatchAllGetResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace CatchAllGetResponse {
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

export interface CatchAllReplaceResponse {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions for the catch-all routing rule.
   */
  actions?: Array<CatchAllReplaceResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers?: Array<CatchAllReplaceResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

export namespace CatchAllReplaceResponse {
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

export interface CatchAllReplaceParams {
  /**
   * List actions for the catch-all routing rule.
   */
  actions: Array<CatchAllReplaceParams.Action>;

  /**
   * List of matchers for the catch-all routing rule.
   */
  matchers: Array<CatchAllReplaceParams.Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;
}

export namespace CatchAllReplaceParams {
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
  export import CatchAllGetResponse = CatchAllsAPI.CatchAllGetResponse;
  export import CatchAllReplaceResponse = CatchAllsAPI.CatchAllReplaceResponse;
  export import CatchAllReplaceParams = CatchAllsAPI.CatchAllReplaceParams;
}
