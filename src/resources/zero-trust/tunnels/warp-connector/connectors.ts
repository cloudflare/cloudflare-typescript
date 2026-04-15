// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseConnectors extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'warpConnector', 'connectors'] =
    Object.freeze(['zeroTrust', 'tunnels', 'warpConnector', 'connectors'] as const);

  /**
   * Fetches connector and connection details for a WARP Connector Tunnel.
   *
   * @example
   * ```ts
   * const connector =
   *   await client.zeroTrust.tunnels.warpConnector.connectors.get(
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
  ): APIPromise<ConnectorGetResponse> {
    const { account_id = this._client.accountID, tunnel_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/warp_connector/${tunnel_id}/connectors/${connectorID}`,
        options,
      ) as APIPromise<{ result: ConnectorGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Connectors extends BaseConnectors {}

/**
 * A WARP Connector client that maintains a connection to a Cloudflare data center.
 */
export interface ConnectorGetResponse {
  /**
   * UUID of the Cloudflare Tunnel connector.
   */
  id?: string;

  /**
   * The cloudflared OS architecture used to establish this connection.
   */
  arch?: string;

  /**
   * The WARP Connector Tunnel connections between your origin and Cloudflare's edge.
   */
  conns?: Array<ConnectorGetResponse.Conn>;

  /**
   * Features enabled for the Cloudflare Tunnel.
   */
  features?: Array<string>;

  /**
   * The HA status of a WARP Connector client.
   */
  ha_status?: 'offline' | 'passive' | 'active';

  /**
   * Timestamp of when the tunnel connection was started.
   */
  run_at?: string;

  /**
   * The cloudflared version used to establish this connection.
   */
  version?: string;
}

export namespace ConnectorGetResponse {
  export interface Conn {
    /**
     * UUID of the Cloudflare Tunnel connection.
     */
    id?: string;

    /**
     * UUID of the Cloudflare Tunnel connector.
     */
    client_id?: string;

    /**
     * The cloudflared version used to establish this connection.
     */
    client_version?: string;

    /**
     * The Cloudflare data center used for this connection.
     */
    colo_name?: string;

    /**
     * Timestamp of when the connection was established.
     */
    opened_at?: string;

    /**
     * The public IP address of the host running WARP Connector.
     */
    origin_ip?: string;
  }
}

export interface ConnectorGetParams {
  /**
   * Cloudflare account ID
   */
  account_id?: string;

  /**
   * UUID of the tunnel.
   */
  tunnel_id: string;
}

export declare namespace Connectors {
  export { type ConnectorGetResponse as ConnectorGetResponse, type ConnectorGetParams as ConnectorGetParams };
}
