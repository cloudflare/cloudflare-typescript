// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseLogoMatches extends APIResource {
  static override readonly _key: readonly ['brandProtection', 'v2', 'logoMatches'] = Object.freeze([
    'brandProtection',
    'v2',
    'logoMatches',
  ] as const);

  /**
   * Get paginated list of logo matches for a specific brand protection logo query
   */
  get(params: LogoMatchGetParams, options?: RequestOptions): APIPromise<LogoMatchGetResponse> {
    const { account_id = this._client.accountID, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/v2/brand-protection/logo/matches`, {
      query,
      ...options,
    });
  }
}
export class LogoMatches extends BaseLogoMatches {}

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
