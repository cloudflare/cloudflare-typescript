// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRegoMetadata extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'regoMetadata'] = Object.freeze([
    'zeroTrust',
    'cws',
    'regoMetadata',
  ] as const);

  /**
   * Creates a JSON document that Rego can access through its import path.
   *
   * @example
   * ```ts
   * const regoMetadata =
   *   await client.zeroTrust.cws.regoMetadata.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     data: {},
   *     import_path: 'x',
   *     name: 'x',
   *   });
   * ```
   */
  create(params: RegoMetadataCreateParams, options?: RequestOptions): APIPromise<RegoMetadata> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/rego-metadata`, { body, ...options }) as APIPromise<{
        result: RegoMetadata;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the metadata document's name, import path, and JSON data.
   *
   * @example
   * ```ts
   * const regoMetadata =
   *   await client.zeroTrust.cws.regoMetadata.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       data: {},
   *       import_path: 'x',
   *       name: 'x',
   *     },
   *   );
   * ```
   */
  update(
    regoMetadataID: string,
    params: RegoMetadataUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RegoMetadata> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/rego-metadata/${regoMetadataID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RegoMetadata }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of Rego metadata documents in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const regoMetadata of client.zeroTrust.cws.regoMetadata.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RegoMetadataListParams,
    options?: RequestOptions,
  ): PagePromise<RegoMetadataCursorPagination, RegoMetadata> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/rego-metadata`,
      CursorPagination<RegoMetadata>,
      { query, ...options },
    );
  }

  /**
   * Deletes the specified Rego metadata document.
   *
   * @example
   * ```ts
   * const regoMetadata =
   *   await client.zeroTrust.cws.regoMetadata.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    regoMetadataID: string,
    params: RegoMetadataDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RegoMetadataDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/rego-metadata/${regoMetadataID}`,
        options,
      ) as APIPromise<{ result: RegoMetadataDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the Rego metadata document with the specified ID.
   *
   * @example
   * ```ts
   * const regoMetadata =
   *   await client.zeroTrust.cws.regoMetadata.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  get(
    regoMetadataID: string,
    params: RegoMetadataGetParams,
    options?: RequestOptions,
  ): APIPromise<RegoMetadata> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cws/rego-metadata/${regoMetadataID}`,
        options,
      ) as APIPromise<{ result: RegoMetadata }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class RegoMetadata extends BaseRegoMetadata {}

export type RegoMetadataCursorPagination = CursorPagination<RegoMetadata>;

export interface RegoMetadata {
  /**
   * Server-assigned UUID
   */
  id: string;

  created_at: string;

  data: unknown;

  /**
   * Unique Rego import path in the form metadata.<segment>, with one alphanumeric or
   * underscore segment. Reference it as data.<import_path>.
   */
  import_path: string;

  /**
   * Human-readable name; unique per account
   */
  name: string;

  updated_at: string;
}

export interface RegoMetadataDeleteResponse {
  id: string;
}

export interface RegoMetadataCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param
   */
  data: unknown;

  /**
   * Body param: Unique Rego import path in the form metadata.<segment>, with one
   * alphanumeric or underscore segment. Reference it as data.<import_path>.
   */
  import_path: string;

  /**
   * Body param: Name of the rego metadata document (unique per account)
   */
  name: string;
}

export interface RegoMetadataUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param
   */
  data: unknown;

  /**
   * Body param: Unique Rego import path in the form metadata.<segment>, with one
   * alphanumeric or underscore segment. Reference it as data.<import_path>.
   */
  import_path: string;

  /**
   * Body param: Name of the rego metadata document (unique per account)
   */
  name: string;
}

export interface RegoMetadataListParams extends CursorPaginationParams {
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
   * Query param: Filter by rego metadata name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';
}

export interface RegoMetadataDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface RegoMetadataGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export declare namespace RegoMetadata {
  export {
    type RegoMetadata as RegoMetadata,
    type RegoMetadataDeleteResponse as RegoMetadataDeleteResponse,
    type RegoMetadataCursorPagination as RegoMetadataCursorPagination,
    type RegoMetadataCreateParams as RegoMetadataCreateParams,
    type RegoMetadataUpdateParams as RegoMetadataUpdateParams,
    type RegoMetadataListParams as RegoMetadataListParams,
    type RegoMetadataDeleteParams as RegoMetadataDeleteParams,
    type RegoMetadataGetParams as RegoMetadataGetParams,
  };
}
