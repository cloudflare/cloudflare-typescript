// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseEntitlements extends APIResource {
  static override readonly _key: readonly ['accounts', 'entitlements'] = Object.freeze([
    'accounts',
    'entitlements',
  ] as const);

  /**
   * Returns the list of entitlements (features and their allocations) for a given
   * account. Each entitlement describes a product feature the account is permitted
   * to use and the allocation value (boolean, count, range, enum, or string) that
   * governs its behaviour.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entitlementListResponse of client.accounts.entitlements.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: EntitlementListParams,
    options?: RequestOptions,
  ): PagePromise<EntitlementListResponsesSinglePage, EntitlementListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/entitlements`,
      SinglePage<EntitlementListResponse>,
      options,
    );
  }
}
export class Entitlements extends BaseEntitlements {}

export type EntitlementListResponsesSinglePage = SinglePage<EntitlementListResponse>;

/**
 * A single entitlement record for a zone or account.
 */
export interface EntitlementListResponse {
  /**
   * Entitlement identifier — equal to the feature key.
   */
  id: string;

  /**
   * Represents the allocation value for an entitlement. The shape of `value` depends
   * on `type`: `bool` uses a boolean, `max_count` uses an integer, `enum_number`
   * uses an array of numbers, `range` uses an object with `min` and `max` integer
   * fields, and `string` uses a string.
   */
  allocation: EntitlementListResponse.Allocation;

  /**
   * ISO 8601 timestamp (microsecond precision, no timezone offset) when the
   * entitlement was created. Format: `YYYY-MM-DDTHH:MM:SS.ffffff`.
   */
  created_date: string;

  /**
   * ISO 8601 timestamp when the entitlement was deleted, or empty string if not
   * deleted.
   */
  deleted_date: string;

  /**
   * ISO 8601 timestamp (microsecond precision, no timezone offset) when the
   * entitlement was last edited.
   */
  edited_date: string;

  /**
   * Describes a product feature associated with an entitlement.
   */
  feature: EntitlementListResponse.Feature;
}

export namespace EntitlementListResponse {
  /**
   * Represents the allocation value for an entitlement. The shape of `value` depends
   * on `type`: `bool` uses a boolean, `max_count` uses an integer, `enum_number`
   * uses an array of numbers, `range` uses an object with `min` and `max` integer
   * fields, and `string` uses a string.
   */
  export interface Allocation {
    /**
     * Allocation type discriminator.
     */
    type: 'bool' | 'max_count' | 'enum_number' | 'range' | 'string';

    /**
     * Contains the allocation value whose concrete type the `type` field determines:
     * bool yields a boolean, max_count yields an integer, enum_number yields an array
     * of numbers, range yields an object with `min` and `max`, and string yields a
     * string.
     */
    value: boolean | number | string | Array<number> | Allocation.UnionMember4;
  }

  export namespace Allocation {
    export interface UnionMember4 {
      max: number;

      min: number;
    }
  }

  /**
   * Describes a product feature associated with an entitlement.
   */
  export interface Feature {
    /**
     * Numeric identifier of the feature.
     */
    id: number;

    /**
     * The logical grouping (set) this feature belongs to.
     */
    feature_set: string;

    /**
     * Unique string key for the feature.
     */
    key: string;

    /**
     * Human-readable name of the feature.
     */
    name: string;
  }
}

export interface EntitlementListParams {
  /**
   * Identifier of the account.
   */
  account_id: string;
}

export declare namespace Entitlements {
  export {
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementListResponsesSinglePage as EntitlementListResponsesSinglePage,
    type EntitlementListParams as EntitlementListParams,
  };
}
