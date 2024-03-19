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
  export import GRETunnels = GRETunnelsAPI.GRETunnels;
  export import IPSECTunnels = IPSECTunnelsAPI.IPSECTunnels;
  export import Routes = RoutesAPI.Routes;
  export import Sites = SitesAPI.Sites;
}
