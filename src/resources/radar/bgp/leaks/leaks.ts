// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import { BaseEvents, Events } from './events';

export class BaseLeaks extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'leaks'] = Object.freeze([
    'radar',
    'bgp',
    'leaks',
  ] as const);
}
export class Leaks extends BaseLeaks {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

Leaks.Events = Events;
Leaks.BaseEvents = BaseEvents;

export declare namespace Leaks {
  export { Events as Events, BaseEvents as BaseEvents };
}
