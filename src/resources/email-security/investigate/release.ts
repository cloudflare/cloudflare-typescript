// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Release extends APIResource {
  /**
   * Release messages from quarantine
   */
  bulk(params: ReleaseBulkParams, options?: Core.RequestOptions): Core.APIPromise<ReleaseBulkResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/investigate/release`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ReleaseBulkResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ReleaseBulkResponse = Array<ReleaseBulkResponse.ReleaseBulkResponseItem>;

export namespace ReleaseBulkResponse {
  export interface ReleaseBulkResponseItem {
    /**
     * The identifier of the message.
     */
    postfix_id: string;

    delivered?: Array<string> | null;

    failed?: Array<string> | null;

    undelivered?: Array<string> | null;
  }
}

export interface ReleaseBulkParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param: A list of messages identfied by their `postfix_id`s that should be
   * released.
   */
  body: Array<string>;
}

export declare namespace Release {
  export { type ReleaseBulkResponse as ReleaseBulkResponse, type ReleaseBulkParams as ReleaseBulkParams };
}
