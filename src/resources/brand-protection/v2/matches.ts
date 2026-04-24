// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Matches extends APIResource {
  /**
   * Get paginated list of domain matches for one or more brand protection queries.
   * When multiple query_ids are provided (comma-separated), matches are deduplicated
   * across queries and each match includes a match_details array with per-match
   * query metadata and individual dismissed state.
   */
  get(params: MatchGetParams, options?: Core.RequestOptions): Core.APIPromise<MatchGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/v2/brand-protection/domain/matches`, {
      query,
      ...options,
    });
  }
}

export interface MatchGetResponse {
  matches: Array<MatchGetResponse.Match>;

  total: number;
}

export namespace MatchGetResponse {
  export interface Match {
    domain: string;

    first_seen: string;

    public_scans: Match.PublicScans | null;

    registrar: string | null;

    scan_status: string;

    scan_submission_id: number | null;

    source: string | null;

    /**
     * Whether the match is dismissed. Only present for single-query requests. For
     * multi-query requests, use the dismissed field in each match_details entry.
     */
    dismissed?: boolean;

    /**
     * Per-match detail objects with query metadata and individual dismissed state.
     * Only present when multiple query_ids are requested.
     */
    match_details?: Array<Match.MatchDetail>;
  }

  export namespace Match {
    export interface PublicScans {
      submission_id: string;
    }

    export interface MatchDetail {
      /**
       * Individual dismissed state for this specific match.
       */
      dismissed: boolean;

      match_id: number;

      query_id: number;

      /**
       * Tag associated with the query, if one exists.
       */
      query_tag: string | null;
    }
  }
}

export interface MatchGetParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Query ID or comma-separated list of Query IDs. When multiple IDs
   * are provided, matches are deduplicated across queries and each match includes a
   * match_details array with per-match query metadata and dismissed state.
   */
  query_id: Array<string>;

  /**
   * Query param: Filter matches by domain name (substring match)
   */
  domain_search?: string;

  /**
   * Query param
   */
  include_dismissed?: string;

  /**
   * Query param
   */
  include_domain_id?: string;

  /**
   * Query param
   */
  limit?: string;

  /**
   * Query param
   */
  offset?: string;

  /**
   * Query param: Sort order. Options: 'asc' (ascending) or 'desc' (descending)
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: Column to sort by. Options: 'domain', 'first_seen', or 'registrar'
   */
  orderBy?: 'domain' | 'first_seen' | 'registrar';
}

export declare namespace Matches {
  export { type MatchGetResponse as MatchGetResponse, type MatchGetParams as MatchGetParams };
}
