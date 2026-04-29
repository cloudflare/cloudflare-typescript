// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CORSAPI from './cors';
import { CORS } from './cors';
import * as EventNotificationsAPI from './event-notifications';
import { EventNotifications } from './event-notifications';
import * as LifecycleAPI from './lifecycle';
import { Lifecycle } from './lifecycle';
import * as LocksAPI from './locks';
import { Locks } from './locks';
import * as MetricsAPI from './metrics';
import { Metrics } from './metrics';
import * as SippyAPI from './sippy';
import { Sippy } from './sippy';
import * as DomainsAPI from './domains/domains';
import { Domains } from './domains/domains';

export class Buckets extends APIResource {
  lifecycle: LifecycleAPI.Lifecycle = new LifecycleAPI.Lifecycle(this._client);
  cors: CORSAPI.CORS = new CORSAPI.CORS(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  eventNotifications: EventNotificationsAPI.EventNotifications = new EventNotificationsAPI.EventNotifications(
    this._client,
  );
  locks: LocksAPI.Locks = new LocksAPI.Locks(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  sippy: SippyAPI.Sippy = new SippyAPI.Sippy(this._client);
}

Buckets.Lifecycle = Lifecycle;
Buckets.CORS = CORS;
Buckets.Domains = Domains;
Buckets.EventNotifications = EventNotifications;
Buckets.Locks = Locks;
Buckets.Metrics = Metrics;
Buckets.Sippy = Sippy;

export declare namespace Buckets {
  export { Lifecycle as Lifecycle };

  export { CORS as CORS };

  export { Domains as Domains };

  export { EventNotifications as EventNotifications };

  export { Locks as Locks };

  export { Metrics as Metrics };

  export { Sippy as Sippy };
}
