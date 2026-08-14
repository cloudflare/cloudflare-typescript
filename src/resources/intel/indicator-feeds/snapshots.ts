// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class BaseSnapshots extends APIResource {
  static override readonly _key: readonly ['intel', 'indicatorFeeds', 'snapshots'] = Object.freeze([
    'intel',
    'indicatorFeeds',
    'snapshots',
  ] as const);

  /**
   * Revises the raw data entries in a custom threat indicator feed.
   *
   * Accepts both plain and gzipped STIX2/CRDF bodies. Gzip is detected by RFC 1952
   * magic bytes (`0x1f 0x8b`) and/or a `.gz` filename suffix (case-insensitive) —
   * either signal alone is sufficient to trigger the gzip path; if the body is not
   * valid gzip, the upload fails fast. Customers are encouraged to gzip larger
   * uploads — the api-gateway 500 MB body cap applies to the on-the-wire
   * (compressed) size, so gzip lets a single upload carry several GiB of
   * decompressed STIX.
   *
   * @example
   * ```ts
   * const snapshot =
   *   await client.intel.indicatorFeeds.snapshots.update(12, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  update(
    feedID: number,
    params: SnapshotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotUpdateResponse> {
    const { account_id, 'Cf-Async-Upload': cfAsyncUpload, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/intel/indicator-feeds/${feedID}/snapshot`,
        multipartFormRequestOptions(
          {
            body,
            ...options,
            headers: buildHeaders([
              {
                ...(cfAsyncUpload?.toString() != null ?
                  { 'Cf-Async-Upload': cfAsyncUpload?.toString() }
                : undefined),
              },
              options?.headers,
            ]),
          },
          this._client,
        ),
      ) as APIPromise<{ result: SnapshotUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Snapshots extends BaseSnapshots {}

export interface SnapshotUpdateResponse {
  /**
   * Feed id
   */
  file_id?: number;

  /**
   * Name of the file unified in our system
   */
  filename?: string;

  /**
   * Account-relative polling path. Prepend `/accounts/{account_id}` using the same
   * account identifier and API host as the upload request. The path omits the
   * account segment because the service does not have your account identifier in
   * this context.
   */
  poll_url?: string;

  /**
   * Current status of the upload at the moment the request returned. This is NOT a
   * terminal state: the file is unified inline, but the durable loader has only
   * accepted it, so the upload is still `Unifying`. Poll `poll_url` until the status
   * reaches a terminal value (`Unified` or `Error`).
   */
  status?: string;

  /**
   * Identifier of the upload row, for polling this upload to a terminal state via
   * `poll_url`.
   */
  upload_id?: number;
}

export interface SnapshotUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The file to upload. Either a plain STIX2/CRDF body or a gzipped one
   * (recognised by `0x1f 0x8b` magic bytes or a `.gz` filename suffix).
   */
  source?: string;

  /**
   * Header param: Set to the literal value `1` to enqueue the upload and receive a
   * `202` response with a polling URL. Any other value uses the legacy synchronous
   * response.
   */
  'Cf-Async-Upload'?: '1';
}

export declare namespace Snapshots {
  export {
    type SnapshotUpdateResponse as SnapshotUpdateResponse,
    type SnapshotUpdateParams as SnapshotUpdateParams,
  };
}
