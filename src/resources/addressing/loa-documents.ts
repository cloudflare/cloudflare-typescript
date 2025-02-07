// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class LOADocuments extends APIResource {
  /**
   * Submit LOA document (pdf format) under the account.
   */
  create(params: LOADocumentCreateParams, options?: RequestOptions): APIPromise<LOADocumentCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/addressing/loa_documents`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: LOADocumentCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Download specified LOA document under the account.
   */
  get(
    loaDocumentID: string | null,
    params: LOADocumentGetParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/addressing/loa_documents/${loaDocumentID}/download`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }
}

export interface LOADocumentCreateResponse {
  /**
   * Identifier for the uploaded LOA document.
   */
  id?: string | null;

  /**
   * Identifier of a Cloudflare account.
   */
  account_id?: string;

  created?: string;

  /**
   * Name of LOA document. Max file size 10MB, and supported filetype is pdf.
   */
  filename?: string;

  /**
   * File size of the uploaded LOA document.
   */
  size_bytes?: number;

  /**
   * Whether the LOA has been verified by Cloudflare staff.
   */
  verified?: boolean;

  /**
   * Timestamp of the moment the LOA was marked as validated.
   */
  verified_at?: string | null;
}

export interface LOADocumentCreateParams {
  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Body param: LOA document to upload.
   */
  loa_document: string;
}

export interface LOADocumentGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export declare namespace LOADocuments {
  export {
    type LOADocumentCreateResponse as LOADocumentCreateResponse,
    type LOADocumentCreateParams as LOADocumentCreateParams,
    type LOADocumentGetParams as LOADocumentGetParams,
  };
}
