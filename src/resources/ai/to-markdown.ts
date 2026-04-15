// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class ToMarkdown extends APIResource {
  /**
   * Lists all file formats supported for conversion to Markdown.
   */
  supported(
    params?: ToMarkdownSupportedParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownSupportedResponsesSinglePage, ToMarkdownSupportedResponse>;
  supported(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownSupportedResponsesSinglePage, ToMarkdownSupportedResponse>;
  supported(
    params: ToMarkdownSupportedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownSupportedResponsesSinglePage, ToMarkdownSupportedResponse> {
    if (isRequestOptions(params)) {
      return this.supported({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai/tomarkdown/supported`,
      ToMarkdownSupportedResponsesSinglePage,
      options,
    );
  }

  /**
   * Converts uploaded files into Markdown format using Workers AI.
   */
  transform(
    params: ToMarkdownTransformParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToMarkdownTransformResponse[]> {
    const { account_id = this._client.accountId, file } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/ai/tomarkdown`,
        Core.multipartFormRequestOptions({ body: file, ...options }),
      ) as Core.APIPromise<{ result: ToMarkdownTransformResponse[] }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ToMarkdownSupportedResponsesSinglePage extends SinglePage<ToMarkdownSupportedResponse> {}

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
    files: Array<Core.Uploadable>;
  }
}

ToMarkdown.ToMarkdownSupportedResponsesSinglePage = ToMarkdownSupportedResponsesSinglePage;

export declare namespace ToMarkdown {
  export {
    type ToMarkdownSupportedResponse as ToMarkdownSupportedResponse,
    type ToMarkdownTransformResponse as ToMarkdownTransformResponse,
    ToMarkdownSupportedResponsesSinglePage as ToMarkdownSupportedResponsesSinglePage,
    type ToMarkdownSupportedParams as ToMarkdownSupportedParams,
    type ToMarkdownTransformParams as ToMarkdownTransformParams,
  };
}
