// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EventsAPI from './events/events';
import { Events } from './events/events';
import * as SnapshotsAPI from './snapshots/snapshots';
import { Snapshots } from './snapshots/snapshots';

export class Connectors extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
}

Connectors.Events = Events;
Connectors.Snapshots = Snapshots;

export declare namespace Connectors {
  export { Events as Events };

  export { Snapshots as Snapshots };
}
