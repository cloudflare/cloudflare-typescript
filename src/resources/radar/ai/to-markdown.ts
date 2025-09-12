// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';
import { type BlobLike } from '../../../uploads';

export class ToMarkdown extends APIResource {
  /**
   * Convert Files into Markdown
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const toMarkdownCreateResponse of client.radar.ai.toMarkdown.create(
   *   fs.createReadStream('path/to/file'),
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    body: string | ArrayBufferView | ArrayBuffer | BlobLike,
    params: ToMarkdownCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownCreateResponsesSinglePage, ToMarkdownCreateResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai/tomarkdown`,
      ToMarkdownCreateResponsesSinglePage,
      {
        body: body,
        method: 'post',
        ...options,
        headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
        __binaryRequest: true,
      },
    );
  }
}

export class ToMarkdownCreateResponsesSinglePage extends SinglePage<ToMarkdownCreateResponse> {}

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
}

ToMarkdown.ToMarkdownCreateResponsesSinglePage = ToMarkdownCreateResponsesSinglePage;

export declare namespace ToMarkdown {
  export {
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };
}
