// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IndicatorFeedsAPI from 'cloudflare/resources/intel/indicator-feeds';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class IndicatorFeeds extends APIResource {
  /**
   * Create new indicator feed
   */
  create(
    accountId: string,
    body: IndicatorFeedCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/intel/indicator-feeds`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndicatorFeedCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get indicator feeds owned by this account
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<IndicatorFeedListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/intel/indicator-feeds`, options) as Core.APIPromise<{
        result: IndicatorFeedListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get indicator feed data
   */
  data(accountId: string, feedId: number, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/accounts/${accountId}/intel/indicator-feeds/${feedId}/data`, {
      ...options,
      headers: { Accept: 'text/csv', ...options?.headers },
    });
  }

  /**
   * Get indicator feed metadata
   */
  get(
    accountId: string,
    feedId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/intel/indicator-feeds/${feedId}`, options) as Core.APIPromise<{
        result: IndicatorFeedGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Grant permission to indicator feed
   */
  permissionsAdd(
    accountId: string,
    body: IndicatorFeedPermissionsAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedPermissionsAddResponse> {
    return (
      this._client.put(`/accounts/${accountId}/intel/indicator-feeds/permissions/add`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndicatorFeedPermissionsAddResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revoke permission to indicator feed
   */
  permissionsRemove(
    accountId: string,
    body: IndicatorFeedPermissionsRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedPermissionsRemoveResponse> {
    return (
      this._client.put(`/accounts/${accountId}/intel/indicator-feeds/permissions/remove`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndicatorFeedPermissionsRemoveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List indicator feed permissions
   */
  permissionsView(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedPermissionsViewResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/intel/indicator-feeds/permissions/view`,
        options,
      ) as Core.APIPromise<{ result: IndicatorFeedPermissionsViewResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update indicator feed data
   */
  snapshot(
    accountId: string,
    feedId: number,
    body: IndicatorFeedSnapshotParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedSnapshotResponse> {
    return (
      this._client.put(
        `/accounts/${accountId}/intel/indicator-feeds/${feedId}/snapshot`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: IndicatorFeedSnapshotResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IndicatorFeedCreateResponse {
  /**
   * The unique identifier for the indicator feed
   */
  id?: number;

  /**
   * The date and time when the data entry was created
   */
  created_on?: string;

  /**
   * The description of the example test
   */
  description?: string;

  /**
   * The date and time when the data entry was last modified
   */
  modified_on?: string;

  /**
   * The name of the indicator feed
   */
  name?: string;
}

export type IndicatorFeedListResponse = Array<IndicatorFeedListResponse.IndicatorFeedListResponseItem>;

export namespace IndicatorFeedListResponse {
  export interface IndicatorFeedListResponseItem {
    /**
     * The unique identifier for the indicator feed
     */
    id?: number;

    /**
     * The date and time when the data entry was created
     */
    created_on?: string;

    /**
     * The description of the example test
     */
    description?: string;

    /**
     * The date and time when the data entry was last modified
     */
    modified_on?: string;

    /**
     * The name of the indicator feed
     */
    name?: string;
  }
}

export type IndicatorFeedDataResponse = string;

export interface IndicatorFeedGetResponse {
  /**
   * The unique identifier for the indicator feed
   */
  id?: number;

  /**
   * The date and time when the data entry was created
   */
  created_on?: string;

  /**
   * The description of the example test
   */
  description?: string;

  /**
   * Status of the latest snapshot uploaded
   */
  latest_upload_status?: 'Mirroring' | 'Unifying' | 'Loading' | 'Provisioning' | 'Complete' | 'Error';

  /**
   * The date and time when the data entry was last modified
   */
  modified_on?: string;

  /**
   * The name of the indicator feed
   */
  name?: string;
}

export interface IndicatorFeedPermissionsAddResponse {
  /**
   * Whether the update succeeded or not
   */
  success?: boolean;
}

export interface IndicatorFeedPermissionsRemoveResponse {
  /**
   * Whether the update succeeded or not
   */
  success?: boolean;
}

export type IndicatorFeedPermissionsViewResponse =
  Array<IndicatorFeedPermissionsViewResponse.IndicatorFeedPermissionsViewResponseItem>;

export namespace IndicatorFeedPermissionsViewResponse {
  export interface IndicatorFeedPermissionsViewResponseItem {
    /**
     * The unique identifier for the indicator feed
     */
    id?: number;

    /**
     * The description of the example test
     */
    description?: string;

    /**
     * The name of the indicator feed
     */
    name?: string;
  }
}

export interface IndicatorFeedSnapshotResponse {
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

export interface IndicatorFeedCreateParams {
  /**
   * The description of the example test
   */
  description?: string;

  /**
   * The name of the indicator feed
   */
  name?: string;
}

export interface IndicatorFeedPermissionsAddParams {
  /**
   * The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export interface IndicatorFeedPermissionsRemoveParams {
  /**
   * The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export interface IndicatorFeedSnapshotParams {
  /**
   * The file to upload
   */
  source?: string;
}

export namespace IndicatorFeeds {
  export import IndicatorFeedCreateResponse = IndicatorFeedsAPI.IndicatorFeedCreateResponse;
  export import IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export import IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export import IndicatorFeedGetResponse = IndicatorFeedsAPI.IndicatorFeedGetResponse;
  export import IndicatorFeedPermissionsAddResponse = IndicatorFeedsAPI.IndicatorFeedPermissionsAddResponse;
  export import IndicatorFeedPermissionsRemoveResponse = IndicatorFeedsAPI.IndicatorFeedPermissionsRemoveResponse;
  export import IndicatorFeedPermissionsViewResponse = IndicatorFeedsAPI.IndicatorFeedPermissionsViewResponse;
  export import IndicatorFeedSnapshotResponse = IndicatorFeedsAPI.IndicatorFeedSnapshotResponse;
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedPermissionsAddParams = IndicatorFeedsAPI.IndicatorFeedPermissionsAddParams;
  export import IndicatorFeedPermissionsRemoveParams = IndicatorFeedsAPI.IndicatorFeedPermissionsRemoveParams;
  export import IndicatorFeedSnapshotParams = IndicatorFeedsAPI.IndicatorFeedSnapshotParams;
}
