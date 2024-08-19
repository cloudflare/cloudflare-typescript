// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as EventsAPI from './events';

export class Hijacks extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export namespace Hijacks {
  export import Events = EventsAPI.Events;
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventListResponsesV4PagePagination = EventsAPI.EventListResponsesV4PagePagination;
  export import EventListParams = EventsAPI.EventListParams;
}
