// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Limits extends APIResource {
  /**
   * Fetch limits associated with DLP for account
   */
  list(params: LimitListParams, options?: RequestOptions): APIPromise<LimitListResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/limits`, options) as APIPromise<{
        result: LimitListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LimitListResponse {
  max_dataset_cells: number;
}

export interface LimitListParams {
  account_id: string;
}

export declare namespace Limits {
  export { type LimitListResponse as LimitListResponse, type LimitListParams as LimitListParams };
}
