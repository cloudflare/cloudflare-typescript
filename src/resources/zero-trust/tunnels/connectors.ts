// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ConnectionsAPI from './connections';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Connectors extends APIResource {
  /**
   * Fetches connector and connection details for a Cloudflare Tunnel.
   */
  get(
    connectorID: string,
    params: ConnectorGetParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionsAPI.Client> {
    const { account_id, tunnel_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cfd_tunnel/${tunnel_id}/connectors/${connectorID}`,
        options,
      ) as APIPromise<{ result: ConnectionsAPI.Client }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConnectorGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;

  /**
   * UUID of the tunnel.
   */
  tunnel_id: string;
}

export declare namespace Connectors {
  export { type ConnectorGetParams as ConnectorGetParams };
}
