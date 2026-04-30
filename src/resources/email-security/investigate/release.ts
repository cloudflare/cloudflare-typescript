// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Release extends APIResource {
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReleaseBulkResponsesSinglePage, ReleaseBulkResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/investigate/release`,
      ReleaseBulkResponsesSinglePage,
      { body: body, method: 'post', ...options },
    );
  }
}

export class ReleaseBulkResponsesSinglePage extends SinglePage<ReleaseBulkResponse> {}

export interface ReleaseBulkResponse {
  /**
   * Unique identifier for a message retrieved from investigation
   */
  id: string;

  delivered?: Array<string> | null;

  failed?: Array<string> | null;

  /**
   * @deprecated Deprecated, use `id` instead. End of life: November 1, 2026.
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

Release.ReleaseBulkResponsesSinglePage = ReleaseBulkResponsesSinglePage;

export declare namespace Release {
  export {
    type ReleaseBulkResponse as ReleaseBulkResponse,
    ReleaseBulkResponsesSinglePage as ReleaseBulkResponsesSinglePage,
    type ReleaseBulkParams as ReleaseBulkParams,
  };
}
