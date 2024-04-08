// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as Shared from 'cloudflare/resources/shared';
import * as ContentAPI from 'cloudflare/resources/snippets/content';
import * as RulesAPI from 'cloudflare/resources/snippets/rules';
import { multipartFormRequestOptions } from 'cloudflare/core';
import { SinglePage } from 'cloudflare/pagination';

export class Snippets extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Put Snippet
   */
  update(
    zoneIdentifier: string,
    snippetName: string,
    body?: SnippetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Snippet>;
  update(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Snippet>;
  update(
    zoneIdentifier: string,
    snippetName: string,
    body: SnippetUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Snippet> {
    if (isRequestOptions(body)) {
      return this.update(zoneIdentifier, snippetName, {}, body);
    }
    return (
      this._client.put(
        `/zones/${zoneIdentifier}/snippets/${snippetName}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: Snippet }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * All Snippets
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.PagePromise<SnippetsSinglePage, Snippet> {
    return this._client.getAPIList(`/zones/${zoneIdentifier}/snippets`, SnippetsSinglePage, options);
  }

  /**
   * Delete Snippet
   */
  delete(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRefEc4d85c3d1bcc6b3b7e99c199ae99846> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/snippets/${snippetName}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRefEc4d85c3d1bcc6b3b7e99c199ae99846;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Snippet
   */
  get(zoneIdentifier: string, snippetName: string, options?: Core.RequestOptions): Core.APIPromise<Snippet> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/snippets/${snippetName}`, options) as Core.APIPromise<{
        result: Snippet;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SnippetsSinglePage extends SinglePage<Snippet> {}

/**
 * Snippet Information
 */
export interface Snippet {
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
  export import Content = ContentAPI.Content;
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleListResponsesSinglePage = RulesAPI.RuleListResponsesSinglePage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
}
