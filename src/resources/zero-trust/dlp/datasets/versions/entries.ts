// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as EntriesAPI from './entries';

export class Entries extends APIResource {
  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
   * created in the Cloudflare dashboard.
   */
  create(datasetId: string, version: number, entryId: string, params: EntryCreateParams, options?: Core.RequestOptions): Core.APIPromise<EntryCreateResponse> {
    const { account_id, body } = params;
    return (this._client.post(`/accounts/${account_id}/dlp/datasets/${datasetId}/versions/${version}/entries/${entryId}`, { body: body, ...options, headers: { 'Content-Type': 'application/octet-stream', ...options?.headers }, __binaryRequest: true }) as Core.APIPromise<{ result: EntryCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface EntryCreateResponse {
  entry_id: string;

  header_name: string;

  num_cells: number;

  upload_status: 'empty' | 'uploading' | 'processing' | 'failed' | 'complete';
}

export interface EntryCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: string;
}

export namespace Entries {
  export import EntryCreateResponse = EntriesAPI.EntryCreateResponse;
  export import EntryCreateParams = EntriesAPI.EntryCreateParams;
}
