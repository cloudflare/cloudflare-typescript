// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AggregatesAPI from 'cloudflare/resources/spectrum/analytics/aggregates/aggregates';
import * as EventsAPI from 'cloudflare/resources/spectrum/analytics/events/events';

export class Analytics extends APIResource {
  aggregates: AggregatesAPI.Aggregates = new AggregatesAPI.Aggregates(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export namespace Analytics {
  export import Aggregates = AggregatesAPI.Aggregates;
  export import Events = EventsAPI.Events;
}
