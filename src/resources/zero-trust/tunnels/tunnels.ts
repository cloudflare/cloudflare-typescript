// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TunnelsAPI from 'cloudflare/resources/zero-trust/tunnels/tunnels';
import * as WARPConnectorAPI from 'cloudflare/resources/warp-connector';
import { WARPConnectorsV4PagePaginationArray } from 'cloudflare/resources/warp-connector';
import * as ConfigurationsAPI from 'cloudflare/resources/zero-trust/tunnels/configurations';
import * as ConnectionsAPI from 'cloudflare/resources/zero-trust/tunnels/connections';
import * as ConnectorsAPI from 'cloudflare/resources/zero-trust/tunnels/connectors';
import * as ManagementAPI from 'cloudflare/resources/zero-trust/tunnels/management';
import * as TokenAPI from 'cloudflare/resources/zero-trust/tunnels/token';
import { type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Tunnels extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  management: ManagementAPI.Management = new ManagementAPI.Management(this._client);

  /**
   * Creates a new Argo Tunnel in an account.
   */
  create(params: TunnelCreateParams, options?: Core.RequestOptions): Core.APIPromise<Tunnel> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/tunnels`, { body, ...options }) as Core.APIPromise<{
        result: Tunnel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters all types of Tunnels in an account.
   */
  list(
    params: TunnelListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WARPConnectorsV4PagePaginationArray, WARPConnectorAPI.WARPConnector> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/tunnels`, WARPConnectorsV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an Argo Tunnel from an account.
   */
  delete(
    tunnelId: string,
    params: TunnelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Tunnel> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/tunnels/${tunnelId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Tunnel }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Cloudflare Tunnel.
   */
  edit(
    tunnelId: string,
    params: TunnelEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WARPConnectorAPI.WARPConnector> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/cfd_tunnel/${tunnelId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WARPConnectorAPI.WARPConnector }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Argo Tunnel.
   */
  get(tunnelId: string, params: TunnelGetParams, options?: Core.RequestOptions): Core.APIPromise<Tunnel> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/tunnels/${tunnelId}`, options) as Core.APIPromise<{
        result: Tunnel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Tunnel {
  /**
   * UUID of the tunnel.
   */
  id: string;

  /**
   * The tunnel connections between your origin and Cloudflare's edge.
   */
  connections: Array<Tunnel.Connection>;

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

export namespace Tunnel {
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

export interface UnnamedSchemaRefA9c0e0a8cc5fd0e244f41ea806cd954a {
  /**
   * UUID of the tunnel.
   */
  id: string;

  /**
   * The tunnel connections between your origin and Cloudflare's edge.
   */
  connections: Array<UnnamedSchemaRefA9c0e0a8cc5fd0e244f41ea806cd954a.Connection>;

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

export namespace UnnamedSchemaRefA9c0e0a8cc5fd0e244f41ea806cd954a {
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
 * A Warp Connector Tunnel that connects your origin to Cloudflare's edge.
 */
export interface WARPConnectorTunnel {
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
  connections?: Array<WARPConnectorTunnel.Connection>;

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

export namespace WARPConnectorTunnel {
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

export interface TunnelCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for the tunnel.
   */
  name: string;

  /**
   * Body param: Sets the password required to run the tunnel. Must be at least 32
   * bytes and encoded as a base64 string.
   */
  tunnel_secret: unknown;
}

export interface TunnelListParams extends V4PagePaginationArrayParams {
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
   * Query param: The types of tunnels to filter separated by a comma.
   */
  tun_types?: string;

  /**
   * Query param: UUID of the tunnel.
   */
  uuid?: string;

  /**
   * Query param:
   */
  was_active_at?: string;

  /**
   * Query param:
   */
  was_inactive_at?: string;
}

export interface TunnelDeleteParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface TunnelEditParams {
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

export interface TunnelGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export namespace Tunnels {
  export import Tunnel = TunnelsAPI.Tunnel;
  export import UnnamedSchemaRefA9c0e0a8cc5fd0e244f41ea806cd954a = TunnelsAPI.UnnamedSchemaRefA9c0e0a8cc5fd0e244f41ea806cd954a;
  export import WARPConnectorTunnel = TunnelsAPI.WARPConnectorTunnel;
  export import TunnelCreateParams = TunnelsAPI.TunnelCreateParams;
  export import TunnelListParams = TunnelsAPI.TunnelListParams;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelEditParams = TunnelsAPI.TunnelEditParams;
  export import TunnelGetParams = TunnelsAPI.TunnelGetParams;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationGetResponse = ConfigurationsAPI.ConfigurationGetResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
  export import Connections = ConnectionsAPI.Connections;
  export import Client = ConnectionsAPI.Client;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionGetResponse = ConnectionsAPI.ConnectionGetResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
  export import ConnectionGetParams = ConnectionsAPI.ConnectionGetParams;
  export import Token = TokenAPI.Token;
  export import TokenGetResponse = TokenAPI.TokenGetResponse;
  export import TokenGetParams = TokenAPI.TokenGetParams;
  export import Connectors = ConnectorsAPI.Connectors;
  export import ConnectorGetParams = ConnectorsAPI.ConnectorGetParams;
  export import Management = ManagementAPI.Management;
  export import ManagementCreateResponse = ManagementAPI.ManagementCreateResponse;
  export import ManagementCreateParams = ManagementAPI.ManagementCreateParams;
}

export { WARPConnectorsV4PagePaginationArray };
