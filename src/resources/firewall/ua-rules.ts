// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as UARulesAPI from 'cloudflare/resources/firewall/ua-rules';
import * as Shared from 'cloudflare/resources/shared';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class UARules extends APIResource {
  /**
   * Creates a new User Agent Blocking rule in a zone.
   */
  create(
    zoneIdentifier: string,
    body: UARuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/ua_rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing User Agent Blocking rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: UARuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches User Agent Blocking rules in a zone. You can filter the results using
   * several optional parameters.
   */
  list(
    zoneIdentifier: string,
    query?: UARuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UARuleListResponsesV4PagePaginationArray, UARuleListResponse>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UARuleListResponsesV4PagePaginationArray, UARuleListResponse>;
  list(
    zoneIdentifier: string,
    query: UARuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UARuleListResponsesV4PagePaginationArray, UARuleListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/ua_rules`,
      UARuleListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing User Agent Blocking rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    body: UARuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UARuleDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UARuleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a User Agent Blocking rule.
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class UARuleListResponsesV4PagePaginationArray extends V4PagePaginationArray<UARuleListResponse> {}

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

export type UARuleCreateParams = unknown;

export type UARuleUpdateParams = unknown;

export interface UARuleListParams extends V4PagePaginationArrayParams {
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

export type UARuleDeleteParams = unknown;

export namespace UARules {
  export import UARuleListResponse = UARulesAPI.UARuleListResponse;
  export import UARuleDeleteResponse = UARulesAPI.UARuleDeleteResponse;
  export import UARuleListResponsesV4PagePaginationArray = UARulesAPI.UARuleListResponsesV4PagePaginationArray;
  export import UARuleCreateParams = UARulesAPI.UARuleCreateParams;
  export import UARuleUpdateParams = UARulesAPI.UARuleUpdateParams;
  export import UARuleListParams = UARulesAPI.UARuleListParams;
  export import UARuleDeleteParams = UARulesAPI.UARuleDeleteParams;
}
