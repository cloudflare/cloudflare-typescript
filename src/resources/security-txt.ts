// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SecurityTXTAPI from './security-txt';
import * as Shared from './shared';

export class SecurityTXT extends APIResource {
  /**
   * Update security.txt
   */
  update(
    params: SecurityTXTUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityTXTUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(`/zones/${zone_id}/security-center/securitytxt`, { body, ...options });
  }

  /**
   * Delete security.txt
   */
  delete(
    params: SecurityTXTDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityTXTDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(`/zones/${zone_id}/security-center/securitytxt`, options);
  }

  /**
   * Get security.txt
   */
  get(params: SecurityTXTGetParams, options?: Core.RequestOptions): Core.APIPromise<SecurityTXTGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/security-center/securitytxt`, options) as Core.APIPromise<{
        result: SecurityTXTGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SecurityTXTUpdateResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface SecurityTXTDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

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

export namespace SecurityTXT {
  export import SecurityTXTUpdateResponse = SecurityTXTAPI.SecurityTXTUpdateResponse;
  export import SecurityTXTDeleteResponse = SecurityTXTAPI.SecurityTXTDeleteResponse;
  export import SecurityTXTGetResponse = SecurityTXTAPI.SecurityTXTGetResponse;
  export import SecurityTXTUpdateParams = SecurityTXTAPI.SecurityTXTUpdateParams;
  export import SecurityTXTDeleteParams = SecurityTXTAPI.SecurityTXTDeleteParams;
  export import SecurityTXTGetParams = SecurityTXTAPI.SecurityTXTGetParams;
}
