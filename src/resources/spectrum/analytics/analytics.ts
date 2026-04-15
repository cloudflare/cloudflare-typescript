// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AggregatesAPI from './aggregates/aggregates';
import { Aggregates, BaseAggregates } from './aggregates/aggregates';
import * as EventsAPI from './events/events';
import { BaseEvents, Dimension, Events } from './events/events';

export class BaseAnalytics extends APIResource {
  static override readonly _key: readonly ['spectrum', 'analytics'] = Object.freeze([
    'spectrum',
    'analytics',
  ] as const);
}
export class Analytics extends BaseAnalytics {
  aggregates: AggregatesAPI.Aggregates = new AggregatesAPI.Aggregates(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

Analytics.Aggregates = Aggregates;
Analytics.BaseAggregates = BaseAggregates;
Analytics.Events = Events;
Analytics.BaseEvents = BaseEvents;

export declare namespace Analytics {
  export { Aggregates as Aggregates, BaseAggregates as BaseAggregates };

  export { Events as Events, BaseEvents as BaseEvents, type Dimension as Dimension };
}
