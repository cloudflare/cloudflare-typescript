// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class LogoMatches extends APIResource {
  /**
   * Return matches as CSV for logo queries based on ID
   */
  download(
    params?: LogoMatchDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogoMatchDownloadResponse>;
  download(options?: Core.RequestOptions): Core.APIPromise<LogoMatchDownloadResponse>;
  download(
    params: LogoMatchDownloadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogoMatchDownloadResponse> {
    if (isRequestOptions(params)) {
      return this.download({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/brand-protection/logo-matches/download`, {
      query,
      ...options,
    });
  }

  /**
   * Return matches for logo queries based on ID
   */
  get(params?: LogoMatchGetParams, options?: Core.RequestOptions): Core.APIPromise<LogoMatchGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<LogoMatchGetResponse>;
  get(
    params: LogoMatchGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogoMatchGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/brand-protection/logo-matches`, { query, ...options });
  }
}

export interface LogoMatchDownloadResponse {
  matches?: Array<{ [key: string]: unknown }>;

  total?: number;
}

export interface LogoMatchGetResponse {
  matches?: Array<{ [key: string]: unknown }>;

  total?: number;
}

export interface LogoMatchDownloadParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  limit?: string;

  /**
   * Query param
   */
  logo_id?: Array<string>;

  /**
   * Query param
   */
  offset?: string;
}

export interface LogoMatchGetParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  limit?: string;

  /**
   * Query param
   */
  logo_id?: Array<string>;

  /**
   * Query param
   */
  offset?: string;
}

export declare namespace LogoMatches {
  export {
    type LogoMatchDownloadResponse as LogoMatchDownloadResponse,
    type LogoMatchGetResponse as LogoMatchGetResponse,
    type LogoMatchDownloadParams as LogoMatchDownloadParams,
    type LogoMatchGetParams as LogoMatchGetParams,
  };
}
