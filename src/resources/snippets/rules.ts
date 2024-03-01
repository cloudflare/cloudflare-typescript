// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/snippets/rules';

export class Rules extends APIResource {
  /**
   * Put Rules
   */
  update(
    zoneIdentifier: string,
    body?: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse>;
  update(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RuleUpdateResponse>;
  update(
    zoneIdentifier: string,
    body: RuleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(zoneIdentifier, {}, body);
    }
    return (
      this._client.put(`/zones/${zoneIdentifier}/snippets/snippet_rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Rules
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RuleListResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/snippets/snippet_rules`, options) as Core.APIPromise<{
        result: RuleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of snippet rules
 */
export type RuleUpdateResponse = Array<RuleUpdateResponse.RuleUpdateResponseItem>;

export namespace RuleUpdateResponse {
  export interface RuleUpdateResponseItem {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

/**
 * List of snippet rules
 */
export type RuleListResponse = Array<RuleListResponse.RuleListResponseItem>;

export namespace RuleListResponse {
  export interface RuleListResponseItem {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface RuleUpdateParams {
  /**
   * List of snippet rules
   */
  rules?: Array<RuleUpdateParams.Rule>;
}

export namespace RuleUpdateParams {
  export interface Rule {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
}
