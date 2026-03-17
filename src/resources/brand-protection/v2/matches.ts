// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Matches extends APIResource {
  /**
   * Get paginated list of domain matches for a specific brand protection query
   */
  get(params: MatchGetParams, options?: RequestOptions): APIPromise<MatchGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/v2/brand-protection/domain/matches`, {
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
    dismissed: boolean;

    domain: string;

    first_seen: string;

    public_scans: Match.PublicScans | null;

    scan_status: string;

    scan_submission_id: number | null;

    source: string | null;
  }

  export namespace Match {
    export interface PublicScans {
      submission_id: string;
    }
  }
}

export interface MatchGetParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  query_id: string;

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
   * Query param: Column to sort by. Options: 'domain' or 'first_seen'
   */
  orderBy?: 'domain' | 'first_seen';
}

export declare namespace Matches {
  export { type MatchGetResponse as MatchGetResponse, type MatchGetParams as MatchGetParams };
}
