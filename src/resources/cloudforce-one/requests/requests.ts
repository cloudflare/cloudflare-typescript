// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AssetsAPI from './assets';
import { Assets } from './assets';
import * as MessageAPI from './message';
import { Message } from './message';
import * as PriorityAPI from './priority';
import { Priority } from './priority';

export class Requests extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  priority: PriorityAPI.Priority = new PriorityAPI.Priority(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

Requests.Message = Message;
Requests.Priority = Priority;
Requests.Assets = Assets;

export declare namespace Requests {
  export { Message as Message };

  export { Priority as Priority };

  export { Assets as Assets };
}
