// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as VideosAPI from './videos';

export class Videos extends APIResource {
  /**
   * Returns information about an account's storage use.
   */
  storageUsage(params: VideoStorageUsageParams, options?: Core.RequestOptions): Core.APIPromise<VideoStorageUsageResponse> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/stream/storage-usage`, { query, ...options }) as Core.APIPromise<{ result: VideoStorageUsageResponse }>)._thenUnwrap((obj) => obj.result);
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

export namespace Videos {
  export import VideoStorageUsageResponse = VideosAPI.VideoStorageUsageResponse;
  export import VideoStorageUsageParams = VideosAPI.VideoStorageUsageParams;
}
