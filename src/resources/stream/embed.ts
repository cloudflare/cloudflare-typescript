// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as EmbedAPI from './embed';

export class Embed extends APIResource {
  /**
   * Fetches an HTML code snippet to embed a video in a web page delivered through
   * Cloudflare. On success, returns an HTML fragment for use on web pages to display
   * a video. On failure, returns a JSON response body.
   */
  get(identifier: string, params: EmbedGetParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/stream/${identifier}/embed`, { ...options, headers: { Accept: 'application/json', ...options?.headers } });
  }
}

export type EmbedGetResponse = string

export interface EmbedGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Embed {
  export import EmbedGetResponse = EmbedAPI.EmbedGetResponse;
  export import EmbedGetParams = EmbedAPI.EmbedGetParams;
}
