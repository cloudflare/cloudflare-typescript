// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LogoMatches extends APIResource {
  /**
   * Return matches as CSV for logo queries based on ID
   */
  download(params: LogoMatchDownloadParams, options?: RequestOptions): APIPromise<LogoMatchDownloadResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/brand-protection/logo-matches/download`, {
      query,
      ...options,
    });
  }

  /**
   * Return matches for logo queries based on ID
   */
  get(params: LogoMatchGetParams, options?: RequestOptions): APIPromise<LogoMatchGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/brand-protection/logo-matches`, {
      query,
      ...options,
    });
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
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  limit?: string;

  /**
   * Query param:
   */
  logo_id?: Array<string>;

  /**
   * Query param:
   */
  offset?: string;
}

export interface LogoMatchGetParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  limit?: string;

  /**
   * Query param:
   */
  logo_id?: Array<string>;

  /**
   * Query param:
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
