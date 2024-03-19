// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WARPConnectorAPI from 'cloudflare/resources/warp-connector';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class WARPConnector extends APIResource {
  /**
   * Creates a new Warp Connector Tunnel in an account.
   */
  create(
    params: WARPConnectorCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPConnectorCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/warp_connector`, { body, ...options }) as Core.APIPromise<{
        result: WARPConnectorCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters Warp Connector Tunnels in an account.
   */
  list(
    params: WARPConnectorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WARPConnectorListResponsesV4PagePaginationArray, WARPConnectorListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/warp_connector`,
      WARPConnectorListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a Warp Connector Tunnel from an account.
   */
  delete(
    tunnelId: string,
    params: WARPConnectorDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPConnectorDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/warp_connector/${tunnelId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: WARPConnectorDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Warp Connector Tunnel.
   */
  edit(
    tunnelId: string,
    params: WARPConnectorEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPConnectorEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/warp_connector/${tunnelId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WARPConnectorEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Warp Connector Tunnel.
   */
  get(
    tunnelId: string,
    params: WARPConnectorGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPConnectorGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/warp_connector/${tunnelId}`, options) as Core.APIPromise<{
        result: WARPConnectorGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the token used to associate warp device with a specific Warp Connector
   * tunnel.
   */
  token(
    tunnelId: string,
    params: WARPConnectorTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPConnectorTokenResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/warp_connector/${tunnelId}/token`,
        options,
      ) as Core.APIPromise<{ result: WARPConnectorTokenResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WARPConnectorListResponsesV4PagePaginationArray extends V4PagePaginationArray<WARPConnectorListResponse> {}

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type WARPConnectorCreateResponse =
  | WARPConnectorCreateResponse.TunnelCfdTunnel
  | WARPConnectorCreateResponse.TunnelWARPConnectorTunnel;

export namespace WARPConnectorCreateResponse {
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
  export interface TunnelWARPConnectorTunnel {
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
    connections?: Array<TunnelWARPConnectorTunnel.Connection>;

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

  export namespace TunnelWARPConnectorTunnel {
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

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type WARPConnectorListResponse =
  | WARPConnectorListResponse.TunnelCfdTunnel
  | WARPConnectorListResponse.TunnelWARPConnectorTunnel;

export namespace WARPConnectorListResponse {
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
  export interface TunnelWARPConnectorTunnel {
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
    connections?: Array<TunnelWARPConnectorTunnel.Connection>;

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

  export namespace TunnelWARPConnectorTunnel {
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

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type WARPConnectorDeleteResponse =
  | WARPConnectorDeleteResponse.TunnelCfdTunnel
  | WARPConnectorDeleteResponse.TunnelWARPConnectorTunnel;

export namespace WARPConnectorDeleteResponse {
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
  export interface TunnelWARPConnectorTunnel {
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
    connections?: Array<TunnelWARPConnectorTunnel.Connection>;

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

  export namespace TunnelWARPConnectorTunnel {
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

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type WARPConnectorEditResponse =
  | WARPConnectorEditResponse.TunnelCfdTunnel
  | WARPConnectorEditResponse.TunnelWARPConnectorTunnel;

export namespace WARPConnectorEditResponse {
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
  export interface TunnelWARPConnectorTunnel {
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
    connections?: Array<TunnelWARPConnectorTunnel.Connection>;

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

  export namespace TunnelWARPConnectorTunnel {
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

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type WARPConnectorGetResponse =
  | WARPConnectorGetResponse.TunnelCfdTunnel
  | WARPConnectorGetResponse.TunnelWARPConnectorTunnel;

export namespace WARPConnectorGetResponse {
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
  export interface TunnelWARPConnectorTunnel {
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
    connections?: Array<TunnelWARPConnectorTunnel.Connection>;

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

  export namespace TunnelWARPConnectorTunnel {
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

export type WARPConnectorTokenResponse = unknown | Array<unknown> | string;

export interface WARPConnectorCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the tunnel.
   */
  name: string;
}

export interface WARPConnectorListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param:
   */
  exclude_prefix?: string;

  /**
   * Query param: If provided, include only tunnels that were created (and not
   * deleted) before this time.
   */
  existed_at?: string;

  /**
   * Query param:
   */
  include_prefix?: string;

  /**
   * Query param: If `true`, only include deleted tunnels. If `false`, exclude
   * deleted tunnels. If empty, all tunnels will be included.
   */
  is_deleted?: boolean;

  /**
   * Query param: A user-friendly name for the tunnel.
   */
  name?: string;

  /**
   * Query param:
   */
  was_active_at?: string;

  /**
   * Query param:
   */
  was_inactive_at?: string;
}

export interface WARPConnectorDeleteParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface WARPConnectorEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the tunnel.
   */
  name?: string;

  /**
   * Body param: Sets the password required to run a locally-managed tunnel. Must be
   * at least 32 bytes and encoded as a base64 string.
   */
  tunnel_secret?: string;
}

export interface WARPConnectorGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface WARPConnectorTokenParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export namespace WARPConnector {
  export import WARPConnectorCreateResponse = WARPConnectorAPI.WARPConnectorCreateResponse;
  export import WARPConnectorListResponse = WARPConnectorAPI.WARPConnectorListResponse;
  export import WARPConnectorDeleteResponse = WARPConnectorAPI.WARPConnectorDeleteResponse;
  export import WARPConnectorEditResponse = WARPConnectorAPI.WARPConnectorEditResponse;
  export import WARPConnectorGetResponse = WARPConnectorAPI.WARPConnectorGetResponse;
  export import WARPConnectorTokenResponse = WARPConnectorAPI.WARPConnectorTokenResponse;
  export import WARPConnectorListResponsesV4PagePaginationArray = WARPConnectorAPI.WARPConnectorListResponsesV4PagePaginationArray;
  export import WARPConnectorCreateParams = WARPConnectorAPI.WARPConnectorCreateParams;
  export import WARPConnectorListParams = WARPConnectorAPI.WARPConnectorListParams;
  export import WARPConnectorDeleteParams = WARPConnectorAPI.WARPConnectorDeleteParams;
  export import WARPConnectorEditParams = WARPConnectorAPI.WARPConnectorEditParams;
  export import WARPConnectorGetParams = WARPConnectorAPI.WARPConnectorGetParams;
  export import WARPConnectorTokenParams = WARPConnectorAPI.WARPConnectorTokenParams;
}
