// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseNodes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'tenantStructures', 'nodes'] = Object.freeze([
    'zeroTrust',
    'cws',
    'tenantStructures',
    'nodes',
  ] as const);

  /**
   * Adds a validated cloud-native node to the tenant hierarchy.
   *
   * @example
   * ```ts
   * const tenantStructureNode =
   *   await client.zeroTrust.cws.tenantStructures.nodes.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       native_id: 'x',
   *       node_kind: 'x',
   *     },
   *   );
   * ```
   */
  create(
    structureID: string,
    params: NodeCreateParams,
    options?: RequestOptions,
  ): APIPromise<TenantStructureNode> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/tenant-structures/${structureID}/nodes`, {
        body,
        ...options,
      }) as APIPromise<{ result: TenantStructureNode }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the node's display name or parent while preserving its immutable
   * identity fields.
   *
   * @example
   * ```ts
   * const tenantStructureNode =
   *   await client.zeroTrust.cws.tenantStructures.nodes.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       native_id: 'x',
   *       node_kind: 'x',
   *     },
   *   );
   * ```
   */
  update(
    nodeID: string,
    params: NodeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantStructureNode> {
    const { account_id, structure_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/tenant-structures/${structure_id}/nodes/${nodeID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TenantStructureNode }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of nodes in the tenant structure.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tenantStructureNode of client.zeroTrust.cws.tenantStructures.nodes.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    structureID: string,
    params: NodeListParams,
    options?: RequestOptions,
  ): PagePromise<TenantStructureNodesCursorPagination, TenantStructureNode> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/tenant-structures/${structureID}/nodes`,
      CursorPagination<TenantStructureNode>,
      { query, ...options },
    );
  }

  /**
   * Deletes a childless node from the tenant hierarchy.
   *
   * @example
   * ```ts
   * const node =
   *   await client.zeroTrust.cws.tenantStructures.nodes.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  delete(nodeID: string, params: NodeDeleteParams, options?: RequestOptions): APIPromise<NodeDeleteResponse> {
    const { account_id, structure_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/tenant-structures/${structure_id}/nodes/${nodeID}`,
        options,
      ) as APIPromise<{ result: NodeDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Atomically validates and applies 1 to 500 unordered node operations. Creates may
   * reference new parents but cannot reuse a native_id deleted in the same batch.
   * Maximum body size: 1 MiB.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.cws.tenantStructures.nodes.batch(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       creates: [{ native_id: 'x', node_kind: 'x' }],
   *       deletes: [
   *         { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *       ],
   *       updates: [
   *         { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *       ],
   *     },
   *   );
   * ```
   */
  batch(
    structureID: string,
    params: NodeBatchParams,
    options?: RequestOptions,
  ): APIPromise<NodeBatchResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/tenant-structures/${structureID}/nodes/batch`, {
        body,
        ...options,
      }) as APIPromise<{ result: NodeBatchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the tenant node with the specified ID.
   *
   * @example
   * ```ts
   * const tenantStructureNode =
   *   await client.zeroTrust.cws.tenantStructures.nodes.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  get(nodeID: string, params: NodeGetParams, options?: RequestOptions): APIPromise<TenantStructureNode> {
    const { account_id, structure_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cws/tenant-structures/${structure_id}/nodes/${nodeID}`,
        options,
      ) as APIPromise<{ result: TenantStructureNode }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Nodes extends BaseNodes {}

export type TenantStructureNodesCursorPagination = CursorPagination<TenantStructureNode>;

export interface TenantStructureNode {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  /**
   * Cloud-native identifier of this node, unique within the structure; the
   * parent-reference target. Shape depends on the structure's application. Immutable
   * after create.
   */
  native_id: string;

  /**
   * Position in the tree. Legal values depend on the structure's application (aws:
   * root/ou/account; cloudflare: org/account/zone). At most one root per structure.
   * Immutable after create.
   */
  node_kind: string;

  updated_at: string;

  /**
   * Display name (e.g. an OU or account name), mutable. Optional; empty by default.
   */
  name?: string;

  /**
   * Native ID of this node's parent. Required for non-root nodes and omitted for the
   * root. The parent must be in the same structure and able to contain this node
   * kind.
   */
  parent?: string;
}

export interface NodeDeleteResponse {
  id: string;
}

export interface NodeBatchResponse {
  created: Array<TenantStructureNode>;

  deleted: Array<NodeBatchResponse.Deleted>;

  updated: Array<TenantStructureNode>;
}

export namespace NodeBatchResponse {
  export interface Deleted {
    id: string;
  }
}

export interface NodeCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Cloud-native identifier of this node, unique within the structure;
   * the parent-reference target. Shape depends on the structure's application.
   * Immutable after create.
   */
  native_id: string;

  /**
   * Body param: Position in the tree. Legal values depend on the structure's
   * application (aws: root/ou/account; cloudflare: org/account/zone). At most one
   * root per structure. Immutable after create.
   */
  node_kind: string;

  /**
   * Body param: Display name (e.g. an OU or account name), mutable. Optional; empty
   * by default.
   */
  name?: string;

  /**
   * Body param: Native ID of this node's parent. Required for non-root nodes and
   * omitted for the root. The parent must be in the same structure and able to
   * contain this node kind.
   */
  parent?: string;
}

export interface NodeUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Path param: ID of the parent tenant structure
   */
  structure_id: string;

  /**
   * Body param: Cloud-native identifier of this node, unique within the structure;
   * the parent-reference target. Shape depends on the structure's application.
   * Immutable after create.
   */
  native_id: string;

  /**
   * Body param: Position in the tree. Legal values depend on the structure's
   * application (aws: root/ou/account; cloudflare: org/account/zone). At most one
   * root per structure. Immutable after create.
   */
  node_kind: string;

  /**
   * Body param: Display name (e.g. an OU or account name), mutable. Optional; empty
   * by default.
   */
  name?: string;

  /**
   * Body param: Native ID of this node's parent. Required for non-root nodes and
   * omitted for the root. The parent must be in the same structure and able to
   * contain this node kind.
   */
  parent?: string;
}

export interface NodeListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by node name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Filter by exact cloud-native identifier
   */
  native_id?: string;

  /**
   * Query param: Filter by exact node kind
   */
  node_kind?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';

  /**
   * Query param: Filter by exact parent native ID
   */
  parent?: string;
}

export interface NodeDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * ID of the parent tenant structure
   */
  structure_id: string;
}

export interface NodeBatchParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Nodes to create; parents may be created elsewhere in this request
   */
  creates: Array<NodeBatchParams.Create>;

  /**
   * Body param: Nodes to delete; every descendant that will not be reparented must
   * also be deleted
   */
  deletes: Array<NodeBatchParams.Delete>;

  /**
   * Body param: Nodes whose mutable fields should be fully replaced
   */
  updates: Array<NodeBatchParams.Update>;
}

export namespace NodeBatchParams {
  export interface Create {
    /**
     * Cloud-native identifier of this node, unique within the structure; the
     * parent-reference target. Shape depends on the structure's application. Immutable
     * after create.
     */
    native_id: string;

    /**
     * Position in the tree. Legal values depend on the structure's application (aws:
     * root/ou/account; cloudflare: org/account/zone). At most one root per structure.
     * Immutable after create.
     */
    node_kind: string;

    /**
     * Display name (e.g. an OU or account name), mutable. Optional; empty by default.
     */
    name?: string;

    /**
     * Native ID of this node's parent. Required for non-root nodes and omitted for the
     * root. The parent must be in the same structure and able to contain this node
     * kind.
     */
    parent?: string;
  }

  export interface Delete {
    /**
     * ID of the node to delete
     */
    id: string;
  }

  export interface Update {
    /**
     * ID of the node to update
     */
    id: string;

    /**
     * Full replacement display name
     */
    name?: string;

    /**
     * Full replacement parent native ID; omit for the root
     */
    parent?: string;
  }
}

export interface NodeGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * ID of the parent tenant structure
   */
  structure_id: string;
}

export declare namespace Nodes {
  export {
    type TenantStructureNode as TenantStructureNode,
    type NodeDeleteResponse as NodeDeleteResponse,
    type NodeBatchResponse as NodeBatchResponse,
    type TenantStructureNodesCursorPagination as TenantStructureNodesCursorPagination,
    type NodeCreateParams as NodeCreateParams,
    type NodeUpdateParams as NodeUpdateParams,
    type NodeListParams as NodeListParams,
    type NodeDeleteParams as NodeDeleteParams,
    type NodeBatchParams as NodeBatchParams,
    type NodeGetParams as NodeGetParams,
  };
}
