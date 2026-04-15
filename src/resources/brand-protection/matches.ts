// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Matches extends APIResource {
  /**
   * Return matches as CSV for string queries based on ID
   */
  download(
    params?: MatchDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MatchDownloadResponse>;
  download(options?: Core.RequestOptions): Core.APIPromise<MatchDownloadResponse>;
  download(
    params: MatchDownloadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MatchDownloadResponse> {
    if (isRequestOptions(params)) {
      return this.download({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/brand-protection/matches/download`, {
      query,
      ...options,
    });
  }

  /**
   * Return matches for string queries based on ID
   */
  get(params?: MatchGetParams, options?: Core.RequestOptions): Core.APIPromise<MatchGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<MatchGetResponse>;
  get(
    params: MatchGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MatchGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/brand-protection/matches`, { query, ...options });
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
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  id?: string;

  /**
   * Query param
   */
  include_domain_id?: boolean;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  offset?: number;
}

export interface MatchGetParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  id?: string;

  /**
   * Query param
   */
  include_domain_id?: boolean;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
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
