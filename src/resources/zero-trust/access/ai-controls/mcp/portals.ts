// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Portals extends APIResource {
  /**
   * Creates a new MCP portal for managing AI tool access through Cloudflare Access.
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
  create(params: PortalCreateParams, options?: RequestOptions): APIPromise<PortalCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/ai-controls/mcp/portals`, {
        body,
        ...options,
      }) as APIPromise<{ result: PortalCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an MCP portal configuration.
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
  update(id: string, params: PortalUpdateParams, options?: RequestOptions): APIPromise<PortalUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`, {
        body,
        ...options,
      }) as APIPromise<{ result: PortalUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all MCP portals configured for the account.
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
    options?: RequestOptions,
  ): PagePromise<PortalListResponsesV4PagePaginationArray, PortalListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/ai-controls/mcp/portals`,
      V4PagePaginationArray<PortalListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an MCP portal from the account.
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
  delete(id: string, params: PortalDeleteParams, options?: RequestOptions): APIPromise<PortalDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`,
        options,
      ) as APIPromise<{ result: PortalDeleteResponse }>
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
  read(id: string, params: PortalReadParams, options?: RequestOptions): APIPromise<PortalReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/access/ai-controls/mcp/portals/${id}`,
        options,
      ) as APIPromise<{ result: PortalReadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PortalListResponsesV4PagePaginationArray = V4PagePaginationArray<PortalListResponse>;

export interface PortalCreateResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  servers: Array<PortalCreateResponse.Server>;

  /**
   * Allow remote code execution in Dynamic Workers (beta)
   */
  allow_code_mode?: boolean;

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

export namespace PortalCreateResponse {
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

    updated_prompts?: Array<Server.UpdatedPrompt>;

    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }

    export interface UpdatedTool {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }
  }
}

export interface PortalUpdateResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  servers: Array<PortalUpdateResponse.Server>;

  /**
   * Allow remote code execution in Dynamic Workers (beta)
   */
  allow_code_mode?: boolean;

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

export namespace PortalUpdateResponse {
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

    updated_prompts?: Array<Server.UpdatedPrompt>;

    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }

    export interface UpdatedTool {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }
  }
}

export interface PortalListResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  servers: Array<PortalListResponse.Server>;

  /**
   * Allow remote code execution in Dynamic Workers (beta)
   */
  allow_code_mode?: boolean;

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

export namespace PortalListResponse {
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

    updated_prompts?: Array<Server.UpdatedPrompt>;

    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }

    export interface UpdatedTool {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }
  }
}

export interface PortalDeleteResponse {
  /**
   * portal id
   */
  id: string;

  hostname: string;

  name: string;

  /**
   * Allow remote code execution in Dynamic Workers (beta)
   */
  allow_code_mode?: boolean;

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

  /**
   * Allow remote code execution in Dynamic Workers (beta)
   */
  allow_code_mode?: boolean;

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

    updated_prompts?: Array<Server.UpdatedPrompt>;

    updated_tools?: Array<Server.UpdatedTool>;
  }

  export namespace Server {
    export interface UpdatedPrompt {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }

    export interface UpdatedTool {
      name: string;

      description?: string;

      enabled?: boolean;

      portal_alias?: string;

      server_alias?: string;
    }
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
   * Body param: Allow remote code execution in Dynamic Workers (beta)
   */
  allow_code_mode?: boolean;

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

      alias?: string;

      description?: string;

      enabled?: boolean;
    }

    export interface UpdatedTool {
      name: string;

      alias?: string;

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
   * Body param: Allow remote code execution in Dynamic Workers (beta)
   */
  allow_code_mode?: boolean;

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

      alias?: string;

      description?: string;

      enabled?: boolean;
    }

    export interface UpdatedTool {
      name: string;

      alias?: string;

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

export declare namespace Portals {
  export {
    type PortalCreateResponse as PortalCreateResponse,
    type PortalUpdateResponse as PortalUpdateResponse,
    type PortalListResponse as PortalListResponse,
    type PortalDeleteResponse as PortalDeleteResponse,
    type PortalReadResponse as PortalReadResponse,
    type PortalListResponsesV4PagePaginationArray as PortalListResponsesV4PagePaginationArray,
    type PortalCreateParams as PortalCreateParams,
    type PortalUpdateParams as PortalUpdateParams,
    type PortalListParams as PortalListParams,
    type PortalDeleteParams as PortalDeleteParams,
    type PortalReadParams as PortalReadParams,
  };
}
