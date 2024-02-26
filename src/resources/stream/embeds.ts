// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EmbedsAPI from 'cloudflare/resources/stream/embeds';

export class Embeds extends APIResource {
  /**
   * Fetches an HTML code snippet to embed a video in a web page delivered through
   * Cloudflare. On success, returns an HTML fragment for use on web pages to display
   * a video. On failure, returns a JSON response body.
   */
  list(identifier: string, params: EmbedListParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/stream/${identifier}/embed`, options);
  }
}

export type EmbedListResponse = unknown;

export interface EmbedListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Embeds {
  export import EmbedListResponse = EmbedsAPI.EmbedListResponse;
  export import EmbedListParams = EmbedsAPI.EmbedListParams;
}
