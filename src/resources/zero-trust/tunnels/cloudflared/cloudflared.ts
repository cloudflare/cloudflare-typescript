// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';
import { CloudflareTunnelsV4PagePaginationArray } from '../../../shared';
import * as ConfigurationsAPI from './configurations';
import {
  ConfigurationGetParams,
  ConfigurationGetResponse,
  ConfigurationUpdateParams,
  ConfigurationUpdateResponse,
  Configurations,
} from './configurations';
import * as ConnectionsAPI from './connections';
import {
  Client,
  ClientsSinglePage,
  ConnectionDeleteParams,
  ConnectionDeleteResponse,
  ConnectionGetParams,
  Connections,
} from './connections';
import * as ConnectorsAPI from './connectors';
import { ConnectorGetParams, Connectors } from './connectors';
import * as ManagementAPI from './management';
import { Management, ManagementCreateParams, ManagementCreateResponse } from './management';
import * as TokenAPI from './token';
import { Token, TokenGetParams, TokenGetResponse } from './token';
import { type V4PagePaginationArrayParams } from '../../../../pagination';

export class Cloudflared extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  management: ManagementAPI.Management = new ManagementAPI.Management(this._client);

  /**
   * Creates a new Cloudflare Tunnel in an account.
   *
   * @example
   * ```ts
   * const cloudflareTunnel =
   *   await client.zeroTrust.tunnels.cloudflared.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     name: 'blog',
   *   });
   * ```
   */
  create(
    params: CloudflaredCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CloudflareTunnel> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/cfd_tunnel`, { body, ...options }) as Core.APIPromise<{
        result: Shared.CloudflareTunnel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters Cloudflare Tunnels in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cloudflareTunnel of client.zeroTrust.tunnels.cloudflared.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CloudflaredListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CloudflareTunnelsV4PagePaginationArray, Shared.CloudflareTunnel> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/cfd_tunnel`,
      CloudflareTunnelsV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a Cloudflare Tunnel from an account.
   *
   * @example
   * ```ts
   * const cloudflareTunnel =
   *   await client.zeroTrust.tunnels.cloudflared.delete(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  delete(
    tunnelId: string,
    params: CloudflaredDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CloudflareTunnel> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/cfd_tunnel/${tunnelId}`, options) as Core.APIPromise<{
        result: Shared.CloudflareTunnel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Cloudflare Tunnel.
   *
   * @example
   * ```ts
   * const cloudflareTunnel =
   *   await client.zeroTrust.tunnels.cloudflared.edit(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  edit(
    tunnelId: string,
    params: CloudflaredEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CloudflareTunnel> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/cfd_tunnel/${tunnelId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.CloudflareTunnel }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Cloudflare Tunnel.
   *
   * @example
   * ```ts
   * const cloudflareTunnel =
   *   await client.zeroTrust.tunnels.cloudflared.get(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    tunnelId: string,
    params: CloudflaredGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CloudflareTunnel> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/cfd_tunnel/${tunnelId}`, options) as Core.APIPromise<{
        result: Shared.CloudflareTunnel;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CloudflaredCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for a tunnel.
   */
  name: string;

  /**
   * Body param: Indicates if this is a locally or remotely configured tunnel. If
   * `local`, manage the tunnel using a YAML file on the origin machine. If
   * `cloudflare`, manage the tunnel on the Zero Trust dashboard.
   */
  config_src?: 'local' | 'cloudflare';

  /**
   * Body param: Sets the password required to run a locally-managed tunnel. Must be
   * at least 32 bytes and encoded as a base64 string.
   */
  tunnel_secret?: string;
}

export interface CloudflaredListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param:
   */
  exclude_prefix?: string;

  /**
   * Query param: If provided, include only resources that were created (and not
   * deleted) before this time. URL encoded.
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
   * Query param: A user-friendly name for a tunnel.
   */
  name?: string;

  /**
   * Query param: The status of the tunnel. Valid values are `inactive` (tunnel has
   * never been run), `degraded` (tunnel is active and able to serve traffic but in
   * an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or
   * `down` (tunnel can not serve traffic as it has no connections to the Cloudflare
   * Edge).
   */
  status?: 'inactive' | 'degraded' | 'healthy' | 'down';

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

export interface CloudflaredDeleteParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface CloudflaredEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: A user-friendly name for a tunnel.
   */
  name?: string;

  /**
   * Body param: Sets the password required to run a locally-managed tunnel. Must be
   * at least 32 bytes and encoded as a base64 string.
   */
  tunnel_secret?: string;
}

export interface CloudflaredGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

Cloudflared.Configurations = Configurations;
Cloudflared.Connections = Connections;
Cloudflared.ClientsSinglePage = ClientsSinglePage;
Cloudflared.Token = Token;
Cloudflared.Connectors = Connectors;
Cloudflared.Management = Management;

export declare namespace Cloudflared {
  export {
    type CloudflaredCreateParams as CloudflaredCreateParams,
    type CloudflaredListParams as CloudflaredListParams,
    type CloudflaredDeleteParams as CloudflaredDeleteParams,
    type CloudflaredEditParams as CloudflaredEditParams,
    type CloudflaredGetParams as CloudflaredGetParams,
  };

  export {
    Configurations as Configurations,
    type ConfigurationUpdateResponse as ConfigurationUpdateResponse,
    type ConfigurationGetResponse as ConfigurationGetResponse,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationGetParams as ConfigurationGetParams,
  };

  export {
    Connections as Connections,
    type Client as Client,
    type ConnectionDeleteResponse as ConnectionDeleteResponse,
    ClientsSinglePage as ClientsSinglePage,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionGetParams as ConnectionGetParams,
  };

  export { Token as Token, type TokenGetResponse as TokenGetResponse, type TokenGetParams as TokenGetParams };

  export { Connectors as Connectors, type ConnectorGetParams as ConnectorGetParams };

  export {
    Management as Management,
    type ManagementCreateResponse as ManagementCreateResponse,
    type ManagementCreateParams as ManagementCreateParams,
  };
}

export { CloudflareTunnelsV4PagePaginationArray };
