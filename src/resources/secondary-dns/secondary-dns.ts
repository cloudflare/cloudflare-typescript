// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/secondary-dns/acls';
import * as ForceAXFRAPI from 'cloudflare/resources/secondary-dns/force-axfr';
import * as IncomingAPI from 'cloudflare/resources/secondary-dns/incoming';
import * as PeersAPI from 'cloudflare/resources/secondary-dns/peers';
import * as TSIGsAPI from 'cloudflare/resources/secondary-dns/tsigs';
import * as OutgoingAPI from 'cloudflare/resources/secondary-dns/outgoing/outgoing';

export class SecondaryDNS extends APIResource {
  forceAXFR: ForceAXFRAPI.ForceAXFRResource = new ForceAXFRAPI.ForceAXFRResource(this._client);
  incoming: IncomingAPI.Incoming = new IncomingAPI.Incoming(this._client);
  outgoing: OutgoingAPI.Outgoing = new OutgoingAPI.Outgoing(this._client);
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TSIGsAPI.TSIGs = new TSIGsAPI.TSIGs(this._client);
}

export namespace SecondaryDNS {
  export import ForceAXFRResource = ForceAXFRAPI.ForceAXFRResource;
  export import ForceAXFR = ForceAXFRAPI.ForceAXFR;
  export import ForceAXFRCreateParams = ForceAXFRAPI.ForceAXFRCreateParams;
  export import Incoming = IncomingAPI.Incoming;
  export import UnnamedSchemaRef150c555e27f53dbb40cdce4d6644ff0a = IncomingAPI.UnnamedSchemaRef150c555e27f53dbb40cdce4d6644ff0a;
  export import IncomingCreateResponse = IncomingAPI.IncomingCreateResponse;
  export import IncomingUpdateResponse = IncomingAPI.IncomingUpdateResponse;
  export import IncomingDeleteResponse = IncomingAPI.IncomingDeleteResponse;
  export import IncomingGetResponse = IncomingAPI.IncomingGetResponse;
  export import IncomingCreateParams = IncomingAPI.IncomingCreateParams;
  export import IncomingUpdateParams = IncomingAPI.IncomingUpdateParams;
  export import IncomingDeleteParams = IncomingAPI.IncomingDeleteParams;
  export import IncomingGetParams = IncomingAPI.IncomingGetParams;
  export import Outgoing = OutgoingAPI.Outgoing;
  export import DisableTransfer = OutgoingAPI.DisableTransfer;
  export import EnableTransfer = OutgoingAPI.EnableTransfer;
  export import OutgoingStatus = OutgoingAPI.OutgoingStatus;
  export import UnnamedSchemaRef0e152c3e4c55b8a0ca6531578a42c564 = OutgoingAPI.UnnamedSchemaRef0e152c3e4c55b8a0ca6531578a42c564;
  export import OutgoingCreateResponse = OutgoingAPI.OutgoingCreateResponse;
  export import OutgoingUpdateResponse = OutgoingAPI.OutgoingUpdateResponse;
  export import OutgoingDeleteResponse = OutgoingAPI.OutgoingDeleteResponse;
  export import OutgoingForceNotifyResponse = OutgoingAPI.OutgoingForceNotifyResponse;
  export import OutgoingGetResponse = OutgoingAPI.OutgoingGetResponse;
  export import OutgoingCreateParams = OutgoingAPI.OutgoingCreateParams;
  export import OutgoingUpdateParams = OutgoingAPI.OutgoingUpdateParams;
  export import OutgoingDeleteParams = OutgoingAPI.OutgoingDeleteParams;
  export import OutgoingDisableParams = OutgoingAPI.OutgoingDisableParams;
  export import OutgoingEnableParams = OutgoingAPI.OutgoingEnableParams;
  export import OutgoingForceNotifyParams = OutgoingAPI.OutgoingForceNotifyParams;
  export import OutgoingGetParams = OutgoingAPI.OutgoingGetParams;
  export import ACLs = ACLsAPI.ACLs;
  export import ACL = ACLsAPI.ACL;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLsSinglePage = ACLsAPI.ACLsSinglePage;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLListParams = ACLsAPI.ACLListParams;
  export import ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export import ACLGetParams = ACLsAPI.ACLGetParams;
  export import Peers = PeersAPI.Peers;
  export import Peer = PeersAPI.Peer;
  export import UnnamedSchemaRefBc727f0a53d75f2b531245a82603fbe0 = PeersAPI.UnnamedSchemaRefBc727f0a53d75f2b531245a82603fbe0;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeersSinglePage = PeersAPI.PeersSinglePage;
  export import PeerCreateParams = PeersAPI.PeerCreateParams;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import PeerListParams = PeersAPI.PeerListParams;
  export import PeerDeleteParams = PeersAPI.PeerDeleteParams;
  export import PeerGetParams = PeersAPI.PeerGetParams;
  export import TSIGs = TSIGsAPI.TSIGs;
  export import TSIG = TSIGsAPI.TSIG;
  export import TSIGDeleteResponse = TSIGsAPI.TSIGDeleteResponse;
  export import TSIGsSinglePage = TSIGsAPI.TSIGsSinglePage;
  export import TSIGCreateParams = TSIGsAPI.TSIGCreateParams;
  export import TSIGUpdateParams = TSIGsAPI.TSIGUpdateParams;
  export import TSIGListParams = TSIGsAPI.TSIGListParams;
  export import TSIGDeleteParams = TSIGsAPI.TSIGDeleteParams;
  export import TSIGGetParams = TSIGsAPI.TSIGGetParams;
}
