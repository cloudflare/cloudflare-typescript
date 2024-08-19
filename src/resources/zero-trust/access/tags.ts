// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TagsAPI from './tags';
import { SinglePage } from '../../../pagination';

export class Tags extends APIResource {
  /**
   * Create a tag
   */
  create(params: TagCreateParams, options?: Core.RequestOptions): Core.APIPromise<Tag> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/tags`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Tag }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a tag
   */
  update(tagName: string, params: TagUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Tag> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/access/tags/${tagName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Tag }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List tags
   */
  list(params: TagListParams, options?: Core.RequestOptions): Core.PagePromise<TagsSinglePage, Tag> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/access/tags`, TagsSinglePage, options);
  }

  /**
   * Delete a tag
   */
  delete(
    tagName: string,
    params: TagDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/access/tags/${tagName}`, options) as Core.APIPromise<{
        result: TagDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a tag
   */
  get(tagName: string, params: TagGetParams, options?: Core.RequestOptions): Core.APIPromise<Tag> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/access/tags/${tagName}`, options) as Core.APIPromise<{
        result: Tag;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TagsSinglePage extends SinglePage<Tag> {}

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
  body: string;
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

export namespace Tags {
  export import Tag = TagsAPI.Tag;
  export import TagDeleteResponse = TagsAPI.TagDeleteResponse;
  export import TagsSinglePage = TagsAPI.TagsSinglePage;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagUpdateParams = TagsAPI.TagUpdateParams;
  export import TagListParams = TagsAPI.TagListParams;
  export import TagDeleteParams = TagsAPI.TagDeleteParams;
  export import TagGetParams = TagsAPI.TagGetParams;
}
