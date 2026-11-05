// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRegoModules extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'regoModules'] = Object.freeze([
    'zeroTrust',
    'cws',
    'regoModules',
  ] as const);

  /**
   * Creates a library Rego module and derives its package path from the source.
   *
   * @example
   * ```ts
   * const regoModule =
   *   await client.zeroTrust.cws.regoModules.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     name: 'x',
   *     rego_source: 'x',
   *   });
   * ```
   */
  create(params: RegoModuleCreateParams, options?: RequestOptions): APIPromise<RegoModule> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/rego-modules`, { body, ...options }) as APIPromise<{
        result: RegoModule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the module and validates policies and libraries that depend on it.
   *
   * @example
   * ```ts
   * const regoModule =
   *   await client.zeroTrust.cws.regoModules.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       name: 'x',
   *       rego_source: 'x',
   *     },
   *   );
   * ```
   */
  update(
    regoModuleID: string,
    params: RegoModuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RegoModule> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/rego-modules/${regoModuleID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RegoModule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of library Rego modules in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const regoModule of client.zeroTrust.cws.regoModules.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RegoModuleListParams,
    options?: RequestOptions,
  ): PagePromise<RegoModulesCursorPagination, RegoModule> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/rego-modules`,
      CursorPagination<RegoModule>,
      { query, ...options },
    );
  }

  /**
   * Deletes the module if no policy or library references its rules.
   *
   * @example
   * ```ts
   * const regoModule =
   *   await client.zeroTrust.cws.regoModules.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    regoModuleID: string,
    params: RegoModuleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RegoModuleDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/rego-modules/${regoModuleID}`,
        options,
      ) as APIPromise<{ result: RegoModuleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the library Rego module with the specified ID.
   *
   * @example
   * ```ts
   * const regoModule =
   *   await client.zeroTrust.cws.regoModules.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  get(regoModuleID: string, params: RegoModuleGetParams, options?: RequestOptions): APIPromise<RegoModule> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cws/rego-modules/${regoModuleID}`,
        options,
      ) as APIPromise<{ result: RegoModule }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class RegoModules extends BaseRegoModules {}

export type RegoModulesCursorPagination = CursorPagination<RegoModule>;

export interface RegoModule {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  /**
   * Human-readable name; unique per account
   */
  name: string;

  /**
   * Dotted path derived from rego_source. Begins with lib. and is unique per
   * account.
   */
  package_path: string;

  /**
   * Library Rego source with a package beginning with "lib." Maximum 16384 UTF-8
   * bytes.
   */
  rego_source: string;

  updated_at: string;
}

export interface RegoModuleDeleteResponse {
  id: string;
}

export interface RegoModuleCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Name of the Rego module (unique per account)
   */
  name: string;

  /**
   * Body param: Library Rego source with a package beginning with "lib." Maximum
   * 16384 UTF-8 bytes.
   */
  rego_source: string;
}

export interface RegoModuleUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Name of the Rego module (unique per account)
   */
  name: string;

  /**
   * Body param: Library Rego source with a package beginning with "lib." Maximum
   * 16384 UTF-8 bytes.
   */
  rego_source: string;
}

export interface RegoModuleListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by Rego module name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';

  /**
   * Query param: Filter by package path (case-sensitive literal substring match)
   */
  package_path?: string;
}

export interface RegoModuleDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface RegoModuleGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export declare namespace RegoModules {
  export {
    type RegoModule as RegoModule,
    type RegoModuleDeleteResponse as RegoModuleDeleteResponse,
    type RegoModulesCursorPagination as RegoModulesCursorPagination,
    type RegoModuleCreateParams as RegoModuleCreateParams,
    type RegoModuleUpdateParams as RegoModuleUpdateParams,
    type RegoModuleListParams as RegoModuleListParams,
    type RegoModuleDeleteParams as RegoModuleDeleteParams,
    type RegoModuleGetParams as RegoModuleGetParams,
  };
}
