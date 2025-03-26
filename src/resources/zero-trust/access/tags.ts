// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Create a tag
   */
  create(params: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/tags`, { body, ...options }) as APIPromise<{
        result: Tag;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a tag
   */
  update(tagName: string, params: TagUpdateParams, options?: RequestOptions): APIPromise<Tag> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/access/tags/${tagName}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Tag }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List tags
   */
  list(params: TagListParams, options?: RequestOptions): PagePromise<TagsSinglePage, Tag> {
    const { account_id } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/access/tags`, SinglePage<Tag>, options);
  }

  /**
   * Delete a tag
   */
  delete(tagName: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/access/tags/${tagName}`, options) as APIPromise<{
        result: TagDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a tag
   */
  get(tagName: string, params: TagGetParams, options?: RequestOptions): APIPromise<Tag> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/access/tags/${tagName}`, options) as APIPromise<{
        result: Tag;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TagsSinglePage = SinglePage<Tag>;

/**
 * A tag
 */
export interface Tag {
  /**
   * The name of the tag
   */
  name: string;

  /**
   * The number of applications that have this tag
   */
  app_count?: number;

  created_at?: string;

  updated_at?: string;
}

export interface TagDeleteResponse {
  /**
   * The name of the tag
   */
  name?: string;
}

export interface TagCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The name of the tag
   */
  name?: string;
}

export interface TagUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The name of the tag
   */
  name: string;
}

export interface TagListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface TagDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface TagGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagDeleteResponse as TagDeleteResponse,
    type TagsSinglePage as TagsSinglePage,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagGetParams as TagGetParams,
  };
}
