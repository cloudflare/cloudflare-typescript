// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class TargetIndustries extends APIResource {
  /**
   * Lists all target industries
   */
  list(accountId: number, options?: Core.RequestOptions): Core.APIPromise<TargetIndustryListResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/targetIndustries`, options);
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
