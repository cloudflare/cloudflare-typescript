// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Move extends APIResource {
  /**
   * Move a message
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const moveCreateResponse of client.emailSecurity.investigate.move.create(
   *   '4Njp3P0STMz2c02Q',
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
    postfixID: string,
    params: MoveCreateParams,
    options?: RequestOptions,
  ): PagePromise<MoveCreateResponsesSinglePage, MoveCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/${postfixID}/move`,
      SinglePage<MoveCreateResponse>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Move multiple messages
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const moveBulkResponse of client.emailSecurity.investigate.move.bulk(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     destination: 'Inbox',
   *     postfix_ids: ['4Njp3P0STMz2c02Q'],
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

export type MoveCreateResponsesSinglePage = SinglePage<MoveCreateResponse>;

export type MoveBulkResponsesSinglePage = SinglePage<MoveBulkResponse>;

export interface MoveCreateResponse {
  completed_timestamp: string;

  item_count: number;

  destination?: string | null;

  message_id?: string | null;

  operation?: string | null;

  recipient?: string | null;

  status?: string | null;
}

export interface MoveBulkResponse {
  completed_timestamp: string;

  item_count: number;

  destination?: string | null;

  message_id?: string | null;

  operation?: string | null;

  recipient?: string | null;

  status?: string | null;
}

export interface MoveCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  destination:
    | 'Inbox'
    | 'JunkEmail'
    | 'DeletedItems'
    | 'RecoverableItemsDeletions'
    | 'RecoverableItemsPurges';
}

export interface MoveBulkParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  destination:
    | 'Inbox'
    | 'JunkEmail'
    | 'DeletedItems'
    | 'RecoverableItemsDeletions'
    | 'RecoverableItemsPurges';

  /**
   * Body param:
   */
  postfix_ids: Array<string>;
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
