// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as UaRulesAPI from 'cloudflare/resources/firewalls/ua-rules';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class UaRules extends APIResource {
  /**
   * Creates a new User Agent Blocking rule in a zone.
   */
  create(
    zoneIdentifier: string,
    body: UaRuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleCreateResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/ua_rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UaRuleCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches User Agent Blocking rules in a zone. You can filter the results using
   * several optional parameters.
   */
  list(
    zoneIdentifier: string,
    query?: UaRuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UaRuleListResponsesV4PagePaginationArray, UaRuleListResponse>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UaRuleListResponsesV4PagePaginationArray, UaRuleListResponse>;
  list(
    zoneIdentifier: string,
    query: UaRuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UaRuleListResponsesV4PagePaginationArray, UaRuleListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/ua_rules`,
      UaRuleListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing User Agent Blocking rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, options) as Core.APIPromise<{
        result: UaRuleDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a User Agent Blocking rule.
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, options) as Core.APIPromise<{
        result: UaRuleGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing User Agent Blocking rule.
   */
  replace(
    zoneIdentifier: string,
    id: string,
    body: UaRuleReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleReplaceResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UaRuleReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class UaRuleListResponsesV4PagePaginationArray extends V4PagePaginationArray<UaRuleListResponse> {}

export type UaRuleCreateResponse = unknown | string;

export interface UaRuleListResponse {
  /**
   * The unique identifier of the User Agent Blocking rule.
   */
  id?: string;

  /**
   * The configuration object for the current rule.
   */
  configuration?: UaRuleListResponse.Configuration;

  /**
   * An informative summary of the rule.
   */
  description?: string;

  /**
   * The action to apply to a matched request.
   */
  mode?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge';

  /**
   * When true, indicates that the rule is currently paused.
   */
  paused?: boolean;
}

export namespace UaRuleListResponse {
  /**
   * The configuration object for the current rule.
   */
  export interface Configuration {
    /**
     * The configuration target for this rule. You must set the target to `ua` for User
     * Agent Blocking rules.
     */
    target?: string;

    /**
     * The exact user agent string to match. This value will be compared to the
     * received `User-Agent` HTTP header value.
     */
    value?: string;
  }
}

export interface UaRuleDeleteResponse {
  /**
   * The unique identifier of the User Agent Blocking rule.
   */
  id?: string;
}

export type UaRuleGetResponse = unknown | string;

export type UaRuleReplaceResponse = unknown | string;

export type UaRuleCreateParams = unknown;

export interface UaRuleListParams extends V4PagePaginationArrayParams {
  /**
   * A string to search for in the description of existing rules.
   */
  description?: string;

  /**
   * A string to search for in the description of existing rules.
   */
  description_search?: string;

  /**
   * A string to search for in the user agent values of existing rules.
   */
  ua_search?: string;
}

export type UaRuleReplaceParams = unknown;

export namespace UaRules {
  export import UaRuleCreateResponse = UaRulesAPI.UaRuleCreateResponse;
  export import UaRuleListResponse = UaRulesAPI.UaRuleListResponse;
  export import UaRuleDeleteResponse = UaRulesAPI.UaRuleDeleteResponse;
  export import UaRuleGetResponse = UaRulesAPI.UaRuleGetResponse;
  export import UaRuleReplaceResponse = UaRulesAPI.UaRuleReplaceResponse;
  export import UaRuleListResponsesV4PagePaginationArray = UaRulesAPI.UaRuleListResponsesV4PagePaginationArray;
  export import UaRuleCreateParams = UaRulesAPI.UaRuleCreateParams;
  export import UaRuleListParams = UaRulesAPI.UaRuleListParams;
  export import UaRuleReplaceParams = UaRulesAPI.UaRuleReplaceParams;
}
