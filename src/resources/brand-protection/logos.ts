// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseLogos extends APIResource {
  static override readonly _key: readonly ['brandProtection', 'logos'] = Object.freeze([
    'brandProtection',
    'logos',
  ] as const);

  /**
   * Return new saved logo queries created from image files
   */
  create(
    params: LogoCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogoCreateResponse> {
    const { account_id = this._client.accountID, match_type, tag, threshold, ...body } = params ?? {};
    return this._client.post(path`/accounts/${account_id}/brand-protection/logos`, {
      query: { match_type, tag, threshold },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Return a success message after deleting saved logo queries by ID
   */
  delete(
    logoID: string,
    params: LogoDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.delete(path`/accounts/${account_id}/brand-protection/logos/${logoID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
export class Logos extends BaseLogos {}

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
  image?: Uploadable;
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
