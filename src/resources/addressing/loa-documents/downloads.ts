// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as DownloadsAPI from './downloads';
import { type Response } from '../../../_shims/index';

export class Downloads extends APIResource {
  /**
   * Download specified LOA document under the account.
   */
  get(loaDocumentId: string | null, params: DownloadGetParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/addressing/loa_documents/${loaDocumentId}/download`, { ...options, __binaryResponse: true });
  }
}

export interface DownloadGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Downloads {
  export import DownloadGetParams = DownloadsAPI.DownloadGetParams;
}
