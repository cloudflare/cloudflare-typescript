// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VerificationAPI from 'cloudflare/resources/ssl/verification';

export class Verification extends APIResource {
  /**
   * Get SSL Verification Info for a Zone.
   */
  list(
    zoneId: string,
    query?: VerificationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationListResponse>;
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<VerificationListResponse>;
  list(
    zoneId: string,
    query: VerificationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/ssl/verification`, { query, ...options }) as Core.APIPromise<{
        result: VerificationListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit SSL validation method for a certificate pack. A PATCH request will request
   * an immediate validation check on any certificate, and return the updated status.
   * If a validation method is provided, the validation will be immediately attempted
   * using that method.
   */
  edit(
    zoneId: string,
    certificatePackId: string,
    body: VerificationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/ssl/verification/${certificatePackId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VerificationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type VerificationListResponse = Array<VerificationListResponse.VerificationListResponseItem>;

export namespace VerificationListResponse {
  export interface VerificationListResponseItem {
    /**
     * Current status of certificate.
     */
    certificate_status:
      | 'initializing'
      | 'authorizing'
      | 'active'
      | 'expired'
      | 'issuing'
      | 'timing_out'
      | 'pending_deployment';

    /**
     * Certificate Authority is manually reviewing the order.
     */
    brand_check?: boolean;

    /**
     * Certificate Pack UUID.
     */
    cert_pack_uuid?: string;

    /**
     * Certificate's signature algorithm.
     */
    signature?: 'ECDSAWithSHA256' | 'SHA1WithRSA' | 'SHA256WithRSA';

    /**
     * Validation method in use for a certificate pack order.
     */
    validation_method?: 'http' | 'cname' | 'txt';

    /**
     * Certificate's required verification information.
     */
    verification_info?: VerificationListResponseItem.VerificationInfo;

    /**
     * Status of the required verification information, omitted if verification status
     * is unknown.
     */
    verification_status?: boolean;

    /**
     * Method of verification.
     */
    verification_type?: 'cname' | 'meta tag';
  }

  export namespace VerificationListResponseItem {
    /**
     * Certificate's required verification information.
     */
    export interface VerificationInfo {
      /**
       * Name of CNAME record.
       */
      record_name?: 'record_name' | 'http_url' | 'cname' | 'txt_name';

      /**
       * Target of CNAME record.
       */
      record_target?: 'record_value' | 'http_body' | 'cname_target' | 'txt_value';
    }
  }
}

export interface VerificationEditResponse {
  /**
   * Result status.
   */
  status?: string;

  /**
   * Desired validation method.
   */
  validation_method?: 'http' | 'cname' | 'txt' | 'email';
}

export interface VerificationListParams {
  /**
   * Immediately retry SSL Verification.
   */
  retry?: true;
}

export interface VerificationEditParams {
  /**
   * Desired validation method.
   */
  validation_method: 'http' | 'cname' | 'txt' | 'email';
}

export namespace Verification {
  export import VerificationListResponse = VerificationAPI.VerificationListResponse;
  export import VerificationEditResponse = VerificationAPI.VerificationEditResponse;
  export import VerificationListParams = VerificationAPI.VerificationListParams;
  export import VerificationEditParams = VerificationAPI.VerificationEditParams;
}
