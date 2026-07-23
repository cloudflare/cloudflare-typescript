// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseMove extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'move'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'move',
  ] as const);

  /**
   * Moves a single message to a specified mailbox folder (Inbox, JunkEmail,
   * DeletedItems, RecoverableItemsDeletions, or RecoverableItemsPurges). Requires
   * active integration.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const moveCreateResponse of client.emailSecurity.investigate.move.create(
   *   '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     destination: 'Inbox',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    investigateID: string,
    params: MoveCreateParams,
    options?: RequestOptions,
  ): PagePromise<MoveCreateResponsesSinglePage, MoveCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/${investigateID}/move`,
      SinglePage<MoveCreateResponse>,
      { body, method: 'post', ...options },
    );
  }

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
    options?: RequestOptions,
  ): PagePromise<MoveBulkResponsesSinglePage, MoveBulkResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/move`,
      SinglePage<MoveBulkResponse>,
      { body, method: 'post', ...options },
    );
  }
}
export class Move extends BaseMove {}

export type MoveCreateResponsesSinglePage = SinglePage<MoveCreateResponse>;

export type MoveBulkResponsesSinglePage = SinglePage<MoveBulkResponse>;

export interface MoveCreateResponse {
  /**
   * Whether the operation succeeded.
   */
  success: boolean;

  /**
   * When the move operation completed (UTC).
   */
  completed_at?: string | null;

  /**
   * @deprecated Use `completed_at` instead.
   */
  completed_timestamp?: string;

  /**
   * Destination folder for the message.
   */
  destination?: string | null;

  /**
   * @deprecated This field is deprecated.
   */
  item_count?: number;

  /**
   * Message identifier.
   */
  message_id?: string | null;

  /**
   * Type of operation performed.
   */
  operation?: string | null;

  /**
   * Recipient email address.
   */
  recipient?: string | null;

  /**
   * Operation status.
   */
  status?: string | null;
}

export interface MoveBulkResponse {
  /**
   * Whether the operation succeeded.
   */
  success: boolean;

  /**
   * When the move operation completed (UTC).
   */
  completed_at?: string | null;

  /**
   * @deprecated Use `completed_at` instead.
   */
  completed_timestamp?: string;

  /**
   * Destination folder for the message.
   */
  destination?: string | null;

  /**
   * @deprecated This field is deprecated.
   */
  item_count?: number;

  /**
   * Message identifier.
   */
  message_id?: string | null;

  /**
   * Type of operation performed.
   */
  operation?: string | null;

  /**
   * Recipient email address.
   */
  recipient?: string | null;

  /**
   * Operation status.
   */
  status?: string | null;
}

export interface MoveCreateParams {
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
   * Body param
   */
  expected_disposition?:
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE';
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
   * Body param
   */
  expected_disposition?:
    | 'MALICIOUS'
    | 'MALICIOUS-BEC'
    | 'SUSPICIOUS'
    | 'SPOOF'
    | 'SPAM'
    | 'BULK'
    | 'ENCRYPTED'
    | 'EXTERNAL'
    | 'UNKNOWN'
    | 'NONE';

  /**
   * Body param: List of message IDs to move.
   */
  ids?: Array<string>;

  /**
   * @deprecated Use `ids` instead.
   */
  postfix_ids?: Array<string>;
}

export declare namespace Move {
  export {
    type MoveCreateResponse as MoveCreateResponse,
    type MoveBulkResponse as MoveBulkResponse,
    type MoveCreateResponsesSinglePage as MoveCreateResponsesSinglePage,
    type MoveBulkResponsesSinglePage as MoveBulkResponsesSinglePage,
    type MoveCreateParams as MoveCreateParams,
    type MoveBulkParams as MoveBulkParams,
  };
}
