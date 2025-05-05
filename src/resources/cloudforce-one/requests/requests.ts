// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AssetsAPI from './assets';
import { Assets } from './assets';
import * as MessageAPI from './message';
import { Message, MessageResource } from './message';
import * as PriorityAPI from './priority';
import { Label, Priority, PriorityEdit, PriorityResource } from './priority';

export class Requests extends APIResource {
  message: MessageAPI.MessageResource = new MessageAPI.MessageResource(this._client);
  priority: PriorityAPI.PriorityResource = new PriorityAPI.PriorityResource(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

export interface Item {
  /**
   * UUID.
   */
  id: string;

  /**
   * Request content.
   */
  content: string;

  created: string;

  priority: string;

  /**
   * Requested information from request.
   */
  request: string;

  /**
   * Brief description of the request.
   */
  summary: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  updated: string;

  completed?: string;

  /**
   * Tokens for the request messages.
   */
  message_tokens?: number;

  /**
   * Readable Request ID.
   */
  readable_id?: string;

  /**
   * Request Status.
   */
  status?: 'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined';

  /**
   * Tokens for the request.
   */
  tokens?: number;
}

export interface ListItem {
  /**
   * UUID.
   */
  id: string;

  /**
   * Request creation time.
   */
  created: string;

  priority: 'routine' | 'high' | 'urgent';

  /**
   * Requested information from request.
   */
  request: string;

  /**
   * Brief description of the request.
   */
  summary: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  /**
   * Request last updated time.
   */
  updated: string;

  /**
   * Request completion time.
   */
  completed?: string;

  /**
   * Tokens for the request messages.
   */
  message_tokens?: number;

  /**
   * Readable Request ID.
   */
  readable_id?: string;

  /**
   * Request Status.
   */
  status?: 'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined';

  /**
   * Tokens for the request.
   */
  tokens?: number;
}

export interface Quota {
  /**
   * Anniversary date is when annual quota limit is refreshed.
   */
  anniversary_date?: string;

  /**
   * Quarter anniversary date is when quota limit is refreshed each quarter.
   */
  quarter_anniversary_date?: string;

  /**
   * Tokens for the quarter.
   */
  quota?: number;

  /**
   * Tokens remaining for the quarter.
   */
  remaining?: number;
}

export interface RequestConstants {
  priority?: Array<'routine' | 'high' | 'urgent'>;

  status?: Array<'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined'>;

  tlp?: Array<'clear' | 'amber' | 'amber-strict' | 'green' | 'red'>;
}

export type RequestTypes = Array<string>;

Requests.MessageResource = MessageResource;
Requests.PriorityResource = PriorityResource;
Requests.Assets = Assets;

export declare namespace Requests {
  export {
    type Item as Item,
    type ListItem as ListItem,
    type Quota as Quota,
    type RequestConstants as RequestConstants,
    type RequestTypes as RequestTypes,
  };

  export { MessageResource as MessageResource, type Message as Message };

  export {
    PriorityResource as PriorityResource,
    type Label as Label,
    type Priority as Priority,
    type PriorityEdit as PriorityEdit,
  };

  export { Assets as Assets };
}
