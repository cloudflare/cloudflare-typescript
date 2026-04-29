// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as PortalsAPI from './portals';
import { Portals } from './portals';
import * as ServersAPI from './servers';
import { Servers } from './servers';

export class Mcp extends APIResource {
  portals: PortalsAPI.Portals = new PortalsAPI.Portals(this._client);
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);
}

Mcp.Portals = Portals;
Mcp.Servers = Servers;

export declare namespace Mcp {
  export { Portals as Portals };

  export { Servers as Servers };
}
