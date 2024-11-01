// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DownloadsAPI from './downloads';
import { DownloadGetParams, Downloads } from './downloads';

export class LOADocuments extends APIResource {
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Submit LOA document (pdf format) under the account.
   */
  create(
    params: LOADocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LOADocumentCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/addressing/loa_documents`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: LOADocumentCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LOADocumentCreateResponse {
  /**
   * Identifier for the uploaded LOA document.
   */
  id?: string | null;

  /**
   * Identifier
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: LOA document to upload.
   */
  loa_document: string;
}

LOADocuments.Downloads = Downloads;

export declare namespace LOADocuments {
  export {
    type LOADocumentCreateResponse as LOADocumentCreateResponse,
    type LOADocumentCreateParams as LOADocumentCreateParams,
  };

  export { Downloads as Downloads, type DownloadGetParams as DownloadGetParams };
}
