// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ConnectionsAPI from './connections';
import { BaseConnections, Connections } from './connections';
import * as ConnectorsAPI from './connectors';
import { BaseConnectors, Connectors } from './connectors';
import * as FailoverAPI from './failover';
import { BaseFailover, Failover } from './failover';
import * as TokenAPI from './token';
import { BaseToken, Token } from './token';

export class BaseWARPConnector extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'warpConnector'] = Object.freeze([
    'zeroTrust',
    'tunnels',
    'warpConnector',
  ] as const);
}
export class WARPConnector extends BaseWARPConnector {
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  failover: FailoverAPI.Failover = new FailoverAPI.Failover(this._client);
}

WARPConnector.Token = Token;
WARPConnector.BaseToken = BaseToken;
WARPConnector.Connections = Connections;
WARPConnector.BaseConnections = BaseConnections;
WARPConnector.Connectors = Connectors;
WARPConnector.BaseConnectors = BaseConnectors;
WARPConnector.Failover = Failover;
WARPConnector.BaseFailover = BaseFailover;

export declare namespace WARPConnector {
  export { Token as Token, BaseToken as BaseToken };

  export { Connections as Connections, BaseConnections as BaseConnections };

  export { Connectors as Connectors, BaseConnectors as BaseConnectors };

  export { Failover as Failover, BaseFailover as BaseFailover };
}
