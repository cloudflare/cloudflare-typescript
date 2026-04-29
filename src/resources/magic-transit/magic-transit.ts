// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import { Apps, BaseApps } from './apps';
import * as CfInterconnectsAPI from './cf-interconnects';
import { BaseCfInterconnects, CfInterconnects } from './cf-interconnects';
import * as GRETunnelsAPI from './gre-tunnels';
import { BaseGRETunnels, GRETunnels } from './gre-tunnels';
import * as IPSECTunnelsAPI from './ipsec-tunnels';
import { BaseIPSECTunnels, IPSECTunnels } from './ipsec-tunnels';
import * as RoutesAPI from './routes';
import { BaseRoutes, Routes } from './routes';
import * as ConnectorsAPI from './connectors/connectors';
import { BaseConnectors, Connectors } from './connectors/connectors';
import * as PCAPsAPI from './pcaps/pcaps';
import { BasePCAPs, PCAPs } from './pcaps/pcaps';
import * as SitesAPI from './sites/sites';
import { BaseSites, Sites } from './sites/sites';

export class BaseMagicTransit extends APIResource {
  static override readonly _key: readonly ['magicTransit'] = Object.freeze(['magicTransit'] as const);
}
export class MagicTransit extends BaseMagicTransit {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  cfInterconnects: CfInterconnectsAPI.CfInterconnects = new CfInterconnectsAPI.CfInterconnects(this._client);
  greTunnels: GRETunnelsAPI.GRETunnels = new GRETunnelsAPI.GRETunnels(this._client);
  ipsecTunnels: IPSECTunnelsAPI.IPSECTunnels = new IPSECTunnelsAPI.IPSECTunnels(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  sites: SitesAPI.Sites = new SitesAPI.Sites(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  pcaps: PCAPsAPI.PCAPs = new PCAPsAPI.PCAPs(this._client);
}

MagicTransit.Apps = Apps;
MagicTransit.BaseApps = BaseApps;
MagicTransit.CfInterconnects = CfInterconnects;
MagicTransit.BaseCfInterconnects = BaseCfInterconnects;
MagicTransit.GRETunnels = GRETunnels;
MagicTransit.BaseGRETunnels = BaseGRETunnels;
MagicTransit.IPSECTunnels = IPSECTunnels;
MagicTransit.BaseIPSECTunnels = BaseIPSECTunnels;
MagicTransit.Routes = Routes;
MagicTransit.BaseRoutes = BaseRoutes;
MagicTransit.Sites = Sites;
MagicTransit.BaseSites = BaseSites;
MagicTransit.Connectors = Connectors;
MagicTransit.BaseConnectors = BaseConnectors;
MagicTransit.PCAPs = PCAPs;
MagicTransit.BasePCAPs = BasePCAPs;

export declare namespace MagicTransit {
  export { Apps as Apps, BaseApps as BaseApps };

  export { CfInterconnects as CfInterconnects, BaseCfInterconnects as BaseCfInterconnects };

  export { GRETunnels as GRETunnels, BaseGRETunnels as BaseGRETunnels };

  export { IPSECTunnels as IPSECTunnels, BaseIPSECTunnels as BaseIPSECTunnels };

  export { Routes as Routes, BaseRoutes as BaseRoutes };

  export { Sites as Sites, BaseSites as BaseSites };

  export { Connectors as Connectors, BaseConnectors as BaseConnectors };

  export { PCAPs as PCAPs, BasePCAPs as BasePCAPs };
}
