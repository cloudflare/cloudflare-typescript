// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
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
    postfixID: string,
    params: MoveCreateParams,
    options?: RequestOptions,
  ): APIPromise<MoveCreateResponse> {
    const { account_id = this._client.accountID, submission, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/investigate/${postfixID}/move`, {
        query: { submission },
        body,
        ...options,
      }) as APIPromise<{ result: MoveCreateResponse }>
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
    options?: RequestOptions,
  ): PagePromise<MoveBulkResponsesSinglePage, MoveBulkResponse> {
    const { account_id = this._client.accountID, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/investigate/move`,
      SinglePage<MoveBulkResponse>,
      { body, method: 'post', ...options },
    );
  }
}
export class Move extends BaseMove {}

export type MoveBulkResponsesSinglePage = SinglePage<MoveBulkResponse>;

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

export declare namespace Move {
  export {
    type MoveCreateResponse as MoveCreateResponse,
    type MoveBulkResponse as MoveBulkResponse,
    type MoveBulkResponsesSinglePage as MoveBulkResponsesSinglePage,
    type MoveCreateParams as MoveCreateParams,
    type MoveBulkParams as MoveBulkParams,
  };
}
