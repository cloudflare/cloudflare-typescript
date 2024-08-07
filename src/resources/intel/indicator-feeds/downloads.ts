// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DownloadsAPI from './downloads';

export class Downloads extends APIResource {
  /**
   * Download indicator feed data
   */
  get(
    feedId: number,
    params: DownloadGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/intel/indicator_feeds/${feedId}/download`,
        options,
      ) as Core.APIPromise<{ result: DownloadGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DownloadGetResponse {
  /**
   * Feed id
   */
  file_id?: number;

  /**
   * Name of the file unified in our system
   */
  filename?: string;

  /**
   * Current status of upload, should be unified
   */
  status?: string;
}

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
