// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ACLsAPI from './acls';
import { ACLs, BaseACLs } from './acls';
import * as ForceAXFRAPI from './force-axfr';
import { BaseForceAXFR, ForceAXFR } from './force-axfr';
import * as IncomingAPI from './incoming';
import { BaseIncoming, Incoming } from './incoming';
import * as PeersAPI from './peers';
import { BasePeers, Peers } from './peers';
import * as TSIGsAPI from './tsigs';
import { BaseTSIGs, TSIGs } from './tsigs';
import * as OutgoingAPI from './outgoing/outgoing';
import { BaseOutgoing, Outgoing } from './outgoing/outgoing';

export class BaseZoneTransfers extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers'] = Object.freeze([
    'dns',
    'zoneTransfers',
  ] as const);
}
export class ZoneTransfers extends BaseZoneTransfers {
  forceAXFR: ForceAXFRAPI.ForceAXFR = new ForceAXFRAPI.ForceAXFR(this._client);
  incoming: IncomingAPI.Incoming = new IncomingAPI.Incoming(this._client);
  outgoing: OutgoingAPI.Outgoing = new OutgoingAPI.Outgoing(this._client);
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TSIGsAPI.TSIGs = new TSIGsAPI.TSIGs(this._client);
}

ZoneTransfers.ForceAXFR = ForceAXFR;
ZoneTransfers.BaseForceAXFR = BaseForceAXFR;
ZoneTransfers.Incoming = Incoming;
ZoneTransfers.BaseIncoming = BaseIncoming;
ZoneTransfers.Outgoing = Outgoing;
ZoneTransfers.BaseOutgoing = BaseOutgoing;
ZoneTransfers.ACLs = ACLs;
ZoneTransfers.BaseACLs = BaseACLs;
ZoneTransfers.Peers = Peers;
ZoneTransfers.BasePeers = BasePeers;
ZoneTransfers.TSIGs = TSIGs;
ZoneTransfers.BaseTSIGs = BaseTSIGs;

export declare namespace ZoneTransfers {
  export { ForceAXFR as ForceAXFR, BaseForceAXFR as BaseForceAXFR };

  export { Incoming as Incoming, BaseIncoming as BaseIncoming };

  export { Outgoing as Outgoing, BaseOutgoing as BaseOutgoing };

  export { ACLs as ACLs, BaseACLs as BaseACLs };

  export { Peers as Peers, BasePeers as BasePeers };

  export { TSIGs as TSIGs, BaseTSIGs as BaseTSIGs };
}
