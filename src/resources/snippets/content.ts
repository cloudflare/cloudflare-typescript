// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseContent extends APIResource {
  static override readonly _key: readonly ['snippets', 'content'] = Object.freeze([
    'snippets',
    'content',
  ] as const);

  /**
   * Fetches the content of a snippet belonging to the zone.
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
export class Content extends BaseContent {}

export interface ContentGetParams {
  /**
   * Use this field to specify the unique ID of the zone.
   */
  zone_id: string;
}

export declare namespace Content {
  export { type ContentGetParams as ContentGetParams };
}
