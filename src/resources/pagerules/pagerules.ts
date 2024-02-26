// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PagerulesAPI from 'cloudflare/resources/pagerules/pagerules';
import * as SettingsAPI from 'cloudflare/resources/pagerules/settings';

export class Pagerules extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Creates a new Page Rule.
   */
  create(
    zoneId: string,
    body: PageruleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/pagerules`, { body, ...options }) as Core.APIPromise<{
        result: PageruleCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the configuration of an existing Page Rule. The configuration of the
   * updated Page Rule will exactly match the data passed in the API request.
   */
  update(
    zoneId: string,
    pageruleId: string,
    body: PageruleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/pagerules/${pageruleId}`, { body, ...options }) as Core.APIPromise<{
        result: PageruleUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Page Rules in a zone.
   */
  list(
    zoneId: string,
    query?: PageruleListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleListResponse>;
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PageruleListResponse>;
  list(
    zoneId: string,
    query: PageruleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/pagerules`, { query, ...options }) as Core.APIPromise<{
        result: PageruleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing Page Rule.
   */
  delete(
    zoneId: string,
    pageruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zoneId}/pagerules/${pageruleId}`, options) as Core.APIPromise<{
        result: PageruleDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates one or more fields of an existing Page Rule.
   */
  edit(
    zoneId: string,
    pageruleId: string,
    body: PageruleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/pagerules/${pageruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PageruleEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a Page Rule.
   */
  get(
    zoneId: string,
    pageruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/pagerules/${pageruleId}`, options) as Core.APIPromise<{
        result: PageruleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PageruleCreateResponse = unknown | string;

export type PageruleUpdateResponse = unknown | string;

export type PageruleListResponse = Array<PageruleListResponse.PageruleListResponseItem>;

export namespace PageruleListResponse {
  export interface PageruleListResponseItem {
    /**
     * Identifier
     */
    id: string;

    /**
     * The set of actions to perform if the targets of this rule match the request.
     * Actions can redirect to another URL or override settings, but not both.
     */
    actions: Array<PageruleListResponseItem.Action>;

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
    targets: Array<PageruleListResponseItem.Target>;
  }

  export namespace PageruleListResponseItem {
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
}

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
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<PageruleCreateParams.Action>;

  /**
   * The rule targets to evaluate on each request.
   */
  targets: Array<PageruleCreateParams.Target>;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * The status of the Page Rule.
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
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<PageruleUpdateParams.Action>;

  /**
   * The rule targets to evaluate on each request.
   */
  targets: Array<PageruleUpdateParams.Target>;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * The status of the Page Rule.
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
   * The direction used to sort returned Page Rules.
   */
  direction?: 'asc' | 'desc';

  /**
   * When set to `all`, all the search requirements must match. When set to `any`,
   * only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * The field used to sort returned Page Rules.
   */
  order?: 'status' | 'priority';

  /**
   * The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export interface PageruleEditParams {
  /**
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions?: Array<PageruleEditParams.Action>;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * The status of the Page Rule.
   */
  status?: 'active' | 'disabled';

  /**
   * The rule targets to evaluate on each request.
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

export namespace Pagerules {
  export import PageruleCreateResponse = PagerulesAPI.PageruleCreateResponse;
  export import PageruleUpdateResponse = PagerulesAPI.PageruleUpdateResponse;
  export import PageruleListResponse = PagerulesAPI.PageruleListResponse;
  export import PageruleDeleteResponse = PagerulesAPI.PageruleDeleteResponse;
  export import PageruleEditResponse = PagerulesAPI.PageruleEditResponse;
  export import PageruleGetResponse = PagerulesAPI.PageruleGetResponse;
  export import PageruleCreateParams = PagerulesAPI.PageruleCreateParams;
  export import PageruleUpdateParams = PagerulesAPI.PageruleUpdateParams;
  export import PageruleListParams = PagerulesAPI.PageruleListParams;
  export import PageruleEditParams = PagerulesAPI.PageruleEditParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
}
