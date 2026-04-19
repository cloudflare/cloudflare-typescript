// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Logos extends APIResource {
  /**
   * Return new saved logo queries created from image files
   */
  create(params?: LogoCreateParams, options?: Core.RequestOptions): Core.APIPromise<LogoCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<LogoCreateResponse>;
  create(
    params: LogoCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogoCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { account_id = this._client.accountId, match_type, tag, threshold, ...body } = params;
    return this._client.post(`/accounts/${account_id}/brand-protection/logos`, {
      query: { match_type, tag, threshold },
      body,
      ...options,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...options?.headers },
    });
  }

  /**
   * Return a success message after deleting saved logo queries by ID
   */
  delete(logoId: string, params?: LogoDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(logoId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    logoId: string,
    params: LogoDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(logoId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.delete(`/accounts/${account_id}/brand-protection/logos/${logoId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface LogoCreateResponse {
  id?: number;

  tag?: string;

  upload_path?: string;
}

export interface LogoCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  match_type?: string;

  /**
   * Query param
   */
  tag?: string;

  /**
   * Query param
   */
  threshold?: number;

  /**
   * Body param
   */
  image?: Core.Uploadable;
}

export interface LogoDeleteParams {
  account_id?: string;
}

export declare namespace Logos {
  export {
    type LogoCreateResponse as LogoCreateResponse,
    type LogoCreateParams as LogoCreateParams,
    type LogoDeleteParams as LogoDeleteParams,
  };
}
