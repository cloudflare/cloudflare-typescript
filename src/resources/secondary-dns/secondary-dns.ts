// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/secondary-dns/acls';
import * as ForceAxfrsAPI from 'cloudflare/resources/secondary-dns/force-axfrs';
import * as IncomingAPI from 'cloudflare/resources/secondary-dns/incoming';
import * as PeersAPI from 'cloudflare/resources/secondary-dns/peers';
import * as TsigsAPI from 'cloudflare/resources/secondary-dns/tsigs';
import * as OutgoingAPI from 'cloudflare/resources/secondary-dns/outgoing/outgoing';

export class SecondaryDNS extends APIResource {
  forceAxfrs: ForceAxfrsAPI.ForceAxfrs = new ForceAxfrsAPI.ForceAxfrs(this._client);
  incoming: IncomingAPI.Incoming = new IncomingAPI.Incoming(this._client);
  outgoing: OutgoingAPI.Outgoing = new OutgoingAPI.Outgoing(this._client);
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TsigsAPI.Tsigs = new TsigsAPI.Tsigs(this._client);
}

export namespace SecondaryDNS {
  export import ForceAxfrs = ForceAxfrsAPI.ForceAxfrs;
  export import ForceAxfrCreateResponse = ForceAxfrsAPI.ForceAxfrCreateResponse;
  export import Incoming = IncomingAPI.Incoming;
  export import IncomingCreateResponse = IncomingAPI.IncomingCreateResponse;
  export import IncomingDeleteResponse = IncomingAPI.IncomingDeleteResponse;
  export import IncomingGetResponse = IncomingAPI.IncomingGetResponse;
  export import IncomingReplaceResponse = IncomingAPI.IncomingReplaceResponse;
  export import IncomingCreateParams = IncomingAPI.IncomingCreateParams;
  export import IncomingReplaceParams = IncomingAPI.IncomingReplaceParams;
  export import Outgoing = OutgoingAPI.Outgoing;
  export import OutgoingCreateResponse = OutgoingAPI.OutgoingCreateResponse;
  export import OutgoingDeleteResponse = OutgoingAPI.OutgoingDeleteResponse;
  export import OutgoingDisableResponse = OutgoingAPI.OutgoingDisableResponse;
  export import OutgoingEnableResponse = OutgoingAPI.OutgoingEnableResponse;
  export import OutgoingForceNotifyResponse = OutgoingAPI.OutgoingForceNotifyResponse;
  export import OutgoingGetResponse = OutgoingAPI.OutgoingGetResponse;
  export import OutgoingReplaceResponse = OutgoingAPI.OutgoingReplaceResponse;
  export import OutgoingCreateParams = OutgoingAPI.OutgoingCreateParams;
  export import OutgoingReplaceParams = OutgoingAPI.OutgoingReplaceParams;
  export import ACLs = ACLsAPI.ACLs;
  export import ACLCreateResponse = ACLsAPI.ACLCreateResponse;
  export import ACLListResponse = ACLsAPI.ACLListResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLReplaceResponse = ACLsAPI.ACLReplaceResponse;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLReplaceParams = ACLsAPI.ACLReplaceParams;
  export import Peers = PeersAPI.Peers;
  export import PeerCreateResponse = PeersAPI.PeerCreateResponse;
  export import PeerListResponse = PeersAPI.PeerListResponse;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeerGetResponse = PeersAPI.PeerGetResponse;
  export import PeerReplaceResponse = PeersAPI.PeerReplaceResponse;
  export import PeerCreateParams = PeersAPI.PeerCreateParams;
  export import PeerReplaceParams = PeersAPI.PeerReplaceParams;
  export import Tsigs = TsigsAPI.Tsigs;
  export import TsigCreateResponse = TsigsAPI.TsigCreateResponse;
  export import TsigListResponse = TsigsAPI.TsigListResponse;
  export import TsigDeleteResponse = TsigsAPI.TsigDeleteResponse;
  export import TsigGetResponse = TsigsAPI.TsigGetResponse;
  export import TsigReplaceResponse = TsigsAPI.TsigReplaceResponse;
  export import TsigCreateParams = TsigsAPI.TsigCreateParams;
  export import TsigReplaceParams = TsigsAPI.TsigReplaceParams;
}
