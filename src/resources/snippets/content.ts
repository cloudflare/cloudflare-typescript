// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Content extends APIResource {
  /**
   * Snippet Content
   */
  get(snippetName: string, params: ContentGetParams, options?: RequestOptions): APIPromise<Response> {
    const { zone_id } = params;
    return this._client.get(path`/zones/${zone_id}/snippets/${snippetName}/content`, {
      ...options,
      headers: buildHeaders([{ Accept: 'multipart/form-data' }, options?.headers]),
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

export declare namespace Content {
  export { type ContentGetParams as ContentGetParams };
}
