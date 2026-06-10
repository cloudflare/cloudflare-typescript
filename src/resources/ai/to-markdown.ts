// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ToMarkdown extends APIResource {
  /**
   * Translate an audio file to a markdown string
   */
  async transform(
    body: ToMarkdownTransformParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Blob> {
    const { account_id, ...fileBody } = body;
    const formData = new FormData();
    
    if (fileBody.file) {
      formData.append('file', fileBody.file as any);
    }

    const syntheticResponse = new Response(formData);
    const contentType = syntheticResponse.headers.get('content-type');

    if (!contentType) {
      throw new Error('Failed to generate multipart content type boundary');
    }

    return this._client.post(`/accounts/${account_id}/ai/run/to-markdown`, {
      body: syntheticResponse.body,
      ...options,
      headers: {
        'content-type': contentType,
        ...options?.headers,
      },
      __binaryResponse: true,
    });
  }

  /**
   * Supported Models
   */
  supported(
    params: ToMarkdownSupportedParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownSupportedResponsesSinglePage, ToMarkdownSupportedResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/ai/run/to-markdown`, ToMarkdownSupportedResponsesSinglePage, {
      ...options,
    });
  }
}

export type ToMarkdownSupportedResponse = unknown;

export type ToMarkdownTransformResponse = Blob;

export interface ToMarkdownSupportedResponsesSinglePage {
  result: Array<ToMarkdownSupportedResponse>;
}

export interface ToMarkdownSupportedParams {
  /**
   * Path param
   */
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
  file: Core.Uploadable;
}

export namespace ToMarkdown {
  export {
    type ToMarkdownSupportedResponse as ToMarkdownSupportedResponse,
    type ToMarkdownTransformResponse as ToMarkdownTransformResponse,
    ToMarkdownSupportedResponsesSinglePage as ToMarkdownSupportedResponsesSinglePage,
    type ToMarkdownSupportedParams as ToMarkdownSupportedParams,
    type ToMarkdownTransformParams as ToMarkdownTransformParams,
  };
}
