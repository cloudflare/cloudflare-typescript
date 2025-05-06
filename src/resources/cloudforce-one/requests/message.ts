// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MessageResource extends APIResource {
  /**
   * Create a New Request Message
   *
   * @example
   * ```ts
   * const message =
   *   await client.cloudforceOne.requests.message.create(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(requestID: string, params: MessageCreateParams, options?: RequestOptions): APIPromise<Message> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/requests/${requestID}/message/new`, {
        body,
        ...options,
      }) as APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Request Message
   *
   * @example
   * ```ts
   * const message =
   *   await client.cloudforceOne.requests.message.update(0, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     request_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   });
   * ```
   */
  update(messageID: number, params: MessageUpdateParams, options?: RequestOptions): APIPromise<Message> {
    const { account_id, request_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/cloudforce-one/requests/${request_id}/message/${messageID}`,
        { body, ...options },
      ) as APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Message
   *
   * @example
   * ```ts
   * const message =
   *   await client.cloudforceOne.requests.message.delete(0, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     request_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   });
   * ```
   */
  delete(
    messageID: number,
    params: MessageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MessageDeleteResponse> {
    const { account_id, request_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/cloudforce-one/requests/${request_id}/message/${messageID}`,
      options,
    );
  }

  /**
   * List Request Messages
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const message of client.cloudforceOne.requests.message.get(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     page: 0,
   *     per_page: 10,
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    requestID: string,
    params: MessageGetParams,
    options?: RequestOptions,
  ): PagePromise<MessagesSinglePage, Message> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cloudforce-one/requests/${requestID}/message`,
      SinglePage<Message>,
      { body, method: 'post', ...options },
    );
  }
}

export type MessagesSinglePage = SinglePage<Message>;

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
   * Path param: UUID.
   */
  request_id: string;

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

  /**
   * UUID.
   */
  request_id: string;
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
