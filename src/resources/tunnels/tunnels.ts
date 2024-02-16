// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TunnelsAPI from 'cloudflare/resources/tunnels/tunnels';
import * as ConnectionsAPI from 'cloudflare/resources/tunnels/connections';

export class Tunnels extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);

  /**
   * Deletes an Argo Tunnel from an account.
   */
  delete(
    accountId: string,
    tunnelId: string,
    body: TunnelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/tunnels/${tunnelId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TunnelDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a new Argo Tunnel in an account.
   */
  argoTunnelCreateAnArgoTunnel(
    accountId: string,
    body: TunnelArgoTunnelCreateAnArgoTunnelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelArgoTunnelCreateAnArgoTunnelResponse> {
    return (
      this._client.post(`/accounts/${accountId}/tunnels`, { body, ...options }) as Core.APIPromise<{
        result: TunnelArgoTunnelCreateAnArgoTunnelResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters all types of Tunnels in an account.
   */
  argoTunnelListArgoTunnels(
    accountId: string,
    query?: TunnelArgoTunnelListArgoTunnelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelArgoTunnelListArgoTunnelsResponse | null>;
  argoTunnelListArgoTunnels(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelArgoTunnelListArgoTunnelsResponse | null>;
  argoTunnelListArgoTunnels(
    accountId: string,
    query: TunnelArgoTunnelListArgoTunnelsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelArgoTunnelListArgoTunnelsResponse | null> {
    if (isRequestOptions(query)) {
      return this.argoTunnelListArgoTunnels(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/tunnels`, { query, ...options }) as Core.APIPromise<{
        result: TunnelArgoTunnelListArgoTunnelsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Argo Tunnel.
   */
  get(
    accountId: string,
    tunnelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/tunnels/${tunnelId}`, options) as Core.APIPromise<{
        result: TunnelGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TunnelDeleteResponse {
  /**
   * UUID of the tunnel.
   */
  id: string;

  /**
   * The tunnel connections between your origin and Cloudflare's edge.
   */
  connections: Array<TunnelDeleteResponse.Connection>;

  /**
   * Timestamp of when the tunnel was created.
   */
  created_at: string;

  /**
   * A user-friendly name for the tunnel.
   */
  name: string;

  /**
   * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
   * deleted.
   */
  deleted_at?: string | null;
}

export namespace TunnelDeleteResponse {
  export interface Connection {
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
     * UUID of the Cloudflare Tunnel connection.
     */
    uuid?: string;
  }
}

export interface TunnelArgoTunnelCreateAnArgoTunnelResponse {
  /**
   * UUID of the tunnel.
   */
  id: string;

  /**
   * The tunnel connections between your origin and Cloudflare's edge.
   */
  connections: Array<TunnelArgoTunnelCreateAnArgoTunnelResponse.Connection>;

  /**
   * Timestamp of when the tunnel was created.
   */
  created_at: string;

  /**
   * A user-friendly name for the tunnel.
   */
  name: string;

  /**
   * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
   * deleted.
   */
  deleted_at?: string | null;
}

export namespace TunnelArgoTunnelCreateAnArgoTunnelResponse {
  export interface Connection {
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
     * UUID of the Cloudflare Tunnel connection.
     */
    uuid?: string;
  }
}

export type TunnelArgoTunnelListArgoTunnelsResponse = Array<
  | TunnelArgoTunnelListArgoTunnelsResponse.TunnelCfdTunnel
  | TunnelArgoTunnelListArgoTunnelsResponse.TunnelWarpConnectorTunnel
>;

export namespace TunnelArgoTunnelListArgoTunnelsResponse {
  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  export interface TunnelCfdTunnel {
    /**
     * UUID of the tunnel.
     */
    id?: string;

    /**
     * Cloudflare account ID
     */
    account_tag?: string;

    /**
     * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
     */
    connections?: Array<TunnelCfdTunnel.Connection>;

    /**
     * Timestamp of when the tunnel established at least one connection to Cloudflare's
     * edge. If `null`, the tunnel is inactive.
     */
    conns_active_at?: string | null;

    /**
     * Timestamp of when the tunnel became inactive (no connections to Cloudflare's
     * edge). If `null`, the tunnel is active.
     */
    conns_inactive_at?: string | null;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at?: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * Metadata associated with the tunnel.
     */
    metadata?: unknown;

    /**
     * A user-friendly name for the tunnel.
     */
    name?: string;

    /**
     * If `true`, the tunnel can be configured remotely from the Zero Trust dashboard.
     * If `false`, the tunnel must be configured locally on the origin machine.
     */
    remote_config?: boolean;

    /**
     * The status of the tunnel. Valid values are `inactive` (tunnel has never been
     * run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy
     * state), `healthy` (tunnel is active and able to serve traffic), or `down`
     * (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
     */
    status?: string;

    /**
     * The type of tunnel.
     */
    tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
  }

  export namespace TunnelCfdTunnel {
    export interface Connection {
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

  /**
   * A Warp Connector Tunnel that connects your origin to Cloudflare's edge.
   */
  export interface TunnelWarpConnectorTunnel {
    /**
     * UUID of the tunnel.
     */
    id?: string;

    /**
     * Cloudflare account ID
     */
    account_tag?: string;

    /**
     * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
     */
    connections?: Array<TunnelWarpConnectorTunnel.Connection>;

    /**
     * Timestamp of when the tunnel established at least one connection to Cloudflare's
     * edge. If `null`, the tunnel is inactive.
     */
    conns_active_at?: string | null;

    /**
     * Timestamp of when the tunnel became inactive (no connections to Cloudflare's
     * edge). If `null`, the tunnel is active.
     */
    conns_inactive_at?: string | null;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at?: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * Metadata associated with the tunnel.
     */
    metadata?: unknown;

    /**
     * A user-friendly name for the tunnel.
     */
    name?: string;

    /**
     * The status of the tunnel. Valid values are `inactive` (tunnel has never been
     * run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy
     * state), `healthy` (tunnel is active and able to serve traffic), or `down`
     * (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
     */
    status?: string;

    /**
     * The type of tunnel.
     */
    tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
  }

  export namespace TunnelWarpConnectorTunnel {
    export interface Connection {
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
}

export interface TunnelGetResponse {
  /**
   * UUID of the tunnel.
   */
  id: string;

  /**
   * The tunnel connections between your origin and Cloudflare's edge.
   */
  connections: Array<TunnelGetResponse.Connection>;

  /**
   * Timestamp of when the tunnel was created.
   */
  created_at: string;

  /**
   * A user-friendly name for the tunnel.
   */
  name: string;

  /**
   * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
   * deleted.
   */
  deleted_at?: string | null;
}

export namespace TunnelGetResponse {
  export interface Connection {
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
     * UUID of the Cloudflare Tunnel connection.
     */
    uuid?: string;
  }
}

export type TunnelDeleteParams = unknown;

export interface TunnelArgoTunnelCreateAnArgoTunnelParams {
  /**
   * A user-friendly name for the tunnel.
   */
  name: string;

  /**
   * Sets the password required to run the tunnel. Must be at least 32 bytes and
   * encoded as a base64 string.
   */
  tunnel_secret: unknown;
}

export interface TunnelArgoTunnelListArgoTunnelsParams {
  exclude_prefix?: string;

  /**
   * If provided, include only tunnels that were created (and not deleted) before
   * this time.
   */
  existed_at?: string;

  include_prefix?: string;

  /**
   * If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If
   * empty, all tunnels will be included.
   */
  is_deleted?: boolean;

  /**
   * A user-friendly name for the tunnel.
   */
  name?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of results to display.
   */
  per_page?: number;

  /**
   * The types of tunnels to filter separated by a comma.
   */
  tun_types?: string;

  was_active_at?: string;

  was_inactive_at?: string;
}

export namespace Tunnels {
  export import TunnelDeleteResponse = TunnelsAPI.TunnelDeleteResponse;
  export import TunnelArgoTunnelCreateAnArgoTunnelResponse = TunnelsAPI.TunnelArgoTunnelCreateAnArgoTunnelResponse;
  export import TunnelArgoTunnelListArgoTunnelsResponse = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsResponse;
  export import TunnelGetResponse = TunnelsAPI.TunnelGetResponse;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelArgoTunnelCreateAnArgoTunnelParams = TunnelsAPI.TunnelArgoTunnelCreateAnArgoTunnelParams;
  export import TunnelArgoTunnelListArgoTunnelsParams = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
}
