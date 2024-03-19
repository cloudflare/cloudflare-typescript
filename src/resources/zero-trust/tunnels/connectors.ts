// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectorsAPI from 'cloudflare/resources/zero-trust/tunnels/connectors';
import * as ConnectionsAPI from 'cloudflare/resources/zero-trust/tunnels/connections';

export class Connectors extends APIResource {
  /**
   * Fetches connector and connection details for a Cloudflare Tunnel.
   */
  get(
    tunnelId: string,
    connectorId: string,
    params: ConnectorGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionsAPI.TunnelTunnelClient> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/cfd_tunnel/${tunnelId}/connectors/${connectorId}`,
        options,
      ) as Core.APIPromise<{ result: ConnectionsAPI.TunnelTunnelClient }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConnectorGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export namespace Connectors {
  export import ConnectorGetParams = ConnectorsAPI.ConnectorGetParams;
}
