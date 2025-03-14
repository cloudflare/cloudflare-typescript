// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Results extends APIResource {
  /**
   * Get the Latest Scan Result
   */
  get(
    configId: string,
    params: ResultGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResultGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/cloudforce-one/scans/results/${configId}`,
        options,
      ) as Core.APIPromise<{ result: ResultGetResponse }>
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
