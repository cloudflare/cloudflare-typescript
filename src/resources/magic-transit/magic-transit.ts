// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as CfInterconnectsAPI from 'cloudflare/resources/magic-transit/cf-interconnects';
import * as GRETunnelsAPI from 'cloudflare/resources/magic-transit/gre-tunnels';
import * as IPSECTunnelsAPI from 'cloudflare/resources/magic-transit/ipsec-tunnels';
import * as RoutesAPI from 'cloudflare/resources/magic-transit/routes';
import * as SitesAPI from 'cloudflare/resources/magic-transit/sites/sites';

export class MagicTransit extends APIResource {
  cfInterconnects: CfInterconnectsAPI.CfInterconnects = new CfInterconnectsAPI.CfInterconnects(this._client);
  greTunnels: GRETunnelsAPI.GRETunnels = new GRETunnelsAPI.GRETunnels(this._client);
  ipsecTunnels: IPSECTunnelsAPI.IPSECTunnels = new IPSECTunnelsAPI.IPSECTunnels(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  sites: SitesAPI.Sites = new SitesAPI.Sites(this._client);
}

export namespace MagicTransit {
  export import CfInterconnects = CfInterconnectsAPI.CfInterconnects;
  export import CfInterconnectUpdateResponse = CfInterconnectsAPI.CfInterconnectUpdateResponse;
  export import CfInterconnectListResponse = CfInterconnectsAPI.CfInterconnectListResponse;
  export import CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export import CfInterconnectUpdateParams = CfInterconnectsAPI.CfInterconnectUpdateParams;
  export import CfInterconnectListParams = CfInterconnectsAPI.CfInterconnectListParams;
  export import CfInterconnectGetParams = CfInterconnectsAPI.CfInterconnectGetParams;
  export import GRETunnels = GRETunnelsAPI.GRETunnels;
  export import GRETunnelCreateResponse = GRETunnelsAPI.GRETunnelCreateResponse;
  export import GRETunnelUpdateResponse = GRETunnelsAPI.GRETunnelUpdateResponse;
  export import GRETunnelListResponse = GRETunnelsAPI.GRETunnelListResponse;
  export import GRETunnelDeleteResponse = GRETunnelsAPI.GRETunnelDeleteResponse;
  export import GRETunnelGetResponse = GRETunnelsAPI.GRETunnelGetResponse;
  export import GRETunnelCreateParams = GRETunnelsAPI.GRETunnelCreateParams;
  export import GRETunnelUpdateParams = GRETunnelsAPI.GRETunnelUpdateParams;
  export import GRETunnelListParams = GRETunnelsAPI.GRETunnelListParams;
  export import GRETunnelDeleteParams = GRETunnelsAPI.GRETunnelDeleteParams;
  export import GRETunnelGetParams = GRETunnelsAPI.GRETunnelGetParams;
  export import IPSECTunnels = IPSECTunnelsAPI.IPSECTunnels;
  export import IPSECTunnelCreateResponse = IPSECTunnelsAPI.IPSECTunnelCreateResponse;
  export import IPSECTunnelUpdateResponse = IPSECTunnelsAPI.IPSECTunnelUpdateResponse;
  export import IPSECTunnelListResponse = IPSECTunnelsAPI.IPSECTunnelListResponse;
  export import IPSECTunnelDeleteResponse = IPSECTunnelsAPI.IPSECTunnelDeleteResponse;
  export import IPSECTunnelGetResponse = IPSECTunnelsAPI.IPSECTunnelGetResponse;
  export import IPSECTunnelPSKGenerateResponse = IPSECTunnelsAPI.IPSECTunnelPSKGenerateResponse;
  export import IPSECTunnelCreateParams = IPSECTunnelsAPI.IPSECTunnelCreateParams;
  export import IPSECTunnelUpdateParams = IPSECTunnelsAPI.IPSECTunnelUpdateParams;
  export import IPSECTunnelListParams = IPSECTunnelsAPI.IPSECTunnelListParams;
  export import IPSECTunnelDeleteParams = IPSECTunnelsAPI.IPSECTunnelDeleteParams;
  export import IPSECTunnelGetParams = IPSECTunnelsAPI.IPSECTunnelGetParams;
  export import IPSECTunnelPSKGenerateParams = IPSECTunnelsAPI.IPSECTunnelPSKGenerateParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteEmptyResponse = RoutesAPI.RouteEmptyResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteEmptyParams = RoutesAPI.RouteEmptyParams;
  export import RouteGetParams = RoutesAPI.RouteGetParams;
  export import Sites = SitesAPI.Sites;
  export import SiteCreateResponse = SitesAPI.SiteCreateResponse;
  export import SiteUpdateResponse = SitesAPI.SiteUpdateResponse;
  export import SiteListResponse = SitesAPI.SiteListResponse;
  export import SiteDeleteResponse = SitesAPI.SiteDeleteResponse;
  export import SiteGetResponse = SitesAPI.SiteGetResponse;
  export import SiteCreateParams = SitesAPI.SiteCreateParams;
  export import SiteUpdateParams = SitesAPI.SiteUpdateParams;
  export import SiteListParams = SitesAPI.SiteListParams;
  export import SiteDeleteParams = SitesAPI.SiteDeleteParams;
  export import SiteGetParams = SitesAPI.SiteGetParams;
}
