// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BinaryStorageAPI from './binary-storage';
import { BinaryStorage } from './binary-storage';
import * as RequestsAPI from './requests/requests';
import { Requests } from './requests/requests';
import * as ScansAPI from './scans/scans';
import { Scans } from './scans/scans';
import * as ThreatEventsAPI from './threat-events/threat-events';
import { ThreatEvents } from './threat-events/threat-events';

export class CloudforceOne extends APIResource {
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
  binaryStorage: BinaryStorageAPI.BinaryStorage = new BinaryStorageAPI.BinaryStorage(this._client);
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
  threatEvents: ThreatEventsAPI.ThreatEvents = new ThreatEventsAPI.ThreatEvents(this._client);
}

CloudforceOne.Scans = Scans;
CloudforceOne.BinaryStorage = BinaryStorage;
CloudforceOne.Requests = Requests;
CloudforceOne.ThreatEvents = ThreatEvents;

export declare namespace CloudforceOne {
  export { Scans as Scans };

  export { BinaryStorage as BinaryStorage };

  export { Requests as Requests };

  export { ThreatEvents as ThreatEvents };
}
