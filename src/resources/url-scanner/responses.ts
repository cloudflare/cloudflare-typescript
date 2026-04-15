// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Responses extends APIResource {
  /**
   * Returns the raw response of the network request. Find the `response_id` in the
   * `data.requests.response.hash`.
   *
   * @example
   * ```ts
   * const response = await client.urlScanner.responses.get(
   *   'response_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(responseId: string, params?: ResponseGetParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  get(responseId: string, options?: Core.RequestOptions): Core.APIPromise<string>;
  get(
    responseId: string,
    params: ResponseGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.get(responseId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/urlscanner/v2/responses/${responseId}`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
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
  account_id?: string;
}

export declare namespace Responses {
  export { type ResponseGetResponse as ResponseGetResponse, type ResponseGetParams as ResponseGetParams };
}
