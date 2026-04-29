// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ACLsAPI from './acls';
import { ACLs } from './acls';
import * as ForceAXFRAPI from './force-axfr';
import { ForceAXFR } from './force-axfr';
import * as IncomingAPI from './incoming';
import { Incoming } from './incoming';
import * as PeersAPI from './peers';
import { Peers } from './peers';
import * as TSIGsAPI from './tsigs';
import { TSIGs } from './tsigs';
import * as OutgoingAPI from './outgoing/outgoing';
import { Outgoing } from './outgoing/outgoing';

export class ZoneTransfers extends APIResource {
  forceAXFR: ForceAXFRAPI.ForceAXFR = new ForceAXFRAPI.ForceAXFR(this._client);
  incoming: IncomingAPI.Incoming = new IncomingAPI.Incoming(this._client);
  outgoing: OutgoingAPI.Outgoing = new OutgoingAPI.Outgoing(this._client);
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TSIGsAPI.TSIGs = new TSIGsAPI.TSIGs(this._client);
}

ZoneTransfers.ForceAXFR = ForceAXFR;
ZoneTransfers.Incoming = Incoming;
ZoneTransfers.Outgoing = Outgoing;
ZoneTransfers.ACLs = ACLs;
ZoneTransfers.Peers = Peers;
ZoneTransfers.TSIGs = TSIGs;

export declare namespace ZoneTransfers {
  export { ForceAXFR as ForceAXFR };

  export { Incoming as Incoming };

  export { Outgoing as Outgoing };

  export { ACLs as ACLs };

  export { Peers as Peers };

  export { TSIGs as TSIGs };
}
