// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/addressing/loa-documents/downloads';

export class Downloads extends APIResource {
  /**
   * Download specified LOA document under the account.
   */
  get(
    loaDocumentId: string | null,
    params: DownloadGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/addressing/loa_documents/${loaDocumentId}/download`,
      options,
    );
  }
}

export type DownloadGetResponse = unknown;

export interface DownloadGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Downloads {
  export import DownloadGetResponse = DownloadsAPI.DownloadGetResponse;
  export import DownloadGetParams = DownloadsAPI.DownloadGetParams;
}
