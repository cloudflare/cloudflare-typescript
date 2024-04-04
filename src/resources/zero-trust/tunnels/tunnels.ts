// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TunnelsAPI from 'cloudflare/resources/zero-trust/tunnels/tunnels';
import * as Shared from 'cloudflare/resources/shared';
import { UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray } from 'cloudflare/resources/shared';
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
  create(params: TunnelCreateParams, options?: Core.RequestOptions): Core.APIPromise<TunnelArgoTunnel> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/tunnels`, { body, ...options }) as Core.APIPromise<{
        result: TunnelArgoTunnel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters all types of Tunnels in an account.
   */
  list(
    params: TunnelListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray,
    Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8
  > {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/tunnels`,
      UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an Argo Tunnel from an account.
   */
  delete(
    tunnelId: string,
    params: TunnelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelArgoTunnel> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/tunnels/${tunnelId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: TunnelArgoTunnel }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Cloudflare Tunnel.
   */
  edit(
    tunnelId: string,
    params: TunnelEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/cfd_tunnel/${tunnelId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Argo Tunnel.
   */
  get(
    tunnelId: string,
    params: TunnelGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelArgoTunnel> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/tunnels/${tunnelId}`, options) as Core.APIPromise<{
        result: TunnelArgoTunnel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TunnelArgoTunnel {
  /**
   * UUID of the tunnel.
   */
  id: string;

  /**
   * The tunnel connections between your origin and Cloudflare's edge.
   */
  connections: Array<TunnelArgoTunnel.Connection>;

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

export namespace TunnelArgoTunnel {
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
  export import TunnelArgoTunnel = TunnelsAPI.TunnelArgoTunnel;
  export import UnnamedSchemaRefA9c0e0a8cc5fd0e244f41ea806cd954a = TunnelsAPI.UnnamedSchemaRefA9c0e0a8cc5fd0e244f41ea806cd954a;
  export import TunnelCreateParams = TunnelsAPI.TunnelCreateParams;
  export import TunnelListParams = TunnelsAPI.TunnelListParams;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelEditParams = TunnelsAPI.TunnelEditParams;
  export import TunnelGetParams = TunnelsAPI.TunnelGetParams;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
  export import Connections = ConnectionsAPI.Connections;
  export import TunnelTunnelClient = ConnectionsAPI.TunnelTunnelClient;
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

export { UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray };
