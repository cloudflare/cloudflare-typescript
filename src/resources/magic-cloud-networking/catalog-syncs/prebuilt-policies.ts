// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePrebuiltPolicies extends APIResource {
  static override readonly _key: readonly ['magicCloudNetworking', 'catalogSyncs', 'prebuiltPolicies'] =
    Object.freeze(['magicCloudNetworking', 'catalogSyncs', 'prebuiltPolicies'] as const);

  /**
   * List prebuilt catalog sync policies (Closed Beta).
   */
  list(
    params: PrebuiltPolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PrebuiltPolicyListResponsesSinglePage, PrebuiltPolicyListResponse> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/cloud/catalog-syncs/prebuilt-policies`,
      SinglePage<PrebuiltPolicyListResponse>,
      { query, ...options },
    );
  }
}
export class PrebuiltPolicies extends BasePrebuiltPolicies {}

export type PrebuiltPolicyListResponsesSinglePage = SinglePage<PrebuiltPolicyListResponse>;

export interface PrebuiltPolicyListResponse {
  applicable_destinations: Array<'NONE' | 'ZERO_TRUST_LIST'>;

  policy_description: string;

  policy_name: string;

  policy_string: string;
}

export interface PrebuiltPolicyListParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param: Specify type of destination, omit to return all.
   */
  destination_type?: 'NONE' | 'ZERO_TRUST_LIST';
}

export declare namespace PrebuiltPolicies {
  export {
    type PrebuiltPolicyListResponse as PrebuiltPolicyListResponse,
    type PrebuiltPolicyListResponsesSinglePage as PrebuiltPolicyListResponsesSinglePage,
    type PrebuiltPolicyListParams as PrebuiltPolicyListParams,
  };
}
