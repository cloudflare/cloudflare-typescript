// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDomainACLs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'domainACLs'] = Object.freeze([
    'zeroTrust',
    'cws',
    'domainACLs',
  ] as const);

  /**
   * Creates a domain access control list with its default action and entries.
   *
   * @example
   * ```ts
   * const domainACL =
   *   await client.zeroTrust.cws.domainACLs.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     default_action: 'ALLOW',
   *     entries: [{ action: 'ALLOW', domain: 'x' }],
   *     name: 'x',
   *   });
   * ```
   */
  create(params: DomainACLCreateParams, options?: RequestOptions): APIPromise<DomainACL> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/domain-acls`, { body, ...options }) as APIPromise<{
        result: DomainACL;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the domain access control list's name, default action, and entries.
   *
   * @example
   * ```ts
   * const domainACL =
   *   await client.zeroTrust.cws.domainACLs.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       default_action: 'ALLOW',
   *       entries: [{ action: 'ALLOW', domain: 'x' }],
   *       name: 'x',
   *     },
   *   );
   * ```
   */
  update(
    domainACLID: string,
    params: DomainACLUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DomainACL> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/domain-acls/${domainACLID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DomainACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of domain access control lists in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const domainACL of client.zeroTrust.cws.domainACLs.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DomainACLListParams,
    options?: RequestOptions,
  ): PagePromise<DomainACLsCursorPagination, DomainACL> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/domain-acls`,
      CursorPagination<DomainACL>,
      { query, ...options },
    );
  }

  /**
   * Deletes the domain ACL if it is not attached to a deployment.
   *
   * @example
   * ```ts
   * const domainACL =
   *   await client.zeroTrust.cws.domainACLs.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    domainACLID: string,
    params: DomainACLDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DomainACLDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/domain-acls/${domainACLID}`,
        options,
      ) as APIPromise<{ result: DomainACLDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the domain access control list with the specified ID.
   *
   * @example
   * ```ts
   * const domainACL = await client.zeroTrust.cws.domainACLs.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * );
   * ```
   */
  get(domainACLID: string, params: DomainACLGetParams, options?: RequestOptions): APIPromise<DomainACL> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cws/domain-acls/${domainACLID}`, options) as APIPromise<{
        result: DomainACL;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class DomainACLs extends BaseDomainACLs {}

export type DomainACLsCursorPagination = CursorPagination<DomainACL>;

export interface DomainACL {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  /**
   * Action applied when no entry matches the request domain
   */
  default_action: 'ALLOW' | 'BLOCK';

  /**
   * Per-domain action overrides. Each domain appears at most once.
   */
  entries: Array<DomainACL.Entry> | null;

  /**
   * Human-readable name; unique per account
   */
  name: string;

  updated_at: string;
}

export namespace DomainACL {
  export interface Entry {
    /**
     * Per-domain decision overriding the parent ACL's default_action
     */
    action: 'ALLOW' | 'BLOCK';

    /**
     * Hostname or domain pattern, capped at 255 UTF-8 bytes
     */
    domain: string;
  }
}

export interface DomainACLDeleteResponse {
  id: string;
}

export interface DomainACLCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Default action when no entry matches
   */
  default_action: 'ALLOW' | 'BLOCK';

  /**
   * Body param: Domain entries for this ACL. Each domain must appear at most once.
   */
  entries: Array<DomainACLCreateParams.Entry> | null;

  /**
   * Body param: Name of the domain ACL
   */
  name: string;
}

export namespace DomainACLCreateParams {
  export interface Entry {
    /**
     * Per-domain decision overriding the parent ACL's default_action
     */
    action: 'ALLOW' | 'BLOCK';

    /**
     * Hostname or domain pattern, capped at 255 UTF-8 bytes
     */
    domain: string;
  }
}

export interface DomainACLUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Default action when no entry matches
   */
  default_action: 'ALLOW' | 'BLOCK';

  /**
   * Body param: Replacement set of domain entries. Each domain must appear at most
   * once.
   */
  entries: Array<DomainACLUpdateParams.Entry> | null;

  /**
   * Body param: Name of the domain ACL
   */
  name: string;
}

export namespace DomainACLUpdateParams {
  export interface Entry {
    /**
     * Per-domain decision overriding the parent ACL's default_action
     */
    action: 'ALLOW' | 'BLOCK';

    /**
     * Hostname or domain pattern, capped at 255 UTF-8 bytes
     */
    domain: string;
  }
}

export interface DomainACLListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Filter to domain ACLs attached to this deployment
   */
  deployment_id?: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by domain ACL name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';
}

export interface DomainACLDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface DomainACLGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export declare namespace DomainACLs {
  export {
    type DomainACL as DomainACL,
    type DomainACLDeleteResponse as DomainACLDeleteResponse,
    type DomainACLsCursorPagination as DomainACLsCursorPagination,
    type DomainACLCreateParams as DomainACLCreateParams,
    type DomainACLUpdateParams as DomainACLUpdateParams,
    type DomainACLListParams as DomainACLListParams,
    type DomainACLDeleteParams as DomainACLDeleteParams,
    type DomainACLGetParams as DomainACLGetParams,
  };
}
