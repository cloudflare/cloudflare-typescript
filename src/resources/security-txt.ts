// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SecurityTXT extends APIResource {
  /**
   * Update security.txt
   */
  update(params: SecurityTXTUpdateParams, options?: RequestOptions): APIPromise<SecurityTXTUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(path`/zones/${zone_id}/security-center/securitytxt`, { body, ...options });
  }

  /**
   * Delete security.txt
   */
  delete(params: SecurityTXTDeleteParams, options?: RequestOptions): APIPromise<SecurityTXTDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/security-center/securitytxt`, options);
  }

  /**
   * Get security.txt
   */
  get(params: SecurityTXTGetParams, options?: RequestOptions): APIPromise<SecurityTXTGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/security-center/securitytxt`, options) as APIPromise<{
        result: SecurityTXTGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SecurityTXTUpdateResponse {
  errors: Array<unknown>;

  messages: Array<unknown>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface SecurityTXTDeleteResponse {
  errors: Array<unknown>;

  messages: Array<unknown>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface SecurityTXTGetResponse {
  acknowledgments?: Array<string>;

  canonical?: Array<string>;

  contact?: Array<string>;

  enabled?: boolean;

  encryption?: Array<string>;

  expires?: string;

  hiring?: Array<string>;

  policy?: Array<string>;

  preferredLanguages?: string;
}

export interface SecurityTXTUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  acknowledgments?: Array<string>;

  /**
   * Body param:
   */
  canonical?: Array<string>;

  /**
   * Body param:
   */
  contact?: Array<string>;

  /**
   * Body param:
   */
  enabled?: boolean;

  /**
   * Body param:
   */
  encryption?: Array<string>;

  /**
   * Body param:
   */
  expires?: string;

  /**
   * Body param:
   */
  hiring?: Array<string>;

  /**
   * Body param:
   */
  policy?: Array<string>;

  /**
   * Body param:
   */
  preferredLanguages?: string;
}

export interface SecurityTXTDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface SecurityTXTGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace SecurityTXT {
  export {
    type SecurityTXTUpdateResponse as SecurityTXTUpdateResponse,
    type SecurityTXTDeleteResponse as SecurityTXTDeleteResponse,
    type SecurityTXTGetResponse as SecurityTXTGetResponse,
    type SecurityTXTUpdateParams as SecurityTXTUpdateParams,
    type SecurityTXTDeleteParams as SecurityTXTDeleteParams,
    type SecurityTXTGetParams as SecurityTXTGetParams,
  };
}
