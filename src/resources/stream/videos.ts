// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Videos extends APIResource {
  /**
   * Returns information about an account's storage use.
   */
  storageUsage(
    params: VideoStorageUsageParams,
    options?: RequestOptions,
  ): APIPromise<VideoStorageUsageResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/stream/storage-usage`, {
        query,
        ...options,
      }) as APIPromise<{ result: VideoStorageUsageResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface VideoStorageUsageResponse {
  /**
   * A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * The total minutes of video content stored in the account.
   */
  totalStorageMinutes?: number;

  /**
   * The storage capacity alloted for the account.
   */
  totalStorageMinutesLimit?: number;

  /**
   * The total count of videos associated with the account.
   */
  videoCount?: number;
}

export interface VideoStorageUsageParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: A user-defined identifier for the media creator.
   */
  creator?: string;
}

export declare namespace Videos {
  export {
    type VideoStorageUsageResponse as VideoStorageUsageResponse,
    type VideoStorageUsageParams as VideoStorageUsageParams,
  };
}
