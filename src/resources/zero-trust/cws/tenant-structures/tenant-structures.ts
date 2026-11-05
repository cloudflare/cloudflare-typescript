// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NodesAPI from './nodes';
import {
  BaseNodes,
  NodeBatchParams,
  NodeBatchResponse,
  NodeCreateParams,
  NodeDeleteParams,
  NodeDeleteResponse,
  NodeGetParams,
  NodeListParams,
  NodeUpdateParams,
  Nodes,
  TenantStructureNode,
  TenantStructureNodesCursorPagination,
} from './nodes';
import { APIPromise } from '../../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTenantStructures extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'tenantStructures'] = Object.freeze([
    'zeroTrust',
    'cws',
    'tenantStructures',
  ] as const);

  /**
   * Creates an empty tenant hierarchy for the selected cloud application.
   *
   * @example
   * ```ts
   * const tenantStructure =
   *   await client.zeroTrust.cws.tenantStructures.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     application: 'aws',
   *     name: 'x',
   *   });
   * ```
   */
  create(params: TenantStructureCreateParams, options?: RequestOptions): APIPromise<TenantStructure> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/tenant-structures`, {
        body,
        ...options,
      }) as APIPromise<{ result: TenantStructure }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the tenant structure's name and import path; its application remains
   * immutable.
   *
   * @example
   * ```ts
   * const tenantStructure =
   *   await client.zeroTrust.cws.tenantStructures.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       application: 'aws',
   *       name: 'x',
   *     },
   *   );
   * ```
   */
  update(
    structureID: string,
    params: TenantStructureUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantStructure> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/tenant-structures/${structureID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TenantStructure }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of tenant structures in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tenantStructure of client.zeroTrust.cws.tenantStructures.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: TenantStructureListParams,
    options?: RequestOptions,
  ): PagePromise<TenantStructuresCursorPagination, TenantStructure> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/tenant-structures`,
      CursorPagination<TenantStructure>,
      { query, ...options },
    );
  }

  /**
   * Deletes the tenant structure and all nodes in its hierarchy.
   *
   * @example
   * ```ts
   * const tenantStructure =
   *   await client.zeroTrust.cws.tenantStructures.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    structureID: string,
    params: TenantStructureDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TenantStructureDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/tenant-structures/${structureID}`,
        options,
      ) as APIPromise<{ result: TenantStructureDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the tenant structure with the specified ID.
   *
   * @example
   * ```ts
   * const tenantStructure =
   *   await client.zeroTrust.cws.tenantStructures.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  get(
    structureID: string,
    params: TenantStructureGetParams,
    options?: RequestOptions,
  ): APIPromise<TenantStructure> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cws/tenant-structures/${structureID}`,
        options,
      ) as APIPromise<{ result: TenantStructure }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TenantStructures extends BaseTenantStructures {
  nodes: NodesAPI.Nodes = new NodesAPI.Nodes(this._client);
}

export type TenantStructuresCursorPagination = CursorPagination<TenantStructure>;

export interface TenantStructure {
  /**
   * Server-assigned UUID
   */
  id: string;

  /**
   * Platform this structure models. Immutable after creation; determines valid node
   * kinds and identifier formats.
   */
  application: 'aws' | 'cloudflare';

  created_at: string;

  /**
   * Human-readable name; unique per account
   */
  name: string;

  updated_at: string;

  /**
   * Optional unique Rego mount path in the form tenant.<application>.<name>. The
   * application segment must match application; omitted when unmounted.
   */
  import_path?: string;
}

export interface TenantStructureDeleteResponse {
  id: string;
}

export interface TenantStructureCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Platform this structure models. Immutable after creation.
   */
  application: 'aws' | 'cloudflare';

  /**
   * Body param: Human-readable name; unique per account
   */
  name: string;

  /**
   * Body param: Optional unique Rego mount path in the form
   * tenant.<application>.<name>; application must match. Omit to leave unmounted.
   */
  import_path?: string;
}

export interface TenantStructureUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Platform this structure models. Must match the existing value.
   */
  application: 'aws' | 'cloudflare';

  /**
   * Body param: Human-readable name; unique per account
   */
  name: string;

  /**
   * Body param: Optional unique Rego mount path in the form
   * tenant.<application>.<name>; application must match. Omit to clear.
   */
  import_path?: string;
}

export interface TenantStructureListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by import path (case-sensitive literal substring match)
   */
  import_path?: string;

  /**
   * Query param: Filter by tenant structure name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';
}

export interface TenantStructureDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface TenantStructureGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

TenantStructures.Nodes = Nodes;
TenantStructures.BaseNodes = BaseNodes;

export declare namespace TenantStructures {
  export {
    type TenantStructure as TenantStructure,
    type TenantStructureDeleteResponse as TenantStructureDeleteResponse,
    type TenantStructuresCursorPagination as TenantStructuresCursorPagination,
    type TenantStructureCreateParams as TenantStructureCreateParams,
    type TenantStructureUpdateParams as TenantStructureUpdateParams,
    type TenantStructureListParams as TenantStructureListParams,
    type TenantStructureDeleteParams as TenantStructureDeleteParams,
    type TenantStructureGetParams as TenantStructureGetParams,
  };

  export {
    Nodes as Nodes,
    BaseNodes as BaseNodes,
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
