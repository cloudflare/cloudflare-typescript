// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConsumersAPI from './consumers';
import { BaseConsumers, Consumers } from './consumers';
import * as MessagesAPI from './messages';
import { BaseMessages, Messages } from './messages';
import * as PurgeAPI from './purge';
import { BasePurge, Purge } from './purge';
import * as SubscriptionsAPI from './subscriptions';
import { BaseSubscriptions, Subscriptions } from './subscriptions';

export class BaseQueues extends APIResource {
  static override readonly _key: readonly ['queues'] = Object.freeze(['queues'] as const);
}
export class Queues extends BaseQueues {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  purge: PurgeAPI.Purge = new PurgeAPI.Purge(this._client);
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Queues.Messages = Messages;
Queues.BaseMessages = BaseMessages;
Queues.Purge = Purge;
Queues.BasePurge = BasePurge;
Queues.Consumers = Consumers;
Queues.BaseConsumers = BaseConsumers;
Queues.Subscriptions = Subscriptions;
Queues.BaseSubscriptions = BaseSubscriptions;

export declare namespace Queues {
  export { Messages as Messages, BaseMessages as BaseMessages };

  export { Purge as Purge, BasePurge as BasePurge };

  export { Consumers as Consumers, BaseConsumers as BaseConsumers };

  export { Subscriptions as Subscriptions, BaseSubscriptions as BaseSubscriptions };
}
