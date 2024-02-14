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
   * Snippet
   */
  retrieve(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetRetrieveResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/snippets/${snippetName}`, options) as Core.APIPromise<{
        result: SnippetRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Put Snippet
   */
  update(
    zoneIdentifier: string,
    snippetName: string,
    body?: SnippetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetUpdateResponse>;
  update(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetUpdateResponse>;
  update(
    zoneIdentifier: string,
    snippetName: string,
    body: SnippetUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(zoneIdentifier, snippetName, {}, body);
    }
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/snippets/${snippetName}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: SnippetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

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
}

/**
 * Snippet Information
 */
export interface SnippetRetrieveResponse {
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
export interface SnippetUpdateResponse {
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

export interface SnippetUpdateParams {
  /**
   * Content files of uploaded snippet
   */
  files?: string;

  metadata?: SnippetUpdateParams.Metadata;
}

export namespace SnippetUpdateParams {
  export interface Metadata {
    /**
     * Main module name of uploaded snippet
     */
    main_module?: string;
  }
}

export namespace Snippets {
  export import SnippetRetrieveResponse = SnippetsAPI.SnippetRetrieveResponse;
  export import SnippetUpdateResponse = SnippetsAPI.SnippetUpdateResponse;
  export import SnippetListResponse = SnippetsAPI.SnippetListResponse;
  export import SnippetDeleteResponse = SnippetsAPI.SnippetDeleteResponse;
  export import SnippetUpdateParams = SnippetsAPI.SnippetUpdateParams;
  export import Content = ContentAPI.Content;
  export import SnippetRules = SnippetRulesAPI.SnippetRules;
  export import SnippetRuleUpdateResponse = SnippetRulesAPI.SnippetRuleUpdateResponse;
  export import SnippetRuleListResponse = SnippetRulesAPI.SnippetRuleListResponse;
  export import SnippetRuleUpdateParams = SnippetRulesAPI.SnippetRuleUpdateParams;
}
