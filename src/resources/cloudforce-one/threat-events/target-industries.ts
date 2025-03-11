// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TargetIndustries extends APIResource {
  /**
   * Lists all target industries
   */
  list(accountID: number, options?: RequestOptions): APIPromise<TargetIndustryListResponse> {
    return this._client.get(path`/accounts/${accountID}/cloudforce-one/events/targetIndustries`, options);
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

export declare namespace TargetIndustries {
  export { type TargetIndustryListResponse as TargetIndustryListResponse };
}
