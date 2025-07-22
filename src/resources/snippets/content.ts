// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class Content extends APIResource {
  /**
   * Fetches the content of a snippet belonging to the zone.
   */
  get(
    snippetName: string,
    params: ContentGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/snippets/${snippetName}/content`, {
      ...options,
      headers: { Accept: 'multipart/form-data', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface ContentGetParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export declare namespace Content {
  export { type ContentGetParams as ContentGetParams };
}
