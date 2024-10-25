// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ACLsAPI from './acls';
import * as ForceAXFRAPI from './force-axfr';
import * as IncomingAPI from './incoming';
import * as PeersAPI from './peers';
import * as TSIGsAPI from './tsigs';
import * as OutgoingAPI from './outgoing/outgoing';

export class SecondaryDNS extends APIResource {
  forceAXFR: ForceAXFRAPI.ForceAXFRResource = new ForceAXFRAPI.ForceAXFRResource(this._client);
  incoming: IncomingAPI.IncomingResource = new IncomingAPI.IncomingResource(this._client);
  outgoing: OutgoingAPI.OutgoingResource = new OutgoingAPI.OutgoingResource(this._client);
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TSIGsAPI.TSIGs = new TSIGsAPI.TSIGs(this._client);
}

export namespace SecondaryDNS {
  export import ForceAXFRResource = ForceAXFRAPI.ForceAXFRResource;
  export type ForceAXFR = ForceAXFRAPI.ForceAXFR;
  export type ForceAXFRCreateParams = ForceAXFRAPI.ForceAXFRCreateParams;
  export import IncomingResource = IncomingAPI.IncomingResource;
  export type Incoming = IncomingAPI.Incoming;
  export type IncomingCreateResponse = IncomingAPI.IncomingCreateResponse;
  export type IncomingUpdateResponse = IncomingAPI.IncomingUpdateResponse;
  export type IncomingDeleteResponse = IncomingAPI.IncomingDeleteResponse;
  export type IncomingGetResponse = IncomingAPI.IncomingGetResponse;
  export type IncomingCreateParams = IncomingAPI.IncomingCreateParams;
  export type IncomingUpdateParams = IncomingAPI.IncomingUpdateParams;
  export type IncomingDeleteParams = IncomingAPI.IncomingDeleteParams;
  export type IncomingGetParams = IncomingAPI.IncomingGetParams;
  export import OutgoingResource = OutgoingAPI.OutgoingResource;
  export type DisableTransfer = OutgoingAPI.DisableTransfer;
  export type EnableTransfer = OutgoingAPI.EnableTransfer;
  export type Outgoing = OutgoingAPI.Outgoing;
  export type OutgoingStatus = OutgoingAPI.OutgoingStatus;
  export type OutgoingCreateResponse = OutgoingAPI.OutgoingCreateResponse;
  export type OutgoingUpdateResponse = OutgoingAPI.OutgoingUpdateResponse;
  export type OutgoingDeleteResponse = OutgoingAPI.OutgoingDeleteResponse;
  export type OutgoingForceNotifyResponse = OutgoingAPI.OutgoingForceNotifyResponse;
  export type OutgoingGetResponse = OutgoingAPI.OutgoingGetResponse;
  export type OutgoingCreateParams = OutgoingAPI.OutgoingCreateParams;
  export type OutgoingUpdateParams = OutgoingAPI.OutgoingUpdateParams;
  export type OutgoingDeleteParams = OutgoingAPI.OutgoingDeleteParams;
  export type OutgoingDisableParams = OutgoingAPI.OutgoingDisableParams;
  export type OutgoingEnableParams = OutgoingAPI.OutgoingEnableParams;
  export type OutgoingForceNotifyParams = OutgoingAPI.OutgoingForceNotifyParams;
  export type OutgoingGetParams = OutgoingAPI.OutgoingGetParams;
  export import ACLs = ACLsAPI.ACLs;
  export type ACL = ACLsAPI.ACL;
  export type ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLsSinglePage = ACLsAPI.ACLsSinglePage;
  export type ACLCreateParams = ACLsAPI.ACLCreateParams;
  export type ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export type ACLListParams = ACLsAPI.ACLListParams;
  export type ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export type ACLGetParams = ACLsAPI.ACLGetParams;
  export import Peers = PeersAPI.Peers;
  export type Peer = PeersAPI.Peer;
  export type PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeersSinglePage = PeersAPI.PeersSinglePage;
  export type PeerCreateParams = PeersAPI.PeerCreateParams;
  export type PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export type PeerListParams = PeersAPI.PeerListParams;
  export type PeerDeleteParams = PeersAPI.PeerDeleteParams;
  export type PeerGetParams = PeersAPI.PeerGetParams;
  export import TSIGs = TSIGsAPI.TSIGs;
  export type TSIG = TSIGsAPI.TSIG;
  export type TSIGDeleteResponse = TSIGsAPI.TSIGDeleteResponse;
  export import TSIGsSinglePage = TSIGsAPI.TSIGsSinglePage;
  export type TSIGCreateParams = TSIGsAPI.TSIGCreateParams;
  export type TSIGUpdateParams = TSIGsAPI.TSIGUpdateParams;
  export type TSIGListParams = TSIGsAPI.TSIGListParams;
  export type TSIGDeleteParams = TSIGsAPI.TSIGDeleteParams;
  export type TSIGGetParams = TSIGsAPI.TSIGGetParams;
}
