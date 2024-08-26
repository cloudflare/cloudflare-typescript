// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Downloads } from './downloads';
import * as LOADocumentsAPI from './loa-documents';
import { multipartFormRequestOptions } from '../../../core';
import * as DownloadsAPI from './downloads';

export class LOADocuments extends APIResource {
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Submit LOA document (pdf format) under the account.
   */
  create(params: LOADocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<LOADocumentCreateResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/addressing/loa_documents`, Core.multipartFormRequestOptions({ body, ...options })) as Core.APIPromise<{ result: LOADocumentCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface LOADocumentCreateResponse {
  /**
   * Name of LOA document.
   */
  filename?: string;
}

export interface LOADocumentCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: LOA document to upload.
   */
  loa_document: string;
}

export namespace LOADocuments {
  export import LOADocumentCreateResponse = LOADocumentsAPI.LOADocumentCreateResponse;
  export import LOADocumentCreateParams = LOADocumentsAPI.LOADocumentCreateParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadGetParams = DownloadsAPI.DownloadGetParams;
}
