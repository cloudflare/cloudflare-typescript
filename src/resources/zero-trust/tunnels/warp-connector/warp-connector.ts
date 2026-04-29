// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ConnectionsAPI from './connections';
import { Connections } from './connections';
import * as ConnectorsAPI from './connectors';
import { Connectors } from './connectors';
import * as FailoverAPI from './failover';
import { Failover } from './failover';
import * as TokenAPI from './token';
import { Token } from './token';

export class WARPConnector extends APIResource {
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  failover: FailoverAPI.Failover = new FailoverAPI.Failover(this._client);
}

WARPConnector.Token = Token;
WARPConnector.Connections = Connections;
WARPConnector.Connectors = Connectors;
WARPConnector.Failover = Failover;

export declare namespace WARPConnector {
  export { Token as Token };

  export { Connections as Connections };

  export { Connectors as Connectors };

  export { Failover as Failover };
}
