// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Responses extends APIResource {
  /**
   * Returns the raw response of the network request. Find the `response_id` in the
   * `data.requests.response.hash`.
   */
  get(responseID: string, params: ResponseGetParams, options?: RequestOptions): APIPromise<string> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/urlscanner/v2/responses/${responseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

/**
 * Web resource or image.
 */
export type ResponseGetResponse = string;

export interface ResponseGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Responses {
  export { type ResponseGetResponse as ResponseGetResponse, type ResponseGetParams as ResponseGetParams };
}
