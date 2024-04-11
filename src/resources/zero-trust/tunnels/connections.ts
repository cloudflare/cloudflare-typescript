// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectionsAPI from 'cloudflare/resources/zero-trust/tunnels/connections';
import * as TunnelsAPI from 'cloudflare/resources/zero-trust/tunnels/tunnels';

export class Connections extends APIResource {
  /**
   * Removes connections that are in a disconnected or pending reconnect state. We
   * recommend running this command after shutting down a tunnel.
   */
  delete(
    tunnelId: string,
    params: ConnectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/tunnels/${tunnelId}/connections`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ConnectionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

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
  conns?: Array<TunnelsAPI.Connection>;

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

export type ConnectionDeleteResponse = unknown | Array<unknown> | string;

export type ConnectionGetResponse = Array<Client>;

export interface ConnectionDeleteParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ConnectionGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export namespace Connections {
  export import Client = ConnectionsAPI.Client;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionGetResponse = ConnectionsAPI.ConnectionGetResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
  export import ConnectionGetParams = ConnectionsAPI.ConnectionGetParams;
}
