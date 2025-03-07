// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Results extends APIResource {
  /**
   * Get the Latest Scan Result
   */
  list(params: ResultListParams, options?: RequestOptions): APIPromise<ResultListResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cloudforce-one/scans/results`, options) as APIPromise<{
        result: ResultListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ResultListResponse {
  '1.1.1.1': Array<ResultListResponse._1_1_1_1>;
}

export namespace ResultListResponse {
  export interface _1_1_1_1 {
    number?: number;

    proto?: string;

    status?: string;
  }
}

export interface ResultListParams {
  /**
   * Account ID
   */
  account_id: string;
}

export declare namespace Results {
  export { type ResultListResponse as ResultListResponse, type ResultListParams as ResultListParams };
}
