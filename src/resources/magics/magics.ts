// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as CfInterconnectsAPI from 'cloudflare/resources/magics/cf-interconnects';
import * as GreTunnelsAPI from 'cloudflare/resources/magics/gre-tunnels';
import * as RoutesAPI from 'cloudflare/resources/magics/routes';
import * as IpsecTunnelsAPI from 'cloudflare/resources/magics/ipsec-tunnels/ipsec-tunnels';

export class Magics extends APIResource {
  cfInterconnects: CfInterconnectsAPI.CfInterconnects = new CfInterconnectsAPI.CfInterconnects(this._client);
  greTunnels: GreTunnelsAPI.GreTunnels = new GreTunnelsAPI.GreTunnels(this._client);
  ipsecTunnels: IpsecTunnelsAPI.IpsecTunnels = new IpsecTunnelsAPI.IpsecTunnels(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

export namespace Magics {
  export import CfInterconnects = CfInterconnectsAPI.CfInterconnects;
  export import CfInterconnectUpdateResponse = CfInterconnectsAPI.CfInterconnectUpdateResponse;
  export import CfInterconnectListResponse = CfInterconnectsAPI.CfInterconnectListResponse;
  export import CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export import CfInterconnectUpdateParams = CfInterconnectsAPI.CfInterconnectUpdateParams;
  export import GreTunnels = GreTunnelsAPI.GreTunnels;
  export import GreTunnelCreateResponse = GreTunnelsAPI.GreTunnelCreateResponse;
  export import GreTunnelUpdateResponse = GreTunnelsAPI.GreTunnelUpdateResponse;
  export import GreTunnelListResponse = GreTunnelsAPI.GreTunnelListResponse;
  export import GreTunnelDeleteResponse = GreTunnelsAPI.GreTunnelDeleteResponse;
  export import GreTunnelGetResponse = GreTunnelsAPI.GreTunnelGetResponse;
  export import GreTunnelCreateParams = GreTunnelsAPI.GreTunnelCreateParams;
  export import GreTunnelUpdateParams = GreTunnelsAPI.GreTunnelUpdateParams;
  export import IpsecTunnels = IpsecTunnelsAPI.IpsecTunnels;
  export import IpsecTunnelCreateResponse = IpsecTunnelsAPI.IpsecTunnelCreateResponse;
  export import IpsecTunnelUpdateResponse = IpsecTunnelsAPI.IpsecTunnelUpdateResponse;
  export import IpsecTunnelListResponse = IpsecTunnelsAPI.IpsecTunnelListResponse;
  export import IpsecTunnelDeleteResponse = IpsecTunnelsAPI.IpsecTunnelDeleteResponse;
  export import IpsecTunnelGetResponse = IpsecTunnelsAPI.IpsecTunnelGetResponse;
  export import IpsecTunnelCreateParams = IpsecTunnelsAPI.IpsecTunnelCreateParams;
  export import IpsecTunnelUpdateParams = IpsecTunnelsAPI.IpsecTunnelUpdateParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteMagicStaticRoutesListRoutesResponse = RoutesAPI.RouteMagicStaticRoutesListRoutesResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
}
