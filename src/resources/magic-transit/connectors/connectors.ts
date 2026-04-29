// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events/events';
import { BaseEvents, Events } from './events/events';
import * as SnapshotsAPI from './snapshots/snapshots';
import { BaseSnapshots, Snapshots } from './snapshots/snapshots';

export class BaseConnectors extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors'] = Object.freeze([
    'magicTransit',
    'connectors',
  ] as const);
}
export class Connectors extends BaseConnectors {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
}

Connectors.Events = Events;
Connectors.BaseEvents = BaseEvents;
Connectors.Snapshots = Snapshots;
Connectors.BaseSnapshots = BaseSnapshots;

export declare namespace Connectors {
  export { Events as Events, BaseEvents as BaseEvents };

  export { Snapshots as Snapshots, BaseSnapshots as BaseSnapshots };
}
