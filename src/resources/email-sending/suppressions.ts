// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSuppressions extends APIResource {
  static override readonly _key: readonly ['emailSending', 'suppressions'] = Object.freeze([
    'emailSending',
    'suppressions',
  ] as const);

  /**
   * Creates an account-wide suppression. If a mutable legacy zone-linked row already
   * exists, it is promoted without changing its identifier.
   *
   * @example
   * ```ts
   * const suppression =
   *   await client.emailSending.suppressions.create({
   *     account_id: '12345678',
   *     email: 'user@example.com',
   *   });
   * ```
   */
  create(params: SuppressionCreateParams, options?: RequestOptions): APIPromise<SuppressionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email/sending/suppressions`, {
        body,
        ...options,
      }) as APIPromise<{ result: SuppressionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists every active Email Sending suppression owned by the account, including
   * legacy rows with internal zone memberships.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const suppressionListResponse of client.emailSending.suppressions.list(
   *   { account_id: '12345678' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SuppressionListParams,
    options?: RequestOptions,
  ): PagePromise<SuppressionListResponsesCursorPagination, SuppressionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email/sending/suppressions`,
      CursorPagination<SuppressionListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes the suppression, its note, and every legacy internal zone membership,
   * allowing future delivery attempts to the address.
   *
   * @example
   * ```ts
   * const suppression =
   *   await client.emailSending.suppressions.delete(
   *     '396a5436-d4b0-42a6-b3fc-48e8fa522321',
   *     { account_id: '12345678' },
   *   );
   * ```
   */
  delete(
    suppressionID: string,
    params: SuppressionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SuppressionDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email/sending/suppressions/${suppressionID}`,
        options,
      ) as APIPromise<{ result: SuppressionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates expiry or advisory note fields without changing legacy internal zone
   * memberships.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSending.suppressions.edit(
   *     '396a5436-d4b0-42a6-b3fc-48e8fa522321',
   *     { account_id: '12345678' },
   *   );
   * ```
   */
  edit(
    suppressionID: string,
    params: SuppressionEditParams,
    options?: RequestOptions,
  ): APIPromise<SuppressionEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/email/sending/suppressions/${suppressionID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SuppressionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets an Email Sending suppression owned by the account.
   *
   * @example
   * ```ts
   * const suppression =
   *   await client.emailSending.suppressions.get(
   *     '396a5436-d4b0-42a6-b3fc-48e8fa522321',
   *     { account_id: '12345678' },
   *   );
   * ```
   */
  get(
    suppressionID: string,
    params: SuppressionGetParams,
    options?: RequestOptions,
  ): APIPromise<SuppressionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email/sending/suppressions/${suppressionID}`,
        options,
      ) as APIPromise<{ result: SuppressionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Imports up to 1,000 account-level Email Sending suppressions in one request.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSending.suppressions.import({
   *     account_id: '12345678',
   *     items: [
   *       { email: 'user@example.com' },
   *       { email: 'other@example.com' },
   *     ],
   *   });
   * ```
   */
  import(params: SuppressionImportParams, options?: RequestOptions): APIPromise<SuppressionImportResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email/sending/suppressions/bulk`, {
        body,
        ...options,
      }) as APIPromise<{ result: SuppressionImportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Suppressions extends BaseSuppressions {}

export type SuppressionListResponsesCursorPagination = CursorPagination<SuppressionListResponse>;

export interface SuppressionCreateResponse {
  /**
   * The suppression's identifier.
   */
  id: string;
}

export interface SuppressionListResponse {
  /**
   * Unique identifier for this suppression.
   */
  id: string;

  /**
   * When the suppression was created.
   */
  created_at: string;

  /**
   * The suppressed email address.
   */
  email: string;

  /**
   * When the suppression expires. Null for a permanent suppression.
   */
  expires_at: string | null;

  /**
   * Whether clients may mutate this suppression. This is determined by the server
   * and must not be inferred from `reason`.
   */
  read_only: boolean;

  /**
   * Why the address is suppressed: `manual`, `complaint`, `hard_bounce`,
   * `soft_bounce`, or `policy`.
   */
  reason: string;

  /**
   * Advisory note for this suppression, if any.
   */
  note?: string | null;
}

export interface SuppressionDeleteResponse {
  /**
   * The suppression's identifier.
   */
  id: string;
}

export interface SuppressionEditResponse {
  /**
   * Unique identifier for this suppression.
   */
  id: string;

  /**
   * When the suppression was created.
   */
  created_at: string;

  /**
   * The suppressed email address.
   */
  email: string;

  /**
   * When the suppression expires. Null for a permanent suppression.
   */
  expires_at: string | null;

  /**
   * Whether clients may mutate this suppression. This is determined by the server
   * and must not be inferred from `reason`.
   */
  read_only: boolean;

  /**
   * Why the address is suppressed: `manual`, `complaint`, `hard_bounce`,
   * `soft_bounce`, or `policy`.
   */
  reason: string;

  /**
   * Advisory note for this suppression, if any.
   */
  note?: string | null;
}

export interface SuppressionGetResponse {
  /**
   * Unique identifier for this suppression.
   */
  id: string;

  /**
   * When the suppression was created.
   */
  created_at: string;

  /**
   * The suppressed email address.
   */
  email: string;

  /**
   * When the suppression expires. Null for a permanent suppression.
   */
  expires_at: string | null;

  /**
   * Whether clients may mutate this suppression. This is determined by the server
   * and must not be inferred from `reason`.
   */
  read_only: boolean;

  /**
   * Why the address is suppressed: `manual`, `complaint`, `hard_bounce`,
   * `soft_bounce`, or `policy`.
   */
  reason: string;

  /**
   * Advisory note for this suppression, if any.
   */
  note?: string | null;
}

export interface SuppressionImportResponse {
  /**
   * Number of items dropped because their email address repeated an earlier item in
   * this request. Counted once and excluded from `items`.
   */
  deduplicated: number;

  /**
   * Number of items that failed to import due to an unexpected error.
   */
  errors: number;

  /**
   * Number of items with an invalid email address.
   */
  invalid: number;

  /**
   * Per-item results, in the same order as the request body.
   */
  items: Array<SuppressionImportResponse.Item>;

  /**
   * Number of items successfully created or promoted.
   */
  processed: number;

  /**
   * Number of items skipped because the existing suppression is not customer-managed
   * (for example, a read-only policy suppression).
   */
  skipped: number;

  /**
   * Total number of items in the request body, including duplicates.
   */
  total: number;
}

export namespace SuppressionImportResponse {
  export interface Item {
    /**
     * Zero-based index of this item in the request body.
     */
    index: number;

    /**
     * Outcome for this item.
     */
    status: 'processed' | 'invalid' | 'error' | 'skipped';

    /**
     * The created or promoted suppression's identifier. Present when `status` is
     * `processed`.
     */
    id?: string;

    /**
     * The submitted email address for this item.
     */
    email?: string;

    /**
     * Human-readable error message. Present when `status` is `invalid`, `error`, or
     * `skipped`.
     */
    error?: string;
  }
}

export interface SuppressionCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: The email address to suppress.
   */
  email: string;

  /**
   * Body param: Expiration timestamp for the suppression. Omit or set to null for a
   * permanent suppression that never expires.
   */
  expires_at?: string | null;

  /**
   * Body param: Advisory note for this suppression. Not enforced or validated beyond
   * length.
   */
  note?: string;
}

export interface SuppressionListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param: Exact email-address filter.
   */
  email?: string;

  /**
   * Query param: Filter to suppressions with this reason.
   */
  reason?: 'manual' | 'complaint' | 'hard_bounce' | 'soft_bounce' | 'policy';

  /**
   * Query param: A complete address is an exact match; a value ending in `@` matches
   * that username across every domain. Prefix searches may return short intermediate
   * pages while the bounded account scan advances.
   */
  search?: string;
}

export interface SuppressionDeleteParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface SuppressionEditParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: New expiry. Send `null` to make the suppression permanent; omit to
   * leave it unchanged.
   */
  expires_at?: string | null;

  /**
   * Body param: Replacement advisory note. Send an empty string to clear it; omit to
   * leave it unchanged.
   */
  note?: string;
}

export interface SuppressionGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface SuppressionImportParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Suppressions to import. Items with a duplicate email address are
   * deduplicated before processing.
   */
  items: Array<SuppressionImportParams.Item>;
}

export namespace SuppressionImportParams {
  export interface Item {
    /**
     * The email address to suppress.
     */
    email: string;

    /**
     * Expiration timestamp for the suppression. Omit or set to null for a permanent
     * suppression that never expires.
     */
    expires_at?: string | null;

    /**
     * Advisory note for this suppression. Not enforced or validated beyond length.
     */
    note?: string;
  }
}

export declare namespace Suppressions {
  export {
    type SuppressionCreateResponse as SuppressionCreateResponse,
    type SuppressionListResponse as SuppressionListResponse,
    type SuppressionDeleteResponse as SuppressionDeleteResponse,
    type SuppressionEditResponse as SuppressionEditResponse,
    type SuppressionGetResponse as SuppressionGetResponse,
    type SuppressionImportResponse as SuppressionImportResponse,
    type SuppressionListResponsesCursorPagination as SuppressionListResponsesCursorPagination,
    type SuppressionCreateParams as SuppressionCreateParams,
    type SuppressionListParams as SuppressionListParams,
    type SuppressionDeleteParams as SuppressionDeleteParams,
    type SuppressionEditParams as SuppressionEditParams,
    type SuppressionGetParams as SuppressionGetParams,
    type SuppressionImportParams as SuppressionImportParams,
  };
}
