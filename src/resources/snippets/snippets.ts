// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContentAPI from './content';
import { Content, ContentGetParams } from './content';
import * as RulesAPI from './rules';
import {
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleListParams,
  RuleListResponse,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Snippets extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Creates or updates a snippet belonging to the zone.
   */
  update(
    snippetName: string,
    params: SnippetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(
        `/zones/${zone_id}/snippets/${snippetName}`,
        Core.multipartFormRequestOptions({ body, ...options, __multipartSyntax: 'json' }),
      ) as Core.APIPromise<{ result: SnippetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all snippets belonging to the zone.
   */
  list(
    params: SnippetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SnippetListResponsesV4PagePaginationArray, SnippetListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/snippets`, SnippetListResponsesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a snippet belonging to the zone.
   */
  delete(
    snippetName: string,
    params: SnippetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/snippets/${snippetName}`, options) as Core.APIPromise<{
        result: SnippetDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a snippet belonging to the zone.
   */
  get(
    snippetName: string,
    params: SnippetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/snippets/${snippetName}`, options) as Core.APIPromise<{
        result: SnippetGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SnippetListResponsesV4PagePaginationArray extends V4PagePaginationArray<SnippetListResponse> {}

/**
 * Contain the response result.
 */
export interface SnippetUpdateResponse {
  /**
   * Indicates when the snippet was created.
   */
  created_on: string;

  /**
   * Identify the snippet.
   */
  snippet_name: string;

  /**
   * Indicates when the snippet was last modified.
   */
  modified_on?: string;
}

/**
 * Define a snippet.
 */
export interface SnippetListResponse {
  /**
   * Indicates when the snippet was created.
   */
  created_on: string;

  /**
   * Identify the snippet.
   */
  snippet_name: string;

  /**
   * Indicates when the snippet was last modified.
   */
  modified_on?: string;
}

/**
 * Contain the response result.
 */
export type SnippetDeleteResponse = unknown;

/**
 * Contain the response result.
 */
export interface SnippetGetResponse {
  /**
   * Indicates when the snippet was created.
   */
  created_on: string;

  /**
   * Identify the snippet.
   */
  snippet_name: string;

  /**
   * Indicates when the snippet was last modified.
   */
  modified_on?: string;
}

export interface SnippetUpdateParams {
  /**
   * Path param: Use this field to specify the unique ID of the zone.
   */
  zone_id: string;

  /**
   * Body param: Provide metadata about the snippet.
   */
  metadata: SnippetUpdateParams.Metadata;

  [k: string]: Array<Core.Uploadable> | string | SnippetUpdateParams.Metadata | undefined;
}

export namespace SnippetUpdateParams {
  /**
   * Provide metadata about the snippet.
   */
  export interface Metadata {
    /**
     * Specify the name of the file that contains the main module of the snippet.
     */
    main_module: string;
  }
}

export interface SnippetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Use this field to specify the unique ID of the zone.
   */
  zone_id: string;
}

export interface SnippetDeleteParams {
  /**
   * Use this field to specify the unique ID of the zone.
   */
  zone_id: string;
}

export interface SnippetGetParams {
  /**
   * Use this field to specify the unique ID of the zone.
   */
  zone_id: string;
}

Snippets.SnippetListResponsesV4PagePaginationArray = SnippetListResponsesV4PagePaginationArray;
Snippets.Content = Content;
Snippets.Rules = Rules;

export declare namespace Snippets {
  export {
    type SnippetUpdateResponse as SnippetUpdateResponse,
    type SnippetListResponse as SnippetListResponse,
    type SnippetDeleteResponse as SnippetDeleteResponse,
    type SnippetGetResponse as SnippetGetResponse,
    SnippetListResponsesV4PagePaginationArray as SnippetListResponsesV4PagePaginationArray,
    type SnippetUpdateParams as SnippetUpdateParams,
    type SnippetListParams as SnippetListParams,
    type SnippetDeleteParams as SnippetDeleteParams,
    type SnippetGetParams as SnippetGetParams,
  };

  export { Content as Content, type ContentGetParams as ContentGetParams };

  export {
    Rules as Rules,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
  };
}
