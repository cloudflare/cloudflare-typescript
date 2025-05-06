// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ConnectionsAPI from './connections';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Connectors extends APIResource {
  /**
   * Fetches connector and connection details for a Cloudflare Tunnel.
   *
   * @example
   * ```ts
   * const client =
   *   await client.zeroTrust.tunnels.cloudflared.connectors.get(
   *     '1bedc50d-42b3-473c-b108-ff3d10c0d925',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       tunnel_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     },
   *   );
   * ```
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
