// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseConnections extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'warpConnector', 'connections'] =
    Object.freeze(['zeroTrust', 'tunnels', 'warpConnector', 'connections'] as const);

  /**
   * Fetches connection details for a WARP Connector Tunnel.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const connectionGetResponse of client.zeroTrust.tunnels.warpConnector.connections.get(
   *   'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    tunnelID: string,
    params: ConnectionGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConnectionGetResponsesSinglePage, ConnectionGetResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/warp_connector/${tunnelID}/connections`,
      SinglePage<ConnectionGetResponse>,
      options,
    );
  }
}
export class Connections extends BaseConnections {}

export type ConnectionGetResponsesSinglePage = SinglePage<ConnectionGetResponse>;

/**
 * A WARP Connector client that maintains a connection to a Cloudflare data center.
 */
export interface ConnectionGetResponse {
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
  conns?: Array<ConnectionGetResponse.Conn>;

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

export namespace ConnectionGetResponse {
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

export interface ConnectionGetParams {
  /**
   * Cloudflare account ID
   */
  account_id?: string;
}

export declare namespace Connections {
  export {
    type ConnectionGetResponse as ConnectionGetResponse,
    type ConnectionGetResponsesSinglePage as ConnectionGetResponsesSinglePage,
    type ConnectionGetParams as ConnectionGetParams,
  };
}
