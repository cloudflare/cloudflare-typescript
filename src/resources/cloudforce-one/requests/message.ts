// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class MessageResource extends APIResource {}

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

export declare namespace MessageResource {
  export { type Message as Message };
}
