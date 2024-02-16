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
  export import CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export import CfInterconnectMagicInterconnectsListInterconnectsResponse = CfInterconnectsAPI.CfInterconnectMagicInterconnectsListInterconnectsResponse;
  export import CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse = CfInterconnectsAPI.CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse;
  export import CfInterconnectUpdateParams = CfInterconnectsAPI.CfInterconnectUpdateParams;
  export import CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsParams = CfInterconnectsAPI.CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsParams;
  export import GreTunnels = GreTunnelsAPI.GreTunnels;
  export import GreTunnelUpdateResponse = GreTunnelsAPI.GreTunnelUpdateResponse;
  export import GreTunnelDeleteResponse = GreTunnelsAPI.GreTunnelDeleteResponse;
  export import GreTunnelGetResponse = GreTunnelsAPI.GreTunnelGetResponse;
  export import GreTunnelMagicGreTunnelsCreateGreTunnelsResponse = GreTunnelsAPI.GreTunnelMagicGreTunnelsCreateGreTunnelsResponse;
  export import GreTunnelMagicGreTunnelsListGreTunnelsResponse = GreTunnelsAPI.GreTunnelMagicGreTunnelsListGreTunnelsResponse;
  export import GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse = GreTunnelsAPI.GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse;
  export import GreTunnelUpdateParams = GreTunnelsAPI.GreTunnelUpdateParams;
  export import GreTunnelMagicGreTunnelsCreateGreTunnelsParams = GreTunnelsAPI.GreTunnelMagicGreTunnelsCreateGreTunnelsParams;
  export import GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsParams = GreTunnelsAPI.GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsParams;
  export import IpsecTunnels = IpsecTunnelsAPI.IpsecTunnels;
  export import IpsecTunnelUpdateResponse = IpsecTunnelsAPI.IpsecTunnelUpdateResponse;
  export import IpsecTunnelDeleteResponse = IpsecTunnelsAPI.IpsecTunnelDeleteResponse;
  export import IpsecTunnelGetResponse = IpsecTunnelsAPI.IpsecTunnelGetResponse;
  export import IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsResponse = IpsecTunnelsAPI.IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsResponse;
  export import IpsecTunnelMagicIPsecTunnelsListIPsecTunnelsResponse = IpsecTunnelsAPI.IpsecTunnelMagicIPsecTunnelsListIPsecTunnelsResponse;
  export import IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsResponse = IpsecTunnelsAPI.IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsResponse;
  export import IpsecTunnelUpdateParams = IpsecTunnelsAPI.IpsecTunnelUpdateParams;
  export import IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsParams = IpsecTunnelsAPI.IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsParams;
  export import IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsParams = IpsecTunnelsAPI.IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteMagicStaticRoutesCreateRoutesResponse = RoutesAPI.RouteMagicStaticRoutesCreateRoutesResponse;
  export import RouteMagicStaticRoutesListRoutesResponse = RoutesAPI.RouteMagicStaticRoutesListRoutesResponse;
  export import RouteMagicStaticRoutesUpdateManyRoutesResponse = RoutesAPI.RouteMagicStaticRoutesUpdateManyRoutesResponse;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteMagicStaticRoutesCreateRoutesParams = RoutesAPI.RouteMagicStaticRoutesCreateRoutesParams;
  export import RouteMagicStaticRoutesUpdateManyRoutesParams = RoutesAPI.RouteMagicStaticRoutesUpdateManyRoutesParams;
}
