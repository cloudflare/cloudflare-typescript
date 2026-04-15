// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class ToMarkdown extends APIResource {
  /**
   * Converts uploaded files into Markdown format using Workers AI.
   *
   * @deprecated Use [AI > To Markdown](https://developers.cloudflare.com/api/resources/ai/subresources/to_markdown/) instead.
   */
  create(
    params: ToMarkdownCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToMarkdownCreateResponse[]> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/ai/tomarkdown`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ToMarkdownCreateResponse[] }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
  files: Array<Core.Uploadable>;
}

export declare namespace ToMarkdown {
  export {
    type ToMarkdownCreateResponse as ToMarkdownCreateResponse,
    type ToMarkdownCreateParams as ToMarkdownCreateParams,
  };
}
