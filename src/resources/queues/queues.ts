// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConsumersAPI from './consumers';
import { Consumers } from './consumers';
import * as MessagesAPI from './messages';
import { Messages } from './messages';
import * as PurgeAPI from './purge';
import { Purge } from './purge';
import * as SubscriptionsAPI from './subscriptions';
import { Subscriptions } from './subscriptions';

export class Queues extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  purge: PurgeAPI.Purge = new PurgeAPI.Purge(this._client);
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Queues.Messages = Messages;
Queues.Purge = Purge;
Queues.Consumers = Consumers;
Queues.Subscriptions = Subscriptions;

export declare namespace Queues {
  export { Messages as Messages };

  export { Purge as Purge };

  export { Consumers as Consumers };

  export { Subscriptions as Subscriptions };
}
