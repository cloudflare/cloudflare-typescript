// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContentAPI from './content';
import { Content, ContentGetParams } from './content';
import * as RulesAPI from './rules';
import {
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleDeleteResponsesSinglePage,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesSinglePage,
  RuleUpdateParams,
  RuleUpdateResponse,
  RuleUpdateResponsesSinglePage,
  Rules,
} from './rules';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Snippets extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Creates or updates a snippet belonging to the zone.
   */
  update(
    snippetName: string,
    params: SnippetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SnippetUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(
        path`/zones/${zone_id}/snippets/${snippetName}`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: SnippetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all snippets belonging to the zone.
   */
  list(
    params: SnippetListParams,
    options?: RequestOptions,
  ): PagePromise<SnippetListResponsesV4PagePaginationArray, SnippetListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/snippets`,
      V4PagePaginationArray<SnippetListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a snippet belonging to the zone.
   */
  delete(
    snippetName: string,
    params: SnippetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SnippetDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/snippets/${snippetName}`, options) as APIPromise<{
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
    options?: RequestOptions,
  ): APIPromise<SnippetGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/snippets/${snippetName}`, options) as APIPromise<{
        result: SnippetGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SnippetListResponsesV4PagePaginationArray = V4PagePaginationArray<SnippetListResponse>;

/**
 * A result.
 */
export interface SnippetUpdateResponse {
  /**
   * The timestamp of when the snippet was created.
   */
  created_on: string;

  /**
   * The identifying name of the snippet.
   */
  snippet_name: string;

  /**
   * The timestamp of when the snippet was last modified.
   */
  modified_on?: string;
}

/**
 * A snippet object.
 */
export interface SnippetListResponse {
  /**
   * The timestamp of when the snippet was created.
   */
  created_on: string;

  /**
   * The identifying name of the snippet.
   */
  snippet_name: string;

  /**
   * The timestamp of when the snippet was last modified.
   */
  modified_on?: string;
}

/**
 * A result.
 */
export type SnippetDeleteResponse = string | null;

/**
 * A result.
 */
export interface SnippetGetResponse {
  /**
   * The timestamp of when the snippet was created.
   */
  created_on: string;

  /**
   * The identifying name of the snippet.
   */
  snippet_name: string;

  /**
   * The timestamp of when the snippet was last modified.
   */
  modified_on?: string;
}

export interface SnippetUpdateParams {
  /**
   * Path param: The unique ID of the zone.
   */
  zone_id: string;

  /**
   * Body param: Metadata about the snippet.
   */
  metadata: SnippetUpdateParams.Metadata;

  [k: string]: Array<Uploadable> | string | SnippetUpdateParams.Metadata | undefined;
}

export namespace SnippetUpdateParams {
  /**
   * Metadata about the snippet.
   */
  export interface Metadata {
    /**
     * Name of the file that contains the main module of the snippet.
     */
    main_module: string;
  }
}

export interface SnippetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: The unique ID of the zone.
   */
  zone_id: string;
}

export interface SnippetDeleteParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export interface SnippetGetParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

Snippets.Content = Content;
Snippets.Rules = Rules;

export declare namespace Snippets {
  export {
    type SnippetUpdateResponse as SnippetUpdateResponse,
    type SnippetListResponse as SnippetListResponse,
    type SnippetDeleteResponse as SnippetDeleteResponse,
    type SnippetGetResponse as SnippetGetResponse,
    type SnippetListResponsesV4PagePaginationArray as SnippetListResponsesV4PagePaginationArray,
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
    type RuleUpdateResponsesSinglePage as RuleUpdateResponsesSinglePage,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleDeleteResponsesSinglePage as RuleDeleteResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
  };
}
