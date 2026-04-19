// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class PrebuiltPolicies extends APIResource {
  /**
   * List prebuilt catalog sync policies (Closed Beta).
   */
  list(
    params?: PrebuiltPolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PrebuiltPolicyListResponsesSinglePage, PrebuiltPolicyListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PrebuiltPolicyListResponsesSinglePage, PrebuiltPolicyListResponse>;
  list(
    params: PrebuiltPolicyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PrebuiltPolicyListResponsesSinglePage, PrebuiltPolicyListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/cloud/catalog-syncs/prebuilt-policies`,
      PrebuiltPolicyListResponsesSinglePage,
      { query, ...options },
    );
  }
}

export class PrebuiltPolicyListResponsesSinglePage extends SinglePage<PrebuiltPolicyListResponse> {}

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

PrebuiltPolicies.PrebuiltPolicyListResponsesSinglePage = PrebuiltPolicyListResponsesSinglePage;

export declare namespace PrebuiltPolicies {
  export {
    type PrebuiltPolicyListResponse as PrebuiltPolicyListResponse,
    PrebuiltPolicyListResponsesSinglePage as PrebuiltPolicyListResponsesSinglePage,
    type PrebuiltPolicyListParams as PrebuiltPolicyListParams,
  };
}
