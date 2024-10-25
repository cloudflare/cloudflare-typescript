// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AppsAPI from './apps';
import * as CfInterconnectsAPI from './cf-interconnects';
import * as ConnectorsAPI from './connectors';
import * as GRETunnelsAPI from './gre-tunnels';
import * as IPSECTunnelsAPI from './ipsec-tunnels';
import * as RoutesAPI from './routes';
import * as PCAPsAPI from './pcaps/pcaps';
import * as SitesAPI from './sites/sites';

export class MagicTransit extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  cfInterconnects: CfInterconnectsAPI.CfInterconnects = new CfInterconnectsAPI.CfInterconnects(this._client);
  greTunnels: GRETunnelsAPI.GRETunnels = new GRETunnelsAPI.GRETunnels(this._client);
  ipsecTunnels: IPSECTunnelsAPI.IPSECTunnels = new IPSECTunnelsAPI.IPSECTunnels(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  sites: SitesAPI.Sites = new SitesAPI.Sites(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  pcaps: PCAPsAPI.PCAPs = new PCAPsAPI.PCAPs(this._client);
}

export interface HealthCheck {
  /**
   * Determines whether to run healthchecks for a tunnel.
   */
  enabled?: boolean;

  /**
   * How frequent the health check is run. The default value is `mid`.
   */
  rate?: HealthCheckRate;

  /**
   * The destination address in a request type health check. After the healthcheck is
   * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
   * to this address. This field defaults to `customer_gre_endpoint address`. This
   * field is ignored for bidirectional healthchecks as the interface_address (not
   * assigned to the Cloudflare side of the tunnel) is used as the target. Must be in
   * object form if the x-magic-new-hc-target header is set to true and string form
   * if x-magic-new-hc-target is absent or set to false.
   */
  target?: HealthCheck.MagicHealthCheckTarget | string;

  /**
   * The type of healthcheck to run, reply or request. The default value is `reply`.
   */
  type?: HealthCheckType;
}

export namespace HealthCheck {
  /**
   * The destination address in a request type health check. After the healthcheck is
   * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
   * to this address. This field defaults to `customer_gre_endpoint address`. This
   * field is ignored for bidirectional healthchecks as the interface_address (not
   * assigned to the Cloudflare side of the tunnel) is used as the target.
   */
  export interface MagicHealthCheckTarget {
    /**
     * The effective health check target. If 'saved' is empty, then this field will be
     * populated with the calculated default value on GET requests. Ignored in POST,
     * PUT, and PATCH requests.
     */
    effective?: string;

    /**
     * The saved health check target. Setting the value to the empty string indicates
     * that the calculated default value will be used.
     */
    saved?: string;
  }
}

export interface HealthCheckParam {
  /**
   * Determines whether to run healthchecks for a tunnel.
   */
  enabled?: boolean;

  /**
   * How frequent the health check is run. The default value is `mid`.
   */
  rate?: HealthCheckRateParam;

  /**
   * The destination address in a request type health check. After the healthcheck is
   * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
   * to this address. This field defaults to `customer_gre_endpoint address`. This
   * field is ignored for bidirectional healthchecks as the interface_address (not
   * assigned to the Cloudflare side of the tunnel) is used as the target. Must be in
   * object form if the x-magic-new-hc-target header is set to true and string form
   * if x-magic-new-hc-target is absent or set to false.
   */
  target?: HealthCheckParam.MagicHealthCheckTarget | string;

  /**
   * The type of healthcheck to run, reply or request. The default value is `reply`.
   */
  type?: HealthCheckTypeParam;
}

export namespace HealthCheckParam {
  /**
   * The destination address in a request type health check. After the healthcheck is
   * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
   * to this address. This field defaults to `customer_gre_endpoint address`. This
   * field is ignored for bidirectional healthchecks as the interface_address (not
   * assigned to the Cloudflare side of the tunnel) is used as the target.
   */
  export interface MagicHealthCheckTarget {
    /**
     * The saved health check target. Setting the value to the empty string indicates
     * that the calculated default value will be used.
     */
    saved?: string;
  }
}

/**
 * How frequent the health check is run. The default value is `mid`.
 */
export type HealthCheckRate = 'low' | 'mid' | 'high';

/**
 * How frequent the health check is run. The default value is `mid`.
 */
export type HealthCheckRateParam = 'low' | 'mid' | 'high';

/**
 * The type of healthcheck to run, reply or request. The default value is `reply`.
 */
export type HealthCheckType = 'reply' | 'request';

/**
 * The type of healthcheck to run, reply or request. The default value is `reply`.
 */
export type HealthCheckTypeParam = 'reply' | 'request';

export namespace MagicTransit {
  export import Apps = AppsAPI.Apps;
  export type AppCreateResponse = AppsAPI.AppCreateResponse;
  export type AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export type AppListResponse = AppsAPI.AppListResponse;
  export type AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppListResponsesSinglePage = AppsAPI.AppListResponsesSinglePage;
  export type AppCreateParams = AppsAPI.AppCreateParams;
  export type AppUpdateParams = AppsAPI.AppUpdateParams;
  export type AppListParams = AppsAPI.AppListParams;
  export type AppDeleteParams = AppsAPI.AppDeleteParams;
  export import CfInterconnects = CfInterconnectsAPI.CfInterconnects;
  export type CfInterconnectUpdateResponse = CfInterconnectsAPI.CfInterconnectUpdateResponse;
  export type CfInterconnectListResponse = CfInterconnectsAPI.CfInterconnectListResponse;
  export type CfInterconnectGetResponse = CfInterconnectsAPI.CfInterconnectGetResponse;
  export type CfInterconnectUpdateParams = CfInterconnectsAPI.CfInterconnectUpdateParams;
  export type CfInterconnectListParams = CfInterconnectsAPI.CfInterconnectListParams;
  export type CfInterconnectGetParams = CfInterconnectsAPI.CfInterconnectGetParams;
  export import GRETunnels = GRETunnelsAPI.GRETunnels;
  export type GRETunnelCreateResponse = GRETunnelsAPI.GRETunnelCreateResponse;
  export type GRETunnelUpdateResponse = GRETunnelsAPI.GRETunnelUpdateResponse;
  export type GRETunnelListResponse = GRETunnelsAPI.GRETunnelListResponse;
  export type GRETunnelDeleteResponse = GRETunnelsAPI.GRETunnelDeleteResponse;
  export type GRETunnelGetResponse = GRETunnelsAPI.GRETunnelGetResponse;
  export type GRETunnelCreateParams = GRETunnelsAPI.GRETunnelCreateParams;
  export type GRETunnelUpdateParams = GRETunnelsAPI.GRETunnelUpdateParams;
  export type GRETunnelListParams = GRETunnelsAPI.GRETunnelListParams;
  export type GRETunnelDeleteParams = GRETunnelsAPI.GRETunnelDeleteParams;
  export type GRETunnelGetParams = GRETunnelsAPI.GRETunnelGetParams;
  export import IPSECTunnels = IPSECTunnelsAPI.IPSECTunnels;
  export type PSKMetadata = IPSECTunnelsAPI.PSKMetadata;
  export type IPSECTunnelCreateResponse = IPSECTunnelsAPI.IPSECTunnelCreateResponse;
  export type IPSECTunnelUpdateResponse = IPSECTunnelsAPI.IPSECTunnelUpdateResponse;
  export type IPSECTunnelListResponse = IPSECTunnelsAPI.IPSECTunnelListResponse;
  export type IPSECTunnelDeleteResponse = IPSECTunnelsAPI.IPSECTunnelDeleteResponse;
  export type IPSECTunnelGetResponse = IPSECTunnelsAPI.IPSECTunnelGetResponse;
  export type IPSECTunnelPSKGenerateResponse = IPSECTunnelsAPI.IPSECTunnelPSKGenerateResponse;
  export type IPSECTunnelCreateParams = IPSECTunnelsAPI.IPSECTunnelCreateParams;
  export type IPSECTunnelUpdateParams = IPSECTunnelsAPI.IPSECTunnelUpdateParams;
  export type IPSECTunnelListParams = IPSECTunnelsAPI.IPSECTunnelListParams;
  export type IPSECTunnelDeleteParams = IPSECTunnelsAPI.IPSECTunnelDeleteParams;
  export type IPSECTunnelGetParams = IPSECTunnelsAPI.IPSECTunnelGetParams;
  export type IPSECTunnelPSKGenerateParams = IPSECTunnelsAPI.IPSECTunnelPSKGenerateParams;
  export import Routes = RoutesAPI.Routes;
  export type Scope = RoutesAPI.Scope;
  export type RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export type RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export type RouteListResponse = RoutesAPI.RouteListResponse;
  export type RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export type RouteEmptyResponse = RoutesAPI.RouteEmptyResponse;
  export type RouteGetResponse = RoutesAPI.RouteGetResponse;
  export type RouteCreateParams = RoutesAPI.RouteCreateParams;
  export type RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export type RouteListParams = RoutesAPI.RouteListParams;
  export type RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export type RouteEmptyParams = RoutesAPI.RouteEmptyParams;
  export type RouteGetParams = RoutesAPI.RouteGetParams;
  export import Sites = SitesAPI.Sites;
  export type Site = SitesAPI.Site;
  export type SiteLocation = SitesAPI.SiteLocation;
  export import SitesSinglePage = SitesAPI.SitesSinglePage;
  export type SiteCreateParams = SitesAPI.SiteCreateParams;
  export type SiteUpdateParams = SitesAPI.SiteUpdateParams;
  export type SiteListParams = SitesAPI.SiteListParams;
  export type SiteDeleteParams = SitesAPI.SiteDeleteParams;
  export type SiteEditParams = SitesAPI.SiteEditParams;
  export type SiteGetParams = SitesAPI.SiteGetParams;
  export import Connectors = ConnectorsAPI.Connectors;
  export type ConnectorUpdateResponse = ConnectorsAPI.ConnectorUpdateResponse;
  export type ConnectorListResponse = ConnectorsAPI.ConnectorListResponse;
  export type ConnectorEditResponse = ConnectorsAPI.ConnectorEditResponse;
  export type ConnectorGetResponse = ConnectorsAPI.ConnectorGetResponse;
  export import ConnectorListResponsesSinglePage = ConnectorsAPI.ConnectorListResponsesSinglePage;
  export type ConnectorUpdateParams = ConnectorsAPI.ConnectorUpdateParams;
  export type ConnectorListParams = ConnectorsAPI.ConnectorListParams;
  export type ConnectorEditParams = ConnectorsAPI.ConnectorEditParams;
  export type ConnectorGetParams = ConnectorsAPI.ConnectorGetParams;
  export import PCAPs = PCAPsAPI.PCAPs;
  export type PCAP = PCAPsAPI.PCAP;
  export type PCAPFilter = PCAPsAPI.PCAPFilter;
  export type PCAPCreateResponse = PCAPsAPI.PCAPCreateResponse;
  export type PCAPListResponse = PCAPsAPI.PCAPListResponse;
  export type PCAPGetResponse = PCAPsAPI.PCAPGetResponse;
  export import PCAPListResponsesSinglePage = PCAPsAPI.PCAPListResponsesSinglePage;
  export type PCAPCreateParams = PCAPsAPI.PCAPCreateParams;
  export type PCAPListParams = PCAPsAPI.PCAPListParams;
  export type PCAPGetParams = PCAPsAPI.PCAPGetParams;
}
