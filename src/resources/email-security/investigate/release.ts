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
   * Releases one or more quarantined messages, delivering them to the intended
   * recipients. Use when a message was incorrectly quarantined. Returns delivery
   * status for each recipient.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const releaseBulkResponse of client.emailSecurity.investigate.release.bulk(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: ['4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678'],
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
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/release`,
      SinglePage<ReleaseBulkResponse>,
      { body: body, method: 'post', ...options },
    );
  }
}
export class Release extends BaseRelease {}

export type ReleaseBulkResponsesSinglePage = SinglePage<ReleaseBulkResponse>;

export interface ReleaseBulkResponse {
  /**
   * Unique identifier for a message retrieved from investigation
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
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
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
