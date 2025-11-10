// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage, V4PagePagination, type V4PagePaginationParams } from '../../pagination';

export class Mitigations extends APIResource {
  /**
   * List mitigations done to remediate the abuse report.
   */
  list(
    reportId: string,
    params: MitigationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MitigationListResponsesV4PagePagination, MitigationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/abuse-reports/${reportId}/mitigations`,
      MitigationListResponsesV4PagePagination,
      { query, ...options },
    );
  }

  /**
   * Request a review for mitigations on an account.
   */
  review(
    reportId: string,
    params: MitigationReviewParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MitigationReviewResponsesSinglePage, MitigationReviewResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/abuse-reports/${reportId}/mitigations/appeal`,
      MitigationReviewResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }
}

export class MitigationListResponsesV4PagePagination extends V4PagePagination<MitigationListResponse> {}

export class MitigationReviewResponsesSinglePage extends SinglePage<MitigationReviewResponse> {}

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

    entity_type: 'url_pattern' | 'account' | 'zone';

    /**
     * The status of a mitigation
     */
    status: 'pending' | 'active' | 'in_review' | 'cancelled' | 'removed';

    /**
     * The type of mitigation
     */
    type:
      | 'legal_block'
      | 'phishing_interstitial'
      | 'network_block'
      | 'rate_limit_cache'
      | 'account_suspend'
      | 'redirect_video_stream';
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

  entity_type: 'url_pattern' | 'account' | 'zone';

  /**
   * The status of a mitigation
   */
  status: 'pending' | 'active' | 'in_review' | 'cancelled' | 'removed';

  /**
   * The type of mitigation
   */
  type:
    | 'legal_block'
    | 'phishing_interstitial'
    | 'network_block'
    | 'rate_limit_cache'
    | 'account_suspend'
    | 'redirect_video_stream';
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
    | 'legal_block'
    | 'phishing_interstitial'
    | 'network_block'
    | 'rate_limit_cache'
    | 'account_suspend'
    | 'redirect_video_stream';
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

Mitigations.MitigationListResponsesV4PagePagination = MitigationListResponsesV4PagePagination;
Mitigations.MitigationReviewResponsesSinglePage = MitigationReviewResponsesSinglePage;

export declare namespace Mitigations {
  export {
    type MitigationListResponse as MitigationListResponse,
    type MitigationReviewResponse as MitigationReviewResponse,
    MitigationListResponsesV4PagePagination as MitigationListResponsesV4PagePagination,
    MitigationReviewResponsesSinglePage as MitigationReviewResponsesSinglePage,
    type MitigationListParams as MitigationListParams,
    type MitigationReviewParams as MitigationReviewParams,
  };
}
