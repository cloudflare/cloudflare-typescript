// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoaDocumentsAPI from 'cloudflare/resources/addresses/loa-documents/loa-documents';
import * as DownloadsAPI from 'cloudflare/resources/addresses/loa-documents/downloads';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class LoaDocuments extends APIResource {
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Submit LOA document (pdf format) under the account.
   */
  create(
    accountId: string,
    body: LoaDocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoaDocumentCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/addressing/loa_documents`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: LoaDocumentCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LoaDocumentCreateResponse {
  /**
   * Name of LOA document.
   */
  filename?: string;
}

export interface LoaDocumentCreateParams {
  /**
   * LOA document to upload.
   */
  loa_document: string;
}

export namespace LoaDocuments {
  export import LoaDocumentCreateResponse = LoaDocumentsAPI.LoaDocumentCreateResponse;
  export import LoaDocumentCreateParams = LoaDocumentsAPI.LoaDocumentCreateParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadListResponse = DownloadsAPI.DownloadListResponse;
}
