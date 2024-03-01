// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/addressing/loa-documents/downloads';

export class Downloads extends APIResource {
  /**
   * Download specified LOA document under the account.
   */
  list(
    loaDocumentId: string | null,
    params: DownloadListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/addressing/loa_documents/${loaDocumentId}/download`,
      options,
    );
  }
}

export type DownloadListResponse = unknown;

export interface DownloadListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Downloads {
  export import DownloadListResponse = DownloadsAPI.DownloadListResponse;
  export import DownloadListParams = DownloadsAPI.DownloadListParams;
}
