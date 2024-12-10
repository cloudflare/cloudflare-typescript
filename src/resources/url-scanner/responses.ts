// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Responses extends APIResource {
  /**
   * Returns the raw response of the network request. If HTML, a plain text response
   * will be returned.
   */
  get(accountId: string, responseId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/accounts/${accountId}/urlscanner/v2/responses/${responseId}`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

/**
 * Web resource text/image.
 */
export type ResponseGetResponse = string;

export declare namespace Responses {
  export { type ResponseGetResponse as ResponseGetResponse };
}
