// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AppsAPI from './apps';
import { Apps } from './apps';
import * as CfInterconnectsAPI from './cf-interconnects';
import { CfInterconnects } from './cf-interconnects';
import * as GRETunnelsAPI from './gre-tunnels';
import { GRETunnels } from './gre-tunnels';
import * as IPSECTunnelsAPI from './ipsec-tunnels';
import { IPSECTunnels } from './ipsec-tunnels';
import * as RoutesAPI from './routes';
import { Routes } from './routes';
import * as ConnectorsAPI from './connectors/connectors';
import { Connectors } from './connectors/connectors';
import * as PCAPsAPI from './pcaps/pcaps';
import { PCAPs } from './pcaps/pcaps';
import * as SitesAPI from './sites/sites';
import { Sites } from './sites/sites';

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

MagicTransit.Apps = Apps;
MagicTransit.CfInterconnects = CfInterconnects;
MagicTransit.GRETunnels = GRETunnels;
MagicTransit.IPSECTunnels = IPSECTunnels;
MagicTransit.Routes = Routes;
MagicTransit.Sites = Sites;
MagicTransit.Connectors = Connectors;
MagicTransit.PCAPs = PCAPs;

export declare namespace MagicTransit {
  export { Apps as Apps };

  export { CfInterconnects as CfInterconnects };

  export { GRETunnels as GRETunnels };

  export { IPSECTunnels as IPSECTunnels };

  export { Routes as Routes };

  export { Sites as Sites };

  export { Connectors as Connectors };

  export { PCAPs as PCAPs };
}
