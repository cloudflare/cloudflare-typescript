// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRelease extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'release'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'release',
  ] as const);

  /**
   * Delivers one or more quarantined messages to their intended recipients, for
   * cases where a message was incorrectly quarantined. Operates on an explicit list
   * of messages; to release all messages matching a search, create a bulk action job
   * instead. The response includes delivery status for each recipient.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const releaseBulkResponse of client.emailSecurity.investigate.release.bulk(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     ids: ['4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678'],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulk(
    params: ReleaseBulkParams,
    options?: RequestOptions,
  ): PagePromise<ReleaseBulkResponsesSinglePage, ReleaseBulkResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/release`,
      SinglePage<ReleaseBulkResponse>,
      { body, method: 'post', ...options },
    );
  }
}
export class Release extends BaseRelease {}

export type ReleaseBulkResponsesSinglePage = SinglePage<ReleaseBulkResponse>;

export interface ReleaseBulkResponse {
  /**
   * Unique identifier for a message retrieved from investigation.
   */
  id: string;

  delivered?: Array<string> | null;

  failed?: Array<string> | null;

  /**
   * @deprecated Use `id` instead.
   */
  postfix_id?: string;

  undelivered?: Array<string> | null;
}

export interface ReleaseBulkParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Investigate IDs of the messages to release.
   */
  ids: Array<string>;
}

export declare namespace Release {
  export {
    type ReleaseBulkResponse as ReleaseBulkResponse,
    type ReleaseBulkResponsesSinglePage as ReleaseBulkResponsesSinglePage,
    type ReleaseBulkParams as ReleaseBulkParams,
  };
}
