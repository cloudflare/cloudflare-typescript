// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EventsAPI from 'cloudflare/resources/users/load-balancing-analytics/events';

export class LoadBalancingAnalytics extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export namespace LoadBalancingAnalytics {
  export import Events = EventsAPI.Events;
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventListParams = EventsAPI.EventListParams;
}
