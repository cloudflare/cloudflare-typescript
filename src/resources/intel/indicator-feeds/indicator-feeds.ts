// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IndicatorFeedsAPI from 'cloudflare/resources/intel/indicator-feeds/indicator-feeds';
import * as PermissionsAPI from 'cloudflare/resources/intel/indicator-feeds/permissions';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class IndicatorFeeds extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

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
   * Update indicator feed data
   */
  update(
    accountId: string,
    feedId: number,
    body: IndicatorFeedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedUpdateResponse> {
    return (
      this._client.put(
        `/accounts/${accountId}/intel/indicator-feeds/${feedId}/snapshot`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: IndicatorFeedUpdateResponse }>
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

export interface IndicatorFeedUpdateResponse {
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

export interface IndicatorFeedUpdateParams {
  /**
   * The file to upload
   */
  source?: string;
}

export namespace IndicatorFeeds {
  export import IndicatorFeedCreateResponse = IndicatorFeedsAPI.IndicatorFeedCreateResponse;
  export import IndicatorFeedUpdateResponse = IndicatorFeedsAPI.IndicatorFeedUpdateResponse;
  export import IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export import IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export import IndicatorFeedGetResponse = IndicatorFeedsAPI.IndicatorFeedGetResponse;
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedUpdateParams = IndicatorFeedsAPI.IndicatorFeedUpdateParams;
  export import Permissions = PermissionsAPI.Permissions;
  export import PermissionCreateResponse = PermissionsAPI.PermissionCreateResponse;
  export import PermissionListResponse = PermissionsAPI.PermissionListResponse;
  export import PermissionDeleteResponse = PermissionsAPI.PermissionDeleteResponse;
  export import PermissionCreateParams = PermissionsAPI.PermissionCreateParams;
  export import PermissionDeleteParams = PermissionsAPI.PermissionDeleteParams;
}
