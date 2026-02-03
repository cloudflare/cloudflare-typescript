// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class ToMarkdown extends APIResource {
  /**
   * Get all converted formats supported
   */
  supported(
    params: ToMarkdownSupportedParams,
    options?: RequestOptions,
  ): PagePromise<ToMarkdownSupportedResponsesSinglePage, ToMarkdownSupportedResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tomarkdown/supported`,
      SinglePage<ToMarkdownSupportedResponse>,
      options,
    );
  }

  /**
   * Convert Files into Markdown
   */
  transform(
    params: ToMarkdownTransformParams,
    options?: RequestOptions,
  ): PagePromise<ToMarkdownTransformResponsesSinglePage, ToMarkdownTransformResponse> {
    const { account_id, file } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tomarkdown`,
      SinglePage<ToMarkdownTransformResponse>,
      multipartFormRequestOptions({ body: file, method: 'post', ...options }, this._client),
    );
  }
}

export type ToMarkdownSupportedResponsesSinglePage = SinglePage<ToMarkdownSupportedResponse>;

export type ToMarkdownTransformResponsesSinglePage = SinglePage<ToMarkdownTransformResponse>;

export interface ToMarkdownSupportedResponse {
  extension: string;

  mimeType: string;
}

export interface ToMarkdownTransformResponse {
  data: string;

  format: string;

  mimeType: string;

  name: string;

  tokens: string;
}

export interface ToMarkdownSupportedParams {
  account_id: string;
}

export interface ToMarkdownTransformParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  file: ToMarkdownTransformParams.File;
}

export namespace ToMarkdownTransformParams {
  export interface File {
    files: Array<Uploadable>;
  }
}

export declare namespace ToMarkdown {
  export {
    type ToMarkdownSupportedResponse as ToMarkdownSupportedResponse,
    type ToMarkdownTransformResponse as ToMarkdownTransformResponse,
    type ToMarkdownSupportedResponsesSinglePage as ToMarkdownSupportedResponsesSinglePage,
    type ToMarkdownTransformResponsesSinglePage as ToMarkdownTransformResponsesSinglePage,
    type ToMarkdownSupportedParams as ToMarkdownSupportedParams,
    type ToMarkdownTransformParams as ToMarkdownTransformParams,
  };
}
