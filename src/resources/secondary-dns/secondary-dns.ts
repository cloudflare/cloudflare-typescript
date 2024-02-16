// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/secondary-dns/acls';
import * as ForceAxfrsAPI from 'cloudflare/resources/secondary-dns/force-axfrs';
import * as IncomingsAPI from 'cloudflare/resources/secondary-dns/incomings';
import * as PeersAPI from 'cloudflare/resources/secondary-dns/peers';
import * as TsigsAPI from 'cloudflare/resources/secondary-dns/tsigs';
import * as OutgoingsAPI from 'cloudflare/resources/secondary-dns/outgoings/outgoings';

export class SecondaryDNS extends APIResource {
  forceAxfrs: ForceAxfrsAPI.ForceAxfrs = new ForceAxfrsAPI.ForceAxfrs(this._client);
  incomings: IncomingsAPI.Incomings = new IncomingsAPI.Incomings(this._client);
  outgoings: OutgoingsAPI.Outgoings = new OutgoingsAPI.Outgoings(this._client);
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TsigsAPI.Tsigs = new TsigsAPI.Tsigs(this._client);
}

export namespace SecondaryDNS {
  export import ForceAxfrs = ForceAxfrsAPI.ForceAxfrs;
  export import ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse = ForceAxfrsAPI.ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse;
  export import Incomings = IncomingsAPI.Incomings;
  export import IncomingDeleteResponse = IncomingsAPI.IncomingDeleteResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams;
  export import Outgoings = OutgoingsAPI.Outgoings;
  export import OutgoingDeleteResponse = OutgoingsAPI.OutgoingDeleteResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams;
  export import ACLs = ACLsAPI.ACLs;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLSecondaryDNSACLCreateACLResponse = ACLsAPI.ACLSecondaryDNSACLCreateACLResponse;
  export import ACLSecondaryDNSACLListACLsResponse = ACLsAPI.ACLSecondaryDNSACLListACLsResponse;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLSecondaryDNSACLCreateACLParams = ACLsAPI.ACLSecondaryDNSACLCreateACLParams;
  export import Peers = PeersAPI.Peers;
  export import PeerUpdateResponse = PeersAPI.PeerUpdateResponse;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeerGetResponse = PeersAPI.PeerGetResponse;
  export import PeerSecondaryDNSPeerCreatePeerResponse = PeersAPI.PeerSecondaryDNSPeerCreatePeerResponse;
  export import PeerSecondaryDNSPeerListPeersResponse = PeersAPI.PeerSecondaryDNSPeerListPeersResponse;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import PeerSecondaryDNSPeerCreatePeerParams = PeersAPI.PeerSecondaryDNSPeerCreatePeerParams;
  export import Tsigs = TsigsAPI.Tsigs;
  export import TsigUpdateResponse = TsigsAPI.TsigUpdateResponse;
  export import TsigDeleteResponse = TsigsAPI.TsigDeleteResponse;
  export import TsigGetResponse = TsigsAPI.TsigGetResponse;
  export import TsigSecondaryDNSTsigCreateTsigResponse = TsigsAPI.TsigSecondaryDNSTsigCreateTsigResponse;
  export import TsigSecondaryDNSTsigListTsiGsResponse = TsigsAPI.TsigSecondaryDNSTsigListTsiGsResponse;
  export import TsigUpdateParams = TsigsAPI.TsigUpdateParams;
  export import TsigSecondaryDNSTsigCreateTsigParams = TsigsAPI.TsigSecondaryDNSTsigCreateTsigParams;
}
