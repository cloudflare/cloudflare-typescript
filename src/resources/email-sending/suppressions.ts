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
   * Creates a suppression for every sending domain of the account (default) or for
   * one sending domain (`scope.type = sending_domain`). Creating an existing active
   * suppression returns its identifier. If a mutable legacy zone-linked account row
   * already exists, it is promoted without changing its identifier.
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
   * Lists every active Email Sending suppression owned by the account:
   * sending-domain suppressions first, then account-wide suppressions (including
   * legacy rows with internal zone memberships). Each group is newest first.
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
   * memberships. Scope cannot be changed.
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
   * Imports up to 1,000 Email Sending suppressions in one request. Each item applies
   * to every sending domain of the account (default) or to one sending domain.
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

  /**
   * Where the suppression applies: `account` for every sending domain of the
   * account, or `sending_domain` for one envelope MAIL FROM domain.
   */
  scope?: SuppressionCreateResponse.Type | SuppressionCreateResponse.UnionMember1;
}

export namespace SuppressionCreateResponse {
  export interface Type {
    /**
     * Blocks the recipient for every sending domain of the account.
     */
    type: 'account';
  }

  export interface UnionMember1 {
    /**
     * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
     */
    type: 'sending_domain';

    /**
     * The sending domain: the domain part of the envelope MAIL FROM, lowercase,
     * without a trailing dot.
     */
    value: string;
  }
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

  /**
   * Where the suppression applies: `account` for every sending domain of the
   * account, or `sending_domain` for one envelope MAIL FROM domain.
   */
  scope?: SuppressionListResponse.Type | SuppressionListResponse.UnionMember1;
}

export namespace SuppressionListResponse {
  export interface Type {
    /**
     * Blocks the recipient for every sending domain of the account.
     */
    type: 'account';
  }

  export interface UnionMember1 {
    /**
     * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
     */
    type: 'sending_domain';

    /**
     * The sending domain: the domain part of the envelope MAIL FROM, lowercase,
     * without a trailing dot.
     */
    value: string;
  }
}

export interface SuppressionDeleteResponse {
  /**
   * The suppression's identifier.
   */
  id: string;

  /**
   * Where the suppression applies: `account` for every sending domain of the
   * account, or `sending_domain` for one envelope MAIL FROM domain.
   */
  scope?: SuppressionDeleteResponse.Type | SuppressionDeleteResponse.UnionMember1;
}

export namespace SuppressionDeleteResponse {
  export interface Type {
    /**
     * Blocks the recipient for every sending domain of the account.
     */
    type: 'account';
  }

  export interface UnionMember1 {
    /**
     * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
     */
    type: 'sending_domain';

    /**
     * The sending domain: the domain part of the envelope MAIL FROM, lowercase,
     * without a trailing dot.
     */
    value: string;
  }
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

  /**
   * Where the suppression applies: `account` for every sending domain of the
   * account, or `sending_domain` for one envelope MAIL FROM domain.
   */
  scope?: SuppressionEditResponse.Type | SuppressionEditResponse.UnionMember1;
}

export namespace SuppressionEditResponse {
  export interface Type {
    /**
     * Blocks the recipient for every sending domain of the account.
     */
    type: 'account';
  }

  export interface UnionMember1 {
    /**
     * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
     */
    type: 'sending_domain';

    /**
     * The sending domain: the domain part of the envelope MAIL FROM, lowercase,
     * without a trailing dot.
     */
    value: string;
  }
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

  /**
   * Where the suppression applies: `account` for every sending domain of the
   * account, or `sending_domain` for one envelope MAIL FROM domain.
   */
  scope?: SuppressionGetResponse.Type | SuppressionGetResponse.UnionMember1;
}

export namespace SuppressionGetResponse {
  export interface Type {
    /**
     * Blocks the recipient for every sending domain of the account.
     */
    type: 'account';
  }

  export interface UnionMember1 {
    /**
     * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
     */
    type: 'sending_domain';

    /**
     * The sending domain: the domain part of the envelope MAIL FROM, lowercase,
     * without a trailing dot.
     */
    value: string;
  }
}

export interface SuppressionImportResponse {
  /**
   * Number of items dropped because their email address and scope repeated an
   * earlier item in this request. Counted once and excluded from `items`.
   */
  deduplicated: number;

  /**
   * Number of items that failed to import due to an unexpected error.
   */
  errors: number;

  /**
   * Number of items with an invalid email address or sending domain.
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

    /**
     * Where the suppression applies: `account` for every sending domain of the
     * account, or `sending_domain` for one envelope MAIL FROM domain.
     */
    scope?: Item.Type | Item.UnionMember1;
  }

  export namespace Item {
    export interface Type {
      /**
       * Blocks the recipient for every sending domain of the account.
       */
      type: 'account';
    }

    export interface UnionMember1 {
      /**
       * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
       */
      type: 'sending_domain';

      /**
       * The sending domain: the domain part of the envelope MAIL FROM, lowercase,
       * without a trailing dot.
       */
      value: string;
    }
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

  /**
   * Body param: Where the suppression applies. Omit for `{ "type": "account" }`,
   * which blocks the recipient for every sending domain of the account.
   */
  scope?: SuppressionCreateParams.Type | SuppressionCreateParams.UnionMember1;
}

export namespace SuppressionCreateParams {
  export interface Type {
    /**
     * Blocks the recipient for every sending domain of the account.
     */
    type: 'account';
  }

  export interface UnionMember1 {
    /**
     * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
     */
    type: 'sending_domain';

    /**
     * The sending domain to suppress for: the domain part of the envelope MAIL FROM.
     * It is lowercased and trailing dots are removed. Internationalized domains must
     * use the ASCII (punycode) form. Ownership is not checked; a domain the account
     * does not send from never matches.
     */
    value: string;
  }
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
   * Query param: Filter by scope: `account` returns only account-wide suppressions,
   * `sending_domain` only sending-domain suppressions. Omit to list both,
   * sending-domain suppressions first.
   */
  scope_type?: 'account' | 'sending_domain';

  /**
   * Query param: Exact sending-domain filter. Requires `scope_type=sending_domain`.
   */
  scope_value?: string;

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

  /**
   * Body param: Not editable. Scope is fixed when the suppression is created; any
   * value returns 400 with code `scope_immutable`. Delete and recreate the
   * suppression to change it.
   */
  scope?: unknown;
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
   * Body param: Suppressions to import. Items with the same email address and scope
   * are deduplicated before processing.
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

    /**
     * Where the suppression applies. Omit for `{ "type": "account" }`, which blocks
     * the recipient for every sending domain of the account.
     */
    scope?: Item.Type | Item.UnionMember1;
  }

  export namespace Item {
    export interface Type {
      /**
       * Blocks the recipient for every sending domain of the account.
       */
      type: 'account';
    }

    export interface UnionMember1 {
      /**
       * Blocks the recipient only for mail whose envelope MAIL FROM uses `value`.
       */
      type: 'sending_domain';

      /**
       * The sending domain to suppress for: the domain part of the envelope MAIL FROM.
       * It is lowercased and trailing dots are removed. Internationalized domains must
       * use the ASCII (punycode) form. Ownership is not checked; a domain the account
       * does not send from never matches.
       */
      value: string;
    }
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
