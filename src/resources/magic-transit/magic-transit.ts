// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as CfInterconnectsAPI from 'cloudflare/resources/magic-transit/cf-interconnects';
import * as GRETunnelsAPI from 'cloudflare/resources/magic-transit/gre-tunnels';
import * as RoutesAPI from 'cloudflare/resources/magic-transit/routes';
import * as IPSECTunnelsAPI from 'cloudflare/resources/magic-transit/ipsec-tunnels/ipsec-tunnels';

export class MagicTransit extends APIResource {
  cfInterconnects: CfInterconnectsAPI.CfInterconnects = new CfInterconnectsAPI.CfInterconnects(this._client);
  greTunnels: GRETunnelsAPI.GRETunnels = new GRETunnelsAPI.GRETunnels(this._client);
  ipsecTunnels: IPSECTunnelsAPI.IPSECTunnels = new IPSECTunnelsAPI.IPSECTunnels(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

export namespace MagicTransit {
  export import CfInterconnects = CfInterconnectsAPI.CfInterconnects;
  export import CfInterconnectUpdateResponse = CfInterconnectsAPI.CfInterconnectUpdateResponse;
  export import CfInterconnectListResponse = CfInterconnectsAPI.CfInterconnectListResponse;
  export import CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export import CfInterconnectUpdateParams = CfInterconnectsAPI.CfInterconnectUpdateParams;
  export import GRETunnels = GRETunnelsAPI.GRETunnels;
  export import GRETunnelCreateResponse = GRETunnelsAPI.GRETunnelCreateResponse;
  export import GRETunnelUpdateResponse = GRETunnelsAPI.GRETunnelUpdateResponse;
  export import GRETunnelListResponse = GRETunnelsAPI.GRETunnelListResponse;
  export import GRETunnelDeleteResponse = GRETunnelsAPI.GRETunnelDeleteResponse;
  export import GRETunnelGetResponse = GRETunnelsAPI.GRETunnelGetResponse;
  export import GRETunnelCreateParams = GRETunnelsAPI.GRETunnelCreateParams;
  export import GRETunnelUpdateParams = GRETunnelsAPI.GRETunnelUpdateParams;
  export import IPSECTunnels = IPSECTunnelsAPI.IPSECTunnels;
  export import IPSECTunnelCreateResponse = IPSECTunnelsAPI.IPSECTunnelCreateResponse;
  export import IPSECTunnelUpdateResponse = IPSECTunnelsAPI.IPSECTunnelUpdateResponse;
  export import IPSECTunnelListResponse = IPSECTunnelsAPI.IPSECTunnelListResponse;
  export import IPSECTunnelDeleteResponse = IPSECTunnelsAPI.IPSECTunnelDeleteResponse;
  export import IPSECTunnelGetResponse = IPSECTunnelsAPI.IPSECTunnelGetResponse;
  export import IPSECTunnelCreateParams = IPSECTunnelsAPI.IPSECTunnelCreateParams;
  export import IPSECTunnelUpdateParams = IPSECTunnelsAPI.IPSECTunnelUpdateParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteEmptyResponse = RoutesAPI.RouteEmptyResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteEmptyParams = RoutesAPI.RouteEmptyParams;
}
