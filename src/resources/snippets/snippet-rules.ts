// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SnippetRulesAPI from 'cloudflare/resources/snippets/snippet-rules';

export class SnippetRules extends APIResource {
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

  /**
   * Put Rules
   */
  replace(
    zoneIdentifier: string,
    body?: SnippetRuleReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetRuleReplaceResponse>;
  replace(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SnippetRuleReplaceResponse>;
  replace(
    zoneIdentifier: string,
    body: SnippetRuleReplaceParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetRuleReplaceResponse> {
    if (isRequestOptions(body)) {
      return this.replace(zoneIdentifier, {}, body);
    }
    return (
      this._client.put(`/zones/${zoneIdentifier}/snippets/snippet_rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SnippetRuleReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
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

/**
 * List of snippet rules
 */
export type SnippetRuleReplaceResponse = Array<SnippetRuleReplaceResponse.SnippetRuleReplaceResponseItem>;

export namespace SnippetRuleReplaceResponse {
  export interface SnippetRuleReplaceResponseItem {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface SnippetRuleReplaceParams {
  /**
   * List of snippet rules
   */
  rules?: Array<SnippetRuleReplaceParams.Rule>;
}

export namespace SnippetRuleReplaceParams {
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
  export import SnippetRuleListResponse = SnippetRulesAPI.SnippetRuleListResponse;
  export import SnippetRuleReplaceResponse = SnippetRulesAPI.SnippetRuleReplaceResponse;
  export import SnippetRuleReplaceParams = SnippetRulesAPI.SnippetRuleReplaceParams;
}
