// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ConnectorsAPI from './connectors';
import * as ConnectionsAPI from './connections';

export class Connectors extends APIResource {
  /**
   * Fetches connector and connection details for a Cloudflare Tunnel.
   */
  get(
    tunnelId: string,
    connectorId: string,
    params: ConnectorGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionsAPI.Client> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/cfd_tunnel/${tunnelId}/connectors/${connectorId}`,
        options,
      ) as Core.APIPromise<{ result: ConnectionsAPI.Client }>
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
