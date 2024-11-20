// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Move extends APIResource {
  /**
   * Move a message
   */
  create(
    postfixId: string,
    params: MoveCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MoveCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/investigate/${postfixId}/move`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MoveCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Move multiple messages
   */
  bulk(params: MoveBulkParams, options?: Core.RequestOptions): Core.APIPromise<MoveBulkResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/investigate/move`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MoveBulkResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type MoveCreateResponse = Array<MoveCreateResponse.MoveCreateResponseItem>;

export namespace MoveCreateResponse {
  export interface MoveCreateResponseItem {
    completed_timestamp: string;

    destination: string;

    item_count: number;

    message_id: string;

    operation: string;

    recipient: string;

    status: string;
  }
}

export type MoveBulkResponse = Array<MoveBulkResponse.MoveBulkResponseItem>;

export namespace MoveBulkResponse {
  export interface MoveBulkResponseItem {
    completed_timestamp: string;

    destination: string;

    item_count: number;

    message_id: string;

    operation: string;

    recipient: string;

    status: string;
  }
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
    type MoveCreateParams as MoveCreateParams,
    type MoveBulkParams as MoveBulkParams,
  };
}
