// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SnippetRulesAPI from 'cloudflare/resources/snippets/snippet-rules';

export class SnippetRules extends APIResource {
  /**
   * Put Rules
   */
  update(
    zoneIdentifier: string,
    body?: SnippetRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetRuleUpdateResponse>;
  update(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SnippetRuleUpdateResponse>;
  update(
    zoneIdentifier: string,
    body: SnippetRuleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetRuleUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(zoneIdentifier, {}, body);
    }
    return (
      this._client.put(`/zones/${zoneIdentifier}/snippets/snippet_rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SnippetRuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Rules
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SnippetRuleListResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/snippets/snippet_rules`, options) as Core.APIPromise<{
        result: SnippetRuleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of snippet rules
 */
export type SnippetRuleUpdateResponse = Array<SnippetRuleUpdateResponse.SnippetRuleUpdateResponseItem>;

export namespace SnippetRuleUpdateResponse {
  export interface SnippetRuleUpdateResponseItem {
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
export type SnippetRuleListResponse = Array<SnippetRuleListResponse.SnippetRuleListResponseItem>;

export namespace SnippetRuleListResponse {
  export interface SnippetRuleListResponseItem {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface SnippetRuleUpdateParams {
  /**
   * List of snippet rules
   */
  rules?: Array<SnippetRuleUpdateParams.Rule>;
}

export namespace SnippetRuleUpdateParams {
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

export namespace SnippetRules {
  export import SnippetRuleUpdateResponse = SnippetRulesAPI.SnippetRuleUpdateResponse;
  export import SnippetRuleListResponse = SnippetRulesAPI.SnippetRuleListResponse;
  export import SnippetRuleUpdateParams = SnippetRulesAPI.SnippetRuleUpdateParams;
}
