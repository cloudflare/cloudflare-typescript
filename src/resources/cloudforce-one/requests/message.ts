// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MessageResource extends APIResource {
  /**
   * Create a New Request Message
   */
  create(
    requestIdentifier: string,
    params: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<Message> {
    const { account_identifier, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_identifier}/cloudforce-one/requests/${requestIdentifier}/message/new`,
        { body, ...options },
      ) as APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Request Message
   */
  update(
    messageIdentifer: number,
    params: MessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Message> {
    const { account_identifier, request_identifier, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_identifier}/cloudforce-one/requests/${request_identifier}/message/${messageIdentifer}`,
        { body, ...options },
      ) as APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Message
   */
  delete(
    messageIdentifer: number,
    params: MessageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MessageDeleteResponse> {
    const { account_identifier, request_identifier } = params;
    return this._client.delete(
      path`/accounts/${account_identifier}/cloudforce-one/requests/${request_identifier}/message/${messageIdentifer}`,
      options,
    );
  }

  /**
   * List Request Messages
   */
  get(
    requestIdentifier: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): PagePromise<MessagesSinglePage, Message> {
    const { account_identifier, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_identifier}/cloudforce-one/requests/${requestIdentifier}/message`,
      SinglePage<Message>,
      { body, method: 'post', ...options },
    );
  }
}

export type MessagesSinglePage = SinglePage<Message>;

export interface Message {
  /**
   * Message ID
   */
  id: number;

  /**
   * Author of message
   */
  author: string;

  /**
   * Content of message
   */
  content: string;

  /**
   * Whether the message is a follow-on request
   */
  is_follow_on_request: boolean;

  /**
   * Message last updated time
   */
  updated: string;

  /**
   * Message creation time
   */
  created?: string;
}

export interface MessageDeleteResponse {
  errors: Array<unknown>;

  messages: Array<unknown>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface MessageCreateParams {
  /**
   * Path param: Identifier
   */
  account_identifier: string;

  /**
   * Body param: Content of message
   */
  content?: string;
}

export interface MessageUpdateParams {
  /**
   * Path param: Identifier
   */
  account_identifier: string;

  /**
   * Path param: UUID
   */
  request_identifier: string;

  /**
   * Body param: Content of message
   */
  content?: string;
}

export interface MessageDeleteParams {
  /**
   * Identifier
   */
  account_identifier: string;

  /**
   * UUID
   */
  request_identifier: string;
}

export interface MessageGetParams {
  /**
   * Path param: Identifier
   */
  account_identifier: string;

  /**
   * Body param: Page number of results
   */
  page: number;

  /**
   * Body param: Number of results per page
   */
  per_page: number;

  /**
   * Body param: Retrieve messages created after this time
   */
  after?: string;

  /**
   * Body param: Retrieve messages created before this time
   */
  before?: string;

  /**
   * Body param: Field to sort results by
   */
  sort_by?: string;

  /**
   * Body param: Sort order (asc or desc)
   */
  sort_order?: 'asc' | 'desc';
}

export declare namespace MessageResource {
  export {
    type Message as Message,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessagesSinglePage as MessagesSinglePage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageGetParams as MessageGetParams,
  };
}
