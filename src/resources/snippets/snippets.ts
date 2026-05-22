// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContentAPI from './content';
import { BaseContent, Content, ContentGetParams } from './content';
import * as RulesAPI from './rules';
import {
  BaseRules,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleListParams,
  RuleListResponse,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class BaseSnippets extends APIResource {
  static override readonly _key: readonly ['snippets'] = Object.freeze(['snippets'] as const);

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
export class Snippets extends BaseSnippets {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export type SnippetListResponsesV4PagePaginationArray = V4PagePaginationArray<SnippetListResponse>;

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

  [k: string]: Array<Uploadable> | string | SnippetUpdateParams.Metadata | undefined;
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

Snippets.Content = Content;
Snippets.BaseContent = BaseContent;
Snippets.Rules = Rules;
Snippets.BaseRules = BaseRules;

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

  export { Content as Content, BaseContent as BaseContent, type ContentGetParams as ContentGetParams };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };
}
