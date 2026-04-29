// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BinaryStorageAPI from './binary-storage';
import { BaseBinaryStorage, BinaryStorage } from './binary-storage';
import * as RequestsAPI from './requests/requests';
import { BaseRequests, Requests } from './requests/requests';
import * as ScansAPI from './scans/scans';
import { BaseScans, Scans } from './scans/scans';
import * as ThreatEventsAPI from './threat-events/threat-events';
import { BaseThreatEvents, ThreatEvents } from './threat-events/threat-events';

export class BaseCloudforceOne extends APIResource {
  static override readonly _key: readonly ['cloudforceOne'] = Object.freeze(['cloudforceOne'] as const);
}
export class CloudforceOne extends BaseCloudforceOne {
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
  binaryStorage: BinaryStorageAPI.BinaryStorage = new BinaryStorageAPI.BinaryStorage(this._client);
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
  threatEvents: ThreatEventsAPI.ThreatEvents = new ThreatEventsAPI.ThreatEvents(this._client);
}

CloudforceOne.Scans = Scans;
CloudforceOne.BaseScans = BaseScans;
CloudforceOne.BinaryStorage = BinaryStorage;
CloudforceOne.BaseBinaryStorage = BaseBinaryStorage;
CloudforceOne.Requests = Requests;
CloudforceOne.BaseRequests = BaseRequests;
CloudforceOne.ThreatEvents = ThreatEvents;
CloudforceOne.BaseThreatEvents = BaseThreatEvents;

export declare namespace CloudforceOne {
  export { Scans as Scans, BaseScans as BaseScans };

  export { BinaryStorage as BinaryStorage, BaseBinaryStorage as BaseBinaryStorage };

  export { Requests as Requests, BaseRequests as BaseRequests };

  export { ThreatEvents as ThreatEvents, BaseThreatEvents as BaseThreatEvents };
}
