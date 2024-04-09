// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AnalyticsAPI from 'cloudflare/resources/user/load-balancing/analytics/analytics';
import * as EventsAPI from 'cloudflare/resources/user/load-balancing/analytics/events';
import { SinglePage } from 'cloudflare/pagination';

export class Analytics extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export class AnalyticsSinglePage extends SinglePage<Analytics> {}

export interface Analytics {
  id?: number;

  origins?: Array<unknown>;

  pool?: unknown;

  timestamp?: string;
}

export namespace Analytics {
  export import Analytics = AnalyticsAPI.Analytics;
  export import Events = EventsAPI.Events;
  export import EventListParams = EventsAPI.EventListParams;
}
