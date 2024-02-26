// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';

export class Downloads extends APIResource {
  /**
   * Download PCAP information into a file. Response is a binary PCAP file.
   */
  get(accountId: string, pcapId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/accounts/${accountId}/pcaps/${pcapId}/download`, {
      ...options,
      __binaryResponse: true,
    });
  }
}
