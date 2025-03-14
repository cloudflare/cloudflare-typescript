// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Results extends APIResource {
  /**
   * Get the Latest Scan Result
   */
  get(configID: string, params: ResultGetParams, options?: RequestOptions): APIPromise<ResultGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/scans/results/${configID}`,
        options,
      ) as APIPromise<{ result: ResultGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ResultGetResponse {
  '1.1.1.1': Array<ResultGetResponse._1_1_1_1>;
}

export namespace ResultGetResponse {
  export interface _1_1_1_1 {
    number?: number;

    proto?: string;

    status?: string;
  }
}

export interface ResultGetParams {
  /**
   * Account ID
   */
  account_id: string;
}

export declare namespace Results {
  export { type ResultGetResponse as ResultGetResponse, type ResultGetParams as ResultGetParams };
}
