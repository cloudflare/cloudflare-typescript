// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseRemediationTypes extends APIResource {
  static override readonly _key: readonly [
    'zeroTrust',
    'casb',
    'posture',
    'findingTypes',
    'remediationTypes',
  ] = Object.freeze(['zeroTrust', 'casb', 'posture', 'findingTypes', 'remediationTypes'] as const);

  /**
   * List all remediation types for a given finding type. This endpoint supports both
   * cursor and offset pagination. Note that `cursor` and `page` are mutually
   * exclusive.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const remediationTypeListResponse of client.zeroTrust.casb.posture.findingTypes.remediationTypes.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    findingTypeID: string,
    params: RemediationTypeListParams,
    options?: RequestOptions,
  ): PagePromise<RemediationTypeListResponsesV4PagePaginationArray, RemediationTypeListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/finding_types/${findingTypeID}/remediation_types`,
      V4PagePaginationArray<RemediationTypeListResponse>,
      { query, ...options },
    );
  }
}
export class RemediationTypes extends BaseRemediationTypes {}

export type RemediationTypeListResponsesV4PagePaginationArray =
  V4PagePaginationArray<RemediationTypeListResponse>;

/**
 * Information about a remediation type.
 */
export interface RemediationTypeListResponse {
  /**
   * The identifier for the remediation type.
   */
  id: string;

  /**
   * A description of the action(s) taken by the remediation type.
   */
  description: string;

  /**
   * The name of the remediation type as displayed in the cloudflare dashboard.
   */
  display_name: string;

  /**
   * The identifier of the finding_type which this remediation type should remediate.
   */
  finding_type_id: string;

  /**
   * The name of the remediation type.
   */
  remediation_type: string;
}

export interface RemediationTypeListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Query param: A cursor for pagination.
   */
  cursor?: string;

  /**
   * Query param: Filter by an integration ID
   */
  integration_id?: string;
}

export declare namespace RemediationTypes {
  export {
    type RemediationTypeListResponse as RemediationTypeListResponse,
    type RemediationTypeListResponsesV4PagePaginationArray as RemediationTypeListResponsesV4PagePaginationArray,
    type RemediationTypeListParams as RemediationTypeListParams,
  };
}
