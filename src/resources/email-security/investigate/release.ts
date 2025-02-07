// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Release extends APIResource {
  /**
   * Release messages from quarantine
   */
  bulk(
    params: ReleaseBulkParams,
    options?: RequestOptions,
  ): PagePromise<ReleaseBulkResponsesSinglePage, ReleaseBulkResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/release`,
      SinglePage<ReleaseBulkResponse>,
      { body: body, method: 'post', ...options },
    );
  }
}

export type ReleaseBulkResponsesSinglePage = SinglePage<ReleaseBulkResponse>;

export interface ReleaseBulkResponse {
  /**
   * The identifier of the message.
   */
  postfix_id: string;

  delivered?: Array<string> | null;

  failed?: Array<string> | null;

  undelivered?: Array<string> | null;
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
  export {
    type ReleaseBulkResponse as ReleaseBulkResponse,
    type ReleaseBulkResponsesSinglePage as ReleaseBulkResponsesSinglePage,
    type ReleaseBulkParams as ReleaseBulkParams,
  };
}
