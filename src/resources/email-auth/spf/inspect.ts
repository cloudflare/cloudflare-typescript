// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Inspect extends APIResource {
  /**
   * Inspects a specific SPF TXT record and returns a parsed tree structure in the
   * spflimit-worker format.
   *
   * The record ID must be provided via the `id` query parameter.
   *
   * Returns a recursive tree showing:
   *
   * - Parsed components with their qualifiers and types
   * - Nested includes recursively resolved within components
   * - Per-component and total lookup counts
   * - Detailed error information with context
   *
   * @example
   * ```ts
   * const inspect = await client.emailAuth.spf.inspect.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   id: 'id',
   * });
   * ```
   */
  get(params: InspectGetParams, options?: Core.RequestOptions): Core.APIPromise<InspectGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/email/auth/spf/inspect`, { query, ...options }) as Core.APIPromise<{
        result: InspectGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Recursive SPF inspection tree
 */
export interface InspectGetResponse {
  /**
   * Parsed SPF components (mechanisms)
   */
  components: Array<unknown>;

  /**
   * Domain being inspected
   */
  domain: string;

  /**
   * Raw SPF record content
   */
  record: string;

  /**
   * Total number of DNS lookups performed across all includes
   */
  total_lookups: number;

  /**
   * All errors encountered during inspection, collected from the entire tree. This
   * includes errors from nested includes at any depth, providing a quick overview of
   * all issues without needing to traverse the nested structure. Each error includes
   * a `domain` field to identify where it occurred. Empty array if no errors
   * (omitted from JSON when empty).
   */
  errors?: Array<InspectGetResponse.Error>;
}

export namespace InspectGetResponse {
  /**
   * An error encountered during SPF inspection
   */
  export interface Error {
    /**
     * Error code. Known values:
     *
     * - `lookup_failed` — DNS TXT lookup failed
     * - `spf_not_found` — no SPF record found
     * - `invalid_spf` — record does not start with `v=spf1`
     * - `invalid_domain` — PSL validation failed
     * - `loop_detected` — include/redirect cycle detected
     * - `invalid_mechanism` — unrecognised or malformed mechanism
     * - `resource_limit_exceeded` — internal resource protection limits exceeded
     *   (recursion depth or query budget)
     * - `max_lookups` — RFC 7208 10-lookup limit exceeded
     */
    code: string;

    /**
     * Domain where the error occurred
     */
    domain: string;

    /**
     * Human-readable error message
     */
    message: string;

    /**
     * Additional error-specific details (optional).
     *
     * - For `invalid_domain` errors: the invalid domain string
     * - For `invalid_mechanism` errors: the invalid mechanism text (e.g.,
     *   "invalidmech123")
     * - For `loop_detected` errors: the domain that caused the loop
     * - For other error types: not present
     */
    details?: string;
  }
}

export interface InspectGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: DNS record ID (rec_tag) to inspect
   */
  id: string;
}

export declare namespace Inspect {
  export { type InspectGetResponse as InspectGetResponse, type InspectGetParams as InspectGetParams };
}
