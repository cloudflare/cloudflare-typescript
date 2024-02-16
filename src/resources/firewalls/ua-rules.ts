// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as UaRulesAPI from 'cloudflare/resources/firewalls/ua-rules';

export class UaRules extends APIResource {
  /**
   * Updates an existing User Agent Blocking rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: UaRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleUpdateResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UaRuleUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
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
   * Creates a new User Agent Blocking rule in a zone.
   */
  userAgentBlockingRulesCreateAUserAgentBlockingRule(
    zoneIdentifier: string,
    body: UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/ua_rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches User Agent Blocking rules in a zone. You can filter the results using
   * several optional parameters.
   */
  userAgentBlockingRulesListUserAgentBlockingRules(
    zoneIdentifier: string,
    query?: UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse | null>;
  userAgentBlockingRulesListUserAgentBlockingRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse | null>;
  userAgentBlockingRulesListUserAgentBlockingRules(
    zoneIdentifier: string,
    query: UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse | null> {
    if (isRequestOptions(query)) {
      return this.userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/ua_rules`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UaRuleUpdateResponse = unknown | string;

export interface UaRuleDeleteResponse {
  /**
   * The unique identifier of the User Agent Blocking rule.
   */
  id?: string;
}

export type UaRuleGetResponse = unknown | string;

export type UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse = unknown | string;

export type UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse =
  Array<UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponseItem>;

export namespace UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse {
  export interface UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponseItem {
    /**
     * The unique identifier of the User Agent Blocking rule.
     */
    id?: string;

    /**
     * The configuration object for the current rule.
     */
    configuration?: UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponseItem.Configuration;

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

  export namespace UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponseItem {
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
}

export type UaRuleUpdateParams = unknown;

export type UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams = unknown;

export interface UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams {
  /**
   * A string to search for in the description of existing rules.
   */
  description?: string;

  /**
   * A string to search for in the description of existing rules.
   */
  description_search?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * The maximum number of results per page. You can only set the value to `1` or to
   * a multiple of 5 such as `5`, `10`, `15`, or `20`.
   */
  per_page?: number;

  /**
   * A string to search for in the user agent values of existing rules.
   */
  ua_search?: string;
}

export namespace UaRules {
  export import UaRuleUpdateResponse = UaRulesAPI.UaRuleUpdateResponse;
  export import UaRuleDeleteResponse = UaRulesAPI.UaRuleDeleteResponse;
  export import UaRuleGetResponse = UaRulesAPI.UaRuleGetResponse;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse;
  export import UaRuleUpdateParams = UaRulesAPI.UaRuleUpdateParams;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams;
}
