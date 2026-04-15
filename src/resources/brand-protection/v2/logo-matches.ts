// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class LogoMatches extends APIResource {
  /**
   * Get paginated list of logo matches for a specific brand protection logo query
   */
  get(params: LogoMatchGetParams, options?: Core.RequestOptions): Core.APIPromise<LogoMatchGetResponse> {
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/v2/brand-protection/logo/matches`, {
      query,
      ...options,
    });
  }
}

export interface LogoMatchGetResponse {
  matches: Array<LogoMatchGetResponse.Match>;

  total: number;
}

export namespace LogoMatchGetResponse {
  export interface Match {
    id: number;

    domain: string | null;

    matched_at: string | null;

    query_id: number;

    registrar: string | null;

    similarity_score: number;

    url_scan_id: string | null;

    content_type?: string;

    image_data?: string;
  }
}

export interface LogoMatchGetParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  query_id: string;

  /**
   * Query param
   */
  download?: string;

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
   * Query param: Column to sort by. Options: 'matchedAt', 'domain',
   * 'similarityScore', or 'registrar'
   */
  orderBy?: 'matchedAt' | 'domain' | 'similarityScore' | 'registrar';
}

export declare namespace LogoMatches {
  export { type LogoMatchGetResponse as LogoMatchGetResponse, type LogoMatchGetParams as LogoMatchGetParams };
}
