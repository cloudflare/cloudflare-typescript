// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VideosAPI from 'cloudflare/resources/stream/videos';

export class Videos extends APIResource {
  /**
   * Returns information about an account's storage use.
   */
  storageUsage(
    accountId: string,
    query?: VideoStorageUsageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VideoStorageUsageResponse>;
  storageUsage(accountId: string, options?: Core.RequestOptions): Core.APIPromise<VideoStorageUsageResponse>;
  storageUsage(
    accountId: string,
    query: VideoStorageUsageParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VideoStorageUsageResponse> {
    if (isRequestOptions(query)) {
      return this.storageUsage(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/stream/storage-usage`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: VideoStorageUsageResponse }>
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
   * A user-defined identifier for the media creator.
   */
  creator?: string;
}

export namespace Videos {
  export import VideoStorageUsageResponse = VideosAPI.VideoStorageUsageResponse;
  export import VideoStorageUsageParams = VideosAPI.VideoStorageUsageParams;
}
