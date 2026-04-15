// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class BaseToMarkdown extends APIResource {
  static override readonly _key: readonly ['radar', 'ai', 'toMarkdown'] = Object.freeze([
    'radar',
    'ai',
    'toMarkdown',
  ] as const);

  /**
   * Converts uploaded files into Markdown format using Workers AI.
   *
   * @deprecated Use [AI > To Markdown](https://developers.cloudflare.com/api/resources/ai/subresources/to_markdown/) instead.
   */
  create(
    params: ToMarkdownCreateParams,
    options?: RequestOptions,
  ): PagePromise<ToMarkdownCreateResponsesSinglePage, ToMarkdownCreateResponse> {
    const { account_id = this._client.accountID, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tomarkdown`,
      SinglePage<ToMarkdownCreateResponse>,
      multipartFormRequestOptions({ body, method: 'post', ...options }, this._client),
    );
  }
}
export class ToMarkdown extends BaseToMarkdown {}

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
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  files: Array<Uploadable>;
}

export declare namespace ToMarkdown {
  export {
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    type ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };
}
