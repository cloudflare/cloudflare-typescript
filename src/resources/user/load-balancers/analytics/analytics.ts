// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as EventsAPI from 'cloudflare/resources/user/load-balancers/analytics/events';

export class Analytics extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export namespace Analytics {
  export import Events = EventsAPI.Events;
  export import LoadBalancingAnalytics = EventsAPI.LoadBalancingAnalytics;
  export import LoadBalancingAnalyticsSinglePage = EventsAPI.LoadBalancingAnalyticsSinglePage;
  export import EventListParams = EventsAPI.EventListParams;
}
