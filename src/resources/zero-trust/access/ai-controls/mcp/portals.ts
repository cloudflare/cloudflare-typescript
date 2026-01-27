// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../../pagination';

export class Portals extends APIResource {
  /**
   * Create a new MCP Portal
   *
   * @example
   * ```ts
   * const portal =
   *   await client.zeroTrust.access.aiControls.mcp.portals.create(
   *     {
   *       account_id: 'a86a8f5c339544d7bdc89926de14fb8c',
   *       id: 'my-mcp-portal',
   *       hostname: 'exmaple.com',
   *       name: 'My MCP Portal',
   *     },
   *   );
   * ```
   */
  create(params: PortalCreateParams, options?: Core.RequestOptions): Core.APIPromise<PortalCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/ai-controls/mcp/portals`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PortalCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a MCP Portal
   *
   * @example
   * ```ts
   * const portal =
   *   await client.zeroTrust.access.aiControls.mcp.portals.update(
   *     'my-mcp-portal',
   *     { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   *   );
   * ```
   */
  update(
    id: string,
    params: PortalUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortalUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PortalUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List MCP Portals
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const portalListResponse of client.zeroTrust.access.aiControls.mcp.portals.list(
   *   { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PortalListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PortalListResponsesV4PagePaginationArray, PortalListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/ai-controls/mcp/portals`,
      PortalListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a MCP Portal
   *
   * @example
   * ```ts
   * const portal =
   *   await client.zeroTrust.access.aiControls.mcp.portals.delete(
   *     'my-mcp-portal',
   *     { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: PortalDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortalDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`,
        options,
      ) as Core.APIPromise<{ result: PortalDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Read details of an MCP Portal
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.access.aiControls.mcp.portals.read(
   *     'my-mcp-portal',
   *     { account_id: 'a86a8f5c339544d7bdc89926de14fb8c' },
   *   );
   * ```
   */
  read(
    id: string,
    params: PortalReadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortalReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`,
        options,
      ) as Core.APIPromise<{ result: PortalReadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PortalListResponsesV4PagePaginationArray extends V4PagePaginationArray<PortalListResponse> {}

export interface PortalCreateResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  created_at?: string;

  created_by?: string;

  description?: string;

  modified_at?: string;

  modified_by?: string;

  /**
   * Route outbound MCP traffic through Zero Trust Secure Web Gateway
   */
  secure_web_gateway?: boolean;
}

export interface PortalUpdateResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  created_at?: string;

  created_by?: string;

  description?: string;

  modified_at?: string;

  modified_by?: string;

  /**
   * Route outbound MCP traffic through Zero Trust Secure Web Gateway
   */
  secure_web_gateway?: boolean;
}

export interface PortalListResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  created_at?: string;

  created_by?: string;

  description?: string;

  modified_at?: string;

  modified_by?: string;

  /**
   * Route outbound MCP traffic through Zero Trust Secure Web Gateway
   */
  secure_web_gateway?: boolean;
}

export interface PortalDeleteResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  created_at?: string;

  created_by?: string;

  description?: string;

  modified_at?: string;

  modified_by?: string;

  /**
   * Route outbound MCP traffic through Zero Trust Secure Web Gateway
   */
  secure_web_gateway?: boolean;
}

export interface PortalReadResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  servers: Array<PortalReadResponse.Server>;

  created_at?: string;

  created_by?: string;

  description?: string;

  modified_at?: string;

  modified_by?: string;

  /**
   * Route outbound MCP traffic through Zero Trust Secure Web Gateway
   */
  secure_web_gateway?: boolean;
}

export namespace PortalReadResponse {
  export interface Server {
    /**
     * server id
     */
    id: string;

    auth_type: 'oauth' | 'bearer' | 'unauthenticated';

    hostname: string;

    name: string;

    prompts: Array<{ [key: string]: unknown }>;

    tools: Array<{ [key: string]: unknown }>;

    updated_prompts: Array<{ [key: string]: number | string }>;

    updated_tools: Array<{ [key: string]: number | string }>;

    created_at?: string;

    created_by?: string;

    default_disabled?: boolean;

    description?: string | null;

    error?: string;

    last_successful_sync?: string;

    last_synced?: string;

    modified_at?: string;

    modified_by?: string;

    on_behalf?: boolean;

    status?: string;
  }
}

export interface PortalCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: portal id
   */
  id: string;

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
  description?: string;

  /**
   * Body param: Route outbound MCP traffic through Zero Trust Secure Web Gateway
   */
  secure_web_gateway?: boolean;

  /**
   * Body param
   */
  servers?: Array<PortalCreateParams.Server>;
}

export namespace PortalCreateParams {
  export interface Server {
    /**
     * server id
     */
    server_id: string;

    default_disabled?: boolean;

    on_behalf?: boolean;

    updated_prompts?: Array<Server.UpdatedPrompt>;

    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      name: string;

      description?: string;

      enabled?: boolean;
    }

    export interface UpdatedTool {
      name: string;

      description?: string;

      enabled?: boolean;
    }
  }
}

export interface PortalUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  hostname?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param: Route outbound MCP traffic through Zero Trust Secure Web Gateway
   */
  secure_web_gateway?: boolean;

  /**
   * Body param
   */
  servers?: Array<PortalUpdateParams.Server>;
}

export namespace PortalUpdateParams {
  export interface Server {
    /**
     * server id
     */
    server_id: string;

    default_disabled?: boolean;

    on_behalf?: boolean;

    updated_prompts?: Array<Server.UpdatedPrompt>;

    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      name: string;

      description?: string;

      enabled?: boolean;
    }

    export interface UpdatedTool {
      name: string;

      description?: string;

      enabled?: boolean;
    }
  }
}

export interface PortalListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Search by id, name, hostname
   */
  search?: string;
}

export interface PortalDeleteParams {
  account_id: string;
}

export interface PortalReadParams {
  account_id: string;
}

Portals.PortalListResponsesV4PagePaginationArray = PortalListResponsesV4PagePaginationArray;

export declare namespace Portals {
  export {
    type PortalCreateResponse as PortalCreateResponse,
    type PortalUpdateResponse as PortalUpdateResponse,
    type PortalListResponse as PortalListResponse,
    type PortalDeleteResponse as PortalDeleteResponse,
    type PortalReadResponse as PortalReadResponse,
    PortalListResponsesV4PagePaginationArray as PortalListResponsesV4PagePaginationArray,
    type PortalCreateParams as PortalCreateParams,
    type PortalUpdateParams as PortalUpdateParams,
    type PortalListParams as PortalListParams,
    type PortalDeleteParams as PortalDeleteParams,
    type PortalReadParams as PortalReadParams,
  };
}
