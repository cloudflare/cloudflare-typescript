// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ConfigurationsAPI from './configurations';
import { BaseConfigurations, Configurations } from './configurations';
import * as ConnectionsAPI from './connections';
import { BaseConnections, Connections } from './connections';
import * as ConnectorsAPI from './connectors';
import { BaseConnectors, Connectors } from './connectors';
import * as ManagementAPI from './management';
import { BaseManagement, Management } from './management';
import * as TokenAPI from './token';
import { BaseToken, Token } from './token';

export class BaseCloudflared extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'cloudflared'] = Object.freeze([
    'zeroTrust',
    'tunnels',
    'cloudflared',
  ] as const);
}
export class Cloudflared extends BaseCloudflared {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  management: ManagementAPI.Management = new ManagementAPI.Management(this._client);
}

Cloudflared.Configurations = Configurations;
Cloudflared.BaseConfigurations = BaseConfigurations;
Cloudflared.Connections = Connections;
Cloudflared.BaseConnections = BaseConnections;
Cloudflared.Token = Token;
Cloudflared.BaseToken = BaseToken;
Cloudflared.Connectors = Connectors;
Cloudflared.BaseConnectors = BaseConnectors;
Cloudflared.Management = Management;
Cloudflared.BaseManagement = BaseManagement;

export declare namespace Cloudflared {
  export { Configurations as Configurations, BaseConfigurations as BaseConfigurations };

  export { Connections as Connections, BaseConnections as BaseConnections };

  export { Token as Token, BaseToken as BaseToken };

  export { Connectors as Connectors, BaseConnectors as BaseConnectors };

  export { Management as Management, BaseManagement as BaseManagement };
}
