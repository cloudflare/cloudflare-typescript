// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as TagsAPI from './tags';
import { SinglePage } from '../../../../../pagination';

export class Tags extends APIResource {
  /**
   * Put script tags for a script uploaded to a Workers for Platforms namespace.
   */
  update(dispatchNamespace: string, scriptName: string, params: TagUpdateParams, options?: Core.RequestOptions): Core.APIPromise<TagUpdateResponse> {
    const { account_id, body } = params;
    return (this._client.put(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/tags`, { body: body, ...options }) as Core.APIPromise<{ result: TagUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch tags from a script uploaded to a Workers for Platforms namespace.
   */
  list(dispatchNamespace: string, scriptName: string, params: TagListParams, options?: Core.RequestOptions): Core.PagePromise<TagListResponsesSinglePage, TagListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/tags`, TagListResponsesSinglePage, options);
  }

  /**
   * Delete script tag for a script uploaded to a Workers for Platforms namespace.
   */
  delete(dispatchNamespace: string, scriptName: string, tag: string, params: TagDeleteParams, options?: Core.RequestOptions): Core.APIPromise<TagDeleteResponse | null> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/tags/${tag}`, options) as Core.APIPromise<{ result: TagDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export class TagListResponsesSinglePage extends SinglePage<TagListResponse> {
}

export type TagUpdateResponse = Array<string>

/**
 * Tag to help you manage your Worker
 */
export type TagListResponse = string

export type TagDeleteResponse = unknown

export interface TagUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Tags to help you manage your Workers
   */
  body: Array<string>;
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

export namespace Tags {
  export import TagUpdateResponse = TagsAPI.TagUpdateResponse;
  export import TagListResponse = TagsAPI.TagListResponse;
  export import TagDeleteResponse = TagsAPI.TagDeleteResponse;
  export import TagListResponsesSinglePage = TagsAPI.TagListResponsesSinglePage;
  export import TagUpdateParams = TagsAPI.TagUpdateParams;
  export import TagListParams = TagsAPI.TagListParams;
  export import TagDeleteParams = TagsAPI.TagDeleteParams;
}
