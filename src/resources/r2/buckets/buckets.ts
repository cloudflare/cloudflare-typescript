// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CORSAPI from './cors';
import { BaseCORS, CORS } from './cors';
import * as EventNotificationsAPI from './event-notifications';
import { BaseEventNotifications, EventNotifications } from './event-notifications';
import * as LifecycleAPI from './lifecycle';
import { BaseLifecycle, Lifecycle } from './lifecycle';
import * as LocksAPI from './locks';
import { BaseLocks, Locks } from './locks';
import * as MetricsAPI from './metrics';
import { BaseMetrics, Metrics } from './metrics';
import * as SippyAPI from './sippy';
import { BaseSippy, Sippy } from './sippy';
import * as DomainsAPI from './domains/domains';
import { BaseDomains, Domains } from './domains/domains';

export class BaseBuckets extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets'] = Object.freeze(['r2', 'buckets'] as const);
}
export class Buckets extends BaseBuckets {
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
Buckets.BaseLifecycle = BaseLifecycle;
Buckets.CORS = CORS;
Buckets.BaseCORS = BaseCORS;
Buckets.Domains = Domains;
Buckets.BaseDomains = BaseDomains;
Buckets.EventNotifications = EventNotifications;
Buckets.BaseEventNotifications = BaseEventNotifications;
Buckets.Locks = Locks;
Buckets.BaseLocks = BaseLocks;
Buckets.Metrics = Metrics;
Buckets.BaseMetrics = BaseMetrics;
Buckets.Sippy = Sippy;
Buckets.BaseSippy = BaseSippy;

export declare namespace Buckets {
  export { Lifecycle as Lifecycle, BaseLifecycle as BaseLifecycle };

  export { CORS as CORS, BaseCORS as BaseCORS };

  export { Domains as Domains, BaseDomains as BaseDomains };

  export { EventNotifications as EventNotifications, BaseEventNotifications as BaseEventNotifications };

  export { Locks as Locks, BaseLocks as BaseLocks };

  export { Metrics as Metrics, BaseMetrics as BaseMetrics };

  export { Sippy as Sippy, BaseSippy as BaseSippy };
}
