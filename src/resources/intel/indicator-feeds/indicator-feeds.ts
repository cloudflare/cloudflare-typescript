// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DownloadsAPI from './downloads';
import { DownloadGetParams, DownloadGetResponse, Downloads } from './downloads';
import * as PermissionsAPI from './permissions';
import {
  PermissionCreateParams,
  PermissionCreateResponse,
  PermissionDeleteParams,
  PermissionDeleteResponse,
  PermissionListParams,
  PermissionListResponse,
  Permissions,
} from './permissions';
import * as SnapshotsAPI from './snapshots';
import { SnapshotUpdateParams, SnapshotUpdateResponse, Snapshots } from './snapshots';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IndicatorFeeds extends APIResource {
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Create new indicator feed
   */
  create(
    params: IndicatorFeedCreateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorFeedCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/intel/indicator-feeds`, {
        body,
        ...options,
      }) as APIPromise<{ result: IndicatorFeedCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update indicator feed metadata
   */
  update(
    feedID: number,
    params: IndicatorFeedUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorFeedUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/intel/indicator-feeds/${feedID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: IndicatorFeedUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get indicator feeds owned by this account
   */
  list(
    params: IndicatorFeedListParams,
    options?: RequestOptions,
  ): PagePromise<IndicatorFeedListResponsesSinglePage, IndicatorFeedListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/intel/indicator-feeds`,
      SinglePage<IndicatorFeedListResponse>,
      options,
    );
  }

  /**
   * Get indicator feed data
   */
  data(feedID: number, params: IndicatorFeedDataParams, options?: RequestOptions): APIPromise<string> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/intel/indicator-feeds/${feedID}/data`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }

  /**
   * Get indicator feed metadata
   */
  get(
    feedID: number,
    params: IndicatorFeedGetParams,
    options?: RequestOptions,
  ): APIPromise<IndicatorFeedGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/intel/indicator-feeds/${feedID}`, options) as APIPromise<{
        result: IndicatorFeedGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IndicatorFeedListResponsesSinglePage = SinglePage<IndicatorFeedListResponse>;

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
   * Whether the indicator feed can be attributed to a provider
   */
  is_attributable?: boolean;

  /**
   * Whether the indicator feed can be downloaded
   */
  is_downloadable?: boolean;

  /**
   * Whether the indicator feed is exposed to customers
   */
  is_public?: boolean;

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
   * Whether the indicator feed can be attributed to a provider
   */
  is_attributable?: boolean;

  /**
   * Whether the indicator feed can be downloaded
   */
  is_downloadable?: boolean;

  /**
   * Whether the indicator feed is exposed to customers
   */
  is_public?: boolean;

  /**
   * The date and time when the data entry was last modified
   */
  modified_on?: string;

  /**
   * The name of the indicator feed
   */
  name?: string;
}

export interface IndicatorFeedListResponse {
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
   * Whether the indicator feed can be attributed to a provider
   */
  is_attributable?: boolean;

  /**
   * Whether the indicator feed can be downloaded
   */
  is_downloadable?: boolean;

  /**
   * Whether the indicator feed is exposed to customers
   */
  is_public?: boolean;

  /**
   * The date and time when the data entry was last modified
   */
  modified_on?: string;

  /**
   * The name of the indicator feed
   */
  name?: string;
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
   * Whether the indicator feed can be attributed to a provider
   */
  is_attributable?: boolean;

  /**
   * Whether the indicator feed can be downloaded
   */
  is_downloadable?: boolean;

  /**
   * Whether the indicator feed is exposed to customers
   */
  is_public?: boolean;

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

  /**
   * The unique identifier for the provider
   */
  provider_id?: string;

  /**
   * The provider of the indicator feed
   */
  provider_name?: string;
}

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
   * Body param: The new description of the feed
   */
  description?: string;

  /**
   * Body param: The new is_attributable value of the feed
   */
  is_attributable?: boolean;

  /**
   * Body param: The new is_downloadable value of the feed
   */
  is_downloadable?: boolean;

  /**
   * Body param: The new is_public value of the feed
   */
  is_public?: boolean;

  /**
   * Body param: The new name of the feed
   */
  name?: string;
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

IndicatorFeeds.Snapshots = Snapshots;
IndicatorFeeds.Permissions = Permissions;
IndicatorFeeds.Downloads = Downloads;

export declare namespace IndicatorFeeds {
  export {
    type IndicatorFeedCreateResponse as IndicatorFeedCreateResponse,
    type IndicatorFeedUpdateResponse as IndicatorFeedUpdateResponse,
    type IndicatorFeedListResponse as IndicatorFeedListResponse,
    type IndicatorFeedDataResponse as IndicatorFeedDataResponse,
    type IndicatorFeedGetResponse as IndicatorFeedGetResponse,
    type IndicatorFeedListResponsesSinglePage as IndicatorFeedListResponsesSinglePage,
    type IndicatorFeedCreateParams as IndicatorFeedCreateParams,
    type IndicatorFeedUpdateParams as IndicatorFeedUpdateParams,
    type IndicatorFeedListParams as IndicatorFeedListParams,
    type IndicatorFeedDataParams as IndicatorFeedDataParams,
    type IndicatorFeedGetParams as IndicatorFeedGetParams,
  };

  export {
    Snapshots as Snapshots,
    type SnapshotUpdateResponse as SnapshotUpdateResponse,
    type SnapshotUpdateParams as SnapshotUpdateParams,
  };

  export {
    Permissions as Permissions,
    type PermissionCreateResponse as PermissionCreateResponse,
    type PermissionListResponse as PermissionListResponse,
    type PermissionDeleteResponse as PermissionDeleteResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
    type PermissionDeleteParams as PermissionDeleteParams,
  };

  export {
    Downloads as Downloads,
    type DownloadGetResponse as DownloadGetResponse,
    type DownloadGetParams as DownloadGetParams,
  };
}
