// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Logos extends APIResource {
  /**
   * Return new saved logo queries created from image files
   */
  create(params: LogoCreateParams, options?: Core.RequestOptions): Core.APIPromise<LogoCreateResponse> {
    const { account_id, match_type, tag, threshold, ...body } = params;
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
  delete(logoId: string, params: LogoDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id } = params;
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
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  match_type?: string;

  /**
   * Query param:
   */
  tag?: string;

  /**
   * Query param:
   */
  threshold?: number;

  /**
   * Body param:
   */
  image?: Core.Uploadable;
}

export interface LogoDeleteParams {
  account_id: string;
}

export declare namespace Logos {
  export {
    type LogoCreateResponse as LogoCreateResponse,
    type LogoCreateParams as LogoCreateParams,
    type LogoDeleteParams as LogoDeleteParams,
  };
}
