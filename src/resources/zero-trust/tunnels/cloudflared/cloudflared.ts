// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ConfigurationsAPI from './configurations';
import { Configurations } from './configurations';
import * as ConnectionsAPI from './connections';
import { Connections } from './connections';
import * as ConnectorsAPI from './connectors';
import { Connectors } from './connectors';
import * as ManagementAPI from './management';
import { Management } from './management';
import * as TokenAPI from './token';
import { Token } from './token';

export class Cloudflared extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  management: ManagementAPI.Management = new ManagementAPI.Management(this._client);
}

Cloudflared.Configurations = Configurations;
Cloudflared.Connections = Connections;
Cloudflared.Token = Token;
Cloudflared.Connectors = Connectors;
Cloudflared.Management = Management;

export declare namespace Cloudflared {
  export { Configurations as Configurations };

  export { Connections as Connections };

  export { Token as Token };

  export { Connectors as Connectors };

  export { Management as Management };
}
