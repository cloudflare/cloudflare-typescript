// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
    options?: RequestOptions,
  ): APIPromise<DownloadGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/stream/${identifier}/downloads`, options) as APIPromise<{
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
