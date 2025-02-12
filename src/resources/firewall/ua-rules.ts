// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccessRulesAPI from './access-rules';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UARules extends APIResource {
  /**
   * Creates a new User Agent Blocking rule in a zone.
   */
  create(params: UARuleCreateParams, options?: RequestOptions): APIPromise<UARuleCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/firewall/ua_rules`, { body, ...options }) as APIPromise<{
        result: UARuleCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing User Agent Blocking rule.
   */
  update(
    uaRuleID: string,
    params: UARuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UARuleUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/firewall/ua_rules/${uaRuleID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: UARuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches User Agent Blocking rules in a zone. You can filter the results using
   * several optional parameters.
   */
  list(
    params: UARuleListParams,
    options?: RequestOptions,
  ): PagePromise<UARuleListResponsesV4PagePaginationArray, UARuleListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/firewall/ua_rules`,
      V4PagePaginationArray<UARuleListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing User Agent Blocking rule.
   */
  delete(
    uaRuleID: string,
    params: UARuleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UARuleDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/firewall/ua_rules/${uaRuleID}`, options) as APIPromise<{
        result: UARuleDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a User Agent Blocking rule.
   */
  get(uaRuleID: string, params: UARuleGetParams, options?: RequestOptions): APIPromise<UARuleGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/firewall/ua_rules/${uaRuleID}`, options) as APIPromise<{
        result: UARuleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UARuleListResponsesV4PagePaginationArray = V4PagePaginationArray<UARuleListResponse>;

export type UARuleCreateResponse = unknown | string | null;

export type UARuleUpdateResponse = unknown | string | null;

export interface UARuleListResponse {
  /**
   * The unique identifier of the User Agent Blocking rule.
   */
  id?: string;

  /**
   * The configuration object for the current rule.
   */
  configuration?: UARuleListResponse.Configuration;

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

export namespace UARuleListResponse {
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

export interface UARuleDeleteResponse {
  /**
   * The unique identifier of the User Agent Blocking rule.
   */
  id?: string;
}

export type UARuleGetResponse = unknown | string | null;

export interface UARuleCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The rule configuration.
   */
  configuration:
    | AccessRulesAPI.AccessRuleIPConfigurationParam
    | AccessRulesAPI.IPV6ConfigurationParam
    | AccessRulesAPI.AccessRuleCIDRConfigurationParam
    | AccessRulesAPI.ASNConfigurationParam
    | AccessRulesAPI.CountryConfigurationParam;

  /**
   * Body param: The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';
}

export interface UARuleUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The rule configuration.
   */
  configuration:
    | AccessRulesAPI.AccessRuleIPConfigurationParam
    | AccessRulesAPI.IPV6ConfigurationParam
    | AccessRulesAPI.AccessRuleCIDRConfigurationParam
    | AccessRulesAPI.ASNConfigurationParam
    | AccessRulesAPI.CountryConfigurationParam;

  /**
   * Body param: The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';
}

export interface UARuleListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A string to search for in the description of existing rules.
   */
  description?: string;

  /**
   * Query param: A string to search for in the description of existing rules.
   */
  description_search?: string;

  /**
   * Query param: A string to search for in the user agent values of existing rules.
   */
  ua_search?: string;
}

export interface UARuleDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface UARuleGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace UARules {
  export {
    type UARuleCreateResponse as UARuleCreateResponse,
    type UARuleUpdateResponse as UARuleUpdateResponse,
    type UARuleListResponse as UARuleListResponse,
    type UARuleDeleteResponse as UARuleDeleteResponse,
    type UARuleGetResponse as UARuleGetResponse,
    type UARuleListResponsesV4PagePaginationArray as UARuleListResponsesV4PagePaginationArray,
    type UARuleCreateParams as UARuleCreateParams,
    type UARuleUpdateParams as UARuleUpdateParams,
    type UARuleListParams as UARuleListParams,
    type UARuleDeleteParams as UARuleDeleteParams,
    type UARuleGetParams as UARuleGetParams,
  };
}
