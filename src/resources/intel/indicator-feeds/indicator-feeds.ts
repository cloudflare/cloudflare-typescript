// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DownloadsAPI from './downloads';
import { BaseDownloads, Downloads } from './downloads';
import * as PermissionsAPI from './permissions';
import {
  BasePermissions,
  PermissionCreateParams,
  PermissionCreateResponse,
  PermissionDeleteParams,
  PermissionDeleteResponse,
  PermissionListParams,
  PermissionListResponse,
  Permissions,
} from './permissions';
import * as SnapshotsAPI from './snapshots';
import { BaseSnapshots, SnapshotUpdateParams, SnapshotUpdateResponse, Snapshots } from './snapshots';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseIndicatorFeeds extends APIResource {
  static override readonly _key: readonly ['intel', 'indicatorFeeds'] = Object.freeze([
    'intel',
    'indicatorFeeds',
  ] as const);

  /**
   * Creates a new custom threat indicator feed for sharing threat intelligence data.
   *
   * @example
   * ```ts
   * const indicatorFeed =
   *   await client.intel.indicatorFeeds.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
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
   * Revises details for a specific custom threat indicator feed.
   *
   * @example
   * ```ts
   * const indicatorFeed =
   *   await client.intel.indicatorFeeds.update(12, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
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
   * Retrieves details for all accessible custom threat indicator feeds.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const indicatorFeedListResponse of client.intel.indicatorFeeds.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   * Retrieves the raw data entries in a custom threat indicator feed.
   *
   * @example
   * ```ts
   * const response = await client.intel.indicatorFeeds.data(
   *   12,
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  data(feedID: number, params: IndicatorFeedDataParams, options?: RequestOptions): APIPromise<string> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/intel/indicator-feeds/${feedID}/data`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }

  /**
   * Retrieves details for a specific custom threat indicator feed.
   *
   * @example
   * ```ts
   * const indicatorFeed = await client.intel.indicatorFeeds.get(
   *   12,
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
export class IndicatorFeeds extends BaseIndicatorFeeds {
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
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
   * Summary of indicator counts from the last successful upload to this feed.
   * Populated by the custom-threat-feeds loader at the end of each successful load.
   * Absent (omitted) when no upload has completed successfully or the upload errored
   * before the summary write. Surfaces silent-failure paths so operators can see
   * when their indicators were dropped (popularity allowlist, expired valid_until,
   * etc.) without reading loader logs.
   */
  last_upload_summary?: IndicatorFeedGetResponse.LastUploadSummary;

  /**
   * Human-readable error message describing why the latest upload failed. Populated
   * only when `latest_upload_status` is `Error`. Returns one of a small fixed set of
   * category-level messages (invalid domain / IP / URL entries, malformed row or
   * header, invalid valid_until timestamp, etc.) or the generic `Upload failed` for
   * unknown or infrastructure-level errors. Never echoes raw error text from the
   * underlying loader. Intel accounts receive the verbatim loader/API error text
   * (including specific offending values) instead of these category-level messages.
   */
  latest_upload_error?: string;

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
  provider_id?: number;

  /**
   * The provider of the indicator feed
   */
  provider_name?: string;
}

export namespace IndicatorFeedGetResponse {
  /**
   * Summary of indicator counts from the last successful upload to this feed.
   * Populated by the custom-threat-feeds loader at the end of each successful load.
   * Absent (omitted) when no upload has completed successfully or the upload errored
   * before the summary write. Surfaces silent-failure paths so operators can see
   * when their indicators were dropped (popularity allowlist, expired valid_until,
   * etc.) without reading loader logs.
   */
  export interface LastUploadSummary {
    /**
     * Net delta applied to feed indicators by this upload. Snapshot uploads emit both
     * _\_added and _\_removed; delta-add emits only _\_added; delta-remove emits only
     * _\_removed.
     */
    persisted?: LastUploadSummary.Persisted;

    /**
     * Counts of indicators that were uploaded but did not reach QuickSilver, broken
     * down by reason.
     */
    skipped?: LastUploadSummary.Skipped;

    /**
     * Indicator counts from the unified file the loader received
     */
    uploaded?: LastUploadSummary.Uploaded;
  }

  export namespace LastUploadSummary {
    /**
     * Net delta applied to feed indicators by this upload. Snapshot uploads emit both
     * _\_added and _\_removed; delta-add emits only _\_added; delta-remove emits only
     * _\_removed.
     */
    export interface Persisted {
      domains_added?: number;

      domains_removed?: number;

      ips_added?: number;

      ips_removed?: number;

      urls_added?: number;

      urls_removed?: number;
    }

    /**
     * Counts of indicators that were uploaded but did not reach QuickSilver, broken
     * down by reason.
     */
    export interface Skipped {
      /**
       * Domains filtered by the global popularity allowlist at QS provisioning time.
       * Popular domains (bing.com, naver.com, etc.) are protected from
       * custom-threat-feed enforcement.
       */
      allowlisted_domains?: number;

      /**
       * Indicators in the upload whose valid_until is already in the past. These are not
       * added to QS; the expiration cron handles cleanup.
       */
      expired_indicators?: number;

      /**
       * Reserved for future use. Currently always 0 — the unifier aborts the entire
       * upload on a single bad indicator.
       */
      invalid_indicators?: number;
    }

    /**
     * Indicator counts from the unified file the loader received
     */
    export interface Uploaded {
      /**
       * Number of domain indicators in the upload
       */
      domains?: number;

      /**
       * Number of IP indicators in the upload
       */
      ips?: number;

      /**
       * Number of URL indicators in the upload
       */
      urls?: number;
    }
  }
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
IndicatorFeeds.BaseSnapshots = BaseSnapshots;
IndicatorFeeds.Permissions = Permissions;
IndicatorFeeds.BasePermissions = BasePermissions;
IndicatorFeeds.Downloads = Downloads;
IndicatorFeeds.BaseDownloads = BaseDownloads;

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
    BaseSnapshots as BaseSnapshots,
    type SnapshotUpdateResponse as SnapshotUpdateResponse,
    type SnapshotUpdateParams as SnapshotUpdateParams,
  };

  export {
    Permissions as Permissions,
    BasePermissions as BasePermissions,
    type PermissionCreateResponse as PermissionCreateResponse,
    type PermissionListResponse as PermissionListResponse,
    type PermissionDeleteResponse as PermissionDeleteResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionListParams as PermissionListParams,
    type PermissionDeleteParams as PermissionDeleteParams,
  };

  export { Downloads as Downloads, BaseDownloads as BaseDownloads };
}
