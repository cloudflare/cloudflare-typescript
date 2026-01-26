// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../../pagination';

export class Servers extends APIResource {
  /**
   * Create a new MCP Server
   *
   * @example
   * ```ts
   * const server =
   *   await client.zeroTrust.access.aiControls.mcp.servers.create(
   *     {
   *       account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   *       id: 'my-mcp-server',
   *       auth_type: 'unauthenticated',
   *       hostname: 'https://exmaple.com/mcp',
   *       name: 'My MCP Server',
   *     },
   *   );
   * ```
   */
  create(params: ServerCreateParams, options?: Core.RequestOptions): Core.APIPromise<ServerCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/ai-controls/mcp/servers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServerCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a MCP Server
   *
   * @example
   * ```ts
   * const server =
   *   await client.zeroTrust.access.aiControls.mcp.servers.update(
   *     'my-mcp-server',
   *     { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ServerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/access/ai-controls/mcp/servers/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServerUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List MCP Servers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const serverListResponse of client.zeroTrust.access.aiControls.mcp.servers.list(
   *   { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ServerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ServerListResponsesV4PagePaginationArray, ServerListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/ai-controls/mcp/servers`,
      ServerListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a MCP Server
   *
   * @example
   * ```ts
   * const server =
   *   await client.zeroTrust.access.aiControls.mcp.servers.delete(
   *     'my-mcp-server',
   *     { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: ServerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/access/ai-controls/mcp/servers/${id}`,
        options,
      ) as Core.APIPromise<{ result: ServerDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Read the details of a MCP Server
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.access.aiControls.mcp.servers.read(
   *     'my-mcp-server',
   *     { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   *   );
   * ```
   */
  read(
    id: string,
    params: ServerReadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/access/ai-controls/mcp/servers/${id}`,
        options,
      ) as Core.APIPromise<{ result: ServerReadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sync MCP Server Capabilities
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.access.aiControls.mcp.servers.sync(
   *     'my-mcp-portal',
   *     { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   *   );
   * ```
   */
  sync(
    id: string,
    params: ServerSyncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerSyncResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/access/ai-controls/mcp/servers/${id}/sync`,
        options,
      ) as Core.APIPromise<{ result: ServerSyncResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ServerListResponsesV4PagePaginationArray extends V4PagePaginationArray<ServerListResponse> {}

export interface ServerCreateResponse {
  /**
   * server id
   */
  id: string;

  auth_type: 'oauth' | 'bearer' | 'unauthenticated';

  hostname: string;

  name: string;

  prompts: Array<{ [key: string]: unknown }>;

  tools: Array<{ [key: string]: unknown }>;

  created_at?: string;

  created_by?: string;

  description?: string | null;

  error?: string;

  last_successful_sync?: string;

  last_synced?: string;

  modified_at?: string;

  modified_by?: string;

  status?: string;
}

export interface ServerUpdateResponse {
  /**
   * server id
   */
  id: string;

  auth_type: 'oauth' | 'bearer' | 'unauthenticated';

  hostname: string;

  name: string;

  prompts: Array<{ [key: string]: unknown }>;

  tools: Array<{ [key: string]: unknown }>;

  created_at?: string;

  created_by?: string;

  description?: string | null;

  error?: string;

  last_successful_sync?: string;

  last_synced?: string;

  modified_at?: string;

  modified_by?: string;

  status?: string;
}

export interface ServerListResponse {
  /**
   * server id
   */
  id: string;

  auth_type: 'oauth' | 'bearer' | 'unauthenticated';

  hostname: string;

  name: string;

  prompts: Array<{ [key: string]: unknown }>;

  tools: Array<{ [key: string]: unknown }>;

  created_at?: string;

  created_by?: string;

  description?: string | null;

  error?: string;

  last_successful_sync?: string;

  last_synced?: string;

  modified_at?: string;

  modified_by?: string;

  status?: string;
}

export interface ServerDeleteResponse {
  /**
   * server id
   */
  id: string;

  auth_type: 'oauth' | 'bearer' | 'unauthenticated';

  hostname: string;

  name: string;

  prompts: Array<{ [key: string]: unknown }>;

  tools: Array<{ [key: string]: unknown }>;

  created_at?: string;

  created_by?: string;

  description?: string | null;

  error?: string;

  last_successful_sync?: string;

  last_synced?: string;

  modified_at?: string;

  modified_by?: string;

  status?: string;
}

export interface ServerReadResponse {
  /**
   * server id
   */
  id: string;

  auth_type: 'oauth' | 'bearer' | 'unauthenticated';

  hostname: string;

  name: string;

  prompts: Array<{ [key: string]: unknown }>;

  tools: Array<{ [key: string]: unknown }>;

  created_at?: string;

  created_by?: string;

  description?: string | null;

  error?: string;

  last_successful_sync?: string;

  last_synced?: string;

  modified_at?: string;

  modified_by?: string;

  status?: string;
}

export type ServerSyncResponse = unknown;

export interface ServerCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: server id
   */
  id: string;

  /**
   * Body param
   */
  auth_type: 'oauth' | 'bearer' | 'unauthenticated';

  /**
   * Body param
   */
  hostname: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  auth_credentials?: string;

  /**
   * Body param
   */
  description?: string | null;
}

export interface ServerUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  auth_credentials?: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  name?: string;
}

export interface ServerListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Search by id, name
   */
  search?: string;
}

export interface ServerDeleteParams {
  account_id: string;
}

export interface ServerReadParams {
  account_id: string;
}

export interface ServerSyncParams {
  account_id: string;
}

Servers.ServerListResponsesV4PagePaginationArray = ServerListResponsesV4PagePaginationArray;

export declare namespace Servers {
  export {
    type ServerCreateResponse as ServerCreateResponse,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerReadResponse as ServerReadResponse,
    type ServerSyncResponse as ServerSyncResponse,
    ServerListResponsesV4PagePaginationArray as ServerListResponsesV4PagePaginationArray,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerDeleteParams as ServerDeleteParams,
    type ServerReadParams as ServerReadParams,
    type ServerSyncParams as ServerSyncParams,
  };
}
