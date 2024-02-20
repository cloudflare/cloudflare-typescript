// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SnippetsAPI from 'cloudflare/resources/snippets/snippets';
import * as ContentAPI from 'cloudflare/resources/snippets/content';
import * as SnippetRulesAPI from 'cloudflare/resources/snippets/snippet-rules';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Snippets extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  snippetRules: SnippetRulesAPI.SnippetRules = new SnippetRulesAPI.SnippetRules(this._client);

  /**
   * All Snippets
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SnippetListResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/snippets`, options) as Core.APIPromise<{
        result: SnippetListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Snippet
   */
  delete(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/snippets/${snippetName}`, options) as Core.APIPromise<{
        result: SnippetDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Snippet
   */
  get(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/snippets/${snippetName}`, options) as Core.APIPromise<{
        result: SnippetGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Put Snippet
   */
  replace(
    zoneIdentifier: string,
    snippetName: string,
    body?: SnippetReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetReplaceResponse>;
  replace(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetReplaceResponse>;
  replace(
    zoneIdentifier: string,
    snippetName: string,
    body: SnippetReplaceParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetReplaceResponse> {
    if (isRequestOptions(body)) {
      return this.replace(zoneIdentifier, snippetName, {}, body);
    }
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/snippets/${snippetName}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: SnippetReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of all zone snippets
 */
export type SnippetListResponse = Array<SnippetListResponse.SnippetListResponseItem>;

export namespace SnippetListResponse {
  /**
   * Snippet Information
   */
  export interface SnippetListResponseItem {
    /**
     * Creation time of the snippet
     */
    created_on?: string;

    /**
     * Modification time of the snippet
     */
    modified_on?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export type SnippetDeleteResponse = unknown | Array<unknown> | string;

/**
 * Snippet Information
 */
export interface SnippetGetResponse {
  /**
   * Creation time of the snippet
   */
  created_on?: string;

  /**
   * Modification time of the snippet
   */
  modified_on?: string;

  /**
   * Snippet identifying name
   */
  snippet_name?: string;
}

/**
 * Snippet Information
 */
export interface SnippetReplaceResponse {
  /**
   * Creation time of the snippet
   */
  created_on?: string;

  /**
   * Modification time of the snippet
   */
  modified_on?: string;

  /**
   * Snippet identifying name
   */
  snippet_name?: string;
}

export interface SnippetReplaceParams {
  /**
   * Content files of uploaded snippet
   */
  files?: string;

  metadata?: SnippetReplaceParams.Metadata;
}

export namespace SnippetReplaceParams {
  export interface Metadata {
    /**
     * Main module name of uploaded snippet
     */
    main_module?: string;
  }
}

export namespace Snippets {
  export import SnippetListResponse = SnippetsAPI.SnippetListResponse;
  export import SnippetDeleteResponse = SnippetsAPI.SnippetDeleteResponse;
  export import SnippetGetResponse = SnippetsAPI.SnippetGetResponse;
  export import SnippetReplaceResponse = SnippetsAPI.SnippetReplaceResponse;
  export import SnippetReplaceParams = SnippetsAPI.SnippetReplaceParams;
  export import Content = ContentAPI.Content;
  export import SnippetRules = SnippetRulesAPI.SnippetRules;
  export import SnippetRuleListResponse = SnippetRulesAPI.SnippetRuleListResponse;
  export import SnippetRuleReplaceResponse = SnippetRulesAPI.SnippetRuleReplaceResponse;
  export import SnippetRuleReplaceParams = SnippetRulesAPI.SnippetRuleReplaceParams;
}
