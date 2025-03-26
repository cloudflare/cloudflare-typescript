// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided monitor.
   */
  get(
    monitorID: string,
    params: ReferenceGetParams,
    options?: RequestOptions,
  ): PagePromise<ReferenceGetResponsesSinglePage, ReferenceGetResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/load_balancers/monitors/${monitorID}/references`,
      SinglePage<ReferenceGetResponse>,
      options,
    );
  }
}

export type ReferenceGetResponsesSinglePage = SinglePage<ReferenceGetResponse>;

export interface ReferenceGetResponse {
  reference_type?: '*' | 'referral' | 'referrer';

  resource_id?: string;

  resource_name?: string;

  resource_type?: string;
}

export interface ReferenceGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace References {
  export {
    type ReferenceGetResponse as ReferenceGetResponse,
    type ReferenceGetResponsesSinglePage as ReferenceGetResponsesSinglePage,
    type ReferenceGetParams as ReferenceGetParams,
  };
}
