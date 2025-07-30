// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Entries extends APIResource {
  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
   * created in the Cloudflare dashboard.
   *
   * @example
   * ```ts
   * const entry =
   *   await client.zeroTrust.dlp.datasets.versions.entries.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     fs.createReadStream('path/to/file'),
   *     {
   *       account_id: 'account_id',
   *       dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       version: 0,
   *     },
   *   );
   * ```
   */
  create(
    entryID: string,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<EntryCreateResponse> {
    const { account_id, dataset_id, version } = params;
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

  upload_status: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
}

export declare namespace Entries {
  export { type EntryCreateResponse as EntryCreateResponse };
}
