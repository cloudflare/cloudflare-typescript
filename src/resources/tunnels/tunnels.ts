// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TunnelsAPI from 'cloudflare/resources/tunnels/tunnels';
import * as ConfigurationsAPI from 'cloudflare/resources/tunnels/configurations';
import * as ConnectionsAPI from 'cloudflare/resources/tunnels/connections';
import * as ConnectorsAPI from 'cloudflare/resources/tunnels/connectors';
import * as ManagementAPI from 'cloudflare/resources/tunnels/management';
import * as TokensAPI from 'cloudflare/resources/tunnels/tokens';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Tunnels extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  management: ManagementAPI.Management = new ManagementAPI.Management(this._client);

  /**
   * Creates a new Argo Tunnel in an account.
   */
  create(
    accountId: string,
    body: TunnelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/tunnels`, { body, ...options }) as Core.APIPromise<{
        result: TunnelCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters all types of Tunnels in an account.
   */
  list(
    accountId: string,
    query?: TunnelListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TunnelListResponsesV4PagePaginationArray, TunnelListResponse>;
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TunnelListResponsesV4PagePaginationArray, TunnelListResponse>;
  list(
    accountId: string,
    query: TunnelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TunnelListResponsesV4PagePaginationArray, TunnelListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountId}/tunnels`,
      TunnelListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

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
   * Updates an existing Cloudflare Tunnel.
   */
  edit(
    accountId: string,
    tunnelId: string,
    body: TunnelEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelEditResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/cfd_tunnel/${tunnelId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TunnelEditResponse }>
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

export class TunnelListResponsesV4PagePaginationArray extends V4PagePaginationArray<TunnelListResponse> {}

export interface TunnelCreateResponse {
  /**
   * UUID of the tunnel.
   */
  id: string;

  /**
   * The tunnel connections between your origin and Cloudflare's edge.
   */
  connections: Array<TunnelCreateResponse.Connection>;

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

export namespace TunnelCreateResponse {
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

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type TunnelListResponse =
  | TunnelListResponse.TunnelCfdTunnel
  | TunnelListResponse.TunnelWarpConnectorTunnel;

export namespace TunnelListResponse {
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

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type TunnelEditResponse =
  | TunnelEditResponse.TunnelCfdTunnel
  | TunnelEditResponse.TunnelWarpConnectorTunnel;

export namespace TunnelEditResponse {
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

export interface TunnelCreateParams {
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

export interface TunnelListParams extends V4PagePaginationArrayParams {
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
   * The types of tunnels to filter separated by a comma.
   */
  tun_types?: string;

  was_active_at?: string;

  was_inactive_at?: string;
}

export type TunnelDeleteParams = unknown;

export interface TunnelEditParams {
  /**
   * A user-friendly name for the tunnel.
   */
  name?: string;

  /**
   * Sets the password required to run a locally-managed tunnel. Must be at least 32
   * bytes and encoded as a base64 string.
   */
  tunnel_secret?: string;
}

export namespace Tunnels {
  export import TunnelCreateResponse = TunnelsAPI.TunnelCreateResponse;
  export import TunnelListResponse = TunnelsAPI.TunnelListResponse;
  export import TunnelDeleteResponse = TunnelsAPI.TunnelDeleteResponse;
  export import TunnelEditResponse = TunnelsAPI.TunnelEditResponse;
  export import TunnelGetResponse = TunnelsAPI.TunnelGetResponse;
  export import TunnelListResponsesV4PagePaginationArray = TunnelsAPI.TunnelListResponsesV4PagePaginationArray;
  export import TunnelCreateParams = TunnelsAPI.TunnelCreateParams;
  export import TunnelListParams = TunnelsAPI.TunnelListParams;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelEditParams = TunnelsAPI.TunnelEditParams;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationListResponse = ConfigurationsAPI.ConfigurationListResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionListResponse = ConnectionsAPI.ConnectionListResponse;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
  export import Tokens = TokensAPI.Tokens;
  export import TokenGetResponse = TokensAPI.TokenGetResponse;
  export import Connectors = ConnectorsAPI.Connectors;
  export import ConnectorGetResponse = ConnectorsAPI.ConnectorGetResponse;
  export import Management = ManagementAPI.Management;
  export import ManagementCreateResponse = ManagementAPI.ManagementCreateResponse;
  export import ManagementCreateParams = ManagementAPI.ManagementCreateParams;
}
