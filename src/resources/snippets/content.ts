// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { type Response } from '../../_shims/index';
import * as ContentAPI from './content';

export class Content extends APIResource {
  /**
   * Snippet Content
   */
  get(
    snippetName: string,
    params: ContentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/snippets/${snippetName}/content`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface ContentGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Content {
  export import ContentGetParams = ContentAPI.ContentGetParams;
}
