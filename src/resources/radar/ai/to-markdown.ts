// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ToMarkdown extends APIResource {
  /**
   * Convert Files into Markdown
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
        headers: buildHeaders([
          { 'Content-Type': 'application/octet-stream', Accept: 'applications/json' },
          options?.headers,
        ]),
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
