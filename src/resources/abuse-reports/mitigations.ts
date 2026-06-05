// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import {
  PagePromise,
  SinglePage,
  V4PagePagination,
  type V4PagePaginationParams,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseMitigations extends APIResource {
  static override readonly _key: readonly ['abuseReports', 'mitigations'] = Object.freeze([
    'abuseReports',
    'mitigations',
  ] as const);

  /**
   * List mitigations done to remediate the abuse report.
   */
  list(
    reportID: string,
    params: MitigationListParams,
    options?: RequestOptions,
  ): PagePromise<MitigationListResponsesV4PagePagination, MitigationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/abuse-reports/${reportID}/mitigations`,
      V4PagePagination<MitigationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Request a review for mitigations on an account.
   */
  review(
    reportID: string,
    params: MitigationReviewParams,
    options?: RequestOptions,
  ): PagePromise<MitigationReviewResponsesSinglePage, MitigationReviewResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/abuse-reports/${reportID}/mitigations/appeal`,
      SinglePage<MitigationReviewResponse>,
      { body, method: 'post', ...options },
    );
  }
}
export class Mitigations extends BaseMitigations {}

export type MitigationListResponsesV4PagePagination = V4PagePagination<MitigationListResponse>;

export type MitigationReviewResponsesSinglePage = SinglePage<MitigationReviewResponse>;

export interface MitigationListResponse {
  mitigations: Array<MitigationListResponse.Mitigation>;
}

export namespace MitigationListResponse {
  export interface Mitigation {
    /**
     * ID of remediation.
     */
    id: string;

    /**
     * Date when the mitigation will become active. Time in RFC 3339 format
     * (https://www.rfc-editor.org/rfc/rfc3339.html)
     */
    effective_date: string;

    entity_id: string;

    /**
     * The type of entity targeted by a mitigation.
     */
    entity_type: 'url_pattern' | 'account' | 'zone';

    /**
     * The status of a mitigation
     */
    status: 'pending' | 'active' | 'in_review' | 'cancelled' | 'removed';

    /**
     * The type of mitigation applied to a reported entity.
     */
    type:
      | 'account_suspend'
      | 'copyright_interstitial'
      | 'geo_block'
      | 'legal_block'
      | 'malware_interstitial'
      | 'misleading_interstitial'
      | 'network_block'
      | 'phishing_interstitial'
      | 'playfairite_enforce'
      | 'r2_takedown_account'
      | 'r2_takedown_bucket'
      | 'r2_takedown_object'
      | 'rate_limit_cache'
      | 'redirect_video_stream'
      | 'registrar_freeze'
      | 'registrar_parking'
      | 'stream_block_account'
      | 'user_suspend'
      | 'workers_takedown_by_zone_id';
  }
}

export interface MitigationReviewResponse {
  /**
   * ID of remediation.
   */
  id: string;

  /**
   * Date when the mitigation will become active. Time in RFC 3339 format
   * (https://www.rfc-editor.org/rfc/rfc3339.html)
   */
  effective_date: string;

  entity_id: string;

  /**
   * The type of entity targeted by a mitigation.
   */
  entity_type: 'url_pattern' | 'account' | 'zone';

  /**
   * The status of a mitigation
   */
  status: 'pending' | 'active' | 'in_review' | 'cancelled' | 'removed';

  /**
   * The type of mitigation applied to a reported entity.
   */
  type:
    | 'account_suspend'
    | 'copyright_interstitial'
    | 'geo_block'
    | 'legal_block'
    | 'malware_interstitial'
    | 'misleading_interstitial'
    | 'network_block'
    | 'phishing_interstitial'
    | 'playfairite_enforce'
    | 'r2_takedown_account'
    | 'r2_takedown_bucket'
    | 'r2_takedown_object'
    | 'rate_limit_cache'
    | 'redirect_video_stream'
    | 'registrar_freeze'
    | 'registrar_parking'
    | 'stream_block_account'
    | 'user_suspend'
    | 'workers_takedown_by_zone_id';
}

export interface MitigationListParams extends V4PagePaginationParams {
  /**
   * Path param: Cloudflare Account ID
   */
  account_id: string;

  /**
   * Query param: Returns mitigation that were dispatched after the given date
   */
  effective_after?: string;

  /**
   * Query param: Returns mitigations that were dispatched before the given date
   */
  effective_before?: string;

  /**
   * Query param: Filter by the type of entity the mitigation impacts.
   */
  entity_type?: 'url_pattern' | 'account' | 'zone';

  /**
   * Query param: A property to sort by, followed by the order
   */
  sort?:
    | 'type,asc'
    | 'type,desc'
    | 'effective_date,asc'
    | 'effective_date,desc'
    | 'status,asc'
    | 'status,desc'
    | 'entity_type,asc'
    | 'entity_type,desc';

  /**
   * Query param: Filter by the status of the mitigation.
   */
  status?: 'pending' | 'active' | 'in_review' | 'cancelled' | 'removed';

  /**
   * Query param: Filter by the type of mitigation. This filter parameter can be
   * specified multiple times to include multiple types of mitigations in the result
   * set, e.g. ?type=rate_limit_cache&type=legal_block.
   */
  type?:
    | 'account_suspend'
    | 'copyright_interstitial'
    | 'geo_block'
    | 'legal_block'
    | 'malware_interstitial'
    | 'misleading_interstitial'
    | 'network_block'
    | 'phishing_interstitial'
    | 'playfairite_enforce'
    | 'r2_takedown_account'
    | 'r2_takedown_bucket'
    | 'r2_takedown_object'
    | 'rate_limit_cache'
    | 'redirect_video_stream'
    | 'registrar_freeze'
    | 'registrar_parking'
    | 'stream_block_account'
    | 'user_suspend'
    | 'workers_takedown_by_zone_id';
}

export interface MitigationReviewParams {
  /**
   * Path param: Cloudflare Account ID
   */
  account_id: string;

  /**
   * Body param: List of mitigations to appeal.
   */
  appeals: Array<MitigationReviewParams.Appeal>;
}

export namespace MitigationReviewParams {
  export interface Appeal {
    /**
     * ID of the mitigation to appeal.
     */
    id: string;

    /**
     * Reason why the customer is appealing.
     */
    reason: 'removed' | 'misclassified';
  }
}

export declare namespace Mitigations {
  export {
    type MitigationListResponse as MitigationListResponse,
    type MitigationReviewResponse as MitigationReviewResponse,
    type MitigationListResponsesV4PagePagination as MitigationListResponsesV4PagePagination,
    type MitigationReviewResponsesSinglePage as MitigationReviewResponsesSinglePage,
    type MitigationListParams as MitigationListParams,
    type MitigationReviewParams as MitigationReviewParams,
  };
}
