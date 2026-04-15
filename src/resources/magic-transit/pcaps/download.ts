// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { type Response } from '../../../_shims/index';

export class Download extends APIResource {
  /**
   * Download PCAP information into a file. Response is a binary PCAP file.
   *
   * @example
   * ```ts
   * const download =
   *   await client.magicTransit.pcaps.download.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   *
   * const content = await download.blob();
   * console.log(content);
   * ```
   */
  get(pcapId: string, params?: DownloadGetParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  get(pcapId: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  get(
    pcapId: string,
    params: DownloadGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(params)) {
      return this.get(pcapId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/pcaps/${pcapId}/download`, {
      ...options,
      headers: { Accept: 'application/vnd.tcpdump.pcap', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface DownloadGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export declare namespace Download {
  export { type DownloadGetParams as DownloadGetParams };
}
