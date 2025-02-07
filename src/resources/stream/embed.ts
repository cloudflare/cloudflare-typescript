// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Embed extends APIResource {
  /**
   * Fetches an HTML code snippet to embed a video in a web page delivered through
   * Cloudflare. On success, returns an HTML fragment for use on web pages to display
   * a video. On failure, returns a JSON response body.
   */
  get(identifier: string, params: EmbedGetParams, options?: RequestOptions): APIPromise<string> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/stream/${identifier}/embed`, options);
  }
}

export type EmbedGetResponse = string;

export interface EmbedGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export declare namespace Embed {
  export { type EmbedGetResponse as EmbedGetResponse, type EmbedGetParams as EmbedGetParams };
}
