// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TargetIndustries extends APIResource {
  /**
   * Lists all target industries
   */
  list(params: TargetIndustryListParams, options?: RequestOptions): APIPromise<TargetIndustryListResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/targetIndustries`, options);
  }
}

export interface TargetIndustryListResponse {
  items: TargetIndustryListResponse.Items;

  type: string;
}

export namespace TargetIndustryListResponse {
  export interface Items {
    type: string;
  }
}

export interface TargetIndustryListParams {
  /**
   * Account ID
   */
  account_id: number;
}

export declare namespace TargetIndustries {
  export {
    type TargetIndustryListResponse as TargetIndustryListResponse,
    type TargetIndustryListParams as TargetIndustryListParams,
  };
}
