// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SnapshotsAPI from 'cloudflare/resources/intel/indicator-feeds/snapshots';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Snapshots extends APIResource {
  /**
   * Update indicator feed data
   */
  update(
    feedId: number,
    params: SnapshotUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnapshotUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/intel/indicator-feeds/${feedId}/snapshot`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: SnapshotUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
   * Current status of upload, should be unified
   */
  status?: string;
}

export interface SnapshotUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The file to upload
   */
  source?: string;
}

export namespace Snapshots {
  export import SnapshotUpdateResponse = SnapshotsAPI.SnapshotUpdateResponse;
  export import SnapshotUpdateParams = SnapshotsAPI.SnapshotUpdateParams;
}
