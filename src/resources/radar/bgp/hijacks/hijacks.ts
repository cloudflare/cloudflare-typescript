// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import {
  BaseEvents,
  EventListParams,
  EventListResponse,
  EventListResponsesV4PagePagination,
  Events,
} from './events';

export class BaseHijacks extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'hijacks'] = Object.freeze([
    'radar',
    'bgp',
    'hijacks',
  ] as const);
}
export class Hijacks extends BaseHijacks {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

Hijacks.Events = Events;
Hijacks.BaseEvents = BaseEvents;

export declare namespace Hijacks {
  export {
    Events as Events,
    BaseEvents as BaseEvents,
    type EventListResponse as EventListResponse,
    type EventListResponsesV4PagePagination as EventListResponsesV4PagePagination,
    type EventListParams as EventListParams,
  };
}
