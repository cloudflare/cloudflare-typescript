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
  ipAddressManagementPrefixesUploadLoaDocument(
    accountId: string,
    body: LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/addressing/loa_documents`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse {
  /**
   * Name of LOA document.
   */
  filename?: string;
}

export interface LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams {
  /**
   * LOA document to upload.
   */
  loa_document: string;
}

export namespace LoaDocuments {
  export import LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse = LoaDocumentsAPI.LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse;
  export import LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams = LoaDocumentsAPI.LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadListResponse = DownloadsAPI.DownloadListResponse;
}
