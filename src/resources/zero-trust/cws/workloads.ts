// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseWorkloads extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'workloads'] = Object.freeze([
    'zeroTrust',
    'cws',
    'workloads',
  ] as const);

  /**
   * Creates a reusable workload selector from a filter expression.
   *
   * @example
   * ```ts
   * const workload =
   *   await client.zeroTrust.cws.workloads.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     filter: 'x',
   *     name: 'x',
   *   });
   * ```
   */
  create(params: WorkloadCreateParams, options?: RequestOptions): APIPromise<Workload> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/workloads`, { body, ...options }) as APIPromise<{
        result: Workload;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the workload's configuration. Omit tags or use {} to clear them.
   *
   * @example
   * ```ts
   * const workload =
   *   await client.zeroTrust.cws.workloads.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       filter: 'x',
   *       name: 'x',
   *     },
   *   );
   * ```
   */
  update(workloadID: string, params: WorkloadUpdateParams, options?: RequestOptions): APIPromise<Workload> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/workloads/${workloadID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Workload }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of workloads in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const workload of client.zeroTrust.cws.workloads.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: WorkloadListParams,
    options?: RequestOptions,
  ): PagePromise<WorkloadsCursorPagination, Workload> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/cws/workloads`, CursorPagination<Workload>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes the workload if it is not targeted by a policy set.
   *
   * @example
   * ```ts
   * const workload =
   *   await client.zeroTrust.cws.workloads.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    workloadID: string,
    params: WorkloadDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WorkloadDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/cws/workloads/${workloadID}`, options) as APIPromise<{
        result: WorkloadDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the workload with the specified ID.
   *
   * @example
   * ```ts
   * const workload = await client.zeroTrust.cws.workloads.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * );
   * ```
   */
  get(workloadID: string, params: WorkloadGetParams, options?: RequestOptions): APIPromise<Workload> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cws/workloads/${workloadID}`, options) as APIPromise<{
        result: Workload;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Workloads extends BaseWorkloads {}

export type WorkloadsCursorPagination = CursorPagination<Workload>;

export interface Workload {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  /**
   * Filter expression selecting the requests this workload matches. Maximum 4096
   * UTF-8 bytes.
   */
  filter: string;

  /**
   * Human-readable handle; unique per account.
   */
  name: string;

  /**
   * Tags attached to this workload
   */
  tags: { [key: string]: string };

  updated_at: string;

  /**
   * Optional free-form description.
   */
  description?: string;
}

export interface WorkloadDeleteResponse {
  id: string;
}

export interface WorkloadCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Filter expression selecting the requests this workload matches.
   * Maximum 4096 UTF-8 bytes.
   */
  filter: string;

  /**
   * Body param: Human-readable handle; unique per account.
   */
  name: string;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: Tags to attach. Keys are limited to 256 UTF-8 bytes and values to
   * 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export interface WorkloadUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Filter expression selecting the requests this workload matches.
   * Maximum 4096 UTF-8 bytes.
   */
  filter: string;

  /**
   * Body param: Human-readable handle; unique per account.
   */
  name: string;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: Replacement tag set. Omit or use {} to clear. Keys are limited to
   * 256 UTF-8 bytes and values to 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export interface WorkloadListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by workload name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';

  /**
   * Query param: Filter to workloads attached to this policy set
   */
  policy_set_id?: string;
}

export interface WorkloadDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface WorkloadGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export declare namespace Workloads {
  export {
    type Workload as Workload,
    type WorkloadDeleteResponse as WorkloadDeleteResponse,
    type WorkloadsCursorPagination as WorkloadsCursorPagination,
    type WorkloadCreateParams as WorkloadCreateParams,
    type WorkloadUpdateParams as WorkloadUpdateParams,
    type WorkloadListParams as WorkloadListParams,
    type WorkloadDeleteParams as WorkloadDeleteParams,
    type WorkloadGetParams as WorkloadGetParams,
  };
}
