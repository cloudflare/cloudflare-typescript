// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Move extends APIResource {
  /**
   * Moves a single email message to a different folder or changes its quarantine
   * status.
   *
   * @example
   * ```ts
   * const moves =
   *   await client.emailSecurity.investigate.move.create(
   *     '4Njp3P0STMz2c02Q',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       destination: 'Inbox',
   *     },
   *   );
   * ```
   */
  create(
    postfixId: string,
    params: MoveCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MoveCreateResponse> {
    const { account_id = this._client.accountId, submission, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/investigate/${postfixId}/move`, {
        query: { submission },
        body,
        ...options,
      }) as Core.APIPromise<{ result: MoveCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Maximum batch size: 1000 messages per request
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
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/investigate/move`,
      MoveBulkResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }
}

export class MoveBulkResponsesSinglePage extends SinglePage<MoveBulkResponse> {}

export type MoveCreateResponse = Array<MoveCreateResponse.MoveCreateResponseItem>;

export namespace MoveCreateResponse {
  export interface MoveCreateResponseItem {
    /**
     * @deprecated Deprecated, use `completed_at` instead
     */
    completed_timestamp: string;

    /**
     * @deprecated
     */
    item_count: number;

    success: boolean;

    completed_at?: string;

    destination?: string | null;

    message_id?: string | null;

    operation?: string | null;

    recipient?: string | null;

    status?: string | null;
  }
}

export interface MoveBulkResponse {
  /**
   * @deprecated Deprecated, use `completed_at` instead
   */
  completed_timestamp: string;

  /**
   * @deprecated
   */
  item_count: number;

  success: boolean;

  completed_at?: string;

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
  account_id?: string;

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
   * Query param: When true, search the submissions datastore only. When false or
   * omitted, search the regular datastore only.
   */
  submission?: boolean;
}

export interface MoveBulkParams {
  /**
   * Path param: Account Identifier
   */
  account_id?: string;

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
   * Body param: List of message IDs to move.
   */
  ids?: Array<string>;

  /**
   * @deprecated Body param: Deprecated: Use `ids` instead. List of message IDs to
   * move.
   */
  postfix_ids?: Array<string>;
}

Move.MoveBulkResponsesSinglePage = MoveBulkResponsesSinglePage;

export declare namespace Move {
  export {
    type MoveCreateResponse as MoveCreateResponse,
    type MoveBulkResponse as MoveBulkResponse,
    MoveBulkResponsesSinglePage as MoveBulkResponsesSinglePage,
    type MoveCreateParams as MoveCreateParams,
    type MoveBulkParams as MoveBulkParams,
  };
}
