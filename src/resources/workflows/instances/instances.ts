// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { BaseEvents, Events } from './events';
import * as StatusAPI from './status';
import { BaseStatus, Status } from './status';

export class BaseInstances extends APIResource {
  static override readonly _key: readonly ['workflows', 'instances'] = Object.freeze([
    'workflows',
    'instances',
  ] as const);
}
export class Instances extends BaseInstances {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

Instances.Status = Status;
Instances.BaseStatus = BaseStatus;
Instances.Events = Events;
Instances.BaseEvents = BaseEvents;

export declare namespace Instances {
  export { Status as Status, BaseStatus as BaseStatus };

  export { Events as Events, BaseEvents as BaseEvents };
}
