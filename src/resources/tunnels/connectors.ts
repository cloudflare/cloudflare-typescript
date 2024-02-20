// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectorsAPI from 'cloudflare/resources/tunnels/connectors';

export class Connectors extends APIResource {
  /**
   * Fetches connector and connection details for a Cloudflare Tunnel.
   */
  get(
    accountId: string,
    tunnelId: string,
    connectorId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/cfd_tunnel/${tunnelId}/connectors/${connectorId}`,
        options,
      ) as Core.APIPromise<{ result: ConnectorGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A client (typically cloudflared) that maintains connections to a Cloudflare data
 * center.
 */
export interface ConnectorGetResponse {
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
  conns?: Array<ConnectorGetResponse.Conn>;

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

export namespace ConnectorGetResponse {
  export interface Conn {
    /**
     * UUID of the Cloudflare Tunnel connection.
     */
    id?: string;

    /**
     * UUID of the cloudflared instance.
     */
    client_id?: unknown;

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

export namespace Connectors {
  export import ConnectorGetResponse = ConnectorsAPI.ConnectorGetResponse;
}
