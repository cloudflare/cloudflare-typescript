// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class MessageResource extends APIResource {
  /**
   * Create a New Request Message
   */
  create(
    requestId: string,
    params: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/cloudforce-one/requests/${requestId}/message/new`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Request Message
   */
  update(
    requestId: string,
    messageId: number,
    params: MessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/cloudforce-one/requests/${requestId}/message/${messageId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Message
   */
  delete(
    requestId: string,
    messageId: number,
    params: MessageDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/cloudforce-one/requests/${requestId}/message/${messageId}`,
      options,
    );
  }

  /**
   * List Request Messages
   */
  get(
    requestId: string,
    params: MessageGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MessagesSinglePage, Message> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/cloudforce-one/requests/${requestId}/message`,
      MessagesSinglePage,
      { body, method: 'post', ...options },
    );
  }
}

export class MessagesSinglePage extends SinglePage<Message> {}

export interface Message {
  /**
   * Message ID.
   */
  id: number;

  /**
   * Author of message.
   */
  author: string;

  /**
   * Content of message.
   */
  content: string;

  /**
   * Whether the message is a follow-on request.
   */
  is_follow_on_request: boolean;

  /**
   * Defines the message last updated time.
   */
  updated: string;

  /**
   * Defines the message creation time.
   */
  created?: string;
}

export interface MessageDeleteResponse {
  errors: Array<MessageDeleteResponse.Error>;

  messages: Array<MessageDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace MessageDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface MessageCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Content of message.
   */
  content?: string;
}

export interface MessageUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Content of message.
   */
  content?: string;
}

export interface MessageDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface MessageGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Page number of results.
   */
  page: number;

  /**
   * Body param: Number of results per page.
   */
  per_page: number;

  /**
   * Body param: Retrieve mes ges created after this time.
   */
  after?: string;

  /**
   * Body param: Retrieve messages created before this time.
   */
  before?: string;

  /**
   * Body param: Field to sort results by.
   */
  sort_by?: string;

  /**
   * Body param: Sort order (asc or desc).
   */
  sort_order?: 'asc' | 'desc';
}

MessageResource.MessagesSinglePage = MessagesSinglePage;

export declare namespace MessageResource {
  export {
    type Message as Message,
    type MessageDeleteResponse as MessageDeleteResponse,
    MessagesSinglePage as MessagesSinglePage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageGetParams as MessageGetParams,
  };
}
