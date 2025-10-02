// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';
import { type BlobLike } from '../../uploads';

export class ToMarkdown extends APIResource {
  /**
   * Convert Files into Markdown
   */
  transform(
    file: string | ArrayBufferView | ArrayBuffer | BlobLike,
    params: ToMarkdownTransformParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownTransformResponsesSinglePage, ToMarkdownTransformResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai/tomarkdown`,
      ToMarkdownTransformResponsesSinglePage,
      {
        body: file,
        method: 'post',
        ...options,
        headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
        __binaryRequest: true,
      },
    );
  }
}

export class ToMarkdownTransformResponsesSinglePage extends SinglePage<ToMarkdownTransformResponse> {}

export interface ToMarkdownTransformResponse {
  data: string;

  format: string;

  mimeType: string;

  name: string;

  tokens: string;
}

export interface ToMarkdownTransformParams {
  /**
   * Path param:
   */
  account_id: string;
}

ToMarkdown.ToMarkdownTransformResponsesSinglePage = ToMarkdownTransformResponsesSinglePage;

export declare namespace ToMarkdown {
  export {
    type ToMarkdownTransformResponse as ToMarkdownTransformResponse,
    ToMarkdownTransformResponsesSinglePage as ToMarkdownTransformResponsesSinglePage,
    type ToMarkdownTransformParams as ToMarkdownTransformParams,
  };
}
