// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { APIPromise } from '../../../../../api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Entries extends APIResource {
  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
   * created in the Cloudflare dashboard.
   */
  create(
    entryID: string,
    params: EntryCreateParams,
    options?: RequestOptions,
  ): APIPromise<EntryCreateResponse> {
    const { account_id, dataset_id, version, body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/dlp/datasets/${dataset_id}/versions/${version}/entries/${entryID}`,
        {
          body: body,
          ...options,
          headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
        },
      ) as APIPromise<{ result: EntryCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
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
   * Path param:
   */
  dataset_id: string;

  /**
   * Path param:
   */
  version: number;

  /**
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Entries {
  export { type EntryCreateResponse as EntryCreateResponse, type EntryCreateParams as EntryCreateParams };
}
