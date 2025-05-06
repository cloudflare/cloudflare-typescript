// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ToMarkdown extends APIResource {
  /**
   * Convert Files into Markdown
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const toMarkdownCreateResponse of client.radar.ai.toMarkdown.create(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    params: ToMarkdownCreateParams,
    options?: RequestOptions,
  ): PagePromise<ToMarkdownCreateResponsesSinglePage, ToMarkdownCreateResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tomarkdown`,
      SinglePage<ToMarkdownCreateResponse>,
      {
        body: body,
        method: 'post',
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
      },
    );
  }
}

export type ToMarkdownCreateResponsesSinglePage = SinglePage<ToMarkdownCreateResponse>;

export interface ToMarkdownCreateResponse {
  data: string;

  format: string;

  mimeType: string;

  name: string;

  tokens: string;
}

export interface ToMarkdownCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body?: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace ToMarkdown {
  export {
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    type ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };
}
