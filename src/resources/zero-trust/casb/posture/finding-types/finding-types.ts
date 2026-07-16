// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as RemediationTypesAPI from './remediation-types';
import {
  BaseRemediationTypes,
  RemediationTypeListParams,
  RemediationTypeListResponse,
  RemediationTypeListResponsesV4PagePaginationArray,
  RemediationTypes,
} from './remediation-types';
import { APIPromise } from '../../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseFindingTypes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'findingTypes'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'findingTypes',
  ] as const);

  /**
   * List all available finding types with pagination support.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const findingTypeListResponse of client.zeroTrust.casb.posture.findingTypes.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: FindingTypeListParams,
    options?: RequestOptions,
  ): PagePromise<FindingTypeListResponsesV4PagePaginationArray, FindingTypeListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/finding_types`,
      V4PagePaginationArray<FindingTypeListResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieve a specific finding type by its unique identifier.
   *
   * @example
   * ```ts
   * const findingType =
   *   await client.zeroTrust.casb.posture.findingTypes.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  get(
    findingTypeID: string,
    params: FindingTypeGetParams,
    options?: RequestOptions,
  ): APIPromise<FindingTypeGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/data-security/posture/finding_types/${findingTypeID}`,
        options,
      ) as APIPromise<{ result: FindingTypeGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class FindingTypes extends BaseFindingTypes {
  remediationTypes: RemediationTypesAPI.RemediationTypes = new RemediationTypesAPI.RemediationTypes(
    this._client,
  );
}

export type FindingTypeListResponsesV4PagePaginationArray = V4PagePaginationArray<FindingTypeListResponse>;

/**
 * Basic finding type information.
 */
export interface FindingTypeListResponse {
  /**
   * The unique identifier of the finding.
   */
  id: string;

  /**
   * Category information for a finding.
   */
  category: FindingTypeListResponse.Category;

  /**
   * The name of the finding.
   */
  name: string;

  /**
   * The severity level of a finding.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * The SaaS/Cloud vendor of the platform with which the finding is associated.
   */
  vendor: string;
}

export namespace FindingTypeListResponse {
  /**
   * Category information for a finding.
   */
  export interface Category {
    /**
     * The type of the observation.
     */
    observation: 'Issue' | 'Insight' | 'Activity';

    /**
     * The product category.
     */
    product: 'SaaS' | 'Cloud';

    /**
     * The type of the finding category.
     */
    type: 'Content' | 'Posture';
  }
}

/**
 * Basic finding type information.
 */
export interface FindingTypeGetResponse {
  /**
   * The unique identifier of the finding.
   */
  id: string;

  /**
   * Category information for a finding.
   */
  category: FindingTypeGetResponse.Category;

  /**
   * The name of the finding.
   */
  name: string;

  /**
   * The severity level of a finding.
   */
  severity: 'Critical' | 'High' | 'Medium' | 'Low';

  /**
   * The SaaS/Cloud vendor of the platform with which the finding is associated.
   */
  vendor: string;
}

export namespace FindingTypeGetResponse {
  /**
   * Category information for a finding.
   */
  export interface Category {
    /**
     * The type of the observation.
     */
    observation: 'Issue' | 'Insight' | 'Activity';

    /**
     * The product category.
     */
    product: 'SaaS' | 'Cloud';

    /**
     * The type of the finding category.
     */
    type: 'Content' | 'Posture';
  }
}

export interface FindingTypeListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface FindingTypeGetParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

FindingTypes.RemediationTypes = RemediationTypes;
FindingTypes.BaseRemediationTypes = BaseRemediationTypes;

export declare namespace FindingTypes {
  export {
    type FindingTypeListResponse as FindingTypeListResponse,
    type FindingTypeGetResponse as FindingTypeGetResponse,
    type FindingTypeListResponsesV4PagePaginationArray as FindingTypeListResponsesV4PagePaginationArray,
    type FindingTypeListParams as FindingTypeListParams,
    type FindingTypeGetParams as FindingTypeGetParams,
  };

  export {
    RemediationTypes as RemediationTypes,
    BaseRemediationTypes as BaseRemediationTypes,
    type RemediationTypeListResponse as RemediationTypeListResponse,
    type RemediationTypeListResponsesV4PagePaginationArray as RemediationTypeListResponsesV4PagePaginationArray,
    type RemediationTypeListParams as RemediationTypeListParams,
  };
}
