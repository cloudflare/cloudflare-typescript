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
   * @deprecated Use [AI > To Markdown](https://developers.cloudflare.com/api/resources/ai/subresources/to_markdown/) instead.
   */
  create(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: ToMarkdownCreateParams,
    options?: RequestOptions,
  ): PagePromise<ToMarkdownCreateResponsesSinglePage, ToMarkdownCreateResponse> {
    const { account_id } = params;
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
}

export declare namespace ToMarkdown {
  export {
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    type ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };
}
