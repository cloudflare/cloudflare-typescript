// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TagsAPI from 'cloudflare/resources/access/tags';

export class Tags extends APIResource {
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

export namespace Tags {
  export import TagListResponse = TagsAPI.TagListResponse;
}
