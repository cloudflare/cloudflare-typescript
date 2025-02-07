// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Downloads extends APIResource {
  /**
   * Download indicator feed data
   */
  get(feedID: number, params: DownloadGetParams, options?: RequestOptions): APIPromise<DownloadGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/intel/indicator_feeds/${feedID}/download`,
        options,
      ) as APIPromise<{ result: DownloadGetResponse }>
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

export declare namespace Downloads {
  export { type DownloadGetResponse as DownloadGetResponse, type DownloadGetParams as DownloadGetParams };
}
