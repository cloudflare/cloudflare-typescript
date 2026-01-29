// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import { EventListParams, EventListResponse, EventListResponsesV4PagePagination, Events } from './events';

export class Leaks extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

Leaks.Events = Events;

export declare namespace Leaks {
  export {
    Events as Events,
    type EventListResponse as EventListResponse,
    type EventListResponsesV4PagePagination as EventListResponsesV4PagePagination,
    type EventListParams as EventListParams,
  };
}
