// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * Update indicator feed data
   */
  update(
    feedID: number,
    params: SnapshotUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/intel/indicator-feeds/${feedID}/snapshot`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: SnapshotUpdateResponse }>
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

export declare namespace Snapshots {
  export {
    type SnapshotUpdateResponse as SnapshotUpdateResponse,
    type SnapshotUpdateParams as SnapshotUpdateParams,
  };
}
