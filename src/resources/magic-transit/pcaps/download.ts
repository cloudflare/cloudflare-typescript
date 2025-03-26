// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Download extends APIResource {
  /**
   * Download PCAP information into a file. Response is a binary PCAP file.
   */
  get(pcapID: string, params: DownloadGetParams, options?: RequestOptions): APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/pcaps/${pcapID}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.tcpdump.pcap' }, options?.headers]),
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
