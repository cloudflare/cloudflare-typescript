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
    params: IndicatorFeedCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntelIndicatorFeedItem> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/intel/indicator-feeds`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntelIndicatorFeedItem }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update indicator feed data
   */
  update(
    feedId: number,
    params: IndicatorFeedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntelUpdateFeed> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/intel/indicator-feeds/${feedId}/snapshot`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: IntelUpdateFeed }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get indicator feeds owned by this account
   */
  list(
    params: IndicatorFeedListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/indicator-feeds`, options) as Core.APIPromise<{
        result: IndicatorFeedListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get indicator feed data
   */
  data(
    feedId: number,
    params: IndicatorFeedDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/intel/indicator-feeds/${feedId}/data`, {
      ...options,
      headers: { Accept: 'text/csv', ...options?.headers },
    });
  }

  /**
   * Get indicator feed metadata
   */
  get(
    feedId: number,
    params: IndicatorFeedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntelIndicatorFeedMetadata> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/intel/indicator-feeds/${feedId}`,
        options,
      ) as Core.APIPromise<{ result: IntelIndicatorFeedMetadata }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IntelIndicatorFeedItem {
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

export interface IntelIndicatorFeedMetadata {
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

export interface IntelUpdateFeed {
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

export type IndicatorFeedListResponse = Array<IntelIndicatorFeedItem>;

export type IndicatorFeedDataResponse = string;

export interface IndicatorFeedCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The description of the example test
   */
  description?: string;

  /**
   * Body param: The name of the indicator feed
   */
  name?: string;
}

export interface IndicatorFeedUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The file to upload
   */
  source?: string;
}

export interface IndicatorFeedListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IndicatorFeedDataParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IndicatorFeedGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace IndicatorFeeds {
  export import IntelIndicatorFeedItem = IndicatorFeedsAPI.IntelIndicatorFeedItem;
  export import IntelIndicatorFeedMetadata = IndicatorFeedsAPI.IntelIndicatorFeedMetadata;
  export import IntelUpdateFeed = IndicatorFeedsAPI.IntelUpdateFeed;
  export import IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export import IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedUpdateParams = IndicatorFeedsAPI.IndicatorFeedUpdateParams;
  export import IndicatorFeedListParams = IndicatorFeedsAPI.IndicatorFeedListParams;
  export import IndicatorFeedDataParams = IndicatorFeedsAPI.IndicatorFeedDataParams;
  export import IndicatorFeedGetParams = IndicatorFeedsAPI.IndicatorFeedGetParams;
  export import Permissions = PermissionsAPI.Permissions;
  export import IntelPermissionListItem = PermissionsAPI.IntelPermissionListItem;
  export import IntelPermissionsUpdate = PermissionsAPI.IntelPermissionsUpdate;
  export import PermissionListResponse = PermissionsAPI.PermissionListResponse;
  export import PermissionCreateParams = PermissionsAPI.PermissionCreateParams;
  export import PermissionListParams = PermissionsAPI.PermissionListParams;
  export import PermissionDeleteParams = PermissionsAPI.PermissionDeleteParams;
}
