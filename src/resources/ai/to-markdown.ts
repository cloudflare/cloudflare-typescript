// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class ToMarkdown extends APIResource {
  /**
   * Lists all file formats supported for conversion to Markdown.
   */
  supported(
    params: ToMarkdownSupportedParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToMarkdownSupportedResponsesSinglePage, ToMarkdownSupportedResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai/tomarkdown/supported`,
      ToMarkdownSupportedResponsesSinglePage,
      options,
    );
  }

  /**
   * Converts uploaded files into Markdown format using Workers AI.
   * Enhanced to automatically detect and handle raw strings, Blobs, and Files to prevent missing multipart boundaries.
   */
  transform(
    params: ToMarkdownTransformParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToMarkdownTransformResponse[]> {
    const { account_id, file } = params;

    // Handle automated type detection and strict boundary construction for raw inputs
    if (typeof file === 'string' || file instanceof Blob || file instanceof File) {
      let finalBody: Blob | File;
      let contentType: string;

      if (file instanceof Blob || file instanceof File) {
        finalBody = file;
        contentType = file.type || 'application/octet-stream';
      } else {
        const boundary = `----WebKitFormBoundary${Math.random().toString(36).substring(2)}`;
        const encoder = new TextEncoder();
        const chunks: Uint8Array[] = [];

        // Construct multipart payload manually to guarantee boundary integrity
        chunks.push(encoder.encode(`--${boundary}\r\n`));
        chunks.push(encoder.encode(`Content-Disposition: form-data; name="file"; filename="document.html"\r\n`));
        chunks.push(encoder.encode(`Content-Type: text/html\r\n\r\n`));
        chunks.push(encoder.encode(file));
        chunks.push(encoder.encode(`\r\n--${boundary}--\r\n`));

        finalBody = new Blob(chunks, { type: `multipart/form-data; boundary=${boundary}` });
        
        // Leverage runtime Response to resolve exact content-type header format
        const syntheticResponse = new Response(finalBody);
        contentType = syntheticResponse.headers.get('content-type')!;
      }

      const requestHeaders = {
        ...(options?.headers || {}),
        'content-type': contentType,
      };

      return (
        this._client.post(
          `/accounts/${account_id}/ai/tomarkdown`,
          { body: finalBody, ...options, headers: requestHeaders },
        ) as Core.APIPromise<{ result: ToMarkdownTransformResponse[] }>
      )._thenUnwrap((obj) => obj.result);
    }

    // Fallback to original Stainless multipart handler if standard parameters object is provided
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
  account_id: string;
}

export interface ToMarkdownTransformParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param - Updated to support raw string, Blob, or File alongside the standard structure.
   */
  file: string | Blob | File | ToMarkdownTransformParams.File;
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
