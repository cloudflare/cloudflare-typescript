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
   * Lists the file extensions and MIME types accepted by Workers AI's Markdown
   * conversion endpoint. Use this list to check whether a file can be converted
   * before uploading it.
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
   * Converts files uploaded as multipart form data into Markdown using Workers AI.
   * Returns a conversion result for each file. Use the supported-formats endpoint to
   * check accepted file types.
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
  /**
   * Cloudflare account ID used for this AI model request.
   */
  account_id: string;
}

export interface ToMarkdownTransformParams {
  /**
   * Path param: Cloudflare account ID used for this AI model request.
   */
  account_id: string;

  /**
   * Body param
   */
  file: ToMarkdownTransformParams.File;
}

export namespace ToMarkdownTransformParams {
  export interface File {
    /**
     * Files to convert, supplied as multipart file uploads.
     */
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
