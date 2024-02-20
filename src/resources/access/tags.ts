// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TagsAPI from 'cloudflare/resources/access/tags';

export class Tags extends APIResource {
  /**
   * Create a tag
   */
  create(
    identifier: string,
    body: TagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagCreateResponse> {
    return (
      this._client.post(`/accounts/${identifier}/access/tags`, { body, ...options }) as Core.APIPromise<{
        result: TagCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List tags
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<TagListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/access/tags`, options) as Core.APIPromise<{
        result: TagListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a tag
   */
  delete(
    identifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagDeleteResponse> {
    return (
      this._client.delete(`/accounts/${identifier}/access/tags/${name}`, options) as Core.APIPromise<{
        result: TagDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a tag
   */
  get(identifier: string, name: string, options?: Core.RequestOptions): Core.APIPromise<TagGetResponse> {
    return (
      this._client.get(`/accounts/${identifier}/access/tags/${name}`, options) as Core.APIPromise<{
        result: TagGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a tag
   */
  replace(
    identifier: string,
    tagName: string,
    body: TagReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagReplaceResponse> {
    return (
      this._client.put(`/accounts/${identifier}/access/tags/${tagName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TagReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A tag
 */
export interface TagCreateResponse {
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

export type TagListResponse = Array<TagListResponse.TagListResponseItem>;

export namespace TagListResponse {
  /**
   * A tag
   */
  export interface TagListResponseItem {
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
}

export interface TagDeleteResponse {
  /**
   * The name of the tag
   */
  name?: string;
}

/**
 * A tag
 */
export interface TagGetResponse {
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

/**
 * A tag
 */
export interface TagReplaceResponse {
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

export interface TagCreateParams {
  /**
   * The name of the tag
   */
  name: string;
}

export interface TagReplaceParams {
  /**
   * The name of the tag
   */
  name: string;
}

export namespace Tags {
  export import TagCreateResponse = TagsAPI.TagCreateResponse;
  export import TagListResponse = TagsAPI.TagListResponse;
  export import TagDeleteResponse = TagsAPI.TagDeleteResponse;
  export import TagGetResponse = TagsAPI.TagGetResponse;
  export import TagReplaceResponse = TagsAPI.TagReplaceResponse;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagReplaceParams = TagsAPI.TagReplaceParams;
}
