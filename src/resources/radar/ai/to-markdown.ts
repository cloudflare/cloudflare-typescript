// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class ToMarkdown extends APIResource {
  /**
   * Converts uploaded files into Markdown format using Workers AI.
   *
   * @deprecated Use [AI > To Markdown](https://developers.cloudflare.com/api/resources/ai/subresources/to_markdown/) instead.
   */
  create(
    params: ToMarkdownCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownCreateResponsesSinglePage, ToMarkdownCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai/tomarkdown`,
      ToMarkdownCreateResponsesSinglePage,
      Core.multipartFormRequestOptions({ body, method: 'post', ...options }),
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
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  files: Array<Core.Uploadable>;
}

ToMarkdown.ToMarkdownCreateResponsesSinglePage = ToMarkdownCreateResponsesSinglePage;

export declare namespace ToMarkdown {
  export {
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    ToMarkdownCreateResponsesSinglePage as ToMarkdownCreateResponsesSinglePage,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };
}
