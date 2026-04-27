// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Move extends APIResource {
  /**
   * Moves multiple messages to a specified mailbox folder (Inbox, JunkEmail,
   * DeletedItems, RecoverableItemsDeletions, or RecoverableItemsPurges). Requires
   * active integration.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const moveBulkResponse of client.emailSecurity.investigate.move.bulk(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     destination: 'Inbox',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulk(
    params: MoveBulkParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MoveBulkResponsesSinglePage, MoveBulkResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/investigate/move`,
      MoveBulkResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }
}

export class MoveBulkResponsesSinglePage extends SinglePage<MoveBulkResponse> {}

export interface MoveBulkResponse {
  /**
   * Whether the operation succeeded
   */
  success: boolean;

  /**
   * When the move operation completed (UTC)
   */
  completed_at?: string | null;

  /**
   * @deprecated Deprecated, use `completed_at` instead. End of life: November
   * 1, 2026.
   */
  completed_timestamp?: string;

  /**
   * Destination folder for the message
   */
  destination?: string | null;

  /**
   * @deprecated Number of items moved. End of life: November 1, 2026.
   */
  item_count?: number;

  /**
   * Message identifier
   */
  message_id?: string | null;

  /**
   * Type of operation performed
   */
  operation?: string | null;

  /**
   * Recipient email address
   */
  recipient?: string | null;

  /**
   * Operation status
   */
  status?: string | null;
}

export interface MoveBulkParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  destination:
    | 'Inbox'
    | 'JunkEmail'
    | 'DeletedItems'
    | 'RecoverableItemsDeletions'
    | 'RecoverableItemsPurges';

  /**
   * Body param: List of message IDs to move
   */
  ids?: Array<string>;

  /**
   * @deprecated Body param: Deprecated, use `ids` instead. End of life: November
   * 1, 2026. List of message IDs to move.
   */
  postfix_ids?: Array<string>;
}

Move.MoveBulkResponsesSinglePage = MoveBulkResponsesSinglePage;

export declare namespace Move {
  export {
    type MoveBulkResponse as MoveBulkResponse,
    MoveBulkResponsesSinglePage as MoveBulkResponsesSinglePage,
    type MoveBulkParams as MoveBulkParams,
  };
}
