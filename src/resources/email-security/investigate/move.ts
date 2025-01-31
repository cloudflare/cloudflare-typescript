// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Move extends APIResource {
  /**
   * Move a message
   */
  create(
    postfixId: string,
    params: MoveCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MoveCreateResponsesSinglePage, MoveCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/email-security/investigate/${postfixId}/move`,
      MoveCreateResponsesSinglePage,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Move multiple messages
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

export class MoveCreateResponsesSinglePage extends SinglePage<MoveCreateResponse> {}

export class MoveBulkResponsesSinglePage extends SinglePage<MoveBulkResponse> {}

export interface MoveCreateResponse {
  completed_timestamp: string;

  destination: string;

  item_count: number;

  message_id: string;

  operation: string;

  recipient: string;

  status: string;
}

export interface MoveBulkResponse {
  completed_timestamp: string;

  destination: string;

  item_count: number;

  message_id: string;

  operation: string;

  recipient: string;

  status: string;
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

Move.MoveCreateResponsesSinglePage = MoveCreateResponsesSinglePage;
Move.MoveBulkResponsesSinglePage = MoveBulkResponsesSinglePage;

export declare namespace Move {
  export {
    type MoveCreateResponse as MoveCreateResponse,
    type MoveBulkResponse as MoveBulkResponse,
    MoveCreateResponsesSinglePage as MoveCreateResponsesSinglePage,
    MoveBulkResponsesSinglePage as MoveBulkResponsesSinglePage,
    type MoveCreateParams as MoveCreateParams,
    type MoveBulkParams as MoveBulkParams,
  };
}
