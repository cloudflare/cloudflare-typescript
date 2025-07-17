// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Matches extends APIResource {
  /**
   * Return matches as CSV for string queries based on ID
   */
  download(params: MatchDownloadParams, options?: RequestOptions): APIPromise<MatchDownloadResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/brand-protection/matches/download`, {
      query,
      ...options,
    });
  }

  /**
   * Return matches for string queries based on ID
   */
  get(params: MatchGetParams, options?: RequestOptions): APIPromise<MatchGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/brand-protection/matches`, { query, ...options });
  }
}

export interface MatchDownloadResponse {
  matches?: Array<{ [key: string]: unknown }>;

  total?: number;
}

export interface MatchGetResponse {
  matches?: Array<{ [key: string]: unknown }>;

  total?: number;
}

export interface MatchDownloadParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  id?: string;

  /**
   * Query param:
   */
  include_domain_id?: boolean;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  offset?: number;
}

export interface MatchGetParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  id?: string;

  /**
   * Query param:
   */
  include_domain_id?: boolean;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  offset?: number;
}

export declare namespace Matches {
  export {
    type MatchDownloadResponse as MatchDownloadResponse,
    type MatchGetResponse as MatchGetResponse,
    type MatchDownloadParams as MatchDownloadParams,
    type MatchGetParams as MatchGetParams,
  };
}
