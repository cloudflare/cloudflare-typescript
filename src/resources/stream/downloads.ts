// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Downloads extends APIResource {
  /**
   * Lists the downloads created for a video.
   *
   * @example
   * ```ts
   * const download = await client.stream.downloads.get(
   *   'ea95132c15732412d22c1476fa83f27a',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    identifier: string,
    params: DownloadGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}/downloads`, options) as Core.APIPromise<{
        result: DownloadGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DownloadGetResponse = unknown;

export interface DownloadGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Downloads {
  export { type DownloadGetResponse as DownloadGetResponse, type DownloadGetParams as DownloadGetParams };
}
