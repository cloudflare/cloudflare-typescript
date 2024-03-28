// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagerulesAPI from 'cloudflare/resources/pagerules/pagerules';
import * as SettingsAPI from 'cloudflare/resources/pagerules/settings';

export class Pagerules extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Creates a new Page Rule.
   */
  create(
    params: PageruleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/pagerules`, { body, ...options }) as Core.APIPromise<{
        result: PageruleCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the configuration of an existing Page Rule. The configuration of the
   * updated Page Rule will exactly match the data passed in the API request.
   */
  update(
    pageruleId: string,
    params: PageruleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/pagerules/${pageruleId}`, { body, ...options }) as Core.APIPromise<{
        result: PageruleUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Page Rules in a zone.
   */
  list(params: PageruleListParams, options?: Core.RequestOptions): Core.APIPromise<PageruleListResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/pagerules`, { query, ...options }) as Core.APIPromise<{
        result: PageruleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing Page Rule.
   */
  delete(
    pageruleId: string,
    params: PageruleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/pagerules/${pageruleId}`, options) as Core.APIPromise<{
        result: PageruleDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates one or more fields of an existing Page Rule.
   */
  edit(
    pageruleId: string,
    params: PageruleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/pagerules/${pageruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PageruleEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a Page Rule.
   */
  get(
    pageruleId: string,
    params: PageruleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/pagerules/${pageruleId}`, options) as Core.APIPromise<{
        result: PageruleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZonesPagerule {
  /**
   * Identifier
   */
  id: string;

  /**
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<ZonesPagerule.Action>;

  /**
   * The timestamp of when the Page Rule was created.
   */
  created_on: string;

  /**
   * The timestamp of when the Page Rule was last modified.
   */
  modified_on: string;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority: number;

  /**
   * The status of the Page Rule.
   */
  status: 'active' | 'disabled';

  /**
   * The rule targets to evaluate on each request.
   */
  targets: Array<ZonesPagerule.Target>;
}

export namespace ZonesPagerule {
  export interface Action {
    /**
     * The timestamp of when the override was last modified.
     */
    modified_on?: string;

    /**
     * The type of route.
     */
    name?: 'forward_url';

    value?: Action.Value;
  }

  export namespace Action {
    export interface Value {
      /**
       * The response type for the URL redirect.
       */
      type?: 'temporary' | 'permanent';

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  /**
   * A request condition target.
   */
  export interface Target {
    /**
     * String constraint.
     */
    constraint: Target.Constraint;

    /**
     * A target based on the URL of the request.
     */
    target: 'url';
  }

  export namespace Target {
    /**
     * String constraint.
     */
    export interface Constraint {
      /**
       * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
       */
      operator: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

      /**
       * The URL pattern to match against the current request. The pattern may contain up
       * to four asterisks ('\*') as placeholders.
       */
      value: string;
    }
  }
}

export type PageruleCreateResponse = unknown | string;

export type PageruleUpdateResponse = unknown | string;

export type PageruleListResponse = Array<ZonesPagerule>;

export interface PageruleDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export type PageruleEditResponse = unknown | string;

export type PageruleGetResponse = unknown | string;

export interface PageruleCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The set of actions to perform if the targets of this rule match the
   * request. Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<PageruleCreateParams.Action>;

  /**
   * Body param: The rule targets to evaluate on each request.
   */
  targets: Array<PageruleCreateParams.Target>;

  /**
   * Body param: The priority of the rule, used to define which Page Rule is
   * processed over another. A higher number indicates a higher priority. For
   * example, if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
   * specific Page Rule to take precedence (rule B: `/images/special/*`), specify a
   * higher priority for rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * Body param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export namespace PageruleCreateParams {
  export interface Action {
    /**
     * The type of route.
     */
    name?: 'forward_url';

    value?: Action.Value;
  }

  export namespace Action {
    export interface Value {
      /**
       * The response type for the URL redirect.
       */
      type?: 'temporary' | 'permanent';

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  /**
   * A request condition target.
   */
  export interface Target {
    /**
     * String constraint.
     */
    constraint: Target.Constraint;

    /**
     * A target based on the URL of the request.
     */
    target: 'url';
  }

  export namespace Target {
    /**
     * String constraint.
     */
    export interface Constraint {
      /**
       * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
       */
      operator: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

      /**
       * The URL pattern to match against the current request. The pattern may contain up
       * to four asterisks ('\*') as placeholders.
       */
      value: string;
    }
  }
}

export interface PageruleUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The set of actions to perform if the targets of this rule match the
   * request. Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<PageruleUpdateParams.Action>;

  /**
   * Body param: The rule targets to evaluate on each request.
   */
  targets: Array<PageruleUpdateParams.Target>;

  /**
   * Body param: The priority of the rule, used to define which Page Rule is
   * processed over another. A higher number indicates a higher priority. For
   * example, if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
   * specific Page Rule to take precedence (rule B: `/images/special/*`), specify a
   * higher priority for rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * Body param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export namespace PageruleUpdateParams {
  export interface Action {
    /**
     * The type of route.
     */
    name?: 'forward_url';

    value?: Action.Value;
  }

  export namespace Action {
    export interface Value {
      /**
       * The response type for the URL redirect.
       */
      type?: 'temporary' | 'permanent';

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  /**
   * A request condition target.
   */
  export interface Target {
    /**
     * String constraint.
     */
    constraint: Target.Constraint;

    /**
     * A target based on the URL of the request.
     */
    target: 'url';
  }

  export namespace Target {
    /**
     * String constraint.
     */
    export interface Constraint {
      /**
       * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
       */
      operator: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

      /**
       * The URL pattern to match against the current request. The pattern may contain up
       * to four asterisks ('\*') as placeholders.
       */
      value: string;
    }
  }
}

export interface PageruleListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned Page Rules.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When set to `all`, all the search requirements must match. When set
   * to `any`, only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * Query param: The field used to sort returned Page Rules.
   */
  order?: 'status' | 'priority';

  /**
   * Query param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export interface PageruleDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface PageruleEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The set of actions to perform if the targets of this rule match the
   * request. Actions can redirect to another URL or override settings, but not both.
   */
  actions?: Array<PageruleEditParams.Action>;

  /**
   * Body param: The priority of the rule, used to define which Page Rule is
   * processed over another. A higher number indicates a higher priority. For
   * example, if you have a catch-all Page Rule (rule A: `/images/*`) but want a more
   * specific Page Rule to take precedence (rule B: `/images/special/*`), specify a
   * higher priority for rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * Body param: The status of the Page Rule.
   */
  status?: 'active' | 'disabled';

  /**
   * Body param: The rule targets to evaluate on each request.
   */
  targets?: Array<PageruleEditParams.Target>;
}

export namespace PageruleEditParams {
  export interface Action {
    /**
     * The type of route.
     */
    name?: 'forward_url';

    value?: Action.Value;
  }

  export namespace Action {
    export interface Value {
      /**
       * The response type for the URL redirect.
       */
      type?: 'temporary' | 'permanent';

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  /**
   * A request condition target.
   */
  export interface Target {
    /**
     * String constraint.
     */
    constraint: Target.Constraint;

    /**
     * A target based on the URL of the request.
     */
    target: 'url';
  }

  export namespace Target {
    /**
     * String constraint.
     */
    export interface Constraint {
      /**
       * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
       */
      operator: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

      /**
       * The URL pattern to match against the current request. The pattern may contain up
       * to four asterisks ('\*') as placeholders.
       */
      value: string;
    }
  }
}

export interface PageruleGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Pagerules {
  export import ZonesPagerule = PagerulesAPI.ZonesPagerule;
  export import PageruleCreateResponse = PagerulesAPI.PageruleCreateResponse;
  export import PageruleUpdateResponse = PagerulesAPI.PageruleUpdateResponse;
  export import PageruleListResponse = PagerulesAPI.PageruleListResponse;
  export import PageruleDeleteResponse = PagerulesAPI.PageruleDeleteResponse;
  export import PageruleEditResponse = PagerulesAPI.PageruleEditResponse;
  export import PageruleGetResponse = PagerulesAPI.PageruleGetResponse;
  export import PageruleCreateParams = PagerulesAPI.PageruleCreateParams;
  export import PageruleUpdateParams = PagerulesAPI.PageruleUpdateParams;
  export import PageruleListParams = PagerulesAPI.PageruleListParams;
  export import PageruleDeleteParams = PagerulesAPI.PageruleDeleteParams;
  export import PageruleEditParams = PagerulesAPI.PageruleEditParams;
  export import PageruleGetParams = PagerulesAPI.PageruleGetParams;
  export import Settings = SettingsAPI.Settings;
  export import ZonePageruleSettings = SettingsAPI.ZonePageruleSettings;
  export import SettingListParams = SettingsAPI.SettingListParams;
}
