// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ConnectionsAPI from './connections';

export class Connections extends APIResource {
  /**
   * Fetches connection details for a Cloudflare Tunnel.
   */
  get(
    tunnelId: string,
    params: ConnectionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/cfd_tunnel/${tunnelId}/connections`,
        options,
      ) as Core.APIPromise<{ result: ConnectionGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A client (typically cloudflared) that maintains connections to a Cloudflare data
 * center.
 */
export interface Client {
  /**
   * UUID of the Cloudflare Tunnel connection.
   */
  id?: string;

  /**
   * The cloudflared OS architecture used to establish this connection.
   */
  arch?: string;

  /**
   * The version of the remote tunnel configuration. Used internally to sync
   * cloudflared with the Zero Trust dashboard.
   */
  config_version?: number;

  /**
   * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
   */
  conns?: Array<Client.Conn>;

  /**
   * Features enabled for the Cloudflare Tunnel.
   */
  features?: Array<string>;

  /**
   * Timestamp of when the tunnel connection was started.
   */
  run_at?: string;

  /**
   * The cloudflared version used to establish this connection.
   */
  version?: string;
}

export namespace Client {
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
     * Cloudflare continues to track connections for several minutes after they
     * disconnect. This is an optimization to improve latency and reliability of
     * reconnecting. If `true`, the connection has disconnected but is still being
     * tracked. If `false`, the connection is actively serving traffic.
     */
    is_pending_reconnect?: boolean;

    /**
     * Timestamp of when the connection was established.
     */
    opened_at?: string;

    /**
     * The public IP address of the host running cloudflared.
     */
    origin_ip?: string;

    /**
     * UUID of the Cloudflare Tunnel connection.
     */
    uuid?: string;
  }
}

export type ConnectionGetResponse = Array<Client>;

export interface ConnectionGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export namespace Connections {
  export import Client = ConnectionsAPI.Client;
  export import ConnectionGetResponse = ConnectionsAPI.ConnectionGetResponse;
  export import ConnectionGetParams = ConnectionsAPI.ConnectionGetParams;
}
