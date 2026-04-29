// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PortalsAPI from './portals';
import { BasePortals, Portals } from './portals';
import * as ServersAPI from './servers';
import { BaseServers, Servers } from './servers';

export class BaseMcp extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'aiControls', 'mcp'] = Object.freeze([
    'zeroTrust',
    'access',
    'aiControls',
    'mcp',
  ] as const);
}
export class Mcp extends BaseMcp {
  portals: PortalsAPI.Portals = new PortalsAPI.Portals(this._client);
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);
}

Mcp.Portals = Portals;
Mcp.BasePortals = BasePortals;
Mcp.Servers = Servers;
Mcp.BaseServers = BaseServers;

export declare namespace Mcp {
  export { Portals as Portals, BasePortals as BasePortals };

  export { Servers as Servers, BaseServers as BaseServers };
}
