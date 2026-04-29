// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from './assets';
import { Assets, BaseAssets } from './assets';
import * as MessageAPI from './message';
import { BaseMessage, Message } from './message';
import * as PriorityAPI from './priority';
import { BasePriority, Priority } from './priority';

export class BaseRequests extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'requests'] = Object.freeze([
    'cloudforceOne',
    'requests',
  ] as const);
}
export class Requests extends BaseRequests {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  priority: PriorityAPI.Priority = new PriorityAPI.Priority(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

Requests.Message = Message;
Requests.BaseMessage = BaseMessage;
Requests.Priority = Priority;
Requests.BasePriority = BasePriority;
Requests.Assets = Assets;
Requests.BaseAssets = BaseAssets;

export declare namespace Requests {
  export { Message as Message, BaseMessage as BaseMessage };

  export { Priority as Priority, BasePriority as BasePriority };

  export { Assets as Assets, BaseAssets as BaseAssets };
}
