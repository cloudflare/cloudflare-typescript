// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Tags extends APIResource {
  /**
   * Create a tag
   *
   * @example
   * ```ts
   * const tag = await client.zeroTrust.access.tags.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  create(params: TagCreateParams, options?: Core.RequestOptions): Core.APIPromise<Tag> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/tags`, { body, ...options }) as Core.APIPromise<{
        result: Tag;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a tag
   *
   * @example
   * ```ts
   * const tag = await client.zeroTrust.access.tags.update(
   *   'engineers',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'engineers',
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tag of client.zeroTrust.access.tags.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: TagListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TagsV4PagePaginationArray, Tag> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/access/tags`, TagsV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Delete a tag
   *
   * @example
   * ```ts
   * const tag = await client.zeroTrust.access.tags.delete(
   *   'engineers',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const tag = await client.zeroTrust.access.tags.get(
   *   'engineers',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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

export class TagsV4PagePaginationArray extends V4PagePaginationArray<Tag> {}

/**
 * A tag
 */
export interface Tag {
  /**
   * The name of the tag
   */
  name: string;
}

export interface TagDeleteResponse {
  /**
   * The name of the tag
   */
  name?: string;
}

export interface TagCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the tag
   */
  name?: string;
}

export interface TagUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the tag
   */
  name: string;
}

export interface TagListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface TagDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface TagGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Tags.TagsV4PagePaginationArray = TagsV4PagePaginationArray;

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagDeleteResponse as TagDeleteResponse,
    TagsV4PagePaginationArray as TagsV4PagePaginationArray,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagGetParams as TagGetParams,
  };
}
