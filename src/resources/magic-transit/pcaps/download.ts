// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { type Response } from '../../../_shims/index';

export class Download extends APIResource {
  /**
   * Download PCAP information into a file. Response is a binary PCAP file.
   */
  get(pcapId: string, params: DownloadGetParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/pcaps/${pcapId}/download`, {
      ...options,
      headers: { Accept: 'application/vnd.tcpdump.pcap', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface DownloadGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Download {
  export { type DownloadGetParams as DownloadGetParams };
}
