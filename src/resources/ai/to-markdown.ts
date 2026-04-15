// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class BaseToMarkdown extends APIResource {
  static override readonly _key: readonly ['ai', 'toMarkdown'] = Object.freeze(['ai', 'toMarkdown'] as const);

  /**
   * Lists all file formats supported for conversion to Markdown.
   */
  supported(
    params: ToMarkdownSupportedParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ToMarkdownSupportedResponsesSinglePage, ToMarkdownSupportedResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tomarkdown/supported`,
      SinglePage<ToMarkdownSupportedResponse>,
      options,
    );
  }

  /**
   * Converts uploaded files into Markdown format using Workers AI.
   */
  transform(
    params: ToMarkdownTransformParams,
    options?: RequestOptions,
  ): PagePromise<ToMarkdownTransformResponsesSinglePage, ToMarkdownTransformResponse> {
    const { account_id = this._client.accountID, file } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/tomarkdown`,
      SinglePage<ToMarkdownTransformResponse>,
      multipartFormRequestOptions({ body: file, method: 'post', ...options }, this._client),
    );
  }
}
export class ToMarkdown extends BaseToMarkdown {}

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
  account_id?: string;
}

export interface ToMarkdownTransformParams {
  /**
   * Path param
   */
  account_id?: string;

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
