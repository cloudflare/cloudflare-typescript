// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MessageAPI from './message';
import * as Shared from '../../shared';

export class MessageResource extends APIResource {
  /**
   * Creating a request adds the request into the Cloudforce One queue for analysis.
   * In addition to the content, a short title, type, priority, and releasability
   * should be provided. If one is not provided a default will be assigned.
   */
  create(
    accountIdentifier: string,
    requestIdentifier: string,
    body: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/message/new`,
        { body, ...options },
      ) as Core.APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Request Message
   */
  update(
    accountIdentifier: string,
    requestIdentifier: string,
    messageIdentifer: number,
    body: MessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Message> {
    return (
      this._client.put(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/message/${messageIdentifer}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: Message }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Request Message
   */
  delete(
    accountIdentifier: string,
    requestIdentifier: string,
    messageIdentifer: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/message/${messageIdentifer}`,
      options,
    );
  }

  /**
   * List Request Messages
   */
  get(
    accountIdentifier: string,
    requestIdentifier: string,
    body: MessageGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageGetResponse> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}/message`,
        { body, ...options },
      ) as Core.APIPromise<{ result: MessageGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
   * Message is a follow-on request
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
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export type MessageGetResponse = Array<Message>;

export interface MessageCreateParams {
  /**
   * Content of message
   */
  content?: string;
}

export interface MessageUpdateParams {
  /**
   * Request content
   */
  content?: string;

  /**
   * Priority for analyzing the request
   */
  priority?: string;

  /**
   * Requested information from request
   */
  request_type?: string;

  /**
   * Brief description of the request
   */
  summary?: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp?: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface MessageGetParams {
  /**
   * Page number of results
   */
  page: number;

  /**
   * Number of results per page
   */
  per_page: number;

  /**
   * Retrieve messages created after this time
   */
  after?: string;

  /**
   * Retrieve messages created before this time
   */
  before?: string;

  /**
   * Field to sort results by
   */
  sort_by?: string;

  /**
   * Sort order (asc or desc)
   */
  sort_order?: 'asc' | 'desc';
}

export namespace MessageResource {
  export import Message = MessageAPI.Message;
  export import MessageDeleteResponse = MessageAPI.MessageDeleteResponse;
  export import MessageGetResponse = MessageAPI.MessageGetResponse;
  export import MessageCreateParams = MessageAPI.MessageCreateParams;
  export import MessageUpdateParams = MessageAPI.MessageUpdateParams;
  export import MessageGetParams = MessageAPI.MessageGetParams;
}
